
import { prisma } from "@repo/prisma_database/client";
import { getdecryptCvv,getdecryptdebit } from "../app/backend/service/decrypted_value";
import { getUserId } from "../app/userId/userId";

// Utility function to format the debit card number
function formatDebitCardNumber(cardNumber:string) {
  return cardNumber.replace(/\d{4}(?=\d)/g, "  $& ");
}

export  async function DebitCard() {
  try {
    const [debitNoResult, cvvResult] = await Promise.all([getdecryptdebit(), getdecryptCvv()])
    const userId = await getUserId();

    if (!userId) {
      return <div>Error: User not found</div>;
    }
  
    const debitCard = await prisma.debitCard.findFirst({
      where: {
        user_id: userId,
      },
      select: {
        valid_Thur: true,
      },
    });
    const username = await prisma.user.findUnique({
      where:{
        id: userId
      },
      select:{
        username:true
      }
    })


    const expiryDate = debitCard?.valid_Thur || "MM/YY";
    const debitNo = formatDebitCardNumber(debitNoResult?.decryptedDebitValue || "1234 1234 1234 1234");
    const cvv = cvvResult?.decryptedCvvValue || "000";
    const userName = username?.username || "Yash Yadav";

    return (
      <div className="flex flex-col bg-[url('/images/dargon.jpg')] bg-cover bg-center w-full gap-2 border rounded-2xl p-4 bg-white">
        {/* Row 1: Full width (col-span-2) */}
        <div className="w-full h-10">
          <div className="w-full flex justify-center h-full items-center">
            <p className="font-bold h-full flex items-center text-white">GRINGOTTS WIZARDING BANK</p>
          </div>
        </div>
        {/* Row 2: Full width (col-span-2) */}
        <div className="w-full">
          <img className="h-full w-12 ml-4" src="images/chip (1).png" alt="Chip" />
        </div>

        {/* Row 3: Full width (col-span-2) */}
        <div className="w-full flex flex-col p-1">
          <div className="font-semibold w-1/2 text-white">Debit Card No</div>
          <div className="font-semibold w-1/2 text-white">{debitNo}</div>
        </div>
        <div className="w-full">
          <div className="font-semibold text-white">{(userName).toUpperCase()}</div>
        </div>
        {/* Row 4: Two columns (50%-50%) */}
        <div className="w-full flex ">
            <div className="w-1/2 flex  flex-col p-1">
              <div className="font-semibold text-white">Valid Through</div>
              <div className="font-semibold text-white">{expiryDate}</div>
            </div>
            <div className="w-1/2 flex flex-col pl-4">
              <div className="font-semibold text-white">CVV</div>
              <div className="font-semibold text-white">{cvv}</div>
            </div>
        </div>
      </div>
    );
  } catch (error) {
    return <div>Error fetching debit card information</div>;
  }
}
