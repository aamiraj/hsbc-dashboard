import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodbConnect";
import Account from "../../../../models/account";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");
  // console.log(email);
  try {
    await connectMongoDB();

    const allAccs = await Account.find({
      email: email,
    });

    return NextResponse.json(
      { message: "Successfully fetched accounts.", data: allAccs },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to fetch accounts due to server error.",
        error: error,
      },
      { status: 500 }
    );
  }
}
