import React from "react";
import Image from "next/image";
import { PiUploadSimpleLight } from "react-icons/pi";
import { PiDownloadSimpleLight } from "react-icons/pi";

const TaxManagement = () => {
  return (
    <div className="pl-10">
      <div className="w-[750px] h-[820px] border border-[#97979A] rounded-xl mt-7">
        <h1 className="text-[24px] font-bold text-center pt-5">Tax Statment</h1>
        <div className="py-7 ">
          <div className="relative">
            <Image
              src={"/assets/8771ba801f762cd6cf72e84603df4b17.jpg"}
              alt="image"
              width={650}
              height={250}
              className="w-[650px] h-[250px] mx-auto"
            />
            <p className="z-10 absolute top-4 left-16 text-white text-base font-bold bg-[#f00] px-8 py-4 rounded-bl-full rounded-tr-full">
              Document Format: PDF
            </p>

            <div className="absolute top-0 left-12  h-full w-[650px] mx-auto bg-black bg-opacity-40"></div>
            <input type="file" name="" id="file" className="hidden" />
            <div className="flex justify-center cursor-pointer">
              <div className="absolute bottom-2  text-white flex gap-x-2">
                <PiUploadSimpleLight style={{ width: 24, height: 24 }} />

                <label
                  htmlFor="file"
                  className="  text-white text-[16px] font-bold"
                >
                  Upload Tax Statment
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-10 mt-2">
          <h1>
            <b>Nature Document :</b> Complete the information Request in the
            block blow. Complete the information Request in the block blow.{" "}
          </h1>

          <h1 className="my-5">
            <b>Document : </b> Complete the information{" "}
          </h1>

          <h1>
            <b>Visibilitas Document : </b> Complete the information{" "}
          </h1>
        </div>
        <div className="mx-10 mt-2">
          <h1>
            <b>Nature Document :</b> Complete the information Request in the
            block blow. Complete the information Request in the block blow.{" "}
          </h1>

          <h1 className="my-5">
            <b>Document : </b> Complete the information{" "}
          </h1>

          <h1>
            <b>Visibilitas Document : </b> Complete the information{" "}
          </h1>
        </div>
        <div className="flex justify-center mt-10">
          <button className="border-2 border-dashed border-[#FF0000] px-5 py-4 rounded-lg  text-[#FF0000] font-medium flex gap-x-2">
            <PiDownloadSimpleLight style={{ width: 24, height: 24 }} />
            Download Document
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaxManagement;
