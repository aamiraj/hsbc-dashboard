import Image from "next/image";
import Link from "next/link";
import React from "react";

const GetSupport = () => {
  return (
    <div className="grid grid-cols-2 gap-4 bg-white p-8 my-8">
      <div className="flex items-center justify-center">
        <div className="relative w-[80%] h-[80%]">
          <Image
            src="/assets/get_support.png"
            alt="get support"
            fill
            quality={100}
            className="object-cover"
          />
          <div className="absolute top-0 left-0 p-8">
            <h4 className="text-xl font-bold py-2">Get Support</h4>
            <p className="text-[#696D6E] py-2">We will call you back</p>
            <p className="font-bold py-2">880 012 3456</p>
            <button
              type="button"
              className="my-2 px-4 py-2 rounded-2xl text-white font-bold bg-gradient-to-t from-[#0496FF] to-[#28B5E0]"
            >
              Start Chat
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <p className="text-xl font-bold">Contact Us</p>
        <p></p>
        <div className="my-1 flex flex-col gap-2 items-start">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
            className="w-[80%] px-2 py-1 rounded-lg outline-none bg-[#F4F8FA] border border-[#D1E2EA]"
          />
        </div>
        <div className="my-1 flex flex-col gap-2 items-start">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            className="w-[80%] px-2 py-1 rounded-lg outline-none bg-[#F4F8FA] border border-[#D1E2EA]"
          />
        </div>
        <div className="my-1 flex flex-col gap-2 items-start">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            name="country"
            id="country"
            placeholder="Country"
            className="w-[80%] px-2 py-1 rounded-lg outline-none bg-[#F4F8FA] border border-[#D1E2EA]"
          />
        </div>
        <div className="my-1 flex flex-col gap-2 items-start">
          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            id="city"
            placeholder="City"
            className="w-[80%] px-2 py-1 rounded-lg outline-none bg-[#F4F8FA] border border-[#D1E2EA]"
          />
        </div>
        <div className="my-1 flex flex-col gap-2 items-start">
          <label htmlFor="desc">Description</label>
          <textarea
            name="description"
            id="description"
            placeholder="Description"
            rows={4}
            className="w-[80%] px-2 py-1 rounded-lg outline-none bg-[#F4F8FA] border border-[#D1E2EA]"
          ></textarea>
        </div>
        <div className="my-1 flex flex-col gap-2 items-start">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Phone"
            className="w-[80%] px-2 py-1 rounded-lg outline-none bg-[#F4F8FA] border border-[#D1E2EA]"
          />
        </div>
        <div className="my-1 flex gap-2 items-center justify-start">
          <button
            type="button"
            className="my-1 px-4 py-2 rounded-2xl text-white font-bold bg-gradient-to-t from-[#0496FF] to-[#28B5E0]"
          >
            Confirm
          </button>
          <button
            type="button"
            className="my-1 px-4 py-2 rounded-2xl text-[#27B4E0] font-bold bg-[#E9F7FB]"
          >
            Cancel
          </button>
        </div>
        <Link href={"/"} className="text-[#27B4E0] w-[80%] text-end">Copy billing address</Link>
      </div>
    </div>
  );
};

export default GetSupport;
