import Image from "next/image";
import React from "react";
import { PiUserCircle } from "react-icons/pi";

const CustomerFollowUp = ({ client }) => {
  return (
    <div>
      <div className="border rounded-lg p-12">
        <div className="flex items-center justify-around gap-4 p-4 bg-black rounded-lg">
          <div className="flex gap-4">
            {client?.image ? (
              <div>
                <Image
                  src={client?.image}
                  width={48}
                  height={48}
                  alt={client?.fullname}
                />
              </div>
            ) : (
              <div>
                <PiUserCircle
                  style={{
                    width: 48,
                    height: 48,
                    backgroundColor: "white",
                    padding: 8,
                    color: "#D0D0D0",
                    borderRadius: "50%",
                  }}
                />
              </div>
            )}
            <div>
              <p className="text-[#B7B7B7]">Customer</p>
              <p className="text-white font-bold">{client?.fullname}</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center">
              <Image
                src={"/assets/PhoneOutgoing.svg"}
                alt="profile pic"
                width={24}
                height={24}
              />
            </div>
            <div>
              <p className="text-[#B7B7B7]">Phone</p>
              <p className="text-white font-bold">{client?.phone}</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center">
              <Image
                src={"/assets/mail.svg"}
                alt="profile pic"
                width={24}
                height={24}
              />
            </div>
            <div>
              <p className="text-[#B7B7B7]">Email</p>
              <p className="text-white font-bold">{client?.email}</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center">
              <Image
                src={"/assets/Link.svg"}
                alt="profile pic"
                width={24}
                height={24}
              />
            </div>
            <div>
              <p className="text-[#B7B7B7]">Campign</p>
              <p className="text-white font-bold">Add by Collaborator</p>
            </div>
          </div>
        </div>

        <div className="my-8">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg border p-10">
              <div className="flex flex-col items-center justify-center gap-4">
                <p className="text-2xl text-center">
                  Authorize access to the website
                </p>
                <p className="text-center">
                  By default, visitors do not see the website. Click the button
                  above to send a customer a welcome message with an encrypted
                  link to view the website.
                </p>
              </div>
              <div className="flex items-center justify-center gap-4 my-4">
                <button
                  type="button"
                  className="p-4 rounded-lg text-center bg-[#39DE5D]"
                >
                  Get an encrypted link to navigate the site
                </button>
                <button
                  type="button"
                  className="p-4 rounded-lg text-center border-2 border-[#0F993E]"
                >
                  Send a welcome link to view the website
                </button>
              </div>
            </div>
            <div className="rounded-lg border p-10 bg-[#0F993E] text-white">
              <div>
                <p className="text-2xl text-center">Validate The New Status</p>
              </div>
              <div className="h-[90%] flex items-start justify-start gap-4 border-2 border-white rounded-lg p-4">
                <span className="p-2 cursor-pointer  rounded-full text-xs bg-white text-[#0F993E]">
                  Test color
                </span>
                <span className="p-2 cursor-pointer  rounded-full text-xs text-white border-2 border-white bg-[#0F993E]">
                  Test color
                </span>
                <span className="p-2 cursor-pointer  rounded-full text-xs bg-white text-[#0F993E]">
                  Test color
                </span>
                <span className="p-2 cursor-pointer  rounded-full text-xs bg-white text-[#0F993E]">
                  Test color
                </span>
                <span className="p-2 cursor-pointer  rounded-full text-xs text-white border-2 border-white bg-[#0F993E]">
                  Test color
                </span>
              </div>
            </div>
            <div className="rounded-lg border p-10 bg-[#0F993E] text-white">
              <div>
                <p className="text-2xl text-center">Validate The New Status</p>
              </div>
              <div className="my-8 px-20">
                <ul>
                  <li className="flex items-center justify-between gap-4">
                    <p>Number of Visit:</p>
                    <p className="font-bold">14</p>
                  </li>
                  <li className="flex items-center justify-between gap-4">
                    <p>Last Login:</p>
                    <p className="font-bold">11-01-2024 / 14:34</p>
                  </li>
                  <li className="flex items-center justify-between gap-4">
                    <p>Queued Orders:</p>
                    <p className="font-bold">{"(0.01 $)"}</p>
                  </li>
                  <li className="flex items-center justify-between gap-4">
                    <p>Paid Orders:</p>
                    <p className="font-bold">{"(0.01 $)"}</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border p-10 flex flex-col gap-4 justify-center">
              <div>
                <p className="text-2xl text-center">Add a comment</p>
              </div>
              <div className="border-2 border-[#0F993E] rounded-lg h-24"></div>
              <div className="flex items-center justify-between my-4">
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 border rounded-full"></span>
                  <p>Phone appointment</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 border rounded-full"></span>
                  <p>call back date</p>
                </div>
              </div>
              <div className="self-center w-max px-10 py-4 font-bold rounded-lg text-center bg-[#39DE5D]">
                Add
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-4">
            <div className="w-max px-10 py-4 font-bold rounded-lg text-center bg-[#39DE5D]">
              Show Status History
            </div>
            <div className="w-max px-10 py-4 font-bold rounded-lg text-center bg-white border-2">
              Show Comment History
            </div>
          </div>
        </div>
        <div className="border-2 max-w-full h-80 mt-8"></div>
      </div>
    </div>
  );
};

export default CustomerFollowUp;
