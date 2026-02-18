import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Blog from '@/models/Blog';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const slug = (await params).slug;
    if (!slug) return NextResponse.json(null, { status: 404 });

    const conn = await connectDB();
    if (!conn) return NextResponse.json(null, { status: 503 });

    const blog = await Blog.findOne({ slug, status: 'Published' }).lean();
    if (!blog) return NextResponse.json(null, { status: 404 });

    const b = blog as any;
    return NextResponse.json({
      id: b._id.toString(),
      title: b.title,
      excerpt: b.excerpt,
      content: b.content,
      author: b.author,
      category: b.category,
      status: b.status,
      date: b.date,
      views: b.views ?? 0,
      likes: b.likes ?? 0,
      featuredImage: b.featuredImage,
      slug: b.slug,
      metaTitle: b.metaTitle,
      metaDescription: b.metaDescription,
      metaKeywords: b.metaKeywords
    });
  } catch (err) {
    console.error('Error fetching blog by slug:', err);
    return NextResponse.json(null, { status: 500 });
  }
}
