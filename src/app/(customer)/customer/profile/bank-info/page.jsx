"use client";

import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { PiEnvelopeSimple } from "react-icons/pi";

const BankInfo = () => {
  const [inputs, setInputs] = useState(null);
  const [loading, setLoading] = useState(false);
  const [clientData, setClientData] = useState(null);
  const [error, setError] = useState(false);
  const { data } = useSession();
  const email = data?.user?.email;

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);
    // console.log(inputs);

    if (inputs.bankName && inputs.iban && inputs.swift) {
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
        .then(({ data }) => setClientData(data))
        .catch((error) => console.log(error))
        .finally(setLoading(false));
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    if (!email) return;
    setLoading(true);
    fetch(`/api/data/client?email=${email}`)
      .then((res) => res.json())
      .then(({ data }) => {
        setClientData(data);
        setInputs(data)
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
    <form
      onSubmit={handleSubmit}
      className="w-[750px] h-[500px] border border-[#97979A] rounded-xl ml-10"
    >
      <h1 className="text-[24px] font-bold text-center pt-5">
        Bank Information
      </h1>

      <div className="px-8 pb-7">
        <div>
          <h1 className="mb-1 text-[#595959] text-[16px] font-medium">
            Name Of Bank{" "}
          </h1>
          <div className="relative">
            <input
              type="text"
              name="bankName"
              id="bankName"
              className="border-b border-[#97979A] w-full pl-6 outline-none"
              placeholder="Type Here..."
              defaultValue={clientData?.bankName}
              onChange={handleChange}
            />

            <PiEnvelopeSimple
              className="absolute top-[2px] left-[2px]"
              style={{ width: 16, height: 16, color: "#878790" }}
            />
          </div>
        </div>
        <div className="my-5">
          <h1 className="mb-1 text-[#595959] text-[16px] font-medium">iBAN</h1>
          <div className="relative">
            <input
              type="text"
              name="iban"
              id="iban"
              className="border-b border-[#97979A] w-full pl-6 outline-none"
              placeholder="Type Here..."
              defaultValue={clientData?.iban}
              onChange={handleChange}
            />

            <PiEnvelopeSimple
              className="absolute top-[2px] left-[2px]"
              style={{ width: 16, height: 16, color: "#878790" }}
            />
          </div>
        </div>
        <div>
          <h1 className="mb-1 text-[#595959] text-[16px] font-medium">
            SWIFT/BIC:
          </h1>
          <div className="relative">
            <input
              type="text"
              name="swift"
              id="swift"
              className="border-b border-[#97979A] w-full pl-6 outline-none"
              placeholder="Type Here..."
              defaultValue={clientData?.swift}
              onChange={handleChange}
            />

            <PiEnvelopeSimple
              className="absolute top-[2px] left-[2px]"
              style={{ width: 16, height: 16, color: "#878790" }}
            />
          </div>
        </div>
      </div>

      <div>
        <div className=" flex justify-center py-8">
          <button
            type="submit"
            className="bg-[#f00] text-white  rounded-md flex items-center justify-center gap-x-1 w-[200px] h-10"
          >
            Save
          </button>
        </div>
      </div>
      {error && (
        <p className="text-center text-red-500">
          Couldn't update info, please check and try again.
        </p>
      )}
    </form>
  );
};

export default BankInfo;
