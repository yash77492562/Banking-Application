import { prisma,tokenVaultPrisma } from "@repo/prisma_database/client";
import { getUserIdWithToken } from "./UserId_token";
import { decrypt } from "@repo/encrypt/client";

export const check_prayer_details = async (account: string) => {
    const userId = await getUserIdWithToken(account, 'account');
    if (!userId) {
        return "Invalid Account Number";
    }
    console.log(userId)
    try {
        // Fetch phone from the user with matching ID
        const user = await tokenVaultPrisma.phoneTokenVault.findFirst({
            where: {
                userId
            },
            select: {
                phone:true
            }
        });
        console.log('user' +user?.phone)
        // Fetch ifsc from the account details
        const accountDetails = await prisma.accountDetails.findFirst({
            where: {
                accountId: userId
            },
            select: {
                ifsc: true
            }
        });

        if (!user || !user.phone) {
            return 'There is no mobile number';
        }

        if (!accountDetails || !accountDetails.ifsc) {
            return 'There is no IFSC number';
        }

        // Decrypt the phone number
        const phone = decrypt(user.phone);
        console.log(phone)
        const ifsc = accountDetails.ifsc;

        return { phone, ifsc };
    } catch (error) {
        throw new Error(`Error while checking payer details: ${error}`);
    }
};
