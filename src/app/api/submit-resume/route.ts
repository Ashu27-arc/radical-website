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

    const conn = await connectDB();
    if (!conn) {
      return NextResponse.json(
        { success: false, message: 'Database temporarily unavailable. Please try again.' },
        { status: 503 }
      );
    }

    let resumePath = '';
    let resumeData: Buffer | undefined;
    let resumeMimeType: string | undefined;
    let resumeFileName: string | undefined;

    if (resume && resume.size > 0) {
      const bytes = await resume.arrayBuffer();
      resumeData = Buffer.from(bytes);
      resumeMimeType = resume.type;
      resumeFileName = resume.name;

      // Optional: Try to save to file system if possible (works for VPS setup)
      try {
        const uploadsDir = path.join(process.cwd(), 'public', 'uploads', 'resumes');
        if (!existsSync(uploadsDir)) {
          await mkdir(uploadsDir, { recursive: true });
        }
        const timestamp = Date.now();
        const safeFileName = `${timestamp}-${resume.name.replace(/\s+/g, '-')}`;
        const filePath = path.join(uploadsDir, safeFileName);
        await writeFile(filePath, resumeData);
        resumePath = `/uploads/resumes/${safeFileName}`;
      } catch (fsError) {
        console.warn('⚠️ File system not writable, skipping file save but continuing with DB storage');
        // resumePath will remain empty, but data is in DB
      }
    }

    const doc = await ResumeSubmission.create({
      firstName: firstName.trim(),
      email: email.trim().toLowerCase(),
      opening: opening.trim(),
      resumePath: resumePath || undefined,
      resumeData,
      resumeMimeType,
      resumeFileName,
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
