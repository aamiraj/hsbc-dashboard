import Image from "next/image";
import React from "react";

const Calendar = ({text}) => {
  return (
    <div className="datepicker-toggle border">
      <label
        htmlFor="assign"
        className="flex items-center justify-between gap-6"
      >
        <span className="text-[#878790]">{text}</span>
        <Image
          src={"/assets/Calendar.svg"}
          alt="Calender"
          width={16}
          height={16}
        />
      </label>
      <input id="assign" type="date" className="datepicker-input" />
    </div>
  );
};

export default Calendar;
