import Image from "next/image";
import React from "react";

const PhotoInput = ({ id, label }) => {
  return (
    <div className="w-full">
      <label htmlFor={id}>{label}</label>
      <div className="relative border-[3px] border-dashed rounded w-full h-24 py-2 my-2 ">
        <input
          type="file"
          name={id}
          id={id}
          accept="image/*"
          className="opacity-0 w-full h-full"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 ">
          <div className="flex flex-col items-center justify-center gap-2">
            <Image
              src={"/assets/Camera.svg"}
              alt="Camera"
              width={32}
              height={32}
            />
            <p>Add Picture</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoInput;
