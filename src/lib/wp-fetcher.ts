import { Blog } from './api';

/** Strip all HTML tags and return plain text. */
const stripHtml = (html: string): string => {
  if (!html) return '';
  const stripped = html.replace(/<[^>]*>?/gm, '');
  return stripped.replace(/\[[^\]]+\]/g, '').trim();
};

/**
 * Fetches all posts from a WordPress REST API.
 * Uses pagination and parallel requests with controlled concurrency.
 */
export async function fetchAllWordPressPosts(
  baseUrl: string = 'https://news.radicaleducation.in/wp-json/wp/v2/posts'
): Promise<Blog[]> {
  const PER_PAGE = 100;
  // Limit concurrent requests to avoid overloading the WordPress server
  const CONCURRENCY_LIMIT = 5; 

  try {
    // 1. Fetch the first page to get total pages from headers
    const firstPageUrl = `${baseUrl}?_embed=1&per_page=${PER_PAGE}&page=1&_fields=id,slug,title,excerpt,date,categories,_links,content,acf,faqs`;
    const response = await fetch(firstPageUrl, {
      next: { revalidate: 3600 }, 
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch first page: ${response.status} ${response.statusText}`);
    }

    const totalPagesHeader = response.headers.get('x-wp-totalpages');
    const totalPages = totalPagesHeader ? parseInt(totalPagesHeader, 10) : 1;

    const firstPagePosts = await response.json();
    let allPosts = extractPostData(firstPagePosts);

    // 2. Fetch remaining pages if they exist
    if (totalPages > 1) {
      const pageNumbers = Array.from({ length: totalPages - 1 }, (_, i) => i + 2);
      
      for (let i = 0; i < pageNumbers.length; i += CONCURRENCY_LIMIT) {
        const chunk = pageNumbers.slice(i, i + CONCURRENCY_LIMIT);
        
        const fetchPromises = chunk.map(async (page) => {
          const url = `${baseUrl}?_embed=1&per_page=${PER_PAGE}&page=${page}&_fields=id,slug,title,excerpt,date,categories,_links,content,acf,faqs`;
          try {
            const res = await fetch(url, {
              next: { revalidate: 3600 },
            });
            
            if (!res.ok) {
              console.error(`Failed to fetch page ${page}: ${res.statusText}`);
              return []; 
            }
            
            const data = await res.json();
            return extractPostData(data);
          } catch (err) {
            console.error(`Network error on page ${page}:`, err);
            return [];
          }
        });

        const chunkResults = await Promise.all(fetchPromises);
        allPosts = allPosts.concat(chunkResults.flat());
      }
    }

    return allPosts;

  } catch (error) {
    console.error('Error in fetchAllWordPressPosts:', error);
    throw error;
  }
}

/**
 * Lightweight fetcher for sitemap generation only.
 * Fetches only `id`, `slug`, and `date` fields — no _embed, no content.
 * This is ~95% smaller than the full fetch and completes well within build timeouts.
 */
export async function fetchAllWpPostsForSitemap(
  baseUrl: string = 'https://news.radicaleducation.in/wp-json/wp/v2/posts'
): Promise<{ slug: string; date: string }[]> {
  const PER_PAGE = 100;
  const CONCURRENCY_LIMIT = 8; // Can be higher since payloads are tiny

  try {
    const firstPageUrl = `${baseUrl}?per_page=${PER_PAGE}&page=1&_fields=id,slug,date`;
    const response = await fetch(firstPageUrl, { next: { revalidate: 3600 } });

    if (!response.ok) {
      throw new Error(`Sitemap fetch failed: ${response.status} ${response.statusText}`);
    }

    const totalPagesHeader = response.headers.get('x-wp-totalpages');
    const totalPages = totalPagesHeader ? parseInt(totalPagesHeader, 10) : 1;

    const firstPage: { slug: string; date: string }[] = await response.json();
    let allPosts = firstPage.map((p) => ({ slug: p.slug, date: p.date }));

    if (totalPages > 1) {
      const pageNumbers = Array.from({ length: totalPages - 1 }, (_, i) => i + 2);

      for (let i = 0; i < pageNumbers.length; i += CONCURRENCY_LIMIT) {
        const chunk = pageNumbers.slice(i, i + CONCURRENCY_LIMIT);

        const results = await Promise.all(
          chunk.map(async (page) => {
            try {
              const res = await fetch(
                `${baseUrl}?per_page=${PER_PAGE}&page=${page}&_fields=id,slug,date`,
                { next: { revalidate: 3600 } }
              );
              if (!res.ok) return [];
              const data: { slug: string; date: string }[] = await res.json();
              return data.map((p) => ({ slug: p.slug, date: p.date }));
            } catch {
              return [];
            }
          })
        );

        allPosts = allPosts.concat(results.flat());
      }
    }

    return allPosts;
  } catch (error) {
    console.error('[fetchAllWpPostsForSitemap] error:', error);
    return [];
  }
}

/**
 * Helper function to map raw WP REST API data to our clean Blog interface.
 */
function extractPostData(posts: any[]): Blog[] {
  if (!Array.isArray(posts)) return [];
  
  return posts.map(post => {
    let featuredImage = '';
    try {
      featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '';
    } catch {
      featuredImage = '';
    }

    const category = post._embedded?.['wp:term']?.[0]?.map((c: any) => c.name).join(', ') || 'Latest Update';
    const author = post._embedded?.author?.[0]?.name || 'Radical Education';

    return {
      id: post.id?.toString(),
      title: post.title?.rendered || 'Untitled',
      content: post.content?.rendered || '',
      excerpt: stripHtml(post.excerpt?.rendered || ''),
      slug: post.slug,
      date: post.date,
      featuredImage,
      author,
      category,
      status: 'Published',
      faqs: Array.isArray(post.acf?.faqs) ? post.acf.faqs : Array.isArray(post.faqs) ? post.faqs : []
    };
  });
}
