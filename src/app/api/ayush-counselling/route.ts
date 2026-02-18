import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import AyushCounselling from '@/models/AyushCounselling';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { fullName, email, phone, stream } = body;

        if (!fullName || !email || !phone || !stream) {
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

        const doc = await AyushCounselling.create({
            fullName: String(fullName).trim(),
            email: String(email).trim().toLowerCase(),
            phone: String(phone).trim(),
            stream: String(stream).trim(),
            submittedAt: new Date()
        });

        return NextResponse.json({
            success: true,
            message: 'Thank you! Your AYUSH counselling request has been submitted successfully.',
            data: {
                id: doc._id.toString(),
                fullName: doc.fullName,
                email: doc.email
            }
        });
    } catch (error) {
        console.error('❌ Error submitting AYUSH counselling:', error);
        return NextResponse.json(
            { success: false, message: 'Something went wrong. Please try again.' },
            { status: 500 }
        );
    }
}
