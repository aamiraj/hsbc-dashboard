"use client";

import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

// Setup the localizer by providing the moment (or globalize, or Luxon) Object
// to the correct localizer.
moment.locale("en-Uk");
const localizer = momentLocalizer(moment); // or globalizeLocalizer
const myEventsList = [{}];

const GetOverYourself = () => {
  return (
    <div className="p-8">
      <div className="h-80">
        <Calendar
          views={["week", "month", "day"]}
          selectable
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={myEventsList}
          style={{ height: 500 }}
        />
      </div>
    </div>
  );
};

export default GetOverYourself;
