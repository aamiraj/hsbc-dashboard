import React from "react";
import Image from "next/image";

const RightSideForm = () => {
  return (
    <div className="right_bg">
      <div className="h-full">
        <div className="w-full h-[40%]"></div>
        <div className="glass-card p-8 mx-4 text-white">
          <p className="flex items-center gap-2 w-max px-4 py-2 mb-4 rounded-lg text-black text-xs bg-[#20DC49]">
            <Image
              src="/assets/thumbs-up.png"
              alt="thumbs up"
              width={16}
              height={16}
            />
            Top Notch Stock Resources
          </p>
          <p>
            Today, we create innovative solutions to the challenges that
            consumers face in both their everyday lives and events.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RightSideForm;
