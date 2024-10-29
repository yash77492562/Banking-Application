import { NextRequest, NextResponse } from 'next/server';
import { check_upi_details } from '../../backend/service/check_details';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const user_details = body;

    try {
      // Call the check_upi_details function and await its response
      const response = await check_upi_details({ upi_detail: user_details });
      console.log('REsponse' + response)
      return NextResponse.json({success:true,data:response},{status:200});
    } catch (error) {
      console.error('Error in check_upi_details:', error); // Log the error
      return NextResponse.json(
        { error: 'Error in check_upi_details', details: error},
        { status: 500 } // Return a 500 status for server error
      );
    }

  } catch (error) {
    console.error('Invalid JSON payload:', error); // Log the error for invalid payloads
    return NextResponse.json(
      { error: 'Invalid JSON payload' },
      { status: 400 }
    );
  }
}
