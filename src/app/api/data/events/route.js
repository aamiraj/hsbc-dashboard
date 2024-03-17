import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodbConnect";
import Event from "../../../../models/event";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function POST(req) {
  const event = await req.json();

  let eventData;
  if (event.allDay) {
    eventData = {
      email: event.email,
      title: event.title,
      start: event.eventdate,
      end: event.eventdate,
      allDay: event.allDay,
      description: event.eventdesc,
    };
  } else {
    const startDate = getISOTime(
      event.eventdate,
      event.eventstarthour,
      event.eventstartminute,
      event.eventstartperiod
    );

    const endDate = getISOTime(
      event.eventdate,
      event.eventendhour,
      event.eventendminute,
      event.eventendperiod
    );

    eventData = {
      email: event.email,
      title: event.title,
      start: startDate,
      end: endDate,
      allDay: event.allDay,
      description: event.eventdesc,
    };
  }

  //   console.log(eventData);

  try {
    await connectMongoDB();

    const newevent = await Event.create(eventData);
    // console.log(newevent);

    // revalidatePath(`${process.env.PROD_URL}dashboard/get-over-yourself`);
    // redirect(`${process.env.PROD_URL}dashboard/get-over-yourself`);
    return NextResponse.json(
      { message: "Successfully added event." },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to add event due to server error." },
      { status: 500 }
    );
  }
}

export async function GET(req) {
  const email = await req.nextUrl.searchParams.get("email");
  // console.log(email);
  try {
    await connectMongoDB();

    const allEvents = await Event.find({ email });
    // const formattedEvents = allEvents.map((event) => {
    //   return {
    //     title: event.title,
    //     start: new Date(event.start),
    //     end: new Date(event.end),
    //     allDay: event.allDay,
    //     description: event.description,
    //   };
    // });
    // console.log(formattedEvents);

    return NextResponse.json(
      { message: "Successfully fetched events.", data: allEvents },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch events due to server error." },
      { status: 500 }
    );
  }
}

const getISOTime = (date, hh, mm, period) => {
  let hour;
  if (period === "PM") {
    hour = parseInt(hh) + 12 === 24 ? "00" : parseInt(hh) + 12;
  } else {
    hour = parseInt(hh) < 10 ? "0" + parseInt(hh) : hh;
  }

  const minute = parseInt(mm) < 10 ? "0" + parseInt(mm) : mm;

  const iso = `${date}T${hour}:${minute}:00+06:00`;
  return iso;
};
