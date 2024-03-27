import Image from "next/image";
import React from "react";
import { PiWallet } from "react-icons/pi";
import { PiCalendar } from "react-icons/pi";
import { PiSticker } from "react-icons/pi";
import { iconSize } from "../../../sections/HeaderNavBar";
import ProfitSimulators from "../../components/ProfitSimulators";
import MediaDocuments from "../../components/MediaDocuments";
import GetSupport from "../../components/GetSupport";
import toast from "react-hot-toast";

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

const getData = async (api) => {
  const res = await fetch(api);

  if (!res.ok) {
    toast.error("Error while fetching details.");
    return;
  }

  const { data } = await res.json();
  return data;
};

const SavingFundInvestment = async ({ params }) => {
  const savingsFundDetails = await getData(
    `${process.env.PROD_URL}api/data/savings-funds/${params?.id}`
  );

  return (
    <div className="w-[80%] mx-auto py-10">
      <div className="bg-white p-8">
        <h2 className="text-2xl font-bold py-4">
          {savingsFundDetails?.projectTitle}
        </h2>
        <h2 className="text-lg font-semibold py-4">
          {savingsFundDetails?.projectSubtitle}
        </h2>
        <div className="grid grid-cols-2 gap-8 border p-8 rounded">
          <div>
            <h3 className="text-xl font-bold py-4">Environment</h3>
            {savingsFundDetails?.photoURL ? (
              <Image
                src={savingsFundDetails?.photoURL}
                alt="advantage 1"
                quality={100}
                width={286}
                height={219}
                className="w-full"
              />
            ) : (
              <Image
                src={"/assets/advantage_1.png"}
                alt="advantage 1"
                quality={100}
                width={286}
                height={219}
                className="w-full"
              />
            )}
            <p className="text-sm p-8 text-justify">
              {savingsFundDetails?.projectDesc}
            </p>
            <div>
              <Info info={savingsFundDetails} />
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
                  $
                  {savingsFundDetails?.alreadyCollected?.platform +
                    savingsFundDetails?.alreadyCollected?.excludingPlatform}
                </p>
              </div>
              <div>
                <p className="text-xs text-[#595959] font-bold flex items-center gap-1">
                  <PiCalendar style={iconSize} />
                  Term Of Loan
                </p>
                <p className="text-lg py-2 text-[#39DE5D] font-bold">
                  {savingsFundDetails?.applicableRate?.applicablePeriod} Months
                </p>
              </div>
              <div>
                <p className="text-xs text-[#595959] font-bold flex items-center gap-1">
                  <PiSticker style={iconSize} />
                  Minimum Entry Ticket
                </p>
                <p className="text-lg py-2 text-[#39DE5D] font-bold">
                  ${savingsFundDetails?.minimumAccepted}
                </p>
              </div>
            </div>
            <ProfitSimulators
              minValue={savingsFundDetails?.minimumAccepted}
              maxValue={savingsFundDetails?.maximumAccepted}
            />
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
        <p className="text-[#878790]">Subscription deadline</p>
        <p className="font-bold">
          {new Date(info.endOfSubscription).toLocaleDateString()}
        </p>
      </div>
      <div className="w-full flex items-center justify-between">
        <p className="text-[#878790]">Confidence index</p>
        <p className="font-bold">{info?.confidenceIndex}%</p>
      </div>
      <div className="w-full flex items-center justify-between">
        <p className="text-[#878790]">Interest rate</p>
        <p className="font-bold">{info?.applicableRate?.interestRate}%</p>
      </div>
      <div className="w-full flex items-center justify-between">
        <p className="text-[#878790]">Duration of commitment</p>
        <p className="font-bold">{info?.applicableRate?.applicablePeriod}</p>
      </div>
      <div className="w-full flex items-center justify-between">
        <p className="text-[#878790]">Minumum investment</p>
        <p className="font-bold">${info?.minimumAccepted}</p>
      </div>
      <div className="w-full flex items-center justify-between">
        <p className="text-[#878790]">Maximum investment</p>
        <p className="font-bold">${info?.maximumAccepted}</p>
      </div>
      <div className="w-full flex items-center justify-between">
        <p className="text-[#878790]">Frequency</p>
        <p className="font-bold">{info?.applicableRate?.rateFrequency}</p>
      </div>
      <div className="w-full flex items-center justify-between">
        <p className="text-[#878790]">
          Your Investment Is
          <br /> Guarantedd up to
        </p>
        <p className="font-bold">{info?.confidenceIndex}%</p>
      </div>
    </div>
  );
};

export default SavingFundInvestment;
