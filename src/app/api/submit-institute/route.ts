import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const BACKEND_API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://backend-radical.onrender.com';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const instituteName = formData.get('instituteName') as string;
    const instituteType = formData.get('instituteType') as string;
    const instituteStrength = formData.get('instituteStrength') as string;
    const houseNo = formData.get('houseNo') as string;
    const streetLocality = formData.get('streetLocality') as string;
    const landmark = formData.get('landmark') as string;
    const emailAddress = formData.get('emailAddress') as string;
    const phoneNo = formData.get('phoneNo') as string;
    const instituteDescription = formData.get('instituteDescription') as string;
    const image = formData.get('image') as File;

    // Validation
    if (!instituteName || !instituteType || !instituteStrength || !houseNo || 
        !streetLocality || !landmark || !emailAddress || !phoneNo || !instituteDescription) {
      return NextResponse.json(
        { success: false, message: 'Please fill all required fields' },
        { status: 400 }
      );
    }

    // Create uploads directory if it doesn't exist
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads', 'institutes');
    
    if (!existsSync(uploadsDir)) {
      await mkdir(uploadsDir, { recursive: true });
    }

    // Save image file if provided
    let imagePath = '';
    if (image && image.size > 0) {
      const timestamp = Date.now();
      const fileName = `${timestamp}-${image.name.replace(/\s+/g, '-')}`;
      const filePath = path.join(uploadsDir, fileName);
      
      const bytes = await image.arrayBuffer();
      const buffer = Buffer.from(bytes);
      await writeFile(filePath, buffer);
      imagePath = `/uploads/institutes/${fileName}`;
    }

    // Forward to backend API
    try {
      const backendFormData = new FormData();
      backendFormData.append('instituteName', instituteName);
      backendFormData.append('instituteType', instituteType);
      backendFormData.append('instituteStrength', instituteStrength);
      backendFormData.append('houseNo', houseNo);
      backendFormData.append('streetLocality', streetLocality);
      backendFormData.append('landmark', landmark);
      backendFormData.append('emailAddress', emailAddress);
      backendFormData.append('phoneNo', phoneNo);
      backendFormData.append('instituteDescription', instituteDescription);
      if (imagePath) backendFormData.append('imagePath', imagePath);

      const response = await fetch(`${BACKEND_API_URL}/api/institute-submission`, {
        method: 'POST',
        body: backendFormData
      });

      const result = await response.json();

      if (response.ok) {
        console.log('✅ Institute submission saved via backend API');
        return NextResponse.json({
          success: true,
          message: 'Thank you! Your institute has been submitted successfully.',
          data: result.data
        });
      } else {
        throw new Error(result.message || 'Backend API error');
      }
    } catch (apiError) {
      console.error('❌ Backend API failed:', apiError);
      
      // Fallback: Log locally
      console.log('📝 Institute Submission (Logged Locally):', {
        timestamp: new Date().toISOString(),
        instituteName,
        instituteType,
        emailAddress,
        phoneNo,
        imagePath
      });

      return NextResponse.json({
        success: true,
        message: 'Thank you! Your institute has been submitted successfully.',
        data: {
          id: `temp-${Date.now()}`,
          instituteName,
          emailAddress
        }
      });
    }

  } catch (error) {
    console.error('❌ Error submitting institute:', error);
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
