"use client";

import React, { useEffect, useState } from "react";
import styles from "./DashboardTab.module.css";
import Barchart from "@/components/Charts/barchart";
import ArrowDown from "@/components/Icons/ArrowDown";
import Dougnutchart from "@/components/Charts/Dougnutchart";
import Image from "next/image";
import MeetingPerson from "../../../public/assets/Rectangle.png";
import TimeClock from "@/components/Icons/TimeClock";
import Award from "@/components/Icons/Award";
import Goal from "@/components/Icons/Goal";
import Edit from "@/components/Icons/Edit";

const DashboardTab = () => {
  const [openFirstTab, setOpenFirstTab] = useState(true);

  const handleActive = (event, value) => {
    setOpenFirstTab(value);
  };
  return (
    <div className="p-8">
      {/* <!-- Tab links --> */}
      <div className={styles.tab}>
        <button
          className={openFirstTab ? styles.active : ""}
          onClick={(e) => handleActive(e, true)}
          id="defaultOpen"
        >
          Call Diary
        </button>
        <button
          className={!openFirstTab ? styles.active : ""}
          onClick={(e) => handleActive(e, false)}
        >
          General Statistic
        </button>
      </div>

      {/* <!-- Tab content --> */}
      {openFirstTab && (
        <div className={styles.tabcontent}>
          <div className="grid grid-cols-2 gap-8 my-8">
            <div className="p-4 rounded-lg bg-[#FFFFFF] shadow-lg">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-xl">Reminder Of The Day</h3>
                  <p className="text-sm text-[#ACACAC]">9 January 2024</p>
                </div>
                <div className="flex items-center justify-between gap-2 p-2 bg-[#F9FBFF]">
                  <span className="text-sm text-[#7E7E7E]">Weekly</span>
                  <span>
                    <ArrowDown w={16} h={16} />
                  </span>
                </div>
              </div>
              <Barchart />
            </div>
            <div className="w-full grid grid-cols-2 gap-8">
              <div className="p-4 rounded-lg bg-[#FFFFFF] shadow-lg">
                <div>
                  <h3 className="font-bold text-xl">Online</h3>
                  <p className="text-sm text-[#ACACAC]">Customers Activity</p>
                </div>
                {/* <Dougnutchart /> */}
              </div>
              <div className="p-4 rounded-lg bg-[#FFFFFF] shadow-lg">
                <div>
                  <h3 className="font-bold text-xl">Advance Of SRD Funds</h3>
                  <div className="flex items-center justify-start gap-4">
                    <p className="px-4 py-1 text-xs text-bold rounded bg-[#04E762] text-white">
                      SALES
                    </p>
                    <p className="px-4 py-1 text-xs text-bold rounded bg-[#FF715B] text-white">
                      PURCHASES
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bottom_grid}>
            <div className="p-4 rounded-lg bg-[#FFFFFF] shadow-lg">
              <h3 className="font-bold text-xl">Advance Of SRD Funds</h3>
              <div className="flex items-center justify-start gap-4">
                <p className="px-4 py-1 text-xs text-bold rounded bg-[#0496FF] text-white">
                  NIKE
                </p>
                <p className="px-4 py-1 text-xs text-bold rounded bg-[#34D1BF] text-white">
                  ADIDAS
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="p-4 rounded-lg bg-[#FFFFFF] shadow-lg">
                <h3 className="font-bold text-xl">Waiting For Payment</h3>
                <div className="flex items-center gap-4 justify-between border-b py-2">
                  <h3 className="font-bold text-xl">{"$20,000"}</h3>
                  <span className="p-1 bg-[#D2D2D240] rounded-sm">
                    <Edit w={16} h={16} />
                  </span>
                  <p className="text-sm text-[#525256]">January, 2024</p>
                </div>
                <div className="flex items-center gap-4 py-2">
                  <div className="">
                    <div className="flex gap-4 my-2">
                      <Award w={24} h={24} />
                      <div>
                        <p className="text-xs text-[#525256]">
                          Target Achieved
                        </p>
                        <p className="text-sm font-bold">{"$12,500"}</p>
                      </div>
                    </div>
                    <div className="flex gap-4 my-2">
                      <Goal w={24} h={24} />
                      <div>
                        <p className="text-xs text-[#525256]">
                          This month Target
                        </p>
                        <p className="text-sm font-bold">{"$12,500"}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[10px] text-[#191919]">Target vs Achievement</h3>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-[#FFFFFF] shadow-lg">
                <h3 className="font-bold text-xl">Reminder</h3>
                <div className="bg-[#FAFBFD] p-6 my-4">
                  <p>Book flights to Seattle</p>
                  <p className="flex items-center gap-4 text-[10px]">
                    <span className="w-2 h-2 rounded-full bg-[#F17105]"></span>
                    <span>15 Mar 2024</span>
                    <span>/</span>
                    <span>02:08 PM</span>
                  </p>
                </div>
                <div className="bg-[#FAFBFD] p-6">
                  <p>Finish appointment</p>
                  <p className="flex items-center gap-4 text-[10px]">
                    <span className="w-2 h-2 rounded-full bg-[#34D1BF]"></span>
                    <span>15 Mar 2024</span>
                    <span>/</span>
                    <span>02:08 PM</span>
                  </p>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-[#FFFFFF] shadow-lg">
                <h3 className="font-bold text-xl">Collaborators En Ligne</h3>
                <ul className="ps-8 pt-8 shadow-inner">
                  <li className="flex items-start justify-between gap-4 mb-4">
                    <p className="text-xs font-bold text-[#28B5E1]">
                      Badge of Sport Classic Tee XXL
                    </p>
                    <p className="text-xs font-bold text-[#414D55]">
                      {"$56.95"}
                    </p>
                  </li>
                  <li className="flex items-start justify-between gap-4 mb-4">
                    <p className="text-xs font-bold text-[#28B5E1]">
                      Gazelle Super x Alltimers Shoes
                    </p>
                    <p className="text-xs font-bold text-[#414D55]">
                      {"$56.95"}
                    </p>
                  </li>
                </ul>
              </div>
              <div className="p-4 rounded-lg bg-[#FFFFFF] shadow-lg">
                <h3 className="font-bold text-xl">Meeting</h3>
                <div>
                  <div className="flex items-center gap-4 my-4">
                    <Image
                      src={MeetingPerson}
                      alt="Meeting Person"
                      width={48}
                      height={42}
                    />
                    <div>
                      <p className="font-bold text-[#28B5E1]">West Jackeline</p>
                      <p className="font-bold text-[#696D6E]">Sallie Butler</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <TimeClock w={16} h={16} />
                    <p className="text-[#696D6E] text-xs">
                      Monday, September 22
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {!openFirstTab && (
        <div id="Paris" className={styles.tabcontent}>
          <div className="donut"></div>
        </div>
      )}
    </div>
  );
};

export default DashboardTab;
