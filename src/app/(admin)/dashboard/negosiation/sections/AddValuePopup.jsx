"use client"

import React from "react";
import TextInput from "../../client-prospect/components/TextInput/TextInput";
import { PiShieldStar } from "react-icons/pi";
import { PiArrowFatLineUpBold } from "react-icons/pi";
import { RxCross1 } from "react-icons/rx";

const AddValuePopup = () => {
    const handleClosePopUp = () => {
        const popUp = document.getElementById("addValuePopUp");
        popUp.style.display = "none";
      };

  return (
    <div>
      <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-black opacity-50 z-10"></div>
      <div className="w-1/2 mx-auto h-max p-12 bg-white rounded-3xl absolute top-32 left-0 right-0 bottom-0 z-20">
        <button type="button" className="text-right" onClick={handleClosePopUp}>
          <RxCross1 />
        </button>
        <h2 className="text-4xl">Add a Value And Set Prefrences</h2>
        <TextInput id={"name"} label={"Name"} />
        <p className="text-xl font-semibold">Insert Lower and Upper Bound</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <PiShieldStar
              style={{ width: "32px", height: "32px", color: "#A5A5AC" }}
            />
            <TextInput id={"lower"} label={""} placeholder={"%"} />
          </div>
          <div className="flex items-center gap-3">
            <PiArrowFatLineUpBold
              style={{ width: "32px", height: "32px", color: "#A5A5AC" }}
            />
            <TextInput id={"lower"} label={""} placeholder={"%"} />
          </div>
        </div>
        <p className="text-xl font-semibold">Time Interval Between Percents</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <PiShieldStar
              style={{ width: "32px", height: "32px", color: "#A5A5AC" }}
            />
            <TextInput id={"lower"} label={""} placeholder={"%"} />
          </div>
          <div className="flex items-center gap-3">
            <PiArrowFatLineUpBold
              style={{ width: "32px", height: "32px", color: "#A5A5AC" }}
            />
            <TextInput id={"lower"} label={""} placeholder={"%"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddValuePopup;
