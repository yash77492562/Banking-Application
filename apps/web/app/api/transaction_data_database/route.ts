import { NextResponse } from "next/server";
import { prisma } from "@repo/prisma_database/client";
import { tokenVault_database_upi } from "../../backend/service/prisma_data_fetch";
import { decrypt } from "@repo/encrypt/client";
import { user_details } from "../../userId/user_details";

export async function POST(req: Request) {
    const body = await req.json()
    const {id,mode} =  body;
    console.log(id , 'transction-data_database')
  try {
    const user_name = await user_details()
    if(!user_name){
      return null
    }
    let mode_value 
    const transaction_data = await prisma.transaction.findUnique({
        where:{
            id
        },
        select:{
            transactionId:true,
            transactionReferenceNo:true,
            amount:true,
            toUser:{
                select:{
                    username:true,
                    id:true
                }
            }
        }
    })
    console.log(transaction_data,'transaction_data output')
    // Return structured data as a JSON response
    if (transaction_data) {        
        const firstLetter = (transaction_data.toUser.username ).charAt(0) 
        console.log(firstLetter,'firstLetter of paymentStatus')
        const userId = transaction_data.toUser.id
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
        console.log(userId,'userId from transaction_data_database')
      return NextResponse.json({success:true , data:{transaction_data,firstLetter,mode_value,user_name}},{status:200});  // Use JSON response
    } else {
      return NextResponse.json({success:false},{status:500}); // Use JSON response
    }
  } catch (error) {
    return NextResponse.json({ success:false , error }, { status: 500 });
  }
}
