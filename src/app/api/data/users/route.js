import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodbConnect";
import User from "../../../../models/user";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";

export async function POST(req) {
  const user = await req.json();

  //   console.log(user);

  try {
    await connectMongoDB();

    const hashedPassword = await bcrypt.hash(user.password, 12);
    user.password = hashedPassword;

    await User.create(user);
    // revalidatePath(`${process.env.PROD_URL}dashboard/get-over-yourself`);
    // redirect(`${process.env.PROD_URL}dashboard/get-over-yourself`);
    return NextResponse.json(
      { message: "Successfully added a user." },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to add the user due to server error." },
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
