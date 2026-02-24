import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import CounselorEnquiry from '@/models/CounselorEnquiry';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, mobile, email, course, state } = body;

        if (!name || !mobile || !course) {
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
            mobile: String(mobile).trim(),
            email: email ? String(email).trim() : undefined,
            course: String(course).trim(),
            state: state ? String(state).trim() : 'N/A',
            submittedAt: new Date()
        });

        return NextResponse.json({
            success: true,
            message: 'Thank you! Your enquiry has been submitted successfully.',
            data: {
                id: doc._id.toString(),
                name: doc.name,
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
