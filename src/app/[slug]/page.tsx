import BlogsRead from '@/components/blogsDetails/blogsRead';
import { getBlogBySlug } from '@/lib/api';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  // We rely on dynamicParams = true for ISR – just return an empty array so no
  // pages are pre-built at compile time (avoids build-time dependency on the API).
  return [];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return {
      title: 'Blog Not Found | Radical Education',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: `${blog.title} | Radical Education`,
    description:
      blog.metaDescription ||
      blog.excerpt ||
      `Read more about ${blog.title} on Radical Education.`,
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
    },
  };
}

// Allow paths not generated at build time to be rendered on-demand (ISR).
export const dynamicParams = true;
export const revalidate = 60;

export default async function BlogPage({ params }: PageProps) {
  const { slug } = await params;

  // Server-side check: return true HTTP 404 if the blog doesn't exist.
  // This prevents the client component from showing a "soft" 404 with a 200 status.
  const blog = await getBlogBySlug(slug);
  if (!blog) {
    notFound();
  }

  return <BlogsRead slug={slug} />;
}