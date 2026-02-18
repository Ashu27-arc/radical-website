import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import CounselorEnquiry from '@/models/CounselorEnquiry';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, mobile, course, state } = body;

        if (!name || !email || !mobile || !course || !state) {
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

        const doc = await CounselorEnquiry.create({
            name: String(name).trim(),
            email: String(email).trim().toLowerCase(),
            mobile: String(mobile).trim(),
            course: String(course).trim(),
            state: String(state).trim(),
            submittedAt: new Date()
        });

        return NextResponse.json({
            success: true,
            message: 'Thank you! Your enquiry has been submitted successfully.',
            data: {
                id: doc._id.toString(),
                name: doc.name,
                email: doc.email
            }
        });
    } catch (error) {
        console.error('❌ Error submitting counselor enquiry:', error);
        return NextResponse.json(
            { success: false, message: 'Something went wrong. Please try again.' },
            { status: 500 }
        );
    }
}
