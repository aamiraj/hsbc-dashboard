"use client";

import React, { useContext } from "react";
import { AccountContext } from "./context/AccountProvider";
import { redirect } from "next/navigation";

const Accounts = () => {
  const { accounts, loading } = useContext(AccountContext);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p className="text-center">Loading...</p>
      </div>
    );
  }

  if (accounts?.length === 0) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p className="text-center">
          You need to create an account from the left sidebar.
        </p>
      </div>
    );
  }

  redirect(
    `/customer/accounts/situation?accountName=${accounts[0]?.planTitle}`
  );
};

export default Accounts;
