import { NextResponse } from "next/server";
import { confirm_payer_details } from "../../lib/actions/confirm_payer_details";
export async function POST(req:Request){
    try{
        const body = await req.json()
        const {account,phoneValue,ifscValue} = body;
        console.log('acc_detail'+ account + 'phoneValue'+ phoneValue + 'ifscValue' + ifscValue)
        if(!account && !phoneValue && !ifscValue){
            return NextResponse.json({message:'Please provide valid information'},{status:400})
        }
        const response = await confirm_payer_details({account,phoneValue,ifscValue})
        console.log(response)
        if (response && typeof response === 'object') {
            return NextResponse.json(
                { success: true, data: response },
                { status: 200 }
            );
        } else {
            // If the response is an object, return the message
            return NextResponse.json(
                { success: false, message: response|| 'Invalid request' },
                { status: 400 }
            );
        }

    }catch(error){
        return NextResponse.json({message:'Server Problem'},{status:500})
    }
}