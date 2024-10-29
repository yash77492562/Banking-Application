import { NextResponse } from "next/server";
import { Transaction } from "../../lib/actions/p2pTransfer";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const {fromUserId,toUserId,amount,transactionNote} = body;

        if (!fromUserId && !toUserId && !amount && !transactionNote) {
            return NextResponse.json(
                { success: false, },
                { status: 400 }
            );
        }

        const response = await Transaction({fromUserId,toUserId,amount,transactionNote});
        console.log(response)
         if(response){
             return NextResponse.json(
                 {success:true , data:response},
                 {status:200}
             )
         }else{
            return NextResponse.json({
                success:false
            },{status:400})
         }
    } catch (error) {
        console.error('Error in processing request:', error);
        return NextResponse.json(
            { success: false,},
            { status: 500 }
        );
    }
}
