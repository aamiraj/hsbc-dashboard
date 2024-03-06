"use client";

import React, { useState } from "react";
import styles from "./DashboardTab.module.css";
import Image from "next/image";
import TimeClock from "@/components/Icons/TimeClock";
import Award from "@/components/Icons/Award";
import Goal from "@/components/Icons/Goal";
import Edit from "@/components/Icons/Edit";
import Selectbox from "@/components/Selectbox/Selectbox";
import { payments } from "@/dummydata/payments";
import Barchart from "../../components/Charts/Barchart";
import OverallFundStat from "../../components/OverallFundStat/OverallFundStat";
import EarningStat from "../../components/EarningStat/EarningStat";
import PaymentList from "../../components/PaymentList/PaymentList";
import { optionList } from "../../options/optionList";
import { LineChart } from "../../components/Charts/LineChart";
import { AreaChart } from "../../components/Charts/AreaChart";
import Dougnutchart from "../../components/Charts/Dougnutchart";

const getToday = () => {
  const date = new Date();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
};
const DashboardTab = () => {
  const [openFirstTab, setOpenFirstTab] = useState(true);
  const today = getToday();

  const handleActive = (value) => {
    setOpenFirstTab(value);
  };
  return (
    <div className="p-8">
      {/* <!-- Tab links --> */}
      <div className={styles.tab}>
        <button
          className={openFirstTab ? styles.active : ""}
          onClick={() => handleActive(true)}
          id="defaultOpen"
        >
          Call Diary
        </button>
        <button
          className={!openFirstTab ? styles.active : ""}
          onClick={() => handleActive(false)}
        >
          General Statistic
        </button>
      </div>

      {/* <!-- Call diary tab --> */}
      {openFirstTab && (
        <div className={styles.tabcontent}>
          <div className="grid grid-cols-2 gap-8">
            <div className="p-4 rounded-lg bg-[#FFFFFF] shadow-lg">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-bold text-xl">Reminder Of The Day</h3>
                  <p className="text-sm text-[#ACACAC]">{today}</p>
                </div>
                <Selectbox optionList={optionList} defaultOption="" />
              </div>
              <Barchart />
            </div>
            <div className="w-full grid grid-cols-2 gap-8">
              <div className="p-4 rounded-lg bg-[#FFFFFF] shadow-lg">
                <div>
                  <h3 className="font-bold text-xl">Online</h3>
                  <p className="text-sm text-[#ACACAC]">Customers Activity</p>
                  <Dougnutchart />
                </div>
              </div>
              <div className="p-4 rounded-lg bg-[#FFFFFF] shadow-lg">
                <div>
                  <h3 className="font-bold text-xl">Advance Of SRD Funds</h3>
                  <div className="py-14">
                    <LineChart />
                  </div>
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
              <h3 className="font-bold text-xl">New Leads To Handle</h3>
              <div className="py-14">
                <AreaChart />
              </div>
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
                    <h3 className="text-[10px] text-[#191919]">
                      Target vs Achievement
                    </h3>
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
                      src={'/assets/dummyPic.png'}
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
      {/* General statistic tab  */}
      {!openFirstTab && (
        <div className={styles.tabcontent}>
          {/* top stat cards with leafy background */}
          <div className="grid grid-cols-3 gap-8">
            <OverallFundStat bg_color={"#000000"} title={"Total"} />
            <OverallFundStat bg_color={"#0F993E"} title={"Top 3 Gainers"} />
            <OverallFundStat bg_color={"#FF715B"} title={"Top 3 Losers"} />
          </div>
          {/* earning stat of weekly and montly and a horizontal bar plot */}
          <div className={styles.earning_stat_grid}>
            <div className="grid grid-cols-1 gap-2">
              <EarningStat
                title={"This Week"}
                bg_color={"#FFFFFF"}
                text_color={"#5E5873"}
              />
              <EarningStat
                title={"This Month"}
                bg_color={"#000000"}
                text_color={"#FFFFFF"}
              />
            </div>
            <div className="shadow-md rounded-lg p-4">
              <div>
                <div className="w-full border-b  flex justify-between items-center gap-4 ">
                  <p className="font-bold text-sm">Statistics</p>
                  <div className="flex items-center justify-center gap-2">
                    <p className="font-bold text-sm p-2 border-b-2 hover:text-[#0F993E] hover:border-b-2 hover:border-b-[#0F993E]">
                      Now
                    </p>
                    <p className="font-bold text-sm p-2 hover:text-[#0F993E] hover:border-b-2 hover:border-b-[#0F993E]">
                      Today
                    </p>
                    <p className="font-bold text-sm p-2 hover:text-[#0F993E] hover:border-b-2 hover:border-b-[#0F993E]">
                      Month
                    </p>
                  </div>
                  <span>:</span>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <p>There will be a chart.</p>
              </div>
            </div>
          </div>
          {/* list of payments in several boxes */}
          <div>
            <PaymentList
              title={"PAYMENTS BY SELLERS / ADMINISTRATOR/ MANAGERS"}
              payments={payments}
            />
            <PaymentList
              title={"PAYMENTS BY CAMPAIGNS "}
              payments={payments}
            />
            <PaymentList
              title={"EVALUATIONS"}
              payments={payments}
            />
            <PaymentList
              title={"CAMPAIGNS"}
              payments={payments}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardTab;
