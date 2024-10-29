import {prisma , tokenVaultPrisma} from "@repo/prisma_database/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import { QRCodeGenerator } from "../../../src/qr_generater";
import { decrypt } from "@repo/encrypt/client";

export async function getUserUpi() {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
        console.log('Cannot find user ID in session');
        return null;
    }
    const upi_address = await tokenVaultPrisma.upiTokenVault.findFirst({
        where:{
            userId : session.user?.id
        },
        select:{
            pa:true,
        }
    })
    const upi_data = await prisma.upi.findFirst({
        where: {
            upi_id: session.user.id
        },
        select: {
            pn: true,
            cu: true
        }
    });

    if (!upi_address?.pa) {
        console.log('No UPI data or encrypted PA found');
        return null;
    }
    if(!upi_data){
        throw new Error('Upi not found')
    }
    const encryptedpa = upi_address?.pa
    const pa = decrypt(encryptedpa)
    const {pn,cu} = upi_data

    try {
        return {pa,pn,cu};
    } catch (error:any) {
        console.error('Decryption failed: ', error.message);
        return null;
    }
}

export default async function QRPage() {
    const upi_data = await getUserUpi();

    if (!upi_data) {
        return <div>Error: Unable to fetch or decrypt UPI data</div>;
    }

    return (
        <div>
            <QRCodeGenerator upidata={upi_data} />
        </div>
    );
}
