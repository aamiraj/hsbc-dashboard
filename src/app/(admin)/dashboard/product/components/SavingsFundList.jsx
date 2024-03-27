import Searchbox from "../../../../../components/Searchbox/Searchbox";
import Selectbox from "../../../../../components/Selectbox/Selectbox";
import Link from "next/link";
import React from "react";
import { optionListNumbers } from "../../options/optionList";
import OpenModalButton from "./OpenModalButton";
import OpenAddProductModal from "./OpenAddProductModal/OpenAddProductModal";

const getData = async (api) => {
  const res = await fetch(api);

  if (!res.ok) {
    return;
  }

  const { data } = await res.json();
  return data;
};

const SavingsFundList = async () => {
  const savingsFunds = await getData(
    `${process.env.PROD_URL}api/data/savings-funds`
  );

  return (
    <>
      <OpenModalButton id={"add-product-modal"} />
      <OpenAddProductModal id={"add-product-modal"} />
      <div className="shadow-md rounded-lg py-4 px-8 my-8">
        <div className="flex items-center gap-4 justify-between">
          <h2 className="text-lg font-bold">Savings Funds</h2>
          <div className="flex items-center justify-end gap-4">
            <Searchbox withCommand={false} />
            <Selectbox optionList={optionListNumbers} defaultOption="" />
          </div>
        </div>
        <div className="py-4">
          <Table savingsFunds={savingsFunds} />
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
    </>
  );
};

export default SavingsFundList;

const ActionButton = ({ text, color }) => {
  return (
    <button
      type="button"
      className={`w-full shadow rounded-lg text-[#FFFFFF] py-2 px-4 `}
      style={{ backgroundColor: `${color}` }}
    >
      {text}
    </button>
  );
};

const thead = [
  "Project",
  "Total to collect",
  "Already collected",
  "Participants",
  "Details",
  "Actions",
];

// const savingsFunds = [
//   {
//     projectTitle: "Future booklet 3.9% net annual",
//     projectDesc:
//       "Because your children deserve the best, opt for an energizing background! Save money for your future generations while benefiting from increasing interest rates depending on the amount invested.",
//     totalToCollect: 650000000,
//     alreadyCollected: {
//       platform: 0.0,
//       excludingPlatform: 586745000.0,
//     },
//     status: "Ongoing project",
//     participants: { platforms: 0, offPlatform: 230 },
//     details: {
//       firstDueDate: "2024-03-21",
//       interestRate: 3.9,
//       applicablePeriod: 12,
//     },
//   },
// ];

const Table = ({ savingsFunds }) => {
  return (
    <table className="table">
      <thead>
        <tr className="border-b">
          {thead.map((text, i) => (
            <th key={i} className="py-4">
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
      <tbody className="text-xs">
        {savingsFunds?.map((fund, i) => (
          <tr key={i} className="border-b hover:bg-slate-100/30">
            <td className="py-4">
              <p className="font-bold text-base">{fund?.projectTitle}</p>
              <p className="max-w-[240px] font-light italic text-xs">
                {fund?.projectDesc}
              </p>
            </td>
            <td className="py-4 text-xs">
              <p>
                {fund?.totalToCollect}
                <span className="inline">$</span>
              </p>
            </td>
            <td className="text-xs py-4">
              <div>
                <p>
                  Platform: {fund?.alreadyCollected?.platform}
                  <span className="inline">$</span>
                </p>
                <p>
                  Excluding platform:{" "}
                  {fund?.alreadyCollected?.excludingPlatform}
                  <span className="inline">$</span>
                </p>
                <p className="font-bold text-red-500">{fund?.status.toUpperCase()}</p>
              </div>
            </td>
            <td className="py-4 text-xs">
              <p>Platform: {fund?.participants?.platforms}</p>
              <p>off-platform: {fund?.participants?.offPlatform}</p>
            </td>
            <td className="py-4 text-xs">
              <p>
                First due date:{" "}
                {new Date(
                  fund?.applicableRate?.firstDueDate
                ).toLocaleDateString()}
              </p>
              <p>Max interest rate: {fund?.applicableRate?.interestRate}%</p>
              <p>Period: {fund?.applicableRate?.applicablePeriod} Months</p>
            </td>
            <td className="py-4">
              <div className="flex flex-col items-center justify-center gap-3">
                <ActionButton text={"Edit"} color={"#00FF00"} />
                <ActionButton text={"Delete"} color={"#FF0000"} />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
