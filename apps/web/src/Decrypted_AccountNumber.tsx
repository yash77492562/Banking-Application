import { prisma } from "@repo/prisma_database/client";
import { getdecryptaccount } from "../app/backend/service/decrypted_value";
import { getUserId } from "../app/userId/userId";

const Decrypted_AccountNumber = async () => {
    try {
        const userId = await getUserId();
        const accountNo = await getdecryptaccount();
        const ifsc = await prisma.accountDetails.findFirst({
            where: {
                accountId: userId
            },
            select: {
                ifsc: true
            }
        });

        if (!ifsc || !accountNo) {
            return 'Error while fetching your account details';
        }

        const accountNumber = accountNo.decryptedAccountValue;
        const ifscNumber = ifsc.ifsc;

        return (
            <div className="  w-full flex gap-1 items-center">
                <div className="font-semibold flex flex-col ">
                    <div className="pr-4 ">Account Number</div>
                    <div className=" pr-4 ">IFSC</div>
                </div>
                <div className="font-semibold flex flex-col">
                    <div className=" ">{accountNumber}</div>
                    <div className=" ">{ifscNumber}</div>
                </div>
            </div>
        );
    } catch (error) {
        console.error("Error:", error);
        return 'An error occurred while processing your request';
    }
};

export default Decrypted_AccountNumber;
