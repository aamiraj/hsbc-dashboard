"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { PiChartPieSliceFill } from "react-icons/pi";
import { FaLightbulb } from "react-icons/fa";
import { BsArrowRepeat } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaTicketAlt } from "react-icons/fa";

const AccountMenus = ({ id, info }) => {
  const path = usePathname();
  const parts = path.split("/");
  const situation = parts[parts.length - 1];

  const handleAccordion = (id) => {
    const accordion = document.getElementById(id);
    const panel = accordion.nextElementSibling;
    // console.log(panel)
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  };
  return (
    <div className="border border-[#979797]">
      <button
        id={id}
        type="button"
        className="accordion"
        onClick={() => handleAccordion(id)}
      >
        {info?.planTitle}
      </button>
      <ul className="panel">
        <Link href={`/customer/accounts/situation?accountName=${info?.planTitle}`}>
          <li
            className={`flex gap-x-5 p-4 ${
              situation === "situation" ? "bg-black text-white" : ""
            }`}
          >
            <PiChartPieSliceFill style={{ color: "#595959" }} />
            <span className="">Situation</span>
          </li>
        </Link>
        <Link href={"/customer/accounts/commitment"}>
          <li
            className={`flex gap-x-5 p-4 ${
              situation === "commitment" ? "bg-black text-white" : ""
            }`}
          >
            <FaTicketAlt style={{ color: "#595959" }} />
            <span className=" text-[16px] font-normal -mt-[3px]">
              Commitment
            </span>
          </li>
        </Link>
        <Link href={"/customer/accounts/historical"}>
          <li
            className={`flex gap-x-5 p-4 ${
              situation === "historical" ? "bg-black text-white" : ""
            }`}
          >
            <FaLightbulb style={{ color: "#595959" }} />
            <span className=" text-[16px] font-normal -mt-[3px]">
              Historical
            </span>
          </li>
        </Link>
        <Link href={"/customer/accounts/movement"}>
          <li
            className={`flex gap-x-5 p-4 ${
              situation === "movement" ? "bg-black text-white" : ""
            }`}
          >
            <BsArrowRepeat style={{ color: "#595959" }} />
            <span className=" text-[16px] font-normal -mt-[3px]">Movement</span>
          </li>
        </Link>
        <Link href={"/customer/accounts/terms"}>
          <li
            className={`flex gap-x-5 p-4 ${
              situation === "terms" ? "bg-black text-white" : ""
            }`}
          >
            <FaUserTie style={{ color: "#595959" }} />
            <span className=" text-[16px] font-normal -mt-[3px]">Terms</span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default AccountMenus;
