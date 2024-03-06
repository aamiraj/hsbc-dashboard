import React from "react";
import Searchbox from "../../../../../components/Searchbox/Searchbox";
import Selectbox from "../../../../../components/Selectbox/Selectbox";
import { optionListNumbers } from "../../options/optionList";

const thead = [
  "Date",
  "First name and Surname",
  "Attribution",
  "Plan",
  "Price",
  "Bonuses",
  "Payment",
];

const PayButton = () => {
  return (
    <button
      type="button"
      className="bg-[#39DE5D] shadow rounded-lg text-[#FFFFFF] py-2 px-4"
    >
      Payment Recieved
    </button>
  );
};

const PaymentList = ({ title, payments }) => {
  return (
    <div className="shadow-md rounded-lg py-4 px-8 my-8">
      <div className="flex items-center gap-4 justify-between">
        <h2 className="text-lg font-bold">{title}</h2>
        <div className="flex items-center justify-end gap-4">
          <Searchbox withCommand={false} />
          <Selectbox optionList={optionListNumbers} defaultOption="" />
        </div>
      </div>
      <div className="py-4">
        <table className="table">
          <thead>
            <tr>
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
            {payments.map((payment, i) => (
              <tr key={i}>
                <td className="td">{payment.date}</td>
                <td className="td">{payment.fullname}</td>
                <td className="td">{payment.attribution}</td>
                <td className="td">{payment.plan}</td>
                <td className="td">{payment.price}</td>
                <td className="td">{payment.bonuses}</td>
                <td className="td">
                  {payment.payment ? <PayButton /> : <PayButton />}
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

export default PaymentList;
