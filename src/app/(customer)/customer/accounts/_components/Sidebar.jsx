"use client";

import Link from "next/link";
import React, { useContext } from "react";
import { FaPlus } from "react-icons/fa";
import AccountMenus from "../_components/AccountMenus";
import { AccountContext } from "../context/AccountProvider";

const Sidebar = () => {
  const { accounts } = useContext(AccountContext);

  // if (loading) {
  //   return (
  //     <div className="w-full h-full flex justify-center items-center">
  //       <p className="text-red-500 text-center p-4">Loading...</p>
  //     </div>
  //   );
  // }

  return (
    <div className="bg-white w-[300px] mx-auto rounded-xl">
      <div className="p-4">
        <h1 className="text-base font-semibold py-5 text-center">My Account</h1>
        {accounts?.length === 0 ? (
          <div>
            <p className="text-center">No account</p>
          </div>
        ) : (
          accounts?.map((acc, i) => (
            <AccountMenus key={i} id={`accordion-${i}`} info={acc} />
          ))
        )}

        <Link
          href="/customer/add-plan"
          className="bg-[#D2FFD7] flex items-center justify-between gap-4 my-4 px-8 py-4 cursor-pointer w-full rounded"
        >
          <p>Create A New Account</p>
          <FaPlus />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
