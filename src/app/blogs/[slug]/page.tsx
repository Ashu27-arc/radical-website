import BlogsRead from '@/components/blogsDetails/blogsRead';

interface BlogPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPage({ params }: BlogPageProps) {
  return <BlogsRead slug={params.slug} />;
}