import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodbConnect";
import Deposit from "../../../../models/deposit";

export async function POST(req) {
  const data = await req.json();
  // console.log(data);

  const addFundData = {
    clientName: data?.clientName,
    clientEmail: data?.email,
    clientId: data?.clientId,
    planTitle: data?.planTitle,
    planId: data?.planId,
    depositAmount: data?.amount,
  };
  try {
    await connectMongoDB();

    await Deposit.create(addFundData);

    return NextResponse.json(
      { message: "Successfully add deposit request." },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to add deposit request due to server error.",
        error: error,
      },
      { status: 500 }
    );
  }
}
