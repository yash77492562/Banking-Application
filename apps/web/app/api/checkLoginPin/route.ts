import { NextResponse } from "next/server";
import { CheckLoginPin } from "../../database_creation/loginPin";

export async function GET() {
  try {
    const pin = await CheckLoginPin();
    
    // Return structured data as a JSON response
    if (pin) {              
      return NextResponse.json({ hasPin: true , store_pin:pin});  // Use JSON response
    } else {
      return NextResponse.json({ hasPin: false }); // Use JSON response
    }
  } catch (error) {
    return NextResponse.json({ message: "Error checking for existing PIN", error }, { status: 500 });
  }
}
