"use client";

import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import TextInput from "../../client-prospect/components/TextInput/TextInput";
import PhotoInput from "../../client-prospect/components/PhotoInput/PhotoInput";
import Link from "next/link";

const workTime = [
  {
    day: "Monday",
    firstShift: "09:00-13:00",
    secondShift: "14:00-18:00",
  },
  {
    day: "Tuesday",
    firstShift: "09:00-13:00",
    secondShift: "14:00-18:00",
  },
  {
    day: "Wednesday",
    firstShift: "09:00-13:00",
    secondShift: "14:00-18:00",
  },
  {
    day: "Thursday",
    firstShift: "09:00-13:00",
    secondShift: "14:00-18:00",
  },
  {
    day: "Friday",
    firstShift: "09:00-13:00",
    secondShift: "14:00-18:00",
  },
  {
    day: "Satureday",
    firstShift: "-",
    secondShift: "-",
  },
  {
    day: "Sunday",
    firstShift: "-",
    secondShift: "-",
  },
];

const status = [
  "Supervisor",
  "Manager",
  "Team Lead",
  "Seller",
  "Technician",
  "Translator",
  "Web Site Generator",
];

const AddUserPopUp = ({ id, user }) => {
  const [inputs, setInputs] = useState(null);
  const [workDays, setWorkDays] = useState(null);
  const [photo, setPhoto] = useState(null);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoUpload = (e) => {
    setPhoto(e.target.value[0]);
    // then do the uploading
  };

  const handleWorkDays = (e, day) => {
    const workday = { [day]: { [e.target.name]: e.target.value } };
    console.log(workday);
    setWorkDays((prev) => ({ ...prev, workday }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/api/data/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ ...inputs }),
    })
      .then((res) => {
        if (res.ok) {
          alert("User Added Successfully.");
        }
      })
      .catch((error) => alert("Failed to create user.", error));
    // console.log({ ...inputs, ...workDays });
  };

  const handleClose = (id) => {
    const modal = document.getElementById(id);
    modal.style.display = "none";
  };

  return (
    <div>
      <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-black opacity-50 z-10"></div>
      <div className="w-1/2 mx-auto h-max p-12 bg-white rounded-3xl absolute top-8 left-0 right-0 bottom-0 z-20">
        <div className="relative">
          <button
            type="button"
            onClick={() => handleClose(id)}
            className="absolute top-4 right-4"
          >
            <RxCross1 width={32} height={32} color="#FF0000" />
          </button>
        </div>
        {!user && <h2 className="text-center text-4xl py-4">Add User</h2>}
        {user && <h2 className="text-center text-4xl py-4">User Details</h2>}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <TextInput
              id={"surname"}
              label={"Surname"}
              type={"text"}
              placeholder={""}
              value={user?.surname}
              handleChange={handleChange}
            />
            <TextInput
              id={"firstname"}
              label={"First Name"}
              type={"text"}
              placeholder={""}
              value={user?.firstname}
              handleChange={handleChange}
            />
            <TextInput
              id={"ipAddress"}
              label={"Access allowed from IP Adress"}
              type={"text"}
              placeholder={""}
              value={user?.ipAddress}
              handleChange={handleChange}
            />
            <div className="w-full my-2">
              <label htmlFor="status" className="text-lg">
                Status
              </label>
              <select
                name="status"
                id="status"
                defaultValue={user?.status}
                onChange={handleChange}
                className="text-[#0d0d0d] border-b w-full py-2 my-2 outline-none focus:outline-none"
              >
                <option value="">Select status</option>
                {status.map((s, i) => (
                  <option key={i} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <TextInput
              id={"email"}
              label={"Email (Login Id)"}
              type={"email"}
              placeholder={""}
              value={user?.email}
              handleChange={handleChange}
            />
            <TextInput
              id={"birthdate"}
              label={"Birth Date"}
              placeholder={"dd/mm/yyyy"}
              type={"date"}
              value={user?.birthdate}
              handleChange={handleChange}
            />
            <TextInput
              id={"newPassword"}
              label={"New Password"}
              type={"password"}
              placeholder={""}
              value={user?.newPassword}
              handleChange={handleChange}
            />
            <TextInput
              id={"mainAddress"}
              label={"Main Address"}
              type={"text"}
              placeholder={""}
              value={user?.mainAddress}
              handleChange={handleChange}
            />
            <TextInput
              id={"repeatPassword"}
              label={"Repeat The New Password"}
              type={"password"}
              placeholder={""}
              value={user?.repeatPassword}
              handleChange={handleChange}
            />
            <TextInput
              id={"phone"}
              label={"Phone"}
              type={"phone"}
              placeholder={""}
              value={user?.phone}
              handleChange={handleChange}
            />
          </div>
          <div>
            <PhotoInput
              id={"photo"}
              label={"Photo"}
              handlePhoto={handlePhotoUpload}
            />
          </div>
          <div className="bg-[#39DE5D] text-white rounded-2xl p-10 my-4">
            <h4 className="text-lg text-center font-bold py-2">Work Time</h4>
            <p className="py-2 mb-4 text-xs text-center">
              Start filling from Monday to add the same working time for all
              days at once
            </p>
            <div className="w-[67%] mx-auto flex flex-col gap-4">
              {user?.workdays
                ? Object.entries(user?.workdays).map(([day, time], i) => {
                    return (
                      <div key={i} className="grid grid-cols-3 gap-2">
                        <p className="uppercase">{day}</p>
                        <input
                          type="text"
                          name="firstShift"
                          onChange={(e) => handleWorkDays(e, day)}
                          className="bg-[#39DE5D] text-white rounded-md text-center px-2 py-0.5 border border-white outline-none focus:outline-none"
                          defaultValue={time?.firstShift}
                        />
                        <input
                          type="text"
                          name="secondShift"
                          onChange={(e) => handleWorkDays(e, day)}
                          className="bg-[#39DE5D] text-white rounded-md text-center px-2 py-0.5 border border-white outline-none focus:outline-none"
                          defaultValue={time?.secondShift}
                        />
                      </div>
                    );
                  })
                : workTime.map((time, i) => {
                    const day = time.day.toLowerCase();
                    return (
                      <div key={i} className="grid grid-cols-3 gap-2">
                        <p>{time.day}</p>
                        <input
                          type="text"
                          name="firstShift"
                          onChange={(e) => handleWorkDays(e, day)}
                          className="bg-[#39DE5D] text-white rounded-md text-center px-2 py-0.5 border border-white outline-none focus:outline-none"
                          defaultValue={time.firstShift}
                        />
                        <input
                          type="text"
                          name="secondShift"
                          onChange={(e) => handleWorkDays(e, day)}
                          className="bg-[#39DE5D] text-white rounded-md text-center px-2 py-0.5 border border-white outline-none focus:outline-none"
                          defaultValue={time.secondShift}
                        />
                      </div>
                    );
                  })}
            </div>
          </div>
          <div className="border-2 border-[#0F993E] rounded-2xl p-10 my-4">
            <h2 className="text-2xl text-center py-4">
              Authorize access to the website
            </h2>
            <p className="text-center py-4">
              By default, visitors do not see the website. Click the button
              above to send a customer a welcome message with an encrypted link
              to view the website.
            </p>
            <div className="flex items-center gap-4 justify-center py-4">
              <Link
                href={"/#"}
                className="text-center px-6 py-4 rounded-2xl bg-[#39DE5D] text-white"
              >
                Get an encrypted link to navigate the site
              </Link>
              <Link
                href={"/#"}
                className="text-center px-6 py-4 rounded-2xl border-2 border-[#0F993E] text-black"
              >
                Send a welcome link to view the website
              </Link>
            </div>
          </div>
          <div>
            <p>
              The Restricted Access button to enable/disable user access rules.
              The Allow Access button allows the user to log in from a new
              device or web browser. To allow the user to log in from a new
              browser or device, they must enable restricted access. The user at
              this time should be logged out. Once the user logs in, they will
              only be able to log in from one device and one browser.
            </p>
            <div className="flex items-center gap-4 justify-center py-4">
              <button
                type="submit"
                className="px-8 py-2 rounded-lg bg-[#39DE5D] text-white"
              >
                Add
              </button>
              <button
                type="button"
                className="px-8 py-2 rounded-lg bg-black text-white"
              >
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUserPopUp;
