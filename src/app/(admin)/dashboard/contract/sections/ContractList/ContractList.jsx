import Searchbox from "../../../../../../components/Searchbox/Searchbox";
import Selectbox from "../../../../../../components/Selectbox/Selectbox";
import Link from "next/link";
import React from "react";
import { optionListNumbers } from "../../../options/optionList";

const thead = ["Date", "Name Of Project", "Contract", "Price", "Payment"];

const contracts = [
  {
    date: "05/15/2023 4:25 p.m",
    project: {
      title: "Client deleted",
      details: "Signed by supervisor: sup TEST",
    },

    contract: {
      id: "441-1212-1321-1241",
      downloadLink: "/#",
    },
    price: "€2,000.00",
    status: "approved",
  },
  {
    date: "05/15/2023 4:25 p.m",
    project: {
      title: "Client deleted",
      details: "Signed by supervisor: sup TEST",
    },

    contract: {
      id: "441-1212-1321-1241",
      downloadLink: "/#",
    },
    price: "€2,000.00",
    status: "approved",
  },
  {
    date: "05/15/2023 4:25 p.m",
    project: {
      title: "Client deleted",
      details: "Signed by supervisor: sup TEST",
    },

    contract: {
      id: "441-1212-1321-1241",
      downloadLink: "/#",
    },
    price: "€2,000.00",
    status: "approved",
  },
];

const ApproveButton = () => {
  return (
    <button
      type="button"
      className="bg-[#0052B4] shadow rounded-lg text-[#FFFFFF] py-2 px-4"
    >
      Approved
    </button>
  );
};

const ContractList = () => {
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
            {contracts.map((contract, i) => (
              <tr key={i} className="border-b ">
                <td className="font-bold py-4">{contract.date}</td>
                <td>
                  <div className="ps-4">
                    <p className="font-bold">{contract.project.title}</p>
                    <p className="italic">{contract.project.details}</p>
                  </div>
                </td>
                <td className="py-4">
                  <div>
                    <p>{contract.contract.id}</p>
                    <p>Download the contract</p>
                    <Link
                      href={contract.contract.downloadLink}
                      className="font-bold text-[#0052B4]"
                    >
                      Download Here
                    </Link>
                  </div>
                </td>
                <td className="py-4 font-bold">{contract.price}</td>
                <td className="py-4">
                  <ApproveButton />
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

export default ContractList;
