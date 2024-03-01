import React from "react";
import styles from "./OverallFundStat.module.css"
import Dollar from "@/components/Icons/Dollar";

const smallStats = [
  {
    name: "Fund Per Client",
    fund: "121.121.132",
  },
  {
    name: "Withdraw Amount",
    fund: "121.121.132",
  },
  {
    name: "Invested Amount",
    fund: "0",
  },
  {
    name: "Commission",
    fund: "0",
  },
  {
    name: "Potential Gain",
    fund: "0",
  },
  {
    name: "Potential Loss",
    fund: "0",
  },
];

const SmallStat = ({ name, fund }) => {
  return (
    <div className="flex items-center justify-between">
      <p className="text-sm">{name}</p>
      <p className="text-sm font-bold">${fund}</p>
    </div>
  );
};

const OverallFundStat = ({ bg_color, title }) => {
  return (
    <div className={styles.transparent_bg_img} style={{backgroundColor: `${bg_color}`}}>
      <div className="grid grid-cols-1 gap-2">
        <div className="flex items-center justify-between my-2">
          <h3 className="text-xl font-bold">{title}</h3>
          <span>
            <Dollar w={32} h={32} c={"#FFFFFF"} />
          </span>
        </div>
        {smallStats.map(({ name, fund }, i) => (
          <SmallStat key={i} name={name} fund={fund} />
        ))}
      </div>
    </div>
  );
};

export default OverallFundStat;
