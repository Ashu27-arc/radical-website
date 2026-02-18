import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Blog from '@/models/Blog';

export async function GET() {
  try {
    const conn = await connectDB();
    if (!conn) {
      return NextResponse.json([], { status: 200 });
    }
    const blogs = await Blog.find({ status: 'Published' })
      .sort({ createdAt: -1 })
      .lean();
    const formatted = blogs.map((b: any) => ({
      id: b._id.toString(),
      _id: b._id.toString(),
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
    }));
    return NextResponse.json(formatted);
  } catch (err) {
    console.error('Error fetching blogs:', err);
    return NextResponse.json([], { status: 200 });
  }
}
