"use client";

import React, { useState } from "react";
import Details from "./Details";
import CustomerFollowUp from "./CustomerFollowUp";
import FundAvailable from "./FundAvailable";
import TakingAStand from "./TakingAStand";
import PersonalizationOfInvestment from "./PersonalizationOfInvestment";
import BannerBlocks from "./BannerBlocks";
import CustomerPush from "./CustomerPush";
import Dashboard from "./Dashboard";
import Experience from "./Experience";

const headerMenusOne = [
  {
    id: 1,
    title: "Detail",
  },
  {
    id: 2,
    title: "Customer Follow Up",
  },
  {
    id: 3,
    title: "Fund Available",
  },
  {
    id: 4,
    title: "Taking a Stand",
  },
  {
    id: 5,
    title: "Personalization of Investment",
  },
  {
    id: 6,
    title: "Banner & Blocks",
  },
  {
    id: 7,
    title: "Customer Push",
  },
];

const headerMenusTwo = [
  {
    id: 8,
    title: "Personal Doc",
  },
  {
    id: 9,
    title: "Dashboard",
  },
  {
    id: 10,
    title: "Experience",
  },
  {
    id: 11,
    title: "Personal Information",
  },
  {
    id: 12,
    title: "Customer Popups",
  },
  {
    id: 13,
    title: "Wallet Addresses",
  },
  {
    id: 14,
    title: "Contracts",
  },
  {
    id: 15,
    title: "Message",
  },
];

const Popups = () => {
  const [openSecondHeaderMenu, setOpenSecondHeaderMenu] = useState(false);
  const [menuActive, setMenuActive] = useState(1);

  const handleNext = () => {
    setOpenSecondHeaderMenu(true);
    setMenuActive(headerMenusTwo[0].id);
  };

  const handlePrev = () => {
    setOpenSecondHeaderMenu(false);
    setMenuActive(headerMenusOne[0].id);
  };

  const handleActive = (id) => {
    setMenuActive(id);
  };

  const handleClosePopUp = ()=>{
    const popUp = document.getElementById("popUpInClientProspect")
    popUp.style.display = "none"
  }
  return (
    <div>
      <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-black opacity-50 z-10"></div>
      <div className="w-full h-max p-8 bg-white rounded-3xl absolute top-32 left-0 right-0 bottom-0 z-20">
        <div className="flex justify-center items-center gap-4 my-4">
          <h3 className="text-2xl">Company</h3>
          <div className="p-2 border-2 rounded-lg flex items-center gap-2">
            <p>HSBC</p>
            <span className="rotate-90">{">"}</span>
          </div>
          <div className="self-end" onClick={handleClosePopUp}>
            <p>Close</p>
          </div>
        </div>
        <div>
          <div className="bg-[#EEEAEA] rounded-t-lg">
            {!openSecondHeaderMenu && (
              <ul className="flex items-center justify-evenly">
                {headerMenusOne.map((menu, i) => (
                  <li
                    key={i}
                    onClick={() => handleActive(menu.id)}
                    className="w-full rounded-t-lg text-center text-xs p-3"
                    style={
                      menuActive === menu.id
                        ? { color: "white", backgroundColor: "#0F993E" }
                        : {}
                    }
                  >
                    {menu.title}
                  </li>
                ))}
                <li onClick={handleNext} className="px-3">
                  {">"}
                </li>
              </ul>
            )}
            {openSecondHeaderMenu && (
              <ul className="flex items-center justify-evenly">
                <li onClick={handlePrev} className="px-3">
                  {"<"}
                </li>
                {headerMenusTwo.map((menu, i) => (
                  <li
                    key={menu.id}
                    onClick={() => handleActive(menu.id)}
                    className="w-full rounded-t-lg text-center text-xs p-3"
                    style={
                      menuActive === menu.id
                        ? { color: "white", backgroundColor: "#0F993E" }
                        : {}
                    }
                  >
                    {menu.title}
                  </li>
                ))}
              </ul>
            )}
          </div>
          {/* handling visibility of components using react state  */}
          {/* when header menu matches the active menu number then the component is visible, hidden otherwise  */}
          {menuActive === headerMenusOne[0].id && (
            <div>
              <Details />
            </div>
          )}
          {menuActive === headerMenusOne[1].id && (
            <div>
              <CustomerFollowUp />
            </div>
          )}
          {menuActive === headerMenusOne[2].id && (
            <div>
              <FundAvailable />
            </div>
          )}
          {menuActive === headerMenusOne[3].id && (
            <div>
              <TakingAStand />
            </div>
          )}
          {menuActive === headerMenusOne[4].id && (
            <div>
              <PersonalizationOfInvestment />
            </div>
          )}
          {menuActive === headerMenusOne[5].id && (
            <div>
              <BannerBlocks />
            </div>
          )}
          {menuActive === headerMenusOne[6].id && (
            <div>
              <CustomerPush />
            </div>
          )}
          {/* header menus two start here  */}
          {menuActive === headerMenusTwo[0].id && (
            <div>
              <CustomerPush />
            </div>
          )}
          {menuActive === headerMenusTwo[1].id && (
            <div>
              <Dashboard />
            </div>
          )}
          {menuActive === headerMenusTwo[2].id && (
            <div>
              <Experience />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Popups;
