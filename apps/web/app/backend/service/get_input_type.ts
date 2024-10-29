export function getInputType({input}:{input:string}) {
    if (input.includes("@")) {
        return "upi";
    } else if (/^\d{10}$/.test(input)) {
        return "phone";
    } else if (/^\d+$/.test(input)) {
        return "account";
    } else {
        return "unknown";
    }
}
