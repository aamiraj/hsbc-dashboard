import React from "react";

const EarningStat = ({ title, bg_color, text_color }) => {
  return (
    <div
      style={{ backgroundColor: `${bg_color}` }}
      className="shadow-md rounded-lg p-4 flex items-center gap-2"
    >
      <div className="flex flex-col gap-4">
        <h4 style={{ color: `${text_color}` }} className="text-lg">
          {title}
        </h4>
        <div>
          <p style={{ color: `${text_color}` }} className="text-xs">
            This Month
          </p>
          <span
            style={{ color: `${text_color}` }}
            className="text-sm font-bold "
          >
            $4055.56
          </span>
        </div>
        <p style={{ color: `${text_color}` }} className="text-xs ">
          68.2% more earnings than last month.
        </p>
      </div>
      <div>
        <div style={{ backgroundColor: `${bg_color}` }} className="donut shadow-md">
          <div className="rotate-[-30deg]">
            <p
              style={{ color: `${text_color}` }}
              className="text-xs mb-[-10px]"
            >
              38%
            </p>
            <span
              style={{ color: `${text_color}` }}
              className="text-[8px]"
            >
              Sales
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarningStat;
