import { NextResponse } from "next/server";
import { Status_interface } from "../../backend/service/payment_status_interface";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const {userId,amount,transactionNote} = body;

        if (!userId) {
            return NextResponse.json(
                { success: false, message: 'User ID is missing' },
                { status: 400 }
            );
        }

        const response = await Status_interface({ userId , amount, transactionNote });

        if (typeof response === 'string') {
            // If the response is a string, it indicates an error message
            return NextResponse.json(
                { success: false, message: response },
                { status: 400 }
            );
        } else if (response && typeof response === 'object') {
            // If the response is an object, it contains the desired user details
            return NextResponse.json(
                { success: true, data: response },
                { status: 200 }
            );
        } else {
            // Catch-all for any unexpected response format
            return NextResponse.json(
                { success: false, message: 'Unexpected response format' },
                { status: 500 }
            );
        }
    } catch (error) {
        console.error('Error in processing request:', error);
        return NextResponse.json(
            { success: false, message: 'Server Problem' },
            { status: 500 }
        );
    }
}
