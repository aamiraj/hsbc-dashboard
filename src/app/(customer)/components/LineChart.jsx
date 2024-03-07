import React from "react";

const active = { backgroundColor: "#1E1B39", color: "white" };
const LineChart = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-10">
      <div className="flex items-center justify-between gap-8">
        <div>
          <p className="text-[#9291A5] text-sm">Statistics</p>
          <p className="text-lg font-bold">Historical Development</p>
        </div>
        <div>
          <ul className="p-2 text-[#9291A5] rounded-lg bg-[#F8F8FF] flex items-center justify-center gap-4">
            <li className="p-2 rounded-full">Day</li>
            <li className="p-2 rounded-full">Week</li>
            <li className="p-2 rounded-full" style={active}>Month</li>
            <li className="p-2 rounded-full">Year</li>
          </ul>
        </div>
      </div>
      <div>{/* line shart will be here */}</div>
    </div>
  );
};

export default LineChart;
