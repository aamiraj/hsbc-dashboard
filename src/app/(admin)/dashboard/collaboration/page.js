"use client";

import Searchbox from "../../../../components/Searchbox/Searchbox";
import Selectbox from "../../../../components/Selectbox/Selectbox";
import Image from "next/image";
import React from "react";
import { FaTrash } from "react-icons/fa";
import { TfiAngleDown } from "react-icons/tfi";
import { optionListNumbers } from "../options/optionList";
import AddUserPopUp from "./sections/AddUserPopUp"; 

const theads = [
  "First Name and Surname",
  "Status",
  "Team Lead",
  "Client",
  "Trash",
];

const clients = [
  {
    details: {
      displayName: "Berthier Laurent ",
      profilePic: "/assets/dummyPic.png",
      id: "113",
    },
    status: [
      {
        day: "Monday",
        firstShift: "Morning 9:00 a.m. - 1:00 p.m. ",
        secondShift: "Afternoon 2:00 p.m. - 6:00 p.m.",
      },
      {
        day: "Tuesday",
        firstShift: "Morning 9:00 a.m. - 1:00 p.m. ",
        secondShift: "Afternoon 2:00 p.m. - 6:00 p.m.",
      },
    ],
    teamLead: "Manager",
    price: "€1,088.83",
  },
  {
    details: {
      displayName: "Berthier Laurent ",
      profilePic: "/assets/dummyPic.png",
      id: "113",
    },
    status: [
      {
        day: "Monday",
        firstShift: "Morning 9:00 a.m. - 1:00 p.m. ",
        secondShift: "Afternoon 2:00 p.m. - 6:00 p.m.",
      },
      {
        day: "Tuesday",
        firstShift: "Morning 9:00 a.m. - 1:00 p.m. ",
        secondShift: "Afternoon 2:00 p.m. - 6:00 p.m.",
      },
    ],
    teamLead: "Manager",
    price: "€1,088.83",
  },
  {
    details: {
      displayName: "Berthier Laurent ",
      profilePic: "/assets/dummyPic.png",
      id: "113",
    },
    status: [
      {
        day: "Monday",
        firstShift: "Morning 9:00 a.m. - 1:00 p.m. ",
        secondShift: "Afternoon 2:00 p.m. - 6:00 p.m.",
      },
      {
        day: "Tuesday",
        firstShift: "Morning 9:00 a.m. - 1:00 p.m. ",
        secondShift: "Afternoon 2:00 p.m. - 6:00 p.m.",
      },
    ],
    teamLead: "Manager",
    price: "€1,088.83",
  },
  {
    details: {
      displayName: "Berthier Laurent ",
      profilePic: "/assets/dummyPic.png",
      id: "113",
    },
    status: [
      {
        day: "Monday",
        firstShift: "Morning 9:00 a.m. - 1:00 p.m. ",
        secondShift: "Afternoon 2:00 p.m. - 6:00 p.m.",
      },
      {
        day: "Tuesday",
        firstShift: "Morning 9:00 a.m. - 1:00 p.m. ",
        secondShift: "Afternoon 2:00 p.m. - 6:00 p.m.",
      },
    ],
    teamLead: "Manager",
    price: "€1,088.83",
  },
];

const Collaboration = () => {
  const handleOpenPopUp = () => {
    const addUserPopUp = document.getElementById("addUserPopUp");
    addUserPopUp.style.display = "block";
  };
  return (
    <div className="p-8">
      <div className="p-8 bg-white rounded-lg">
        {/* top select and search options  */}
        <div className="flex justify-between items-center gap-4 py-4">
          <div className="flex items-center gap-4 py-4">
            <div className="text-xs font-semibold px-4 flex items-center gap-2 rounded-full border-2">
              <p>
                Assign to
                <br />
                Better Paul (Manager)
              </p>
              <TfiAngleDown style={{ width: "20px", height: "20px" }} />
            </div>
            <div>
              <button
                type="button"
                className="font-bold px-8 py-2 bg-[#39DE5D] rounded-full"
                onClick={handleOpenPopUp}
              >
                Validate
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Searchbox />
            <Selectbox optionList={optionListNumbers} defaultOption={""} />
          </div>
        </div>
        {/* table of clients  */}
        <div>
          <table className="w-[95%] mx-auto">
            <thead>
              <tr className="border-b py-2">
                {theads.map((text, i) => (
                  <th key={i} className="th">
                    <div className="flex justify-center items-center gap-2">
                      <p className="text-center">{text}</p>
                      <span className="rotate-90 text-center text-[10px]">
                        {"<>"}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-xs">
              {clients.map((client, i) => (
                <tr key={i} className="border-b">
                  <td className="td font-bold">
                    <div className="flex justify-center items-center gap-4">
                      <Image
                        src={client.details.profilePic}
                        alt="profile pic"
                        width={32}
                        height={32}
                      />
                      <p>
                        {client.details.displayName}
                        {`(ID: ${client.details.id})`}
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="italic flex justify-center items-center gap-2">
                      {client.status.map((s, i) => (
                        <div key={i}>
                          <p>{s.day}</p>
                          <p>{s.firstShift}</p>
                          <p>{s.secondShift}</p>
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="td font-bold">{client.teamLead}</td>
                  <td className="td font-bold">{client.price}</td>
                  <td>
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
      <div id="addUserPopUp" style={{ display: "none" }}>
        <AddUserPopUp />
      </div>
    </div>
  );
};

export default Collaboration;
