import { getdecryptEmail } from "../app/backend/service/decrypted_value";

export const DecryptedEmail = async () => {
    const email = await getdecryptEmail();

    if (email === null) {
        return (
            <div>
                We can't find UPI ID
            </div>
        );
    }

    return (
        <div>
            <div className="font-semibold">
                {email.decryptedEmailValue}
            </div>
        </div>
    );
};
