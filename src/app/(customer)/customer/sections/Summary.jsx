import Image from "next/image";
import React from "react";
import { PiClockAfternoon } from "react-icons/pi";
import { iconSize } from "./HeaderNavBar";

const Summary = () => {
  return (
    <>
      <div className="flex items-center gap-4">
        <PiClockAfternoon style={iconSize} />
        <h3 className="text-2xl font-bold pt-2">Summary</h3>
      </div>
      <div className="bg-white w-full mx-auto p-4 rounded-2xl my-10 grid grid-cols-4 gap-4">
        <div className="relative rounded-2xl shadow-lg ps-8">
          <Image src="/assets/Map.png" alt="Map" width={250} height={175} />
          <div className="absolute top-0 left-0 right-0 bottom-0">
            <p className="absolute top-10 left-8 right-0 bottom-0 text-sm font-bold">
              Total
            </p>

            <p className="absolute left-8 bottom-8 text-2xl font-bold text-[#00FF1F]">
              $1,119.01
            </p>
          </div>
        </div>
        <div className="relative rounded-2xl shadow-lg ps-8">
          <Image src="/assets/Map.png" alt="Map" width={250} height={175} />
          <div className="absolute top-0 left-0 right-0 bottom-0">
            <p className="absolute top-10 left-8 right-0 bottom-0 text-sm font-bold">
              Available
            </p>

            <p className="absolute left-8 bottom-8 text-2xl font-bold text-[#00FF1F]">
              $1,119.01
            </p>
          </div>
        </div>
        <div className="relative rounded-2xl shadow-lg ps-8">
          <Image src="/assets/Map.png" alt="Map" width={250} height={175} />
          <div className="absolute top-0 left-0 right-0 bottom-0">
            <p className="absolute top-10 left-8 right-0 bottom-0 text-sm font-bold">
              Currently
            </p>

            <p className="absolute left-8 bottom-8 text-2xl font-bold text-[#00FF1F]">
              $1,119.01
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center gap-4 rounded-2xl shadow-lg p-8">
          <p className="font-bold text-lg text-[#414D55]">Your Advisor</p>
          <div className="flex items-center justify-center gap-4">
            <Image
              src="/assets/Rectangle.png"
              width={48}
              height={48}
              alt={"dummy pic"}
            />
            <div>
              <p className="text-[#28B5E1] font-semibold">West Jackeline</p>
              <p className="">01.87.66.19.21</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
