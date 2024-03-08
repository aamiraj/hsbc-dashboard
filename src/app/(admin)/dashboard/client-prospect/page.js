"use client";

import Searchbox from "../../../../components/Searchbox/Searchbox";
import NumberStatCard from "./components/NumberStatCard/NumberStatCard";
import Totalstat from "./components/Totalstat/Totalstat";
import { engagements } from "../../../../dummydata/stats";
import React from "react";
import Calendar from "./components/Calendar/Calendar";
import { clients } from "../../../../dummydata/clients";
import Image from "next/image";
import Popups from "./components/Popups/Popups";

const thead = [
  "",
  "First name",
  "Phone",
  "Date",
  "Atribute",
  "Mail",
  "Campaign",
  "Country",
  "Evaluation",
  "Edit",
  "Trash",
  "Options",
];

const EnableButton = () => {
  return (
    <button
      type="button"
      className="bg-[#39DE5D] shadow rounded-lg text-[#FFFFFF] py-2 px-4"
    >
      Enable
    </button>
  );
};

const Client_Prospect = () => {
  const handleOpenPopUp = () => {
    const popUp = document.getElementById("popUpInClientProspect");
    popUp.style.display = "block";
  };
  return (
    <div className="p-8 my-8">
      <div className="grid grid-cols-4 gap-4">
        {engagements.map((e, i) => (
          <NumberStatCard
            key={i}
            title={e.title}
            trendUp={e.trendUp}
            percent={e.percent}
            stat={e.stat}
            context={e.context}
          />
        ))}
      </div>
      <div>
        <Totalstat />
      </div>
      <div className="bg-white rounded-lg p-8 my-8">
        <div>
          <h3 className="text-2xl text-[#39DE5D] font-bold">Data Client's</h3>
          <div className="flex items-center justify-between">
            <form className="flex items-center gap-4 my-4">
              <select
                name="status"
                id="status"
                className="text-[#39DE5D] p-2 border rounded-lg"
              >
                <option value="status">Status</option>
                <option value="status">Name</option>
              </select>
              <Calendar text={"Assign To"} />
              <Calendar text={"Evaluate As"} />
              <Searchbox />
            </form>
            <div className="bg-red-500 p-2 rounded-lg">
              <p className="text-[#FFFFFF]">Filter</p>
            </div>
          </div>
        </div>
        <div className="py-4">
          <table className="table">
            <thead>
              <tr>
                {thead.map((text, i) => (
                  <th key={i} className="th">
                    <div className="flex justify-center items-center gap-2">
                      <p className="text-center">{text}</p>
                      <span className="rotate-90 text-center text-[8px]">
                        {"<>"}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {clients.map((client, i) => (
                <tr key={i}>
                  <td>{i}</td>
                  <td className="td">{client.first_name}</td>
                  <td className="td">{client.phone}</td>
                  <td className="td">{client.date}</td>
                  <td className="td">{client.attribute}</td>
                  <td className="td">{client.mail}</td>
                  <td className="td">{client.campaign}</td>
                  <td className="td">{client.country}</td>
                  <td className="td">
                    {client.evaluationStatus ? (
                      <EnableButton />
                    ) : (
                      <EnableButton />
                    )}
                  </td>
                  <td className="td">
                    <button
                      type="button"
                      className="flex justify-center items-center cursor-pointer "
                      onClick={handleOpenPopUp}
                    >
                      <Image
                        src={"/assets/edit.svg"}
                        alt="Edit button"
                        width={24}
                        height={24}
                        className="hover:shadow-lg"
                      />
                    </button>
                  </td>
                  <td className="td">
                    <div className="flex justify-center items-center">
                      <Image
                        src={"/assets/delete.svg"}
                        alt="Delete button"
                        width={24}
                        height={24}
                      />
                    </div>
                  </td>
                  <td className="td">
                    <div className="flex justify-center items-center">
                      <Image
                        src={"/assets/options.svg"}
                        alt="Options button"
                        width={24}
                        height={24}
                        style={{ height: "24px" }}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center items-center gap-4">
          <p className="text-sm">Page</p>
          <span className="text-[#5D5FEF] text-sm">{"<"}</span>
          <div className="w-6 h-6 bg-[#FF4B26] rounded-full flex justify-center items-center shadow-lg">
            <p className="text-sm text-[#FFFFFF]">2</p>
          </div>
          <span className="text-[#5D5FEF] text-sm">{">"}</span>
          <div className="flex gap-2 items-center border-b border-b-[#5D5FEF]">
            <p className="text-sm">30</p>
            <span className="text-sm rotate-90">{">"}</span>
          </div>
        </div>
      </div>
      {/* Pop up windows  */}
      <div id="popUpInClientProspect" style={{ display: "none" }}>
        <Popups />
      </div>
    </div>
  );
};

export default Client_Prospect;
