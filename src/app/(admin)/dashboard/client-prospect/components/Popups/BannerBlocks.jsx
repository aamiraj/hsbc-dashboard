import React from "react";
import SwitchInput from "../SwitchInput/SwitchInput";
import Image from "next/image";

const BannerBlocks = () => {
  return (
    <div className="border rounded-lg p-8">
      <div className="flex flex-col justify-center items-center gap-4">
        <h3 className="font-bold">PERSONAL BANNER AND BLOCKS</h3>
        <SwitchInput />
      </div>
      <div>
        <p className="font-bold text-lg my-2">Banner</p>
        <SwitchInput />
      </div>
      <div className="banner_bg w-full h-60 rounded-lg my-4 flex items-center justify-center">
        <div className="w-full flex items-center justify-around gap-4">
          <div className="text-white">
            <h1 className="font-bold text-4xl">Welcome Dear HSBC</h1>
            <p className="text-2xl">Globas Asset Management</p>
          </div>
          <div>
            <Image
              src={"/assets/logo_hsbc_white.png"}
              width={150}
              height={48}
              alt="hsbc logo"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <div>
            <p className="font-bold text-lg my-2">Posting 1</p>
            <SwitchInput />
          </div>
        </div>
        <div>
          <div>
            <p className="font-bold text-lg my-2">Posting 2</p>
            <SwitchInput />
          </div>
        </div>
      </div>
      <div>
        <p className="font-bold text-lg my-2">Banner 2</p>
        <SwitchInput />
      </div>
    </div>
  );
};

export default BannerBlocks;
