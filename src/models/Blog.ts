import mongoose, { Schema, model, models } from 'mongoose';

export interface IBlog {
  title: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  status: string;
  date: string;
  views: number;
  likes: number;
  featuredImage: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
}

const BlogSchema = new Schema<IBlog>({
  title: { type: String, required: true, trim: true },
  excerpt: { type: String, default: '' },
  content: { type: String, default: '' },
  author: { type: String, required: true, trim: true },
  category: { type: String, required: true, trim: true },
  status: { type: String, enum: ['Published', 'Draft', 'Archived'], default: 'Draft' },
  date: { type: String, required: true },
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  featuredImage: { type: String, default: '' },
  slug: { type: String, required: true, unique: true, trim: true },
  metaTitle: { type: String, default: '' },
  metaDescription: { type: String, default: '' },
  metaKeywords: { type: String, default: '' }
}, { timestamps: true });

const Blog = models.Blog || model<IBlog>('Blog', BlogSchema);
export default Blog;
