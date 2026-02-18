import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import connectDB from '@/lib/mongodb';
import InstituteSubmission from '@/models/InstituteSubmission';

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

    if (!instituteName || !instituteType || !instituteStrength || !houseNo ||
        !streetLocality || !landmark || !emailAddress || !phoneNo || !instituteDescription) {
      return NextResponse.json(
        { success: false, message: 'Please fill all required fields' },
        { status: 400 }
      );
    }

    const uploadsDir = path.join(process.cwd(), 'public', 'uploads', 'institutes');
    if (!existsSync(uploadsDir)) {
      await mkdir(uploadsDir, { recursive: true });
    }

    let imagePath = '';
    if (image && image.size > 0) {
      const timestamp = Date.now();
      const fileName = `${timestamp}-${image.name.replace(/\s+/g, '-')}`;
      const filePath = path.join(uploadsDir, fileName);
      const bytes = await image.arrayBuffer();
      await writeFile(filePath, Buffer.from(bytes));
      imagePath = `/uploads/institutes/${fileName}`;
    }

    const conn = await connectDB();
    if (!conn) {
      return NextResponse.json(
        { success: false, message: 'Database temporarily unavailable. Please try again.' },
        { status: 503 }
      );
    }

    const doc = await InstituteSubmission.create({
      instituteName: instituteName.trim(),
      instituteType: instituteType.trim(),
      instituteStrength: instituteStrength.trim(),
      address: {
        houseNo: houseNo.trim(),
        streetLocality: streetLocality.trim(),
        landmark: landmark.trim()
      },
      emailAddress: emailAddress.trim().toLowerCase(),
      phoneNo: phoneNo.trim(),
      instituteDescription: instituteDescription.trim(),
      imagePath: imagePath || undefined,
      submittedAt: new Date()
    });

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your institute has been submitted successfully.',
      data: {
        id: doc._id.toString(),
        instituteName: doc.instituteName,
        emailAddress: doc.emailAddress
      }
    });
  } catch (error) {
    console.error('❌ Error submitting institute:', error);
    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
