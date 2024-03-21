"use client";

import React from "react";
import Image from "next/image";
import { FaTrash } from "react-icons/fa";
import AddUserPopUp from "./AddUserPopUp";

const theads = [
  "First Name and Surname",
  "Work Week",
  "Status",
  "Client",
  "Trash",
];

const users = [
  {
    firstname: "Berthier",
    surname: "Laurent",
    id: "113",
    client: "4",
    profilePic: "/assets/dummyPic.png",
    ipAddress: "",
    status: "Manager",
    email: "berthier@hsvc.com",
    birthdate: "07/02/85",
    newPassword: "",
    mainAddress: "",
    repeatPassword: "",
    phone: "000 0000 0000",
    workdays: {
      monday: { firstShift: "09:00-13:00", secondShift: "14:00-18:00" },
      tuesday: { firstShift: "09:00-13:00", secondShift: "14:00-18:00" },
      wednesday: { firstShift: "09:00-13:00", secondShift: "14:00-18:00" },
      thursday: { firstShift: "09:00-13:00", secondShift: "14:00-18:00" },
      friday: { firstShift: "", secondShift: "" },
      satureday: { firstShift: "", secondShift: "" },
      sunday: { firstShift: "09:00-13:00", secondShift: "14:00-18:00" },
    },
  },
  {
    firstname: "Berthier",
    surname: "Laurent",
    id: "113",
    client: "4",
    profilePic: "/assets/dummyPic.png",
    ipAddress: "",
    status: "Manager",
    email: "berthier@hsvc.com",
    birthdate: "07/02/85",
    newPassword: "",
    mainAddress: "",
    repeatPassword: "",
    phone: "000 0000 0000",
    workdays: {
      monday: { firstShift: "09:00-13:00", secondShift: "14:00-18:00" },
      tuesday: { firstShift: "09:00-13:00", secondShift: "14:00-18:00" },
      wednesday: { firstShift: "09:00-13:00", secondShift: "14:00-18:00" },
      thursday: { firstShift: "09:00-13:00", secondShift: "14:00-18:00" },
      friday: { firstShift: "", secondShift: "" },
      satureday: { firstShift: "", secondShift: "" },
      sunday: { firstShift: "09:00-13:00", secondShift: "14:00-18:00" },
    },
  },
  {
    firstname: "Berthier",
    surname: "Laurent",
    id: "113",
    client: "4",
    profilePic: "/assets/dummyPic.png",
    ipAddress: "",
    status: "Manager",
    email: "berthier@hsvc.com",
    birthdate: "07/02/85",
    newPassword: "",
    mainAddress: "",
    repeatPassword: "",
    phone: "000 0000 0000",
    workdays: {
      monday: { firstShift: "09:00-13:00", secondShift: "14:00-18:00" },
      tuesday: { firstShift: "09:00-13:00", secondShift: "14:00-18:00" },
      wednesday: { firstShift: "09:00-13:00", secondShift: "14:00-18:00" },
      thursday: { firstShift: "09:00-13:00", secondShift: "14:00-18:00" },
      friday: { firstShift: "", secondShift: "" },
      satureday: { firstShift: "", secondShift: "" },
      sunday: { firstShift: "09:00-13:00", secondShift: "14:00-18:00" },
    },
  },
];

const UserTable = () => {
  const handleOpen = (id) => {
    const modal = document.getElementById(id);
    modal.style.display = "block";
  };

  return (
    <table className="w-[95%] mx-auto">
      <thead>
        <tr className="border-b py-2">
          {theads.map((text, i) => (
            <th key={i}>
              <div className="text-[10px] py-4 flex justify-center items-center gap-2">
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
        {users.map((user, i) => (
          <React.Fragment key={i}>
            <tr
              key={i}
              className="cursor-pointer hover:bg-slate-100/50 border-b"
              onClick={() => handleOpen(`addUserPopUp-${i + 1}`)}
            >
              <td className=" font-bold">
                <div className="py-4 flex justify-center items-center gap-4">
                  <Image
                    src={user?.profilePic}
                    alt="profile pic"
                    width={32}
                    height={32}
                  />
                  <p>
                    {`${user?.firstname} ${user?.surname}`}
                    {`(ID: ${user?.id})`}
                  </p>
                </div>
              </td>
              <td>
                <div className="italic grid grid-cols-3 gap-2 items-center justify-center">
                  {Object.entries(user?.workdays).map(([day, time], i) => {
                    if (time?.firstShift && time?.secondShift) {
                      return (
                        <div
                          key={i}
                          className="flex flex-col items-start justify-start"
                        >
                          <p className="uppercase">{day}</p>
                          <p>{time?.firstShift}</p>
                          <p>{time?.secondShift}</p>
                        </div>
                      );
                    }
                  })}
                </div>
              </td>
              <td className="text-center font-bold">{user?.status}</td>
              <td className="text-center font-bold">{user?.client}</td>
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
            <tr id={`addUserPopUp-${i + 1}`} style={{ display: "none" }}>
              <td>
                <AddUserPopUp id={`addUserPopUp-${i + 1}`} user={user} />
              </td>
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
