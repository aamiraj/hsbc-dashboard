"use client";

import Link from "next/link";
import React from "react";
import { FaPlus } from "react-icons/fa";
import AccountMenus from "../_components/AccountMenus";

const accounts = ["Test account 1", "Test account 2"];

const Sidebar = () => {
  return (
    <div className="bg-white w-[300px] mx-auto rounded-xl">
      <div className="p-4">
        <h1 className="text-base font-semibold py-5 text-center">My Account</h1>
        {accounts.map((acc, i) => (
          <AccountMenus key={i} id={`accordion-${i}`} title={acc} />
        ))}
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
