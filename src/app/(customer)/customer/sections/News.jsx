import React from "react";
import { PiNewspaper } from "react-icons/pi";
import { iconSize } from "./HeaderNavBar";
import { PiShieldCheck } from "react-icons/pi";
import { PiArrowUp } from "react-icons/pi";
import { FaRegCircleCheck } from "react-icons/fa6";
import Image from "next/image";

const gridLayout = {
  display: "grid",
  gridTemplateColumns: "33% auto",
  gap: "16px",
};

const News = () => {
  return (
    <div className="my-10">
      <div className="py-8 flex items-center gap-4">
        <PiNewspaper style={iconSize} />
        <h3 className="text-2xl font-bold pt-2">The News For You!</h3>
      </div>
      <div className="bg-white rounded-2xl p-8">
        <div style={gridLayout}>
          <div className="flex items-center gap-4 p-2 bg-[#00FF1F] text-white rounded-lg">
            <PiShieldCheck style={{ width: "64px", height: "64px" }} />
            <div>
              <p className="font-bold text-lg">100% Guaranteed Capital</p>
              <p>Ultra save & Zero Risk</p>
            </div>
          </div>
          <div className="flex items-center gap-4 px-20 py-2 border text-[#FF002E] border-[#FF002E] font-bold rounded-lg">
            <p>
              Take Advantage of the latest generation of high-performance,
              secure and high value-added invesment
            </p>
          </div>
        </div>
        <div className="my-4 p-10 rounded-lg border grid grid-cols-2 gap-10">
          <div>
            <p className="text-4xl text-center font-bold">
              PARKING - BERLIN - VINCI
            </p>
            <div className="rounded mt-4 px-4 py-2 bg-[#DFFDDDB0] flex items-center justify-between gap-4">
              <p className="text-black">Guarranteed Performance</p>
              <p className="text-[#00FF1F] flex items-center gap-1">
                69% <PiArrowUp style={iconSize} />
              </p>
            </div>
            <p className="text-[#6E6E6E] font-bold my-8">
              VINCI Park has just acquired the company NETPARK GnbH, Based in
              Hildsheim which manages more than 12.000 parking spaces and 25 car
              parks, mainly in lower saxony and north rhine-westphalia
            </p>
            <div className="px-8 py-4 rounded-2xl bg-[#FF002E] text-white grid grid-cols-4 gap-4">
              <div className="flex flex-col items-center gap-2">
                <p className="flex items-center gap-1">
                  <FaRegCircleCheck style={{ width: "20px", height: "20px" }} />
                  <span className="text-[8px]">Infest Rates:</span>
                </p>
                <span className="font-bold text-lg">1.1%</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <p className="flex items-center gap-1">
                  <FaRegCircleCheck style={{ width: "20px", height: "20px" }} />
                  <span className="text-[8px]">Period:</span>
                </p>
                <span className="font-bold text-lg">Quarterly</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <p className="flex items-center gap-1">
                  <FaRegCircleCheck style={{ width: "20px", height: "20px" }} />
                  <span className="text-[8px]">Duration:</span>
                </p>
                <span className="font-bold text-lg">12 Months</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <p className="flex items-center gap-1">
                  <FaRegCircleCheck style={{ width: "20px", height: "20px" }} />
                  <span className="text-[8px]">Amount per share:</span>
                </p>
                <span className="font-bold text-lg">$112.120</span>
              </div>
            </div>
            <div className="w-full my-4 p-4 border border-[#7FFF00] flex items-center justify-center rounded-lg hover:bg-[#7FFF00AA]">
              <button
                type="button"
                className="w-full flex items-center justify-center gap-2"
              >
                <PiNewspaper style={iconSize} />
                <span className="font-bold">Learn More</span>
              </button>
            </div>
          </div>
          <div>
            <div className="relative h-[402px]">
              <Image
                src={"/assets/news.png"}
                alt="advantage 1"
                quality={100}
                fill
                sizes="100vw"
                className="object-cover"
              />
              <p className="absolute top-10 right-0 bg-[#FF002E] text-white font-bold px-8 py-2 rounded-tl-full">STILL 1425 AVAILABLE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
