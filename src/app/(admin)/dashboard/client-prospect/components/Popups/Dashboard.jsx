import React from "react";
import SwitchInput from "../SwitchInput/SwitchInput";

const Dashboard = () => {
  return (
    <div className="rounded-lg border w-full p-8 ">
      <div className="flex flex-col items-center justify-center gap-4">
        <div>
          <SwitchInput checked={false} />
        </div>
        <div className="text-white bg-[#39DE5D] shadow-lg px-6 py-3 rounded-lg w-max">
          <p>Reset</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8 my-8">
        <div className="rounded-lg border-2 p-10 flex flex-col justify-center items-center gap-4">
          <h1 className="text-2xl">Top Block</h1>
          <SwitchInput checked={true} />
          <div className="flex items-center justify-center gap-4">
            <div className="text-white bg-[#39DE5D] shadow-lg px-6 py-3 rounded-lg">
              <p>Send</p>
            </div>
            <div className="text-white bg-[#000000] shadow-lg px-6 py-3 rounded-lg">
              <p>Close</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border-2 p-10 flex flex-col justify-center items-center gap-4">
          <h1 className="text-2xl">Banner other else</h1>
          <SwitchInput checked={true} />
          <div className="flex items-center justify-center gap-4">
            <div className="text-white bg-[#39DE5D] shadow-lg px-6 py-3 rounded-lg">
              <p>Send</p>
            </div>
            <div className="text-white bg-[#000000] shadow-lg px-6 py-3 rounded-lg">
              <p>Close</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
