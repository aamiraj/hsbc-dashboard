"use client";

import React, { useState } from "react";
import Searchbox from "../../../../../components/Searchbox/Searchbox";
import Selectbox from "../../../../../components/Selectbox/Selectbox";
import { optionListNumbers } from "../../options/optionList";
import ShowPlanModal from "../../collection/components/ShowPlanModal";
import { payments } from "../../../../../dummydata/payments";

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

const PaymentList = ({ title }) => {
  const handleOpen = (id) => {
    const modal = document.getElementById(id);
    modal.style.display = "block";
  };
  const handleClose = (id) => {
    const modal = document.getElementById(id);
    modal.style.display = "none";
  };

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
        <div className="table">
          <div>
            <div className="flex gap-2 justify-around items-center">
              {thead.map((text, i) => (
                <div key={`head-${i}`} className="th">
                  <div className="flex justify-center items-center gap-2">
                    <p className="text-center">{text}</p>
                    <span className="rotate-90 text-center text-[10px]">
                      {"<>"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            {payments?.map((payment, i) => (
              <div key={`payment-${i + 10}`}>
                <div id={`modal-${i + 10}`} style={{ display: "none" }}>
                  <ShowPlanModal
                    key={`modal-${i + 10}`}
                    payment={payment}
                    closeModal={() => handleClose(`modal-${i + 10}`)}
                  />
                </div>
                <div
                  className="flex gap-2 justify-around items-center cursor-pointer hover:bg-[#d0d0d011] border-b"
                  onClick={() => handleOpen(`modal-${i + 10}`)}
                >
                  <div className="td">{payment?.date}</div>
                  <div className="td">{payment?.fullname}</div>
                  <div className="td">{payment?.attribution}</div>
                  <div className="td">{payment?.plan}</div>
                  <div className="td">{payment?.price}</div>
                  <div className="td">{payment?.bonuses}</div>
                  <div className="td">
                    {payment?.payment ? <PayButton /> : <PayButton />}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
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
