"use client";

import Searchbox from "@/components/Searchbox/Searchbox";
import Selectbox from "@/components/Selectbox/Selectbox";
import React from "react";
import { optionListNumbers } from "../../options/optionList";
import SwitchInput from "../../client-prospect/components/SwitchInput/SwitchInput";
import { FaTrash } from "react-icons/fa";
import TextInput from "../../client-prospect/components/TextInput/TextInput";
import AddValuePopup from "./AddValuePopup";

const gridLayout = {
  display: "grid",
  gridTemplateColumns: "70% auto",
  gap: "1rem",
};

const cryptocurrencies = [
  {
    name: "Zytara dolla",
    maxPrice: {
      from: "-0.01%",
      to: "-0.01%",
    },
    varInterval: {
      from: "4 sec",
      to: "4 sec",
    },
    active: true,
  },
  {
    name: "Zytara dolla",
    maxPrice: {
      from: "-0.01%",
      to: "-0.01%",
    },
    varInterval: {
      from: "4 sec",
      to: "4 sec",
    },
    active: true,
  },
  {
    name: "Zytara dolla",
    maxPrice: {
      from: "-0.01%",
      to: "-0.01%",
    },
    varInterval: {
      from: "4 sec",
      to: "4 sec",
    },
    active: true,
  },
  {
    name: "Zytara dolla",
    maxPrice: {
      from: "-0.01%",
      to: "-0.01%",
    },
    varInterval: {
      from: "4 sec",
      to: "4 sec",
    },
    active: true,
  },
];

const Cryptocurrencies = () => {
  const handleopenPopUp = () => {
    const popUp = document.getElementById("addValuePopUp");
    popUp.style.display = "block";
  };

  return (
    <div style={gridLayout}>
      <div className="p-8 bg-white rounded-lg">
        {/* left side switch customization  */}
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-lg font-bold py-4">Order in Progress</h1>
          <div className="flex justify-center items-center gap-4">
            <Searchbox withCommand={false} />
            <Selectbox optionList={optionListNumbers} defaultOption={""} />
          </div>
        </div>
        <div>
          <table className="table p-4">
            <thead>
              <tr className="border-b">
                <th className="th">Name</th>
                <th className="th">
                  <div>
                    <p>Maximum Price</p>
                    <div className="flex items-center justify-evenly gap-2">
                      <p>From</p>
                      <p>To</p>
                    </div>
                  </div>
                </th>
                <th className="th">
                  <div>
                    <p>Variation Interval</p>
                    <div className="flex items-center justify-evenly gap-2">
                      <p>From</p>
                      <p>To</p>
                    </div>
                  </div>
                </th>
                <th className="th">Active</th>
                <th className="th">Delete</th>
              </tr>
            </thead>
            <tbody>
              {cryptocurrencies.map((crypto, i) => (
                <tr key={i} className="border-b">
                  <td className="td">{crypto.name}</td>
                  <td className="td">
                    <div className="flex items-center justify-evenly gap-2">
                      <p>{crypto.maxPrice.from}</p>
                      <p>{crypto.maxPrice.to}</p>
                    </div>
                  </td>
                  <td className="td">
                    <div className="flex items-center justify-evenly gap-2">
                      <p>{crypto.varInterval.from}</p>
                      <p>{crypto.varInterval.to}</p>
                    </div>
                  </td>
                  <td className="td">
                    <div className="flex justify-center items-center">
                      <SwitchInput checked={crypto.active} withLabel={false} />
                    </div>
                  </td>
                  <td className="td">
                    <div className="flex justify-center items-center">
                      <button
                        type="button"
                        className="w-8 h-8 rounded-full flex justify-center items-center bg-red-50"
                      >
                        <FaTrash
                          style={{
                            width: "14px",
                            height: "14px",
                            color: "red",
                          }}
                        />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* right side small form  */}
      <div className="p-8 bg-white rounded-lg flex flex-col gap-3">
        <p className="text-center font-bold">ADD TRADING SETTINGS HEADER</p>
        <p className="text-center">My Portofolio / Wallet</p>
        <div className="border-t-2 border-black"></div>
        <p className="text-center font-bold text-[#20DC49]">Cryptocurrencies</p>
        <div className="border-t-2 border-[#20DC49]"></div>
        <p className="text-[#7E7E7E]">
          Period between buying and selling a cryptocurrency at a negotiated
          price in the STOCK EXCHANGE section:
        </p>
        <TextInput id={"minutes"} label={"Minutes"} type={"text"} />
        <TextInput id={"days"} label={"Days"} type={"text"} />
        <TextInput id={"hours"} label={"Hours"} type={"text"} />
        <button
          type="button"
          className="font-bold px-8 py-2 bg-[#39DE5D] rounded-full"
          onClick={handleopenPopUp}
        >
          Validate
        </button>
      </div>
      {/* add a value popup   */}
      <div id="addValuePopUp" style={{ display: "none" }}>
        <AddValuePopup />
      </div>
    </div>
  );
};

export default Cryptocurrencies;
