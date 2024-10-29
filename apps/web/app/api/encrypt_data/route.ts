import { NextResponse } from "next/server";
import { encrypt } from "@repo/encrypt/client";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const {userId ,mode} = body; // Ensure this accesses the userId property correctly
        console.log(body, 'encrypted body input')
        const response = encrypt(userId); // Encrypt the userId
        const encrypt_mode = encrypt(mode)

        if (response && typeof response === 'string') {
            return NextResponse.json(
                { success: true, data:{userId:response,mode:encrypt_mode} }, // Include success property
                { status: 200 }
            );
        } else {
            return NextResponse.json(
                { success: false, message: response || 'Invalid request' },
                { status: 400 }
            );
        }
    } catch (error) {
        console.error('Error in encryption API:', error);
        return NextResponse.json({ success: false, message: 'Server Problem' }, { status: 500 });
    }
}
