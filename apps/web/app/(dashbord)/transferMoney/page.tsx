

import { DebitCard } from "../../../src/debitcard";
import Decrypted_AccountNumber from "../../../src/Decrypted_AccountNumber";
import { Find_user } from "../../../src/SearchUser";

const ExpiryInput = () => {
  return (
    <div className=" w-full flex flex-col justify-center items-center h-screen">
        {/* < DebitCard/>
        <Decrypted_AccountNumber /> */}
        <Find_user />
    </div>
  );
};

export default ExpiryInput;