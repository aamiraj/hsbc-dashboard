"use client";

import React from "react";
import GaugeChart from "react-gauge-chart";

const chartStyle = {
  width: "128px",
  height: "84px",
};

const GaugeMeterChart = ({target, achieved}) => {
  const ratio = achieved / target;
  const remainingRatio = 1.0 - ratio;
  
  return (
    <div style={chartStyle}>
      <GaugeChart
        id="gauge-chart1"
        nrOfLevels={2}
        percent={ratio}
        arcsLength={[ratio, remainingRatio]}
        colors={["#EB5757", "#E8E8E8"]}
        needleColor={"#EB5757"}
        needleBaseColor="#EB5757"
        textColor="#000000"
        hideText={true}
        arcPadding={0}
      />
      <div className="text-xs flex items-center justify-evenly gap-2">
        <p>$0</p>
        <p className="font-bold">$12K</p>
        <p>$20K</p>
      </div>
    </div>
  );
};

export default GaugeMeterChart;
