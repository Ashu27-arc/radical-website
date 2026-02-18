import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import CounselorEnquiry from '@/models/CounselorEnquiry';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, mobile, course, state } = body;

        // Validation
        if (!name || !email || !mobile || !course || !state) {
            return NextResponse.json(
                { success: false, message: 'Please fill all required fields' },
                { status: 400 }
            );
        }

        // Try to connect to MongoDB
        const dbConnection = await connectDB();

        let enquiryId = null;

        if (dbConnection) {
            // Save to MongoDB if connection is available
            try {
                const enquiry = await CounselorEnquiry.create({
                    name,
                    email,
                    mobile,
                    course,
                    state,
                    submittedAt: new Date()
                });
                enquiryId = enquiry._id;
                console.log('✅ Enquiry saved to MongoDB:', enquiryId);
            } catch (dbError) {
                console.error('❌ Failed to save to MongoDB:', dbError);
                // Continue execution - we'll log to console instead
            }
        }

        // Always log the enquiry (fallback when DB is unavailable)
        console.log('📝 Counselor Enquiry Received:', {
            timestamp: new Date().toISOString(),
            name,
            email,
            mobile,
            course,
            state,
            savedToDb: !!enquiryId
        });

        // Always return success to user
        return NextResponse.json({
            success: true,
            message: 'Thank you! Your enquiry has been submitted successfully.',
            data: {
                id: enquiryId || `temp-${Date.now()}`,
                name,
                email
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
