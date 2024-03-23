import React from "react";
import AccountCard from "./components/AccountCard";

const AddFund = () => {
  let array = [1, 2, 3];
  return (
    <section className="p-8">
      <h1 className="text-[32px] font-bold py-7 text-center">
        Add Fund And Create Crypto Account
      </h1>
      <div className="grid grid-cols-3 gap-5">
        {array.map((a, i) => (
          <AccountCard key={i} id={`account-${i}`} />
        ))}
      </div>
    </section>
  );
};

export default AddFund;
