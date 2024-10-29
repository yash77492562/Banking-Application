import { getdecryptPhone } from "../app/backend/service/decrypted_value";

export const DecryptedPhone = async () => {
    const phone = await getdecryptPhone();

    if (phone === null) {
        return (
            <div>
                We can't find UPI ID
            </div>
        );
    }

    return (
        <div className="font-semibold">
            <div>{phone.decryptedPhoneValue}</div>
        </div>
    );
};
