import BlogsRead from '@/components/blogsDetails/blogsRead';
import { getBlogs, getBlogBySlug } from '@/lib/api';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

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
    // In production builds, upstream may be temporarily unreachable (ex: backend not running).
    // Return a fallback to prevent build failure
    return [{ slug: 'placeholder' }];
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return {
      title: 'Blog Not Found | Radical Education',
      description: 'The requested blog post could not be found.'
    };
  }

  return {
    title: `${blog.title} | Radical Education`,
    description: blog.metaDescription || blog.excerpt || `Read more about ${blog.title} on Radical Education.`,
    keywords: blog.metaKeywords,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: blog.featuredImage ? [blog.featuredImage] : [],
      type: 'article',
      publishedTime: blog.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.excerpt,
      images: blog.featuredImage ? [blog.featuredImage] : [],
    }
  };
}

export const dynamicParams = true;
export const revalidate = 60;

export default async function BlogPage({ params }: PageProps) {
  const { slug } = await params;
  return <BlogsRead slug={slug} />;
}