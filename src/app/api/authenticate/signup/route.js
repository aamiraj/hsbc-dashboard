import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodbConnect";
import User from "../../../../models/user";

export async function POST(req) {
  try {
    const { fullname, email, psw: password } = await req.json();
    const user = { fullname, email, password };
    // console.log({ fullname, email, password });
    await connectMongoDB();
    await User.create(user);
    return NextResponse.json(
      { message: "User sign up successful" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "User sign up failed", error: error },
      { status: 500 }
    );
  }
}
