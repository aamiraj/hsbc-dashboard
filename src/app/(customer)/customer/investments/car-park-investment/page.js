import Image from "next/image";
import React from "react";
import { iconSize } from "../../sections/HeaderNavBar";
import { PiWallet } from "react-icons/pi";
import { PiCalendar } from "react-icons/pi";
import { PiSticker } from "react-icons/pi";
import ProfitSimulators from "../components/ProfitSimulators";
import MediaDocuments from "../components/MediaDocuments";
import GetSupport from "../components/GetSupport";

const bookLetInfo = {
  fundPaymentDate: "2023-12-12 / 18:24",
  availableFor: "Invested / Trading",
  remittedAmount: "$1.100",
  bonuses: "0.0%",
  creditedAmount: "$1.245",
  leverageEffect: "10",
  leverageEffectTime: "0 month",
  guarented: "10",
};

const SavingFundInvestment = () => {
  return (
    <div className="w-[80%] mx-auto py-10">
      <div className="bg-white p-8">
        <h2 className="text-2xl font-bold py-4">Popular Booklet - 6,90% Net</h2>
        <div className="grid grid-cols-2 gap-8 border p-8 rounded">
          <div>
            <h3 className="text-xl font-bold py-4">Environment</h3>
            <Image
              src={"/assets/saving_fund.png"}
              alt="saving fund"
              width={450}
              height={350}
              className="w-full p-4"
            />
            <p className="text-sm p-8 text-justify">
              You want to establish financial security and plan for possible
              future hauls. This fund allows you yo save money will be compltely
              safe and to benefit. You want to establish financial security and
              plan for possible future hauls. This fund allows you yo save money
              will be compltely safe and to benefit
            </p>
            <div>
              <Info info={bookLetInfo} />
            </div>
          </div>
          <div>
            <p className="text-lg font-bold py-4">I Want Invest amount of</p>
            <div className="grid grid-cols-3 gap-1 border p-4 rounded-lg">
              <div>
                <p className="text-xs text-[#595959] font-bold flex items-center gap-1">
                  <PiWallet style={iconSize} />
                  Already Invest
                </p>
                <p className="text-lg py-2 text-[#39DE5D] font-bold">
                  $456.237
                </p>
              </div>
              <div>
                <p className="text-xs text-[#595959] font-bold flex items-center gap-1">
                  <PiCalendar style={iconSize} />
                  Term Of Loan
                </p>
                <p className="text-lg py-2 text-[#39DE5D] font-bold">
                  $456.237
                </p>
              </div>
              <div>
                <p className="text-xs text-[#595959] font-bold flex items-center gap-1">
                  <PiSticker style={iconSize} />
                  Minimum Entry Ticket
                </p>
                <p className="text-lg py-2 text-[#39DE5D] font-bold">
                  $456.237
                </p>
              </div>
            </div>
            <ProfitSimulators />
            
          </div>
        </div>
      </div>
      <MediaDocuments />
      <GetSupport />
    </div>
  );
};

const Info = ({ info }) => {
  return (
    <div className="w-full p-8 flex flex-col gap-4 items-center">
      <div className="w-full flex items-center justify-between">
        <p className="text-[#878790]">General Information</p>
        <p className="font-bold">EUR/USD</p>
      </div>
      <div className="w-full flex items-center justify-between">
        <p className="text-[#878790]">Fund Payment Date</p>
        <p className="font-bold">{info.fundPaymentDate}</p>
      </div>
      <div className="w-full flex items-center justify-between">
        <p className="text-[#878790]">Available For</p>
        <p className="font-bold">{info.availableFor}</p>
      </div>
      <div className="w-full flex items-center justify-between">
        <p className="text-[#878790]">Remitted Amount</p>
        <p className="font-bold">{info.remittedAmount}</p>
      </div>
      <div className="w-full flex items-center justify-between">
        <p className="text-[#878790]">Bonuses</p>
        <p className="font-bold">{info.bonuses}</p>
      </div>
      <div className="w-full flex items-center justify-between">
        <p className="text-[#878790]">Credited Amount</p>
        <p className="font-bold">{info.creditedAmount}</p>
      </div>
      <div className="w-full flex items-center justify-between">
        <p className="text-[#878790]">Leverage Effect</p>
        <p className="font-bold">{info.leverageEffect}</p>
      </div>
      <div className="w-full flex items-center justify-between">
        <p className="text-[#878790]">Leverage Effect</p>
        <p className="font-bold">{info.leverageEffectTime}</p>
      </div>
      <div className="w-full flex items-center justify-between">
        <p className="text-[#878790]">
          Your Investment Is
          <br /> Guarantedd up to
        </p>
        <p className="font-bold">{info.guarented}</p>
      </div>
    </div>
  );
};

export default SavingFundInvestment;
