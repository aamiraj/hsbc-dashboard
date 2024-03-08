import Searchbox from "../../../../../../components/Searchbox/Searchbox";
import Selectbox from "../../../../../../components/Selectbox/Selectbox";
import React from "react";
import { optionListNumbers } from "../../../options/optionList";
import Image from "next/image";

const thead = [
  "Customer",
  "Currency Name",
  "Commission",
  "Map Title",
  "Amount Transaction",
  "Attribution",
  "Date",
  "Action",
];

const investments = [
  {
    customer: {
      name: "Brandt Paul",
      email: "Emmanuelb@gmail.com",
      id: "06.45.19.88.08",
    },
    currency: "Solana",
    details: {
      sellSpread: "$14,210",
      fixedCharge: "1.15",
      commissionAmount: "1.15",
    },

    mapTitle: {
      name: "Free HSBC Booklet",
      availableFund: "€1,119.91",
    },
    amountTransaction: "€1,088.83",
    attribution: {
      name: "Berthier Laurent ",
      designation: "Manager",
    },
    date: {
      transactionType: "Sell",
      time: "2024-01-01 10:18:02",
    },
  },
  {
    customer: {
      name: "Brandt Paul",
      email: "Emmanuelb@gmail.com",
      id: "06.45.19.88.08",
    },
    currency: "Solana",
    details: {
      sellSpread: "$14,210",
      fixedCharge: "1.15",
      commissionAmount: "1.15",
    },

    mapTitle: {
      name: "Free HSBC Booklet",
      availableFund: "€1,119.91",
    },
    amountTransaction: "€1,088.83",
    attribution: {
      name: "Berthier Laurent ",
      designation: "Manager",
    },
    date: {
      transactionType: "Sell",
      time: "2024-01-01 10:18:02",
    },
  },
  {
    customer: {
      name: "Brandt Paul",
      email: "Emmanuelb@gmail.com",
      id: "06.45.19.88.08",
    },
    currency: "Solana",
    details: {
      sellSpread: "$14,210",
      fixedCharge: "1.15",
      commissionAmount: "1.15",
    },

    mapTitle: {
      name: "Free HSBC Booklet",
      availableFund: "€1,119.91",
    },
    amountTransaction: "€1,088.83",
    attribution: {
      name: "Berthier Laurent ",
      designation: "Manager",
    },
    date: {
      transactionType: "Sell",
      time: "2024-01-01 10:18:02",
    },
  },
  {
    customer: {
      name: "Brandt Paul",
      email: "Emmanuelb@gmail.com",
      id: "06.45.19.88.08",
    },
    currency: "Solana",
    details: {
      sellSpread: "$14,210",
      fixedCharge: "1.15",
      commissionAmount: "1.15",
    },

    mapTitle: {
      name: "Free HSBC Booklet",
      availableFund: "€1,119.91",
    },
    amountTransaction: "€1,088.83",
    attribution: {
      name: "Berthier Laurent ",
      designation: "Manager",
    },
    date: {
      transactionType: "Sell",
      time: "2024-01-01 10:18:02",
    },
  },
];

const Cryptocurrency = () => {
  return (
    <div className="shadow-md rounded-lg py-4 px-8 my-8">
      <div className="flex items-center gap-4 justify-between">
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
          <tbody className="text-xs">
            {investments.map((invest, i) => (
              <tr key={i} className="border-b">
                <td>
                  <div className="font-bold text-xs py-4">
                    <p>{invest.customer.name}</p>
                    <p>{invest.customer.email}</p>
                    <p>{invest.customer.id}</p>
                  </div>
                </td>
                <td className="text-center">{invest.currency}</td>
                <td>
                  <div className="py-4">
                    <p>
                      Sell Spread:
                      <span className="font-bold">
                        {" "}
                        {invest.details.sellSpread}
                      </span>
                    </p>
                    <p>
                      Fixed Charge/Sell:
                      <span className="font-bold">
                        {" "}
                        {invest.details.fixedCharge}%
                      </span>
                    </p>
                    <p className="font-bold">
                      Commission Amount:
                      <span className="font-bold">
                        {" "}
                        {invest.details.commissionAmount}%
                      </span>
                    </p>
                  </div>
                </td>
                <td>
                  <p className="font-bold">{invest.mapTitle.name}</p>
                  <p>Available Fund: {invest.mapTitle.availableFund}</p>
                </td>
                <td className="td text-bold">{invest.amountTransaction}</td>
                <td>
                  <div className="flex flex-col justify-center items-center py-4">
                    <p>{invest.attribution.name}</p>
                    <p>({invest.attribution.designation})</p>
                  </div>
                </td>
                <td>
                  <div className="flex flex-col justify-center items-start p-4">
                    <p>{invest.date.transactionType}</p>
                    <p>{invest.date.time}</p>
                  </div>
                </td>
                <td>
                  <div className="felx justify-center items-center">
                  <Image
                    src={"/assets/delete.svg"}
                    alt="Delete icon"
                    width={24}
                    height={24}
                  />
                  </div>
                </td>
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

export default Cryptocurrency;
