import React from "react";
import { TbCirclePlus } from "react-icons/tb";
import TextInput from "../../../client-prospect/components/TextInput/TextInput";

const AutoPilotForm = () => {
  return (
    <div className="rounded-lg p-10 bg-white flex flex-col gap-4">
      {/* heading title  */}
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-xl font-bold py-4">AUTO-PILOT LEAD ASSIGNMENTS</h3>
        <span>
          <TbCirclePlus style={{ width: "40px", height: "40px", color: "#439F3F" }} />
        </span>
      </div>
      {/* input forms  */}
      <div className="flex items-center justify-evenly gap-2">
        <TextInput id={"status"} label={"Status"} />
        <TextInput id={"status"} label={"First time"} />
        <TextInput id={"status"} label={"Again"} />
        <TextInput id={"status"} label={"Third Time"} />
        <TextInput id={"status"} label={"Four Time"} />
        <TextInput id={"status"} label={"Five Time"} />
      </div>
      {/* validate button  */}
      <div className="self-end">
        <button type="button" className="font-bold px-8 py-2 bg-[#39DE5D] rounded-3xl">Validate</button>
      </div>
    </div>
  );
};

export default AutoPilotForm;
