import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodbConnect";
import Client from "../../../../models/client";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

    await connectMongoDB();

    const client = await Client.findOne(
      { email },
      "fullname email phone address city postCode birthDay countryFrom bankName iban swift"
    ).exec();

    return NextResponse.json({ data: client }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

export async function PUT(req) {
  try {
    const data = await req.json();
    // console.log(data);

    await connectMongoDB();

    const filter = { email: data.email };
    const doc = {
      fullname: data?.fullname,
      phone: data?.phone,
      address: data?.address,
      countryFrom: data?.countryFrom,
      city: data?.city,
      postCode: data?.postCode,
      birthDay: data?.birthDay,
      bankName: data?.bankName,
      iban: data?.iban,
      swift: data?.swift,
    };
    // console.log(doc)
    const newClient = await Client.findOneAndUpdate(filter, doc, { new: true });

    return NextResponse.json(
      { message: "Successfully User updated.", data: newClient },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to update user.", error: error },
      { status: 500 }
    );
  }
}
