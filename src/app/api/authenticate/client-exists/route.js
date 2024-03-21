import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodbConnect";
import Client from "../../../../models/client";

export async function POST(req) {
  try {
    const { email } = await req.json();
    await connectMongoDB();
    const client = await Client.findOne({ email }).select("_id");
    // console.log("user: ", user);
    return NextResponse.json(
      { message: "User with this email already exists.", client },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong.", error: error },
      { status: 500 }
    );
  }
}
