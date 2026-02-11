import BlogsRead from '@/components/blogsDetails/blogsRead';

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

// Static export ke liye required - empty array se build hoga
// Runtime mein client-side data fetch hoga
export function generateStaticParams() {
  return [
    { slug: 'mbbs-in-andhra-pradesh' },
    { slug: 'mbbs-in-arunachal-pradesh' },
    { slug: 'mbbs-in-assam' },
    { slug: 'mbbs-in-bihar' },
    { slug: 'mbbs-in-chhattisgarh' },
    { slug: 'mbbs-in-goa' },
    { slug: 'mbbs-in-gujarat' },
    { slug: 'mbbs-in-haryana' },
    { slug: 'mbbs-in-himachal-pradesh' },
    { slug: 'mbbs-in-jammu-and-kashmir' },
    { slug: 'mbbs-in-jharkhand' },
    { slug: 'mbbs-in-karnataka' },
    { slug: 'mbbs-in-kerala' },
    { slug: 'mbbs-in-madhya-pradesh' },
  ];
}

export const dynamic = "error";

export default async function BlogPage({ params }: PageProps) {
  const { slug } = await params;
  return <BlogsRead slug={slug} />;
}