import { NextResponse } from "next/server";
import { balance } from "../../userId/balance";

export async function GET() {
  try {
    console.log('balance api is calling ')
    const current_balance = await balance();
    
    // Return structured data as a JSON response
    if (current_balance) {              
      return NextResponse.json({success:true , current_balance},{status:200});  // Use JSON response
    } else {
      return NextResponse.json({success:false},{status:500}); // Use JSON response
    }
  } catch (error) {
    return NextResponse.json({ message: "Error checking for existing PIN", error }, { status: 500 });
  }
}
