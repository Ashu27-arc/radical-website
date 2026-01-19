import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import connectDB from '@/lib/mongodb';
import ResumeSubmission from '@/models/ResumeSubmission';

export async function POST(request: NextRequest) {
  try {
    // Connect to MongoDB
    await connectDB();

    const formData = await request.formData();
    
    const firstName = formData.get('firstName') as string;
    const email = formData.get('email') as string;
    const opening = formData.get('opening') as string;
    const resume = formData.get('resume') as File;

    // Validation
    if (!firstName || !email || !opening) {
      return NextResponse.json(
        { success: false, message: 'Please fill all required fields' },
        { status: 400 }
      );
    }

    // Create uploads directory if it doesn't exist
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads', 'resumes');
    
    if (!existsSync(uploadsDir)) {
      await mkdir(uploadsDir, { recursive: true });
    }

    // Save resume file if provided
    let resumePath = '';
    if (resume && resume.size > 0) {
      const timestamp = Date.now();
      const fileName = `${timestamp}-${resume.name.replace(/\s+/g, '-')}`;
      const filePath = path.join(uploadsDir, fileName);
      
      const bytes = await resume.arrayBuffer();
      const buffer = Buffer.from(bytes);
      await writeFile(filePath, buffer);
      resumePath = `/uploads/resumes/${fileName}`;
    }

    // Save to MongoDB
    const submission = await ResumeSubmission.create({
      firstName,
      email,
      opening,
      resumePath,
      submittedAt: new Date()
    });

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your resume has been submitted successfully.',
      data: {
        id: submission._id,
        firstName: submission.firstName,
        email: submission.email
      }
    });

  } catch (error) {
    console.error('Error submitting resume:', error);
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}

