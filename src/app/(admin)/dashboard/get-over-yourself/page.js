import React from "react";
import { PiPlusCircle } from "react-icons/pi";
import AddEvent from "./components/AddEvent/AddEvent";
import BigCalendar from "./components/BigCalendar/BigCalendar";
import Link from "next/link";
import { getServerSession } from "next-auth";
import authOptions from "../../../api/auth/[...nextauth]/authOptions";

const getEventsData = async (email) => {
  try {
    const res = await fetch(
      `${process.env.PROD_URL}api/data/events?email=${email}`,
      { cache: "no-store", next: { revalidate: 10 } }
    );
    const { data } = await res.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const GetOverYourself = async ({ searchParams }) => {
  const session = await getServerSession(authOptions);
  const allEvents = await getEventsData(session?.user?.email);

  const openModal = searchParams?.modal;
  return (
    <div className="p-8">
      <div className="w-max mb-4 flex items-center gap-4 px-4 py-2 border border-[#39de5d] rounded-lg">
        <p className="text-lg font-bold text-[#39de5d]">Add event</p>
        <Link type="button" href={"?modal=true"}>
          <PiPlusCircle style={{ width: 32, height: 32, color: "#39de5d" }} />
        </Link>
      </div>
      {openModal && <AddEvent id={"add-event"} />}
      <BigCalendar events={allEvents} />
    </div>
  );
};

export default GetOverYourself;
