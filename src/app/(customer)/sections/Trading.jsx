"use client";

import React, { useState } from "react";
import { PiArrowLeft, PiArrowRight } from "react-icons/pi";
import { iconSize } from "./HeaderNavBar";
import { PiRadical } from "react-icons/pi";
import { PiArrowUpRight } from "react-icons/pi";
import CircleProgress from "../components/CircleProgress";
import LineChart from "../components/LineChart";
import LatestTransactions from "../components/LatestTransactions";
import { PiUsers } from "react-icons/pi";

const gridLayout = {
  display: "grid",
  gridTemplateColumns: "20% auto 25%",
  gap: "32px",
};
const gridLayout2 = {
  display: "grid",
  gridTemplateColumns: "auto 33%",
  gap: "32px",
};

const tradings = [
  {
    title: "Today",
    value: "$16",
  },
  {
    title: "Yesterday",
    value: "$12",
  },
  {
    title: "7 days",
    value: "$1.62",
  },
  {
    title: "30 days",
    value: "$1.62",
  },
  {
    title: "3 months",
    value: "$1.62",
  },
];

const Trading = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleSlide = (value) => {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    let n = slideIndex + value;
    if (n >= slides.length) {
      n = 0;
      setSlideIndex(n);
    }
    if (n < slides.length) {
      setSlideIndex(n);
    }
    if (n < 0) {
      n = slides.length - 1;
      setSlideIndex(n);
    }
    slides[n].style.display = "block";
    console.log(n);
  };
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <PiRadical style={iconSize} />
          <h3 className="text-2xl font-bold pt-2">Trading</h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => handleSlide(-1)}
            className="p-1 border-2 border-black w-max"
          >
            <PiArrowLeft style={iconSize} />
          </button>
          <button
            type="button"
            onClick={() => handleSlide(1)}
            className="p-1 border-2 border-black w-max"
          >
            <PiArrowRight style={iconSize} />
          </button>
        </div>
      </div>
      <div className="bg-white flex items-center justify-evenly gap-4 rounded-2xl shadow-lg p-8 my-10">
        <p className="p-2 font-bold text-2xl">Trading</p>
        {tradings.map((trade, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center gap-4"
          >
            <div className="flex items-center gap-1 justify-center bg-[#E8F5E7] p-2 text-[#439F3F] rounded-full">
              <p>{trade.title}</p>
              <PiArrowUpRight style={iconSize} />
            </div>
            <p className="text-2xl font-medium">{trade.value}</p>
          </div>
        ))}
      </div>
      <div className="slide" style={{ display: "none" }}>
        <div style={gridLayout} className="my-10">
          <CircleProgress />
          <LineChart />
          <LatestTransactions />
        </div>
      </div>
      <div className="slide" style={{ display: "block" }}>
        <div style={gridLayout2} className="my-10">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <p>Evolution Of Interests</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <p className="text-lg text-center font-bold">
              Financial Investments
            </p>
            <div className="flex items-center justify-center h-96">
              <div className="flex flex-col items-center justify-center gap-4">
                <PiUsers style={iconSize} className="text-red-600" />
                <p>View All Interest Recived in Real Time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trading;
