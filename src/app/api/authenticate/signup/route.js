import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodbConnect";
import User from "../../../../models/user";
import ActivateToken from "../../../../models/activateToken";
import { randomUUID } from "crypto";
import sendVerificationEmail from "../../../../lib/sendVerificationEmail";

export async function POST(req) {
  try {
    const { fullname, email, psw: password } = await req.json();
    const user = { fullname, email, password };
    // console.log({ fullname, email, password });
    await connectMongoDB();
    const newUser = await User.create(user);
    const token = `${randomUUID()}${randomUUID()}`.replace(/-/g, "");

    await ActivateToken.create({
      token,
      userId: newUser._id,
    });

    await sendVerificationEmail(email, fullname, token);

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
