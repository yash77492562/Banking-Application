import { NextResponse } from "next/server";
import { Amount_interface } from "../../backend/service/Amount_details_interface";
import { getUserId } from "../../userId/userId";
import { tokenVault_database_upi } from "../../backend/service/prisma_data_fetch";
import { decrypt } from "@repo/encrypt/client";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const {userId,mode} = body;
        console.log(body)
        if (!userId && !mode) {
            return NextResponse.json(
                { success: false, message: 'User ID is missing' },
                { status: 400 }
            );
        }
        console.log('amount_data api mode ',mode)
        let mode_value 
        if(mode === 'upi'){
            const value = await tokenVault_database_upi({userId})
            if(value == null){
                return null
            }
            const decrypt_value = decrypt(value.pa)
            mode_value = decrypt_value
        }else {
            mode_value = 'Gringotts Wizarding Bank'
        }
        const response = await Amount_interface({ userId });
        console.log(response,'response')
        const fromUserId = await getUserId()

        if (typeof response === 'string' && !fromUserId && !mode_value) {
            // If the response is a string, it indicates an error message
            return NextResponse.json(
                { success: false, message: response },
                { status: 400 }
            );
        } else if (response && typeof response === 'object') {
            // If the response is an object, it contains the desired user details
            return NextResponse.json(
                { success: true, data: {...response , fromUserId,mode_value} },
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
