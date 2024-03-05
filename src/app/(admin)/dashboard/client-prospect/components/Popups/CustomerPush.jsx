import React from "react";
import TextInput from "../TextInput/TextInput";
import FileInput from "../FileInput/FileInput";

const CustomerPush = () => {
  return (
    <div className="border rounded-lg p-8 flex flex-col">
      <div className="grid grid-cols-2 gap-8">
        <TextInput id={"title"} label={"Title"} />
        <TextInput id={"subtitle"} label={"Subtitle"} />
        <TextInput id={"link_title"} label={"Link Title"} />
        <FileInput id={"upload"} label={"Upload"} />
      </div>
      <div className="text-white bg-[#39DE5D] shadow-lg px-6 py-3 rounded-lg w-max self-center">
        <p>Send</p>
      </div>
    </div>
  );
};

export default CustomerPush;
