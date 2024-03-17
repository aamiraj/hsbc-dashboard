"use client";

import React, { useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
// Setup the localizer by providing the moment (or globalize, or Luxon) Object
// to the correct localizer.
moment.locale("en-Uk");
const localizer = momentLocalizer(moment); // or globalizeLocalizer
// const myEventsList = [
//   {
//     email: "miraj2465@gmail.com",
//     title: "Meeting",
//     start: new Date("2024-03-18"),
//     end: new Date("2024-03-18"),
//     allDay: true,
//     description: "Meeting with john",
//   },
//   {
//     email: "miraj2465@gmail.com",
//     title: "Flight to US",
//     start: new Date("2024-03-19T16:00:00+06:00"),
//     end: new Date("2024-03-19T17:00:00+06:00"),
//     allDay: false,
//     description: "",
//   },
// ];

const BigCalendar = ({ events }) => {
  const myEvents = events?.map((event) => {
    return {
      ...event,
      start: new Date(event.start),
      end: new Date(event.end),
    };
  });

  return (
    <div className="h-80">
      <Calendar
        views={["day", "week", "month"]}
        selectable
        localizer={localizer}
        defaultView="month"
        events={myEvents}
        style={{ height: 500 }}
      />
    </div>
  );
};

export default BigCalendar;
