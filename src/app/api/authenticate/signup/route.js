import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodbConnect";
import Client from "../../../../models/client";
import ActivateToken from "../../../../models/activateToken";
import { randomUUID } from "crypto";
import sendVerificationEmail from "../../../../lib/sendVerificationEmail";

export async function POST(req) {
  try {
    const { fullname, email, psw: password } = await req.json();
    const client = { fullname, email, password };
    // console.log({ fullname, email, password });
    await connectMongoDB();
    const newClient = await Client.create(client);
    const token = `${randomUUID()}${randomUUID()}`.replace(/-/g, "");

    await ActivateToken.create({
      token,
      userId: newClient._id,
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
