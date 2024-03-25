import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodbConnect";
import Withdrawal from "../../../../models/withdrawal";

export async function POST(req) {
  const data = await req.json();
  // console.log(data);

  const withdrawlData = {
    clientName: data?.clientName,
    clientEmail: data?.email,
    clientId: data?.clientId,
    planTitle: data?.planTitle,
    planId: data?.planId,
    withdrawalAmount: data?.amount,
  };
  try {
    await connectMongoDB();

    await Withdrawal.create(withdrawlData);

    return NextResponse.json(
      { message: "Successfully add withdrawl request." },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to add withdrawl request due to server error.",
        error: error,
      },
      { status: 500 }
    );
  }
}
