import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import CounselorEnquiry from '@/models/CounselorEnquiry';

export async function POST(request: NextRequest) {
    try {
        await connectDB();

        const body = await request.json();
        const { name, email, mobile, course, state } = body;

        // Validation
        if (!name || !email || !mobile || !course || !state) {
            return NextResponse.json(
                { success: false, message: 'Please fill all required fields' },
                { status: 400 }
            );
        }

        // Save to MongoDB
        const enquiry = await CounselorEnquiry.create({
            name,
            email,
            mobile,
            course,
            state,
            submittedAt: new Date()
        });

        return NextResponse.json({
            success: true,
            message: 'Thank you! Your enquiry has been submitted successfully.',
            data: {
                id: enquiry._id,
                name: enquiry.name,
                email: enquiry.email
            }
        });

    } catch (error) {
        console.error('Error submitting counselor enquiry:', error);
        return NextResponse.json(
            { success: false, message: 'Something went wrong. Please try again.' },
            { status: 500 }
        );
    }
}
