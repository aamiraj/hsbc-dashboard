import Searchbox from "@/components/Searchbox/Searchbox";
import Selectbox from "@/components/Selectbox/Selectbox";
import React from "react";
import { optionListNumbers } from "../../../options/optionList";
import Link from "next/link";

const thead = [
  "Customer",
  "Date",
  "Details",
  "Project",
  "Contract",
  "See",
  "Action",
];

const investments = [
  {
    customer: "",
    date: "12.12.2023 18:24",
    details: {
      amountInvestor: "$14,210",
      interest: "1.15",
      frequency: "1.15",
      blockingPeriod: "6 Months",
    },

    project: {
      name: "Popular booklet - 6.90% net",
      link: "popular-booklet-6.90-net",
    },
    contract: "117-2668966",
  },
  {
    customer: "",
    date: "12.12.2023 18:24",
    details: {
      amountInvestor: "$14,210",
      interest: "1.15",
      frequency: "1.15",
      blockingPeriod: "6 Months",
    },

    project: {
      name: "Popular booklet - 6.90% net",
      link: "popular-booklet-6.90-net",
    },
    contract: "117-2668966",
  },
];

const InvestmentList = () => {
  return (
    <div className="shadow-md rounded-lg py-4 px-8 my-8">
      <div className="flex items-center gap-4 justify-between">
        <h2 className="text-lg font-bold">Orders In Progress</h2>
        <div className="flex items-center justify-end gap-4">
          <Searchbox withCommand={false} />
          <Selectbox optionList={optionListNumbers} defaultOption="" />
        </div>
      </div>
      <div className="py-4">
        <table className="table">
          <thead>
            <tr className="border-b">
              {thead.map((text, i) => (
                <th key={i} className="th">
                  <div className="flex justify-center items-center gap-2">
                    <p className="text-center">{text}</p>
                    <span className="rotate-90 text-center text-[10px]">
                      {"<>"}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {investments.map((invest, i) => (
              <tr key={i} className="border-b">
                <td className="td">{invest.customer}</td>
                <td className="td">{invest.date}</td>
                <td className="td">
                  <div>
                    <p>
                      Amount Investor:
                      <span className="font-bold">
                        {" "}
                        {invest.details.amountInvestor}
                      </span>
                    </p>
                    <p>
                      Interest:
                      <span className="font-bold">
                        {" "}
                        {invest.details.interest}%
                      </span>
                    </p>
                    <p>
                      Frequency:
                      <span className="font-bold">
                        {" "}
                        {invest.details.frequency}%
                      </span>
                    </p>
                    <p>
                      Blocking Period:
                      <span className="font-bold">
                        {" "}
                        {invest.details.blockingPeriod}
                      </span>
                    </p>
                  </div>
                </td>
                <td className="td">
                  <Link
                    href={invest.project.link}
                    className="font-bold text-[#439F3F]"
                  >
                    {invest.project.name}
                  </Link>
                </td>
                <td className="td underline">{invest.contract}</td>
                <td className="flex justify-center items-center py-4">
                  <div>
                    <ul className="list-disc text-[#439F3F]">
                      <li>
                        <Link href={"/#"}>ADVANCED SETTINGS</Link>
                      </li>
                      <li>
                        <Link href={"/#"}>DEADLINES PASSED</Link>
                      </li>
                      <li>
                        <Link href={"/#"}>FUTURE MATURITIES</Link>
                      </li>
                      <li>
                        <Link href={"/#"}>ALL DEADLINES</Link>
                      </li>
                    </ul>
                  </div>
                </td>
                <td className="td"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center items-center gap-4">
        <p className="text-sm">Page</p>
        <span className="text-[#5D5FEF] text-sm">{"<"}</span>
        <div className="w-6 h-6 bg-[#FF4B26] rounded-full flex justify-center items-center shadow-lg">
          <p className="text-sm text-[#FFFFFF]">2</p>
        </div>
        <span className="text-[#5D5FEF] text-sm">{">"}</span>
        <div className="flex gap-2 items-center border-b border-b-[#5D5FEF]">
          <p className="text-sm">30</p>
          <span className="text-sm rotate-90">{">"}</span>
        </div>
      </div>
    </div>
  );
};

export default InvestmentList;
