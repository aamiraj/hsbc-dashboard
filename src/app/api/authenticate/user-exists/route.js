import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodbConnect";
import User from "../../../../models/user";

export async function POST(req) {
  try {
    const { email } = await req.json();
    await connectMongoDB();
    const user = await User.findOne({ email }).select("_id");
    // console.log("user: ", user);
    return NextResponse.json(
      { message: "User with this email already exists.", user },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong.", error: error },
      { status: 500 }
    );
  }
}
