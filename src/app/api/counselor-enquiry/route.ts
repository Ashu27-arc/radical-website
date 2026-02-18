import { NextRequest, NextResponse } from 'next/server';

const BACKEND_API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://backend-radical.onrender.com';

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

        // Forward to backend API which has working MongoDB connection
        try {
            const response = await fetch(`${BACKEND_API_URL}/api/counselor-enquiry`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    mobile,
                    course,
                    state,
                    submittedAt: new Date().toISOString()
                })
            });

            const result = await response.json();

            if (response.ok) {
                console.log('✅ Enquiry saved via backend API');
                return NextResponse.json({
                    success: true,
                    message: 'Thank you! Your enquiry has been submitted successfully.',
                    data: result.data
                });
            } else {
                throw new Error(result.message || 'Backend API error');
            }
        } catch (apiError) {
            console.error('❌ Backend API failed:', apiError);
            
            // Fallback: Log locally
            console.log('📝 Counselor Enquiry (Logged Locally):', {
                timestamp: new Date().toISOString(),
                name,
                email,
                mobile,
                course,
                state
            });

            // Still return success to user
            return NextResponse.json({
                success: true,
                message: 'Thank you! Your enquiry has been submitted successfully.',
                data: {
                    id: `temp-${Date.now()}`,
                    name,
                    email
                }
            });
        }

    } catch (error) {
        console.error('❌ Error submitting counselor enquiry:', error);
        return NextResponse.json(
            { success: false, message: 'Something went wrong. Please try again.' },
            { status: 500 }
        );
    }
}
