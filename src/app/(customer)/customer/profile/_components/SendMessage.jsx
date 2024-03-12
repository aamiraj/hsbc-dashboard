"use client";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const SendMessage = () => {
  const [value, setValue] = useState("");
  return (
    <div className="w-[750px] mx-auto bg-white  mt-10 p-10 rounded-xl">
      <h1 className="text-[36px] font-bold mb-5">Send Message</h1>
      <h1 className="text-[20px] font-bold"> Subject</h1>
      <input
        type="text"
        className="bg-gray-200 w-full outline-none px-3 py-2 rounded mb-3 mt-1"
        placeholder="Object of the message..."
      />
      <h1 className="text-[20px] font-bold mb-1">Compose Your Message</h1>
      <div className="w-full h-[315px]  rounded-md">
        <ReactQuill
          value={value}
          className="textEditor"
          onChange={setValue}
          modules={{
            toolbar: [
              [{ font: [] }],
              [{ size: ["small", false, "large", "huge"] }],
              [{ header: [1, 2, 3, 4, 5, 6, false] }],
              [{ color: [] }, { background: [] }],
              [{ align: [] }],
              [{ list: "ordered" }, { list: "bullet" }],
              ["bold", "italic", "underline"],
              [{ align: [] }],
              ["video"],
              ["clean"],
              ["blockquote", "code-block"],
              ["direction"],
              ["formula"],
              ["strike"],
            ],
          }}
        />
      </div>
      <input type="file" name="" id="file" className="hidden" />
      <div className="flex justify-center mt-10">
        <label
          htmlFor="file"
          className="border-2 border-dashed border-black px-5 py-2 rounded text-black font-medium flex gap-x-2"
        >
          <svg
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.58016 2.54891C9.81203 2.31703 10.188 2.31703 10.4198 2.54891L13.537 5.66609C13.7689 5.89797 13.7689 6.27391 13.537 6.50578C13.3052 6.73766 12.9292 6.73766 12.6973 6.50578L10 3.80844L7.30266 6.50578C7.07078 6.73766 6.69484 6.73766 6.46297 6.50578C6.23109 6.27391 6.23109 5.89797 6.46297 5.66609L9.58016 2.54891Z"
              fill="black"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10 2.375C10.3279 2.375 10.5938 2.64083 10.5938 2.96875V11.2812C10.5938 11.6092 10.3279 11.875 10 11.875C9.67208 11.875 9.40625 11.6092 9.40625 11.2812V2.96875C9.40625 2.64083 9.67208 2.375 10 2.375Z"
              fill="black"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.46875 10.6875C3.79667 10.6875 4.0625 10.9533 4.0625 11.2812V15.4375H15.9375V11.2812C15.9375 10.9533 16.2033 10.6875 16.5312 10.6875C16.8592 10.6875 17.125 10.9533 17.125 11.2812V15.4375C17.125 15.7524 16.9999 16.0545 16.7772 16.2772C16.5545 16.4999 16.2524 16.625 15.9375 16.625H4.0625C3.74756 16.625 3.44551 16.4999 3.22281 16.2772C3.00011 16.0545 2.875 15.7524 2.875 15.4375V11.2812C2.875 10.9533 3.14083 10.6875 3.46875 10.6875Z"
              fill="black"
            />
          </svg>
          Add File
        </label>
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-black text-white  rounded-md flex items-center justify-center gap-x-1 w-[180px] h-12">
          Edit
          <svg
            width="14"
            height="14"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.5101 0.119302C10.6554 0.0584822 10.8113 0.0271606 10.9688 0.0271606C11.1262 0.0271606 11.2821 0.0584822 11.4274 0.119302C11.5718 0.179767 11.7028 0.268186 11.8129 0.379465L15.1205 3.68708C15.2318 3.79718 15.3202 3.9282 15.3807 4.07261C15.4415 4.21787 15.4728 4.37377 15.4728 4.53125C15.4728 4.68872 15.4415 4.84463 15.3807 4.98988C15.3202 5.13428 15.2318 5.2653 15.1205 5.37539L6.04484 14.4511C5.9335 14.5624 5.78247 14.625 5.625 14.625H2.0625C1.74756 14.625 1.44551 14.4999 1.22281 14.2772C1.00011 14.0545 0.875 13.7524 0.875 13.4375V10.1208M10.5101 0.119302C10.3657 0.179776 10.2346 0.268214 10.1245 0.379518L10.5101 0.119302ZM2.0625 10.1209V13.4375H5.37906L14.2853 4.53123L14.2821 4.52806L10.9687 1.21467L10.9656 1.2179L2.0625 10.1209Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SendMessage;
