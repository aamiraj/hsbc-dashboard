import Image from "next/image";
import React from "react";
import { FaEnvelope, FaMinus, FaPhone, FaPlus } from "react-icons/fa";
import OpenAddFundModal from "../_components/OpenAddFundModal/OpenAddFundModal";
import OpenWithdrawModal from "../_components/OpenWithdrawModal/OpenWithdrawModal";
import OpenModalButton from "./OpenModalButton";

const Adviser = ({ id, account }) => {
  const handleOpenModal = (id) => {
    const modal = document.getElementById(id);
    modal.style.display = "block";
  };
  return (
    <div>
      <div className="bg-white w-full mx-auto rounded-xl">
        <h1 className="text-[16px] font-semibold py-5 text-center">
          Your Advisor
        </h1>
        <div className="flex justify-center mt-3">
          <Image
            src={"/assets/pexels-photo-1133957.webp"}
            alt="image"
            width={200}
            height={200}
          />
        </div>

        <h1 className="text-[#28B5E1] text-[24px] font-bold text-center my-4">
          West Jackeline
        </h1>
        <div className="flex justify-center  gap-x-2">
          <div>
            <div className="flex gap-x-2">
              <FaPhone />
              <span>4268-2137-2138</span>
            </div>
            <div className="flex gap-x-2">
              <FaEnvelope />
              <span>laurent.florida@global.com</span>
            </div>
          </div>
        </div>
        <div className="mt-8 bg-black rounded-b-lg">
          <div>
            <p className="px-5 py-7 text-[15px] font-medium text-white">
              Take advantage of the lastet tecnologies and dedicated support
              from expert. We are at your disposal to repond positifly to all
              yout expectations
            </p>
          </div>
          <div>
            <h1 className="text-[#FF002E] text-[18px] font-bold text-center">
              FUND MANAGEMENT
            </h1>
          </div>
          <div className="flex justify-center gap-4 pb-12 pt-6">
            <OpenModalButton id={id}>
              <FaPlus />
              <span className="text-xs">Add</span>
            </OpenModalButton>
            <OpenModalButton id={`withdraw-${id}`}>
              <FaMinus />
              <span className="text-xs">Withdraw</span>
            </OpenModalButton>
          </div>
        </div>
      </div>
      {/* open modal on click add fund  */}
      <div>
        <OpenAddFundModal id={id} account={account} />
        <OpenWithdrawModal id={`withdraw-${id}`} account={account} />
      </div>
    </div>
  );
};

export default Adviser;
