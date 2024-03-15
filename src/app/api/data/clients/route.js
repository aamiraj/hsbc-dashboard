import { NextResponse } from "next/server";
import {connectMongoDB} from "../../../../lib/mongodbConnect";
import User from "../../../../models/user";

export async function GET() {
  try {
    await connectMongoDB();
    const allClients = await User.find(
      {},
      "fullname email phone date attribution lastLogInAt campaignBy countryFrom"
    ).exec();

    return NextResponse.json({ data: allClients }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
