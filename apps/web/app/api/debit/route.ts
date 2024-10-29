import { check_dec_details } from "../../backend/service/check_details";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const debit_detail = body;

        if (!debit_detail) {
            return NextResponse.json(
                { message: 'Please provide valid information' },
                { status: 400 }
            );
        }

        const { cardNumber, cvv, vaildThur } = debit_detail;
        console.log('Debit details from API:', cardNumber, cvv, vaildThur);

        // Await the response from check_dec_details
        const response = await check_dec_details({ debit_detail });

        // Check if the response has a userId
        if (response && typeof response === 'object') {
            return NextResponse.json(
                { success: true, userId: response.user_id },
                { status: 200 }
            );
        } else {
            // If the response is an object, return the message
            return NextResponse.json(
                { success: false, message:'Invalid request' },
                { status: 400 }
            );
        }
    } catch (error) {
        console.error('Error in Server:', error);
        return NextResponse.json(
            { message: 'Server Problem' },
            { status: 500 }
        );
    }
}
