import React from "react";
import Calendar from "../../../client-prospect/components/Calendar/Calendar";
import Searchbox from "../../../../../../components/Searchbox/Searchbox";
import { payments } from "../../../../../../dummydata/payments";
import ApproveButton from "../../components/ApproveButton";

const thead = [
  "Date",
  "First name and Surname",
  "Attribution",
  "Plan",
  "Price",
  "Status",
];

const OrderList = () => {
  return (
    <div className="bg-white rounded-lg p-8 my-8">
      <div>
        <h3 className="text-2xl font-bold">Orders In Progress</h3>
        <div className="flex items-center justify-between">
          <form className="flex items-center gap-4 my-4">
            <select
              name="status"
              id="status"
              className="text-[#39DE5D] p-2 border rounded-lg"
            >
              <option value="status">Status</option>
              <option value="status">Name</option>
            </select>
            <Calendar text={"Assign To"} />
            <Calendar text={"Evaluate As"} />
            <Searchbox />
          </form>
        </div>
      </div>
      <div className="py-4">
        <table className="table">
          <thead>
            <tr>
              {thead.map((text, i) => (
                <th key={i} className="py-4">
                  <div className="text-xs flex justify-center items-center gap-2">
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
                <td className="py-4">{payment.date}</td>
                <td className="py-4">{payment.fullname}</td>
                <td className="py-4">{payment.attribution}</td>
                <td className="py-4">{payment.plan}</td>
                <td className="py-4">{payment.price}</td>

                <td className="py-4">
                  {payment.payment ? <ApproveButton /> : <ApproveButton />}
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

export default OrderList;
