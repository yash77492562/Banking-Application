import { NextResponse } from "next/server";
import { decrypt } from "@repo/encrypt/client";

export async function POST(req: Request) {
    try {
        console.log('decrypt Post request is calling')
        const body = await req.json();
        const {userId,mode} = body; // Ensure this accesses the userId property correctly
        console.log(body)

        const response = decrypt(userId); // Encrypt the userId
        console.log('userId',response)
        const decrypt_mode = decrypt(mode)
        console.log('mode',decrypt_mode)
        console.log("POST response:", response); // Use a comma to properly log the object

        if (response && typeof(response)=== 'string' && typeof(decrypt_mode) ==='string') {
            console.log('if condition is true, sending userId with status 200');
            return NextResponse.json(
                { success: true, data:{userId:response,mode:decrypt_mode} }, // Include success property
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
