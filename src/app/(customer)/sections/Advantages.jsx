import React from "react";
import { PiReceipt } from "react-icons/pi";
import { iconSize } from "./HeaderNavBar";
import { PiArrowUp } from "react-icons/pi";
import Image from "next/image";
import { PiNewspaper } from "react-icons/pi";

const investments = [
  {
    img: "/assets/advantage_1.png",
    title: "Popular Booklet - 6.90% net",
  },
  {
    img: "/assets/advantage_2.png",
    title: "Future Booklet - 3.61% net",
  },
  {
    img: "/assets/advantage_3.png",
    title: "Save Booklet - 5.70% net",
  },
  {
    img: "/assets/advantage_4.png",
    title: "Popular Booklet - 4.48% net",
  },
];

const Advantages = () => {
  return (
    <div>
      <div className="flex items-center gap-4">
        <PiReceipt style={iconSize} />
        <h3 className="text-2xl font-bold pt-2">
          Our Advantageous Investments!
        </h3>
      </div>
      <div className="w-full mx-auto rounded-2xl my-10 grid grid-cols-4 gap-4">
        {investments.map((invest, i) => (
          <div key={i}>
            <div className="relative h-48 rounded-t-2xl">
              <Image
                src={invest.img}
                alt="advantage 1"
                quality={100}
                fill
                sizes="100vw"
                className="object-cover rounded-t-2xl"
              />
              <p className="text-xs absolute top-4 left-3 p-2 rounded-full border border-white text-white">
                12/02/22
              </p>
              <div className="w-full h-[50%] absolute bottom-0 left-0 bg-gradient-to-t from-[#000000FF] to-[#00000000]"></div>
              <div className="absolute bottom-4 left-3 text-white">
                <p className="text-base font-bold">{invest.title}</p>
                <div className="mt-4 px-4 py-1 bg-[#DFFDDDB0] flex items-center justify-between gap-4">
                  <p>Guarranteed Performance</p>
                  <p className="text-[#00FF1F] flex items-center gap-1">
                    69% <PiArrowUp style={iconSize} />
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-white rounded-b-2xl ">
              <div className="grid grid-cols-4 gap-2">
                <div>
                  <p className="text-[8px]">Interest rate: </p>
                  <p className="text-xs font-bold">6.9%</p>
                </div>
                <div>
                  <p className="text-[8px]">Interest period: </p>
                  <p className="text-xs font-bold">Annually</p>
                </div>
                <div>
                  <p className="text-[8px]">Duration: </p>
                  <p className="text-xs font-bold">12 Months</p>
                </div>
                <div>
                  <p className="text-[8px]">Amount per share: </p>
                  <p className="text-xs font-bold">$280.00</p>
                </div>
              </div>
              <p className="my-4 text-xs text-left">
                You want to establish financial security and plan for possible
                future hauls. This fund allows you yo save money will be
                compltely safe and to benefit
              </p>
              <div className="w-full p-2 bg-[#7FFF00] flex items-center justify-center rounded-lg hover:bg-[#7FFF00AA]">
                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-2"
                >
                  <PiNewspaper style={iconSize} />
                  <span className="font-bold">Learn More</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advantages;
