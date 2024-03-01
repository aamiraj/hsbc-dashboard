import React from "react";
import TrendUp from "../Icons/TrendUp";
import TrendDown from "../Icons/TrendDown";

const TrendUpBadge = ({ percent }) => {
  return (
    <div className="flex items-center gap-1 justify-center p-1 bg-[#23C10A26] rounded-lg">
      <TrendUp w={14} h={14} c={"#00AC4F"} />
      <span className="text-xs text-[#00AC4F]">{percent}%</span>
    </div>
  );
};

const TrendDownBadge = ({ percent }) => {
  return (
    <div className="flex items-center gap-1 justify-center p-1 bg-[#C10A0A26] rounded-lg">
      <TrendDown w={14} h={14} c={"#C71026"} />
      <span className="text-xs text-[#C71026]">{percent}%</span>
    </div>
  );
};

const NumberStatCard = ({ title, trendUp, percent, stat, context }) => {
  return (
    <div className="rounded-md p-4 bg-[#FFFFFF] border border-[#ECEEF6]">
      <div className="flex items-center gap-4 my-4">
        <p>{title}</p>
        {trendUp ? (
          <TrendUpBadge percent={percent} />
        ) : (
          <TrendDownBadge percent={percent} />
        )}
      </div>
      <p className="text-lg font-bold my-4">{stat}</p>
      <p className="text-sm text-[#949494] my-4">{context}</p>
    </div>
  );
};

export default NumberStatCard;
