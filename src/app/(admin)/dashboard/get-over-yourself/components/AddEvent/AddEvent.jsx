"use client";

import React, { useState } from "react";
import styles from "./AddEvent.module.css";
import TextInput from "../../../client-prospect/components/TextInput/TextInput";
import TextAreaInput from "../../../client-prospect/components/TextAreaInput/TextAreaInput";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const AddEvent = ({ id }) => {
  const router = useRouter();
  const [inputs, setInputs] = useState({
    eventdate: new Date(),
    eventdesc: "",
    eventendhour: "",
    eventendminute: "",
    eventendperiod: "AM",
    eventstarthour: "",
    eventstartminute: "",
    eventstartperiod: "AM",
    title: "",
  });
  const [checked, setChecked] = useState(false);
  const { data } = useSession();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleChecked = () => {
    setChecked((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data?.user?.email) {
      await fetch("/api/data/events", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          allDay: checked,
          email: data?.user?.email,
          ...inputs,
        }),
      })
        .then((res) => {
          if (res?.ok) {
            router.refresh();
          }
        })
        .catch((error) => console.log(error));
    } else {
      console.log("Email is undefined, please refresh or log in again.");
    }
  };

  const handleClose = () => {
    router.back();
  };
  return (
    <div id={id} className={styles.modal}>
      <div className={styles.modal_content}>
        <div className={styles.modal_header}>
          <span className={styles.close} onClick={handleClose}>
            &times;
          </span>
          <h2>Add Event</h2>
        </div>
        <div className={styles.modal_body}>
          <form onSubmit={handleSubmit}>
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1">
                <TextInput
                  id={"title"}
                  type={"text"}
                  label={"Event Title"}
                  placeholder={"Meeting with John"}
                  value={""}
                  handleChange={handleChange}
                />
              </div>
              <div>
                <TextInput
                  id={"eventdate"}
                  type={"date"}
                  label={"Event Date"}
                  placeholder={"1/1/1970"}
                  value={""}
                  handleChange={handleChange}
                />
              </div>
            </div>
            <div className="w-max">
              <label
                htmlFor="allday"
                className={`font-bold text-lg ${styles.container}`}
              >
                All Day
                <input
                  type="checkbox"
                  id="allday"
                  name="allday"
                  onChange={handleChecked}
                />
                <span className={styles.checkmark}></span>
              </label>
            </div>
            {/* start time  */}
            <div className="flex gap-4 items-center justify-between">
              <div className="w-full my-2">
                <label htmlFor="eventstarthour" className="text-lg">
                  Event Start Hour
                </label>
                <input
                  onChange={handleChange}
                  type="number"
                  name="eventstarthour"
                  id="eventstarthour"
                  placeholder="Hour"
                  min={1}
                  max={12}
                  className="text-[#0d0d0d] border-b w-full py-2 my-2 outline-none"
                  disabled={checked}
                />
              </div>

              <div className="w-full my-2">
                <label htmlFor="eventstartminute" className="text-lg">
                  Event Start Minute
                </label>
                <input
                  onChange={handleChange}
                  type="number"
                  name="eventstartminute"
                  id="eventstartminute"
                  placeholder="Minute"
                  min={0}
                  max={59}
                  className="text-[#0d0d0d] border-b w-full py-2 my-2 outline-none"
                  disabled={checked}
                />
              </div>
              <div className="w-full my-2">
                <label htmlFor="eventstartperiod" className="text-lg">
                  Period
                </label>
                <select
                  id="eventstartperiod"
                  name="eventstartperiod"
                  onChange={handleChange}
                  className="text-[#0d0d0d] border-b w-full py-2 my-2 outline-none"
                  disabled={checked}
                >
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
              </div>
            </div>
            {/* end time  */}
            <div className="flex gap-4 items-center justify-between">
              <div className="w-full my-2">
                <label htmlFor="eventendhour" className="text-lg">
                  Event End Hour
                </label>
                <input
                  onChange={handleChange}
                  type="number"
                  name="eventendhour"
                  id="eventendhour"
                  placeholder="Hour"
                  min={1}
                  max={12}
                  className="text-[#0d0d0d] border-b w-full py-2 my-2 outline-none"
                  disabled={checked}
                />
              </div>

              <div className="w-full my-2">
                <label htmlFor="eventendminute" className="text-lg">
                  Event End Minute
                </label>
                <input
                  onChange={handleChange}
                  type="number"
                  name="eventendminute"
                  id="eventendminute"
                  placeholder="Minute"
                  min={0}
                  max={59}
                  className="text-[#0d0d0d] border-b w-full py-2 my-2 outline-none"
                  disabled={checked}
                />
              </div>
              <div className="w-full my-2">
                <label htmlFor="eventendperiod" className="text-lg">
                  Period
                </label>
                <select
                  id="eventendperiod"
                  name="eventendperiod"
                  onChange={handleChange}
                  className="text-[#0d0d0d] border-b w-full py-2 my-2 outline-none"
                  disabled={checked}
                >
                  <option value="AM">AM</option>
                  <option value="PM">PM</option>
                </select>
              </div>
            </div>
            <TextAreaInput
              id={"eventdesc"}
              label={"Description"}
              rows={1}
              handleChange={handleChange}
            />
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="px-4 py-2 my-2 bg-[#39de5d] font-semibold text-base rounded-lg"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
