import { check_acc_details } from "../../backend/service/check_details";
import { check_prayer_details } from "../../backend/service/checkingPayerDetails";

interface PayerDetails {
    account: string;
    phoneValue: string;
    ifscValue: string;
}

export const confirm_payer_details = async ({ account, phoneValue, ifscValue }: PayerDetails) => {
    try {
        // Check account details
        const userId = await check_acc_details({ account });
        console.log(userId)
        // Await the check_prayer_details function
        const result = await check_prayer_details(account);

        // Narrow the type, check if `result` is an object containing `phone` and `ifsc`
        if (typeof result === 'object' && result !== null && 'phone' in result && 'ifsc' in result) {
            const { phone, ifsc } = result;
            console.log(phone +'and ' + ifsc)

            // Check if the provided phone and ifsc values match
            if (phone === phoneValue && ifsc === ifscValue) {
                return userId;
            } else {
                return 'Payer details do not match';
            }
        } else {
            // Handle the case where the result is a string (error messages)
            return result;
        }
    } catch (error) {
        return 'Error while checking user details: ' + error;
    }
};
