import { getdecryptupi } from "../app/backend/service/decrypted_value";

export const DecryptedUpi = async () => {
    const upi = await getdecryptupi();

    if (upi === null) {
        return (
            <div>
                We can't find UPI ID
            </div>
        );
    }

    return (
        <div className="font-semibold">
            <div>{upi.decryptedUpiValue}</div>
        </div>
    );
};
