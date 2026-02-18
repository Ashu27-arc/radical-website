import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import connectDB from '@/lib/mongodb';
import ResumeSubmission from '@/models/ResumeSubmission';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const firstName = formData.get('firstName') as string;
    const email = formData.get('email') as string;
    const opening = formData.get('opening') as string;
    const resume = formData.get('resume') as File;

    if (!firstName || !email || !opening) {
      return NextResponse.json(
        { success: false, message: 'Please fill all required fields' },
        { status: 400 }
      );
    }

    const uploadsDir = path.join(process.cwd(), 'public', 'uploads', 'resumes');
    if (!existsSync(uploadsDir)) {
      await mkdir(uploadsDir, { recursive: true });
    }

    let resumePath = '';
    if (resume && resume.size > 0) {
      const timestamp = Date.now();
      const fileName = `${timestamp}-${resume.name.replace(/\s+/g, '-')}`;
      const filePath = path.join(uploadsDir, fileName);
      const bytes = await resume.arrayBuffer();
      await writeFile(filePath, Buffer.from(bytes));
      resumePath = `/uploads/resumes/${fileName}`;
    }

    const conn = await connectDB();
    if (!conn) {
      return NextResponse.json(
        { success: false, message: 'Database temporarily unavailable. Please try again.' },
        { status: 503 }
      );
    }

    const doc = await ResumeSubmission.create({
      firstName: firstName.trim(),
      email: email.trim().toLowerCase(),
      opening: opening.trim(),
      resumePath: resumePath || undefined,
      submittedAt: new Date()
    });

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your resume has been submitted successfully.',
      data: {
        id: doc._id.toString(),
        firstName: doc.firstName,
        email: doc.email
      }
    });
  } catch (error) {
    console.error('❌ Error submitting resume:', error);
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
