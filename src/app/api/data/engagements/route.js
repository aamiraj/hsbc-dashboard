import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodbConnect";
import Client from "../../../../models/client";

export async function GET() {
  try {
    await connectMongoDB();
    const members = (await Client.find({})).length;
    const actives = (await Client.find({ active: true })).length;
    const customers = await Client.countDocuments({ role: "customer" });
    const engagements = {
      trendUp: true,
      percent: 10.0,
      customers: customers,
      members: members,
      actives: actives,
    };
    return NextResponse.json({ data: engagements }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
