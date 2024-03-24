"use client";

import React from "react";
import Image from "next/image";
import OpenAccountModal from "./OpenAcountModal/OpenAccountModal";

const AccountCard = ({ id, plan }) => {
  const handleOpenModal = (id) => {
    const modal = document.getElementById(id);
    modal.style.display = "block";
  };

  return (
    <div>
      <div className="rounded-xl relative border border-[#595959]">
        {plan?.photo ? (
          <Image
            src={plan?.photo}
            alt="image"
            width={2500}
            height={1725}
            style={{ width: "100%", borderRadius: "8px 8px 0 0" }}
          />
        ) : (
          <Image
            src={"/assets/ce1e025ec981289572edf337907792c1.jpg"}
            alt="image"
            width={2500}
            height={1725}
            style={{ width: "100%", borderRadius: "8px 8px 0 0" }}
          />
        )}

        <h1 className="absolute top-3 right-2 bg-red-600/80 text-white font-bold rounded-bl-full rounded-tr-full px-8 py-4">
          Most Favourite
        </h1>
        <h1 className="text-[24px] font-bold absolute top-40 text-white left-5">
          {plan?.planTitle}
        </h1>
        <div className="p-5">
          <div className="flex justify-between">
            <h1 className="text-[#878790] font-medium text-sm">Account Min</h1>
            <h1 className="text-sm font-bold">${plan?.limitFrom} {">"} ${plan?.limitTo}</h1>
          </div>
          <div className="flex justify-between pt-3">
            <h1 className="text-[#878790] font-medium text-sm">
              Guarented Up To
            </h1>
            <h1 className="text-sm font-bold">{plan?.warranty}%</h1>
          </div>
          <div className="flex justify-between pt-3">
            <h1 className="text-[#878790] font-medium text-sm">
              Leverage Effect
            </h1>
            <h1 className="text-sm font-bold">{plan?.limitOfLeverage}</h1>
          </div>
          <div className="flex justify-between pt-3">
            <h1 className="text-[#878790] font-medium text-sm">Fund Release</h1>
            <h1 className="text-sm font-bold">{plan?.blockedDuring} Month</h1>
          </div>
          <div className="flex justify-between pt-3">
            <h1 className="text-[#878790] font-medium text-sm">
              Min of Position
            </h1>
            <h1 className="text-sm font-bold">{plan?.minimumOfPositions}</h1>
          </div>
          <div className="flex justify-between pt-3">
            <h1 className="text-[#878790] font-medium text-sm">
              Instant Bonus
            </h1>
            <h1 className="text-sm font-bold">{plan?.bonuses}%</h1>
          </div>
          <div className="flex items-center justify-center py-4">
            <button
              type="button"
              className="bg-red-600 text-white font-bold rounded-2xl px-8 py-4"
              onClick={() => handleOpenModal(id)}
            >
              Select this method
            </button>
          </div>
        </div>
      </div>
      {/* modal that open when click on the button  */}
      <div>
        <OpenAccountModal id={id} plan={plan} />
      </div>
    </div>
  );
};

export default AccountCard;
