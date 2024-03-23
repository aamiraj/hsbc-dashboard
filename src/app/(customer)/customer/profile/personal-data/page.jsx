"use client";

import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { PiUser } from "react-icons/pi";
import { PiEnvelopeSimple } from "react-icons/pi";
import { PiPhoneOutgoing } from "react-icons/pi";
import { SlLocationPin } from "react-icons/sl";
import { PiCalendar } from "react-icons/pi";
import { PiPencilSimple } from "react-icons/pi";
import { PiX } from "react-icons/pi";
import { PiEyeSlash } from "react-icons/pi";

const PersonalData = () => {
  const [client, setClient] = useState(null);
  const [inputs, setInputs] = useState(null);
  const [loading, setLoading] = useState(false);
  const { data } = useSession();
  const email = data?.user?.email;

  // console.log(client);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(inputs);

    setLoading(true);
    fetch("/api/data/client", {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(inputs),
    })
      .then((res) => {
        if (!res.ok) alert("Failed to update.");
        return res.json();
      })
      .then(({ data }) => setClient(data))
      .catch((error) => console.log(error))
      .finally(setLoading(false));
  };

  useEffect(() => {
    if (!email) return;
    setLoading(true);
    fetch(`/api/data/client?email=${email}`)
      .then((res) => res.json())
      .then(({ data }) => {
        setClient(data);
        setInputs(data);
      })
      .catch((error) => console.log(error))
      .finally(setLoading(false));
  }, [email]);

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p className="text-center text-2xl text-red-500/50">Loading...</p>
      </div>
    );
  }

  return (
    <div className="pl-10">
      <form
        onSubmit={handleSubmit}
        className="w-[750px] h-[700px] border border-[#97979A] rounded-xl"
      >
        <h1 className="text-[24px] font-bold text-center pt-5">
          Identity & Contact
        </h1>
        <div className="px-8 py-7 grid grid-cols-2 gap-x-12">
          <div>
            <h1 className="mb-1 text-[#595959] text-[16px] font-medium">
              Name
            </h1>
            <div className="relative">
              <input
                type="text"
                name="fullname"
                id="fullname"
                className="border-b border-[#97979A] w-full pl-6 outline-none"
                placeholder="Type Here..."
                defaultValue={client?.fullname}
                onChange={handleChange}
              />

              <PiUser
                style={{ width: 16, height: 16, color: "#878790" }}
                className="absolute top-[2px] left-[2px]"
              />
            </div>
          </div>
          <div>
            <h1 className="mb-1 text-[#595959] text-[16px] font-medium">
              First Name
            </h1>
            <div className="relative">
              <input
                type="text"
                name="fullname"
                id="fullname"
                className="border-b border-[#97979A] w-full pl-6 outline-none"
                placeholder="Type Here..."
                defaultValue={client?.fullname}
                onChange={handleChange}
              />

              <PiUser
                style={{ width: 16, height: 16, color: "#878790" }}
                className="absolute top-[2px] left-[2px]"
              />
            </div>
          </div>
        </div>
        <div className="px-8 pb-7 grid grid-cols-2 gap-x-12">
          <div>
            <h1 className="mb-1 text-[#595959] text-[16px] font-medium">
              Email
            </h1>
            <div className="relative">
              <input
                type="text"
                name="email"
                id="email"
                className="border-b border-[#97979A] w-full pl-6 outline-none"
                placeholder="Type Here..."
                value={client?.email}
                readOnly
              />

              <PiEnvelopeSimple
                style={{ width: 16, height: 16, color: "#878790" }}
                className="absolute top-[2px] left-[2px]"
              />
            </div>
          </div>
          <div>
            <h1 className="mb-1 text-[#595959] text-[16px] font-medium">
              Other Email
            </h1>
            <div className="relative">
              <input
                type="text"
                name="otherEmail"
                id="otherEmail"
                className="border-b border-[#97979A] w-full pl-6 outline-none"
                placeholder="Type Here..."
                defaultValue={client?.otherEmail}
                onChange={handleChange}
              />

              <PiEnvelopeSimple
                style={{ width: 16, height: 16, color: "#878790" }}
                className="absolute top-[2px] left-[2px]"
              />
            </div>
          </div>
        </div>
        <div className="px-8 pb-7 grid grid-cols-2 gap-x-12">
          <div>
            <h1 className="mb-1 text-[#595959] text-[16px] font-medium">
              Phone
            </h1>
            <div className="relative">
              <input
                type="text"
                name="phone"
                id="phone"
                className="border-b border-[#97979A] w-full pl-6 outline-none"
                placeholder="Type Here..."
                defaultValue={client?.phone}
                onChange={handleChange}
                required
              />

              <PiPhoneOutgoing
                style={{ width: 16, height: 16, color: "#878790" }}
                className="absolute top-[2px] left-[2px]"
              />
            </div>
          </div>
          <div>
            <h1 className="mb-1 text-[#595959] text-[16px] font-medium">
              Additional Phone 1
            </h1>
            <div className="relative">
              <input
                type="text"
                name="additionalPhone1"
                id="additionalPhone1"
                className="border-b border-[#97979A] w-full pl-6 outline-none"
                placeholder="Type Here..."
                defaultValue={client?.additionalPhone1}
                onChange={handleChange}
              />

              <PiPhoneOutgoing
                style={{ width: 16, height: 16, color: "#878790" }}
                className="absolute top-[2px] left-[2px]"
              />
            </div>
          </div>
        </div>
        <div className="px-8 pb-7 grid grid-cols-2 gap-x-12">
          <div>
            <h1 className="mb-1 text-[#595959] text-[16px] font-medium">
              Additional Phone 2
            </h1>
            <div className="relative">
              <input
                type="text"
                name="additionalPhone2"
                id="additionalPhone2"
                className="border-b border-[#97979A] w-full pl-6 outline-none"
                placeholder="Type Here..."
                defaultValue={client?.additionalPhone2}
                onChange={handleChange}
              />

              <PiPhoneOutgoing
                style={{ width: 16, height: 16, color: "#878790" }}
                className="absolute top-[2px] left-[2px]"
              />
            </div>
          </div>
          <div>
            <h1 className="mb-1 text-[#595959] text-[16px] font-medium">
              Address
            </h1>
            <div className="relative">
              <input
                type="text"
                name="address"
                id="address"
                className="border-b border-[#97979A] w-full pl-6 outline-none"
                placeholder="Type Here..."
                defaultValue={client?.address}
                onChange={handleChange}
              />

              <SlLocationPin
                style={{ width: 16, height: 16, color: "#878790" }}
                className="absolute top-[2px] left-[2px]"
              />
            </div>
          </div>
        </div>
        <div className="px-8 pb-7 grid grid-cols-2 gap-x-12">
          <div>
            <h1 className="mb-1 text-[#595959] text-[16px] font-medium">
              Country
            </h1>
            <div className="relative">
              <input
                type="text"
                name="countryFrom"
                id="countryFrom"
                className="border-b border-[#97979A] w-full pl-6 outline-none"
                placeholder="Type Here..."
                defaultValue={client?.countryFrom}
                onChange={handleChange}
              />

              <SlLocationPin
                style={{ width: 16, height: 16, color: "#878790" }}
                className="absolute top-[2px] left-[2px]"
              />
            </div>
          </div>
          <div>
            <h1 className="mb-1 text-[#595959] text-[16px] font-medium">
              City
            </h1>
            <div className="relative">
              <input
                type="text"
                name="city"
                id="city"
                className="border-b border-[#97979A] w-full pl-6 outline-none"
                placeholder="Type Here..."
                defaultValue={client?.city}
                onChange={handleChange}
              />

              <SlLocationPin
                style={{ width: 16, height: 16, color: "#878790" }}
                className="absolute top-[2px] left-[2px]"
              />
            </div>
          </div>
        </div>
        <div className="px-8 pb-7 grid grid-cols-2 gap-x-12">
          <div>
            <h1 className="mb-1 text-[#595959] text-[16px] font-medium">
              Post Code
            </h1>
            <div className="relative">
              <input
                type="text"
                name="postCode"
                id="postCode"
                className="border-b border-[#97979A] w-full pl-6 outline-none"
                placeholder="Type Here..."
                defaultValue={client?.postCode}
                onChange={handleChange}
              />

              <SlLocationPin
                style={{ width: 16, height: 16, color: "#878790" }}
                className="absolute top-[2px] left-[2px]"
              />
            </div>
          </div>
          <div>
            <h1 className="mb-1 text-[#595959] text-[16px] font-medium">
              Birth Day
            </h1>
            <div className="relative">
              <input
                type="date"
                name="birthDay"
                id="birthDay"
                className="border-b border-[#97979A] w-full pl-6 outline-none"
                placeholder="Type Here..."
                defaultValue={new Date(client?.birthDay)}
                onChange={handleChange}
                required
              />

              <PiCalendar
                style={{ width: 16, height: 16, color: "#878790" }}
                className="absolute top-[2px] left-[2px]"
              />
            </div>
          </div>
        </div>
        <div>
          <div className=" flex justify-center gap-x-5 py-8">
            <button
              type="submit"
              className="bg-[#D80027] text-white  rounded-md flex items-center justify-center gap-x-1 w-[200px] h-10"
            >
              <PiPencilSimple
                style={{ width: 16, height: 16, color: "#fff" }}
              />
              Save
            </button>
            <button
              type="button"
              className="bg-white text-black   rounded-md flex justify-center items-center gap-x-1 w-[200px] h-10 border border-[#838A91]"
            >
              <PiX style={{ width: 16, height: 16, color: "#878790" }} />
              Cancel
            </button>
          </div>
        </div>
      </form>

      {/* password change  */}
      <div className="w-[750px] h-[340px] border border-[#97979A] rounded-xl mt-7">
        <h1 className="text-[24px] font-bold text-center pt-5">
          Change Your Password
        </h1>
        <div className="px-8 py-7 grid grid-cols-2 gap-x-12">
          <div>
            <h1 className="mb-1 text-[#595959] text-[16px] font-medium">
              New Password
            </h1>
            <div className="relative">
              <input
                type="text"
                name=""
                id=""
                className="border-b border-[#97979A] w-full outline-none"
                placeholder="Type Here..."
              />

              <PiEyeSlash
                style={{ width: 16, height: 16, color: "#878790" }}
                className="absolute top-[2px] right-[2px]"
              />
            </div>
          </div>
          <div>
            <h1 className="mb-1 text-[#595959] text-[16px] font-medium">
              Repeat the New Password
            </h1>
            <div className="relative">
              <input
                type="text"
                name=""
                id=""
                className="border-b border-[#97979A] w-full   outline-none"
                placeholder="Type Here..."
              />

              <PiEyeSlash
                style={{ width: 16, height: 16, color: "#878790" }}
                className="absolute top-[2px] right-[2px]"
              />
            </div>
          </div>
        </div>
        <div className="px-8   grid grid-cols-2 gap-x-12">
          <div className="flex gap-x-1">
            <input type="checkbox" name="" id="" />
            <h1 className="text-[#595959] text-[16px] font-medium">
              Show The Password
            </h1>
          </div>
          <div className="flex gap-x-1">
            <input type="checkbox" name="" id="" />
            <h1 className="mb-1 text-[#595959] text-[16px] font-medium">
              Show The Password
            </h1>
          </div>
        </div>

        <div className=" flex justify-center gap-x-5 py-8">
          <button className="bg-[#D80027] text-white  rounded-md flex items-center justify-center gap-x-1 w-[200px] h-10">
            <PiPencilSimple style={{ width: 16, height: 16, color: "#fff" }} />
            Edit
          </button>
          <button className="bg-white text-black   rounded-md flex justify-center items-center gap-x-1 w-[200px] h-10 border border-[#838A91]">
            <PiX style={{ width: 16, height: 16, color: "#878790" }} />
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalData;
