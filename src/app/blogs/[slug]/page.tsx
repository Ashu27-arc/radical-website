import BlogsRead from '@/components/blogsDetails/blogsRead';
import { getBlogs } from '@/lib/api';

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

// Fetch all blog slugs at build time for static export
export async function generateStaticParams() {
  try {
    const blogs = await getBlogs();
    // Only generate pages for published blogs
    const publishedBlogs = blogs.filter((blog) => blog.status === 'Published');
    
    // Return all slugs, or at least one fallback to prevent build errors
    if (publishedBlogs.length === 0) {
      return [{ slug: 'placeholder' }];
    }
    
    return publishedBlogs.map((blog) => ({
      slug: blog.slug,
    }));
  } catch (error) {
    console.error('Error fetching blogs for static params:', error);
    // Return a fallback to prevent build failure
    return [{ slug: 'placeholder' }];
  }
}

export const dynamic = "error";

export default async function BlogPage({ params }: PageProps) {
  const { slug } = await params;
  return <BlogsRead slug={slug} />;
}