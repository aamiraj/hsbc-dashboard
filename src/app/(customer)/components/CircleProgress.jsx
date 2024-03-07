import React from "react";

const CircleProgress = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center gap-4">
      <p className="text-[#9291A5] test-xs text-center">Statistics</p>
      <p className="text-lg font-bold text-center">Risk Management</p>
      <div className="w-full h-0.5 bg-[#E5E5EF]"></div>
      <div>
        {/* there will be partial circular progress bar  */}
        <div></div>
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center justify-center gap-2 text-[8px]">
            <div className="w-2 h-2 bg-[#D80027] rounded-full"></div>
            <p className="text-[#9291A5]">Salary</p>
            <p>65%</p>
          </div>
          <div className="flex items-center justify-center gap-2 text-[8px]">
            <div className="w-2 h-2 bg-[#F0E5FC] rounded-full"></div>
            <p className="text-[#9291A5]">Investments</p>
            <p>35%</p>
          </div>
        </div>
      </div>
      <p className="text-center text-xs">
        Adjust the security level of your transactions according to market
        trends and global economic and political situations
      </p>
      <div className="w-full h-0.5 bg-[#E5E5EF]"></div>
      <p className="text-lg font-bold text-center">Edit Marks</p>
      <div className="border border-[#D9D9D9] rounded-lg flex items-center gap-0 p-2">
        <input type="text" className="outline-none" />
        <p className="text-[#D9D9D9] border-l border-[#D9D9D9] px-2">{"%"}</p>
      </div>
      <div>
        <button
          type="button"
          className="bg-[#7FFF00] rounded-md px-8 py-2 font-bold text-center"
        >
          Validate
        </button>
      </div>
    </div>
  );
};

export default CircleProgress;
