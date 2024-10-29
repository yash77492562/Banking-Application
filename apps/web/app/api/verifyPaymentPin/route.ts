import { NextResponse } from "next/server";
import { verifyPaymentPin } from "../../database_creation/PaymentPin";

// Define the POST method for the API route
export async function POST(req: Request) {
  try {
    // Parse the body to get the pin value
    const body = await req.json(); // Ensure the body is JSON-parsed
    const { pin,store_pin } = body; // Extract the pin from the body

    // Check if pin is missing
    if (!pin) {
      return NextResponse.json({ message: "Please enter pin" }, { status: 400 });
    }
    // Call your database or processing function with the pin
    const result = await verifyPaymentPin({pin,store_pin}); 

    // Respond with success
    return NextResponse.json({ success: true, data: result },{status:200});
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
