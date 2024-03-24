import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../../lib/mongodbConnect";
import MoneyRecieved from "../../../../../models/moneyRecieved";
import Account from "../../../../../models/account";

export async function GET(req, { params }) {
  const id = params.id;

  try {
    await connectMongoDB();

    const allAccs = await MoneyRecieved.find({
      _id: id,
    });

    return NextResponse.json(
      { message: "Successfully fetched accounts.", data: allAccs },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to fetch accounts due to server error.",
        error: error,
      },
      { status: 500 }
    );
  }
}

export async function PUT(req, params) {
  const id = params.id;
  try {
    const data = await req.json();
    //   console.log(data);
    if (data?.status === "Payment recieved") {
      await connectMongoDB();

      const newDoc = await MoneyRecieved.findOneAndUpdate(
        { _id: id },
        { status: "Payment recieved" },
        { new: true }
      );

      const accData = {
        clientName: newDoc?.clientName,
        clientId: newDoc?.clientId,
        planTitle: newDoc?.planTitle,
        planId: newDoc?.planId,
        fundAvailable: 0,
        investedAmount: 0,
        totalPerformance: 0,
        status: "Approved",
      };

      await Account.create(accData);
    }

    return NextResponse.json(
      { message: "Successfully added a request." },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to add the request due to server error." },
      { status: 500 }
    );
  }
}
