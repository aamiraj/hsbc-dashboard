"use client";

import React from "react";
import { PiCurrencyDollarFill } from "react-icons/pi";
import { PiNewspaperClipping } from "react-icons/pi";
import { PiWallet } from "react-icons/pi";
import { PiCalendar } from "react-icons/pi";
import { PiSticker } from "react-icons/pi";
import { iconSize } from "../../sections/HeaderNavBar";
import Link from "next/link";

const ProfitSimulators = () => {
  const progressScript = (event) => {
    const sliderEl = document.querySelector("#range");
    const sliderValue = document.querySelector("#value");

    const tempSliderValue = event.target.value;
    sliderValue.value = tempSliderValue;

    const progress = (tempSliderValue / sliderEl.max) * 100;

    sliderEl.style.background = `linear-gradient(to right, #f00 ${progress}%, #ccc ${progress}%)`;
  };
  return (
    <div>
      <div>
        <p className="text-lg font-bold py-4">Profit Simulators</p>
        <div>
          <label htmlFor="booklet" className="block py-4">
            Select the amount to invest:
          </label>
          <div className="flex items-center gap-4">
            <div className="border-2 rounded px-4 py-2">
              <select
                name="booklet"
                id="booklet"
                className="w-full outline-none "
              >
                <option value="HSCB Free Booklet">HSCB Free Booklet</option>
              </select>
            </div>
            <div className="flex items-center justify-between gap-2 outline-none border-2 rounded px-4 py-2">
              <input
                type="number"
                id="value"
                className="w-full outline-none"
                defaultValue={2000}
              />
              <PiCurrencyDollarFill
                style={{ width: "20px", height: "20px" }}
                className="text-[#FF0000]"
              />
            </div>
          </div>
          <div className="range">
            <input
              type="range"
              onInput={progressScript}
              min="0"
              max="20000"
              defaultValue="2000"
              id="range"
            />
          </div>
        </div>
        <div>
          <p>
            <span>Attention!</span>
            Your funds are insufficient to invest.
          </p>
        </div>
        <div>
          <p>Number of available spaces: 12</p>
        </div>
        <div className="w-full p-2 bg-[#39DE5D] flex items-center justify-center rounded-lg hover:bg-[#39DE5DAA]">
          <Link
            href={"investments/saving-fund-investment"}
            className="w-full flex items-center justify-center gap-2"
          >
            <PiNewspaperClipping style={iconSize} />
            <span className="font-bold">Learn More</span>
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-1 border p-4 rounded-lg">
          <div>
            <p className="text-xs text-[#595959] font-bold flex items-center gap-1">
              <PiWallet style={iconSize} />
              Already Invest
            </p>
            <p className="text-lg py-2 text-[#39DE5D] font-bold">$456.237</p>
          </div>
          <div>
            <p className="text-xs text-[#595959] font-bold flex items-center gap-1">
              <PiCalendar style={iconSize} />
              Term Of Loan
            </p>
            <p className="text-lg py-2 text-[#39DE5D] font-bold">$456.237</p>
          </div>
          <div>
            <p className="text-xs text-[#595959] font-bold flex items-center gap-1">
              <PiSticker style={iconSize} />
              Minimum Entry Ticket
            </p>
            <p className="text-lg py-2 text-[#39DE5D] font-bold">$456.237</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfitSimulators;
