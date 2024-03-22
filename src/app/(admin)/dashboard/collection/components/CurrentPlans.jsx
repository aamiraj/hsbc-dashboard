"use client";

import React, { useState } from "react";
import { CiCamera } from "react-icons/ci";

const leverageOptions = [
  "x1",
  "x5",
  "x10",
  "x15",
  "x20",
  "x25",
  "x30",
  "x35",
  "x40",
  "x45",
  "x50",
  "x55",
  "x60",
  "x65",
  "x70",
  "x75",
  "x80",
  "x85",
  "x90",
  "x95",
  "x100",
];

const CurrentPlans = () => {
  const [inputs, setInputs] = useState({});
  const [checkedIn, setCheckedIn] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleChecked = (e) => {
    const name = e.target.name;
    const checked = e.target.checked;

    setCheckedIn((prev) => ({ ...prev, [name]: checked }));
  };

  const handleFileSelect = (e) => {
    setSelectedFile(e.target.files[0]);
    // handle image upload in here, then use the url to store in the db
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/api/data/plans", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ photo: "", ...inputs, ...checkedIn }),
    })
      .then((res) => {
        if (res.ok) {
          alert("Plan Added successfully.");
        }
      })
      .catch((error) => alert("Failed to add plan."));
    // console.log({ photo: "", ...inputs, ...checkedIn });
  };
  return (
    <div className="border border-gray-600 rounded">
      <form onSubmit={handleSubmit}>
        <div className="p-4 flex gap-x-5">
          <input
            type="file"
            name="photo"
            id="photo"
            className="hidden"
            onClick={handleFileSelect}
            multiple={false}
          />
          <label htmlFor="file">
            <div className="max-w-[132px] h-[169px] border border-dashed border-[#00AC4F] flex justify-center pt-8 rounded-lg cursor-pointer">
              <div>
                <div className="p-2 flex justify-center">
                  <CiCamera className="text-[#A3A3A3] w-8 h-8 flex justify-center" />
                </div>
                <h1 className="p-2 text-xs font-medium text-[#A3A3A3]">
                  Add Picture
                </h1>
              </div>
            </div>
          </label>
          <div className="w-[80%]">
            <div className="w-full flex items-center gap-x-5">
              <h1 className="text-[#595959] text-xs font-medium">
                Plan's title:
              </h1>
              <input
                type="text"
                name="planTitle"
                id="planTitle"
                className="border-b w-[90%] border-[#97979A]  outline-none "
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-between w-full my-8">
              <div className="flex gap-x-5 relative">
                <h1 className="text-[#595959]  text-xs font-medium">
                  From:
                </h1>
                <input
                  type="number"
                  name="limitFrom"
                  id="limitFrom"
                  className="border-b max-w-[110px]  border-[#97979A]  outline-none "
                  onChange={handleChange}
                />
                <span className="absolute right-0 text-[#97979A] pr-2">$</span>
              </div>
              <div className="flex gap-x-5 relative">
                <h1 className="text-[#595959] text-xs font-medium">To:</h1>
                <input
                  type="number"
                  name="limitTo"
                  id="limitTo"
                  className="border-b  max-w-[110px] border-[#97979A]  outline-none "
                  onChange={handleChange}
                />
                <span className="absolute right-0 text-[#97979A] pr-2">$</span>
              </div>
              <div className="flex gap-x-5 relative">
                <h1 className="text-[#595959] text-xs font-medium">
                  Bonuses:
                </h1>
                <input
                  type="number"
                  min={0}
                  max={100}
                  name="bonuses"
                  id="bonuses"
                  className="border-b  max-w-[110px] border-[#97979A]  outline-none "
                  onChange={handleChange}
                />
                <span className="absolute right-0 text-[#97979A] pr-2">%</span>
              </div>
              <div className="flex gap-x-5 relative">
                <h1 className="text-[#595959] text-xs font-medium">
                  Limit of leverage:
                </h1>
                <select
                  onChange={handleChange}
                  name="limitOfLeverage"
                  id="limitOfLeverage"
                  className="border-b max-w-[110px] border-[#97979A]  outline-none"
                >
                  {leverageOptions.map((leverage, i) => (
                    <option key={i} value={leverage}>
                      {leverage}
                    </option>
                  ))}
                </select>
                {/* <span className="absolute right-0 text-[#97979A] pr-2">%</span> */}
              </div>
            </div>
            <div className="flex justify-between w-full mb-8 ">
              <div className="flex  gap-x-2">
                <h1 className="text-[#595959]  text-xs font-medium">
                  Blocked during:
                </h1>
                <input
                  type="number"
                  min={0}
                  name="blockedDuring"
                  id="blockedDuring"
                  className="border-b max-w-[110px]  border-[#97979A]  outline-none "
                  onChange={handleChange}
                />
                <p className="text-xs text-[#595959]">Months</p>
              </div>
              <div className="flex  gap-x-2 relative">
                <h1 className="text-[#595959] text-xs font-medium">
                  Minimum of positions:
                </h1>
                <input
                  type="number"
                  name="minimumOfPositions"
                  id="minimumOfPositions"
                  className="border-b  max-w-[110px] border-[#97979A]  outline-none "
                  onChange={handleChange}
                />
                {/* <span className="absolute right-0 text-[#97979A] pr-2">%</span> */}
              </div>
              <div className="flex gap-x-2 relative">
                <h1 className="text-[#595959] text-xs font-medium">
                  Warranty:
                </h1>
                <input
                  type="number"
                  min={0}
                  max={100}
                  name="warranty"
                  id="warranty"
                  className="border-b  w-[110px] border-[#97979A]  outline-none "
                  onChange={handleChange}
                />
                <span className="absolute right-0 text-[#97979A] pr-2">%</span>
              </div>
              <div className="flex gap-x-2 relative">
                <h1 className="text-[#595959] text-xs font-medium">
                  Commission:
                </h1>
                <input
                  type="number"
                  min={0}
                  max={100}
                  name="commission"
                  id="commission"
                  className="border-b w-[110px]  border-[#97979A]  outline-none "
                  onChange={handleChange}
                />
                <span className="absolute right-0 text-[#97979A] pr-2">%</span>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <div className="flex gap-x-3">
                  <input
                    type="checkbox"
                    name="accessListForInvestment"
                    id="accessListForInvestment"
                    onChange={handleChecked}
                    checked={true}
                  />{" "}
                  <span>
                    This plan allows you to access the list for investment
                  </span>
                </div>
                <div className="flex gap-x-3">
                  <input
                    type="checkbox"
                    name="passbookAccount"
                    id="passbookAccount"
                    onChange={handleChecked}
                    checked={false}
                  />{" "}
                  <span>Passbook account</span>
                </div>
              </div>
              <button
                type="button"
                className="bg-[#DD9A19] text-white px-8 rounded-lg shadow-md"
                disabled
              >
                Delete the Plan
              </button>
            </div>
          </div>
        </div>
        {/* <hr />  */}
        <div className="p-5">
          <div className="border-b border-gray-500"></div>
          <div className="my-5 text-[#595959] flex items-center justify-between gap-x-10 px-5">
            <div>
              <div className="flex gap-x-3">
                <input
                  type="checkbox"
                  name="displayPlanInClient"
                  id="displayPlanInClient"
                  onChange={handleChecked}
                  checked={true}
                />{" "}
                <span>Display this plan in client/background-plans</span>
              </div>
              <div className="flex gap-x-3 my-2">
                <input
                  type="checkbox"
                  name="accountStatus"
                  id="accountStatus"
                  onChange={handleChecked}
                  checked={true}
                />{" "}
                <span>Account status</span>
              </div>
              <div className="flex gap-x-3 mb-3">
                <input
                  type="checkbox"
                  name="totalAmountInvested"
                  id="totalAmountInvested"
                  onChange={handleChecked}
                  checked={true}
                />{" "}
                <span>Total amount invested</span>
              </div>
              <div className="flex gap-x-3">
                <input
                  type="checkbox"
                  name="totalPerformance"
                  id="totalPerformance"
                  onChange={handleChecked}
                  checked={true}
                />{" "}
                <span>Total Performance</span>
              </div>
              <div className="flex gap-x-3">
                <input
                  type="checkbox"
                  name="withdraw"
                  id="withdraw"
                  onChange={handleChecked}
                  checked={true}
                />{" "}
                <span>Withdraw</span>
              </div>
              <div className="flex gap-x-3">
                <input
                  type="checkbox"
                  name="add"
                  id="add"
                  onChange={handleChecked}
                  checked={true}
                />{" "}
                <span>Add</span>
              </div>
            </div>
            <div>
              <div className="flex gap-x-3">
                <input
                  type="checkbox"
                  name="generalInformation"
                  id="generalInformation"
                  onChange={handleChecked}
                  checked={true}
                />{" "}
                <span>General Information</span>
              </div>
              <div className="flex gap-x-3 my-2">
                <input
                  type="checkbox"
                  name="history"
                  id="history"
                  onChange={handleChecked}
                  checked={true}
                />{" "}
                <span>History</span>
              </div>
              <div className="flex gap-x-3 mb-3">
                <input
                  type="checkbox"
                  name="youAdvisor"
                  id="youAdvisor"
                  onChange={handleChecked}
                  checked={true}
                />{" "}
                <span>You Advisor</span>
              </div>
              <div className="flex gap-x-3">
                <input
                  type="checkbox"
                  name="investments"
                  id="investments"
                  onChange={handleChecked}
                  checked={true}
                />{" "}
                <span>Investments</span>
              </div>
            </div>
            <div className="self-end">
              <button
                type="submit"
                className="bg-[#0000FF] text-white px-6 py-3 rounded-lg shadow-md"
              >
                Add this Plan
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CurrentPlans;
