import React from "react";
import TextInput from "../TextInput/TextInput";

const FundAvailable = () => {
  return (
    <div className="border rounded-lg p-12">
      <div>
        <TextInput id={"select_plan_of_user"} label={"Select plan of user"} />
        <TextInput id={"select_plan"} label={"Select plan"} />
        <TextInput id={"select_currency"} label={"Select currency"} />
        <TextInput id={"name"} label={"Name"} />
        <TextInput id={"instant_bonus"} label={"Instant bonus"} />
        <div className="grid grid-cols-2 gap-8">
          <TextInput id={"release_of_funds"} label={"Release of funds"} />
          <TextInput id={"minimum_of_positions"} label={"Minimum of positions"} />
          <TextInput id={"guarantee_up_to"} label={"Guarantee up to"} />
          <TextInput id={"commission"} label={"Commission"} />
        </div>
        <TextInput id={"order_status"} label={"Order Status"} />
      </div>
      <div className="flex items-center justify-center gap-4">
        <div className="text-white bg-[#39DE5D] shadow-lg px-6 py-3 rounded-lg">
          <p>Send</p>
        </div>
        <div className="text-white bg-[#000000] shadow-lg px-6 py-3 rounded-lg">
          <p>Close</p>
        </div>
      </div>
    </div>
  );
};

export default FundAvailable;
