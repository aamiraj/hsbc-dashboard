"use client";

import { useSession } from "next-auth/react";
import React, { createContext, useEffect, useState } from "react";

export const AccountContext = createContext(null);

const AccountProvider = ({ children }) => {
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { data } = useSession();
  const email = data?.user?.email;

  useEffect(() => {
    if (!email) return;
    setLoading(true);
    fetch(`/api/data/accounts?email=${email}`)
      .then((res) => res.json())
      .then(({ data }) => setAccounts(data))
      .catch((error) => console.log(error))
      .finally(setLoading(false));
  }, [email]);

  return (
    <AccountContext.Provider value={{ accounts, loading }}>
      {children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
