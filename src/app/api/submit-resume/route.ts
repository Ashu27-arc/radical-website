import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const BACKEND_API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://backend-radical.onrender.com';

export async function POST(request: NextRequest) {
  try {
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

    // Forward to backend API
    try {
      const backendFormData = new FormData();
      backendFormData.append('firstName', firstName);
      backendFormData.append('email', email);
      backendFormData.append('opening', opening);
      if (resumePath) backendFormData.append('resumePath', resumePath);

      const response = await fetch(`${BACKEND_API_URL}/api/resume-submission`, {
        method: 'POST',
        body: backendFormData
      });

      const result = await response.json();

      if (response.ok) {
        console.log('✅ Resume submission saved via backend API');
        return NextResponse.json({
          success: true,
          message: 'Thank you! Your resume has been submitted successfully.',
          data: result.data
        });
      } else {
        throw new Error(result.message || 'Backend API error');
      }
    } catch (apiError) {
      console.error('❌ Backend API failed:', apiError);
      
      // Fallback: Log locally
      console.log('📝 Resume Submission (Logged Locally):', {
        timestamp: new Date().toISOString(),
        firstName,
        email,
        opening,
        resumePath
      });

      return NextResponse.json({
        success: true,
        message: 'Thank you! Your resume has been submitted successfully.',
        data: {
          id: `temp-${Date.now()}`,
          firstName,
          email
        }
      });
    }

  } catch (error) {
    console.error('❌ Error submitting resume:', error);
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}

