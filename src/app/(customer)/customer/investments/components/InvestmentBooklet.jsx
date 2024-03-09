import React from "react";
import { PiNewspaperClipping } from "react-icons/pi";
import { iconSize } from "../../sections/HeaderNavBar";
import { PiWallet } from "react-icons/pi";
import { PiCalendar } from "react-icons/pi";
import { PiSticker } from "react-icons/pi";
import Image from "next/image";

const InvestmentBooklet = ({ image }) => {
  return (
    <div className="my-8">
      <div className="flex items-center justify-between gap-0 border rounded-2xl">
        <div className="relative w-1/3 h-72 rounded-l-2xl">
          <Image
            src={image}
            alt="advantage 1"
            quality={100}
            fill
            sizes="100vw"
            className="object-cover rounded-l-2xl"
          />
          <p className="bg-[#FF0000B8] text-xs absolute top-4 left-3 px-8 py-2 text-white rounded-bl-full rounded-tr-full">
            Most Favourite
          </p>
          <div className="w-full h-[50%] absolute bottom-0 left-0 bg-gradient-to-t from-[#000000FF] to-[#00000000] rounded-l-2xl"></div>
        </div>
        <div className="px-8 bg-white rounded-b-2xl ">
          <div className="flex items-center justify-between gap-10 py-4">
            <p className="font-bold text-lg">Popular Booklet - 6,90% Net</p>
            <p className="text-[#878790] rounded-full border border-[#878790] px-4 py-2">
              12/02/22
            </p>
          </div>
          <div className="grid grid-cols-4 gap-2">
            <div>
              <p className="text-sm text-[#595959] font-bold flex items-center gap-2">
                <PiWallet style={iconSize} />
                Already Invest
              </p>
              <p className="text-2xl py-2 text-[#39DE5D] font-bold">$456.237</p>
              <p className="pt-4">Interest</p>
              <p className="pb-4 text-[#D80027] font-bold">6.9% Annually</p>
            </div>
            <div>
              <p className="text-sm text-[#595959] font-bold flex items-center gap-2">
                <PiCalendar style={iconSize} />
                Term Of Loan
              </p>
              <p className="text-2xl py-2 text-[#39DE5D] font-bold">$456.237</p>
              <p className="pt-4">Period</p>
              <p className="pb-4 text-[#D80027] font-bold">12 Months</p>
            </div>
            <div>
              <p className="text-sm text-[#595959] font-bold flex items-center gap-2">
                <PiSticker style={iconSize} />
                Minimum Entry Ticket
              </p>
              <p className="text-2xl py-2 text-[#39DE5D] font-bold">$456.237</p>
              <p className="pt-4">Guarented</p>
              <p className="pb-4 text-[#D80027] font-bold">6.9% Annually</p>
            </div>
            <div>
              <p className="text-sm text-[#595959] font-bold flex items-center gap-2">
                <PiWallet style={iconSize} />
                Minimum Entry Ticket
              </p>
              <p className="text-2xl py-2 text-[#39DE5D] font-bold">$456.237</p>
              <p className="pt-4">End Of Subscription</p>
              <p className="pb-4 text-[#D80027] font-bold">6.9% Annually</p>
            </div>
          </div>

          <div className="w-full p-2 bg-[#39DE5D] flex items-center justify-center rounded-lg hover:bg-[#39DE5DAA]">
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2"
            >
              <PiNewspaperClipping style={iconSize} />
              <span className="font-bold">Learn More</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentBooklet;
