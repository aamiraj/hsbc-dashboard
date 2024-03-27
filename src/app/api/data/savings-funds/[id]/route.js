import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../../lib/mongodbConnect";
import SavingsFund from "../../../../../models/savingsFund";

export async function GET(req, { params }) {
  const { id } = params;
  try {
    await connectMongoDB();

    const savingsFundDetails = await SavingsFund.findById({ _id: id });
    return NextResponse.json(
      { message: "Fetched data successful.", data: savingsFundDetails },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Server error.", error: error },
      { status: 500 }
    );
  }
}
