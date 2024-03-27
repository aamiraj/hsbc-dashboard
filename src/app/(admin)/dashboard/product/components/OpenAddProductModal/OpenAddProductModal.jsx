"use client";

import React, { useState } from "react";
import styles from "./OpenAddProductModal.module.css";
import { useSession } from "next-auth/react";
import PhotoInput from "../../../client-prospect/components/PhotoInput/PhotoInput";
import toast from "react-hot-toast";

const categories = ["Security", "Accomodation", "Youth"];

const rateFrequency = [
  {
    frequency: "Each day",
    default: false,
  },
  {
    frequency: "Monthly",
    default: true,
  },
  {
    frequency: "Each quarter",
    default: false,
  },
  {
    frequency: "Annually",
    default: false,
  },
];

const release = [
  {
    time: "Interest is paid regularly, the entire amount invested - at the last due date",
    default: true,
  },
  {
    time: "In full at the last due date",
    default: false,
  },
];

const calculationMethod = [
  {
    method: "Interest calculated on the total amount invested",
    default: true,
  },
  {
    method: "Interest calculated on the amount invested not repaid",
    default: false,
  },
  {
    method: "Interest calculated on the repayment deadline",
    default: false,
  },
  {
    method: "Interest added to capital",
    default: false,
  },
];

const OpenAddProductModal = ({ id }) => {
  const [inputs, setInputs] = useState({
    alreadyCollected: 0,
    applicablePeriod: 0,
    display: "show",
    firstDueDate: new Date().toLocaleDateString("en-UK"),
    fromAmount: 0,
    interestRate: 0.0,
    maximumAccepted: 0,
    method: "Interest calculated on the total amount invested",
    minimumAccepted: 0,
    projectDesc: "",
    projectSubtitle: "",
    projectTitle: "",
    projectCategory: "Security",
    rateFrequency: "Monthly",
    release:
      "Interest is paid regularly, the entire amount invested - at the last due date",
    toAmount: 0,
    totalToCollect: 0,
  });
  const [checked, setChecked] = useState({
    mostRecommended: true,
    mostPopular: true,
    newProduct: true,
  });
  const [photo, setPhoto] = useState(null);
  const { data } = useSession();
  const email = data?.user?.email;

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log({ [name]: value });

    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleChecked = (e) => {
    const name = e.target.name;
    const checked = e.target.checked;
    setChecked((prev) => ({ ...prev, [name]: checked }));
  };

  const handlePhotoUpload = (e) => {
    setPhoto(e.target.value[0]);
    // then do the uploading to any cloud storage and get the url
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log({ ...inputs, ...checked, photo: "" });
    // making an api request to the server to store the details
    if (email) {
      fetch("/api/data/savings-funds", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ ...inputs, ...checked, photo: "" }),
      })
        .then((res) => {
          if (!res.ok) {
            toast.error("Error occured on server.");
            return;
          }
          toast.success("Successfully added to database.");
        })
        .catch((error) => console.log(error));
    } else {
      toast.error("Try again later.");
    }
  };

  const handleCloseModal = (id) => {
    const modal = document.getElementById(id);
    modal.style.display = "none";
  };

  return (
    <>
      <div id={id} className={styles.modal}>
        <div className={styles.modal_content}>
          <div className={styles.modal_header}>
            <span className={styles.close} onClick={() => handleCloseModal(id)}>
              &times;
            </span>
            <h2 className="text-center text-3xl font-semibold py-2">
              Add Savings fund
            </h2>
          </div>
          <div className={styles.modal_body}>
            <form onSubmit={handleSubmit}>
              <div className="py-4">
                <label htmlFor="category" className="text-lg">
                  Category
                </label>
                <select
                  name="projectCategory"
                  id="projectCategory"
                  className="outline-none focus:outline-none w-full border-b py-2"
                  defaultValue={inputs.projectCategory}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select category</option>
                  {categories.map((category, i) => (
                    <option key={i} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div className="py-4">
                <label htmlFor="title" className="text-lg">
                  Title
                </label>
                <input
                  type="text"
                  id="projectTitle"
                  name="projectTitle"
                  className="outline-none focus:outline-none w-full border-b py-2"
                  placeholder="Type here"
                  defaultValue={inputs.projectTitle}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="py-4">
                <label htmlFor="subtitle" className="text-lg">
                  Subtitle
                </label>
                <input
                  type="text"
                  id="projectSubtitle"
                  name="projectSubtitle"
                  className="outline-none focus:outline-none w-full border-b py-2"
                  placeholder="Type here"
                  defaultValue={inputs.projectSubtitle}
                  onChange={handleChange}
                  required={false}
                />
              </div>
              <PhotoInput
                id={"productPhoto"}
                label={"Photo"}
                handlePhoto={handlePhotoUpload}
              />
              <div className="py-4">
                <label htmlFor="desc" className="font-bold text-base">
                  Description
                </label>
                <textarea
                  id="projectDesc"
                  name="projectDesc"
                  rows={4}
                  className="w-full border outline-none focus:outline-none rounded-lg p-2"
                  placeholder="Type here"
                  defaultValue={inputs.projectDesc}
                  onChange={handleChange}
                  required={false}
                ></textarea>
              </div>
              <div className="py-4">
                <label htmlFor="objective" className="text-lg">
                  Objective of the collection
                </label>
                <input
                  type="number"
                  id="totalToCollect"
                  name="totalToCollect"
                  min={0}
                  className="outline-none focus:outline-none w-full border-b py-2"
                  placeholder="1000000000000$"
                  defaultValue={inputs.totalToCollect}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="py-4">
                <label htmlFor="alreadyInvested" className="text-lg">
                  Amount already invested outside the platform
                </label>
                <input
                  type="number"
                  id="alreadyCollected"
                  name="alreadyCollected"
                  min={0}
                  className="outline-none focus:outline-none w-full border-b py-2"
                  placeholder="50000000$"
                  defaultValue={inputs.alreadyCollected}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="py-4">
                <label htmlFor="minimumAccepted" className="text-lg">
                  Minumum amount accepted
                </label>
                <input
                  type="number"
                  id="minimumAccepted"
                  name="minimumAccepted"
                  min={0}
                  className="outline-none focus:outline-none w-full border-b py-2"
                  placeholder="100$"
                  defaultValue={inputs.minimumAccepted}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="py-4">
                <label htmlFor="maximumAccepted" className="text-lg">
                  Maximum amount accepted
                </label>
                <input
                  type="number"
                  id="maximumAccepted"
                  name="maximumAccepted"
                  min={0}
                  className="outline-none focus:outline-none w-full border-b py-2"
                  placeholder="1000000000$"
                  defaultValue={inputs.maximumAccepted}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="w-full flex items-center justify-between gap-4">
                <div className="py-4">
                  <label htmlFor="confidenceIndex" className="text-lg">
                    Confidence index
                  </label>
                  <input
                    type="number"
                    id="confidenceIndex"
                    name="confidenceIndex"
                    min={0}
                    className="outline-none focus:outline-none w-full border-b py-2"
                    placeholder="100%"
                    defaultValue={inputs.confidenceIndex}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="py-4">
                  <label htmlFor="endOfSubscription" className="text-lg">
                    End of Subscription
                  </label>
                  <input
                    type="date"
                    id="endOfSubscription"
                    name="endOfSubscription"
                    className="outline-none focus:outline-none w-full border-b py-2"
                    placeholder="mm/dd/yyyy"
                    defaultValue={inputs.endOfSubscription}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <p className="py-4 text-2xl text-center">
                Enter the applicable rate
              </p>
              <div className="w-full flex items-center justify-between gap-4">
                <div className="py-4">
                  <label htmlFor="fromAmount" className="text-lg">
                    From
                  </label>
                  <input
                    type="number"
                    id="fromAmount"
                    name="fromAmount"
                    min={0}
                    className="outline-none focus:outline-none w-full border-b py-2"
                    placeholder="1000$"
                    defaultValue={inputs.fromAmount}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="py-4">
                  <label htmlFor="toAmount" className="text-lg">
                    To
                  </label>
                  <input
                    type="number"
                    id="toAmount"
                    name="toAmount"
                    min={0}
                    className="outline-none focus:outline-none w-full border-b py-2"
                    placeholder="10000000$"
                    defaultValue={inputs.toAmount}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="w-full flex items-center justify-between gap-4">
                <div className="py-4">
                  <label htmlFor="interestRate" className="text-lg">
                    Interest rate
                  </label>
                  <input
                    type="number"
                    id="interestRate"
                    name="interestRate"
                    min={0}
                    step={0.01}
                    className="outline-none focus:outline-none w-full border-b py-2"
                    placeholder="6.8%"
                    defaultValue={inputs.interestRate}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="py-4">
                  <label htmlFor="applicablePeriod" className="text-lg">
                    Applicable
                  </label>
                  <input
                    type="number"
                    id="applicablePeriod"
                    name="applicablePeriod"
                    min={0}
                    className="outline-none focus:outline-none w-full border-b py-2"
                    placeholder="12 Months"
                    defaultValue={inputs.applicablePeriod}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="py-4">
                  <label htmlFor="firstDueDate" className="text-lg">
                    First due date
                  </label>
                  <input
                    type="date"
                    id="firstDueDate"
                    name="firstDueDate"
                    className="outline-none focus:outline-none w-full border-b py-2"
                    placeholder="mm/dd/yyyy"
                    defaultValue={inputs.firstDueDate}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="py-4">
                <div className="py-4">
                  <p className="text-lg">Rate frequency</p>
                  <div className="flex items-center justify-between gap-3">
                    {rateFrequency.map((frequency, i) => (
                      <div
                        key={`rate-${i}`}
                        className="flex items-center gap-2"
                      >
                        <input
                          type="radio"
                          name="rateFrequency"
                          id={frequency.frequency}
                          value={frequency.frequency}
                          defaultChecked={frequency.default}
                          onChange={handleChange}
                          required
                        />
                        <label htmlFor={frequency.frequency}>
                          {frequency.frequency}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="py-4">
                  <p className="text-lg">Release</p>
                  <div className="">
                    {release.map((rel, i) => (
                      <div
                        key={`rel-${i}`}
                        className="py-2 flex items-center gap-2"
                      >
                        <input
                          type="radio"
                          name="release"
                          id={rel.time}
                          value={rel.time}
                          defaultChecked={rel.default}
                          onChange={handleChange}
                          required
                        />
                        <label htmlFor={rel.time}>{rel.time}</label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="py-4">
                  <p className="text-lg">Interest calculation method</p>
                  <div className="">
                    {calculationMethod.map((method, i) => (
                      <div
                        key={`method-${i}`}
                        className="flex items-center gap-2 py-2"
                      >
                        <input
                          type="radio"
                          name="method"
                          id={method.method}
                          value={method.method}
                          defaultChecked={method.default}
                          onChange={handleChange}
                          required
                        />
                        <label htmlFor={method.method}>{method.method}</label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="py-4">
                <p className="text-lg py-2">Display</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      id="show"
                      name="display"
                      value={"show"}
                      defaultChecked={true}
                      onChange={handleChange}
                    />
                    <label htmlFor="show">Show</label>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      id="hide"
                      name="display"
                      value={"hide"}
                      defaultChecked={false}
                      onChange={handleChange}
                    />
                    <label htmlFor="hide">Hide</label>
                  </div>
                </div>
              </div>
              <div className="py-4">
                <p className="text-lg py-2">Popularity tag</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="mostRecommended"
                      name="mostRecommended"
                      defaultChecked={checked.mostRecommended}
                      onChange={handleChecked}
                    />
                    <label htmlFor="mostRecommended">Most recommended</label>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="mostPopular"
                      name="mostPopular"
                      defaultChecked={checked.mostPopular}
                      onChange={handleChecked}
                    />
                    <label htmlFor="mostPopular">Most popular</label>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="newProduct"
                      name="newProduct"
                      defaultChecked={checked.newProduct}
                      onChange={handleChecked}
                    />
                    <label htmlFor="newProduct">New</label>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center py-4">
                <button
                  type="submit"
                  className="bg-[#39de5d] rounded-full px-12 py-4 text-white text-base font-semibold"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default OpenAddProductModal;
