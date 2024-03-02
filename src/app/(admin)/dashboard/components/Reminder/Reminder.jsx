import React from "react";

const reminder = [
  {
    title: "Book flights to Seattle",
    date: "2024-03-15T14:08:00Z",
  },
];

const formateTheDate = (t) => {
  const d = new Date(t);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = d.getDate();
  const month = months[d.getMonth()];
  const year = d.getFullYear();

  let hour;
  let part;
  if (d.getHours() === 0) {
    hour = "12";
    part = "AM";
  } else if (d.getHours() > 12) {
    hour =
      12 - d.getHours() < 10
        ? "0" + (12 - d.getHours()).toString()
        : "" + (12 - d.getHours()).toString();
    part = "PM";
  } else if (d.getHours() === 12) {
    hour = "" + d.getHours().toString();
    part = "PM";
  } else {
    hour = d.getHours() < 10 ? "0" + d.getHours().toString() : "" + d.getHours().toString();
    part = "AM";
  }
  const minute =
    d.getMinutes() < 10 ? "0" + d.getMinutes().toString() : "" + d.getMinutes().toString();

  const date = `${month} ${day}, ${year}`;
  const time = `${hour}:${minute}${part}`;

  return { date, time };
};

const ReminderList = ({ title, date, time }) => {
  return (
    <div className="bg-[#FAFBFD] p-6 my-4">
      <p>{title}</p>
      <p className="flex items-center gap-4 text-[10px]">
        <span className="w-2 h-2 rounded-full bg-[#F17105]"></span>
        <span>{date}</span>
        <span>/</span>
        <span>{time}</span>
      </p>
    </div>
  );
};

const Reminder = () => {
  const { date, time } = formateTheDate(reminder.date);
  return (
    <>
      {reminder.map((r, i) => (
        <ReminderList title={r.title} date={date} time={time} />
      ))}
    </>
  );
};

export default Reminder;
