import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodbConnect";
import Plan from "../../../../models/plan";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function POST(req) {
  const plan = await req.json();

  //   console.log(plan);

  try {
    await connectMongoDB();
    await Plan.create(plan);

    // revalidatePath(`${process.env.PROD_URL}dashboard/get-over-yourself`);
    // redirect(`${process.env.PROD_URL}dashboard/get-over-yourself`);
    return NextResponse.json(
      { message: "Successfully added a plan." },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to add the plan due to server error." },
      { status: 500 }
    );
  }
}

export async function GET(req) {
  try {
    // await connectMongoDB();

    // const allEvents = await Event.find({ email });
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
      { message: "Successfully fetched plan." },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch plans due to server error." },
      { status: 500 }
    );
  }
}
