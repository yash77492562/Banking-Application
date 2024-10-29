import { NextResponse } from "next/server";
import { getInputType } from "../../backend/service/get_input_type";
import { check_acc_details, check_phone_details, check_upi_details } from "../../backend/service/check_details";


export async function POST(req: Request) {
    try {
        const body = await req.json();
        const {input} = body;
        console.log(input)
        if (!input) {
            return NextResponse.json(
                { success: false, message: 'User ID is missing' },
                { status: 400 }
            );
        }

        const input_type =  getInputType({input})
        let response 
        if(input_type == 'phone'){
            response = await check_phone_details({phone : input})
        }else if(input_type == 'upi'){
            response = await check_upi_details({upi_detail : {pa:input}})
        }else if(input_type == 'account'){
            response = await check_acc_details({account : input})
        }else {
            // If the response is a string, it indicates an error message
            return NextResponse.json(
                { success: false, message: response },
                { status: 400 }
            );
        }
        console.log(response)
        if (response && typeof response === 'object') {
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
