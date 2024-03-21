import Image from "next/image";
import React from "react";

const PhotoInput = ({ id, label, handlePhoto }) => {
  return (
    <div className="w-full">
      <p className="text-lg">{label}</p>
      <label
        htmlFor={id}
        className="block relative border-[3px] border-dashed border-[#00AC4F] rounded w-full h-24 py-2 my-2 cursor-pointer"
      >
        <input
          type="file"
          name={id}
          id={id}
          accept="image/*"
          className="opacity-0 w-full h-full"
          onChange={handlePhoto}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 ">
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
      </label>
    </div>
  );
};

export default PhotoInput;
