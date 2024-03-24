import React from "react";
import AccountCard from "./components/AccountCard";

const getPlans = async (api) => {
  const res = await fetch(api);

  if (!res.ok) {
    const { error } = await res.json();
    console.log(error);
  }

  const { data } = await res.json();
  return data;
};

const AddFund = async () => {
  const plans = await getPlans(`${process.env.PROD_URL}api/data/plans`);

  return (
    <section className="p-8">
      <h1 className="text-[32px] font-bold py-7 text-center">
        Add Fund And Create Crypto Account
      </h1>
      {plans?.length === 0 ? (
        <div className="w-full h-screen flex items-center justify-center">
          <p className="text-center">No plans available for now.</p>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-5">
          {plans?.map((plan, i) => (
            <AccountCard key={i} id={`account-${i}`} plan={plan} />
          ))}
        </div>
      )}
    </section>
  );
};

export default AddFund;
