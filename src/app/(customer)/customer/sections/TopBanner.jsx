import Image from "next/image";
import React from "react";

const TopBanner = () => {
  return (
    <div className="banner_bg w-full mx-auto h-60 rounded-2xl my-10 flex items-center justify-center">
      <div className="w-full flex items-center justify-around gap-4">
        <div className="text-white">
          <h1 className="font-bold text-4xl py-2">Welcome Dear HSBC</h1>
          <p className="text-2xl py-2">Globas Asset Management</p>
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
  );
};

export default TopBanner;
