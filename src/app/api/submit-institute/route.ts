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

    const conn = await connectDB();
    if (!conn) {
      return NextResponse.json(
        { success: false, message: 'Database temporarily unavailable. Please try again.' },
        { status: 503 }
      );
    }

    let imagePath = '';
    let imageData: Buffer | undefined;
    let imageMimeType: string | undefined;
    let imageFileName: string | undefined;

    if (image && image.size > 0) {
      const bytes = await image.arrayBuffer();
      imageData = Buffer.from(bytes);
      imageMimeType = image.type;
      imageFileName = image.name;

      // Optional: Try to save to file system (works for VPS setup)
      try {
        const uploadsDir = path.join(process.cwd(), 'public', 'uploads', 'institutes');
        if (!existsSync(uploadsDir)) {
          await mkdir(uploadsDir, { recursive: true });
        }
        const timestamp = Date.now();
        const safeFileName = `${timestamp}-${image.name.replace(/\s+/g, '-')}`;
        const filePath = path.join(uploadsDir, safeFileName);
        await writeFile(filePath, imageData);
        imagePath = `/uploads/institutes/${safeFileName}`;
      } catch (fsError) {
        console.warn('⚠️ File system not writable, skipping image save but continuing with DB storage');
        // imagePath stay empty, but data is in DB
      }
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
      imageData,
      imageMimeType,
      imageFileName,
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
