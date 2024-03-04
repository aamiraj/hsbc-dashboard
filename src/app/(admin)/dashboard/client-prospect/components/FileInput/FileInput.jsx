import React from "react";

const FileInput = ({ id, label }) => {
  return (
    <div className="w-full">
      <label htmlFor={id}>{label}</label>
      <div className="relative w-full h-24 py-2 my-2 ">
        <input
          type="file"
          name={id}
          id={id}
          className="opacity-0 w-full h-full"
        />
        <div className="absolute top-0 left-0 -z-10 ">
          <p className="px-4 py-2 border-2">Choose file</p>
        </div>
      </div>
    </div>
  );
};

export default FileInput;
