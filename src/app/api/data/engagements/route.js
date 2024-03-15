import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodbConnect";
import User from "../../../../models/user";

export async function GET() {
  try {
    await connectMongoDB();
    const customers = await User.countDocuments({ role: "customer" });
    const engagements = { trendUp: true, percent: 10.0, stat: customers };
    return NextResponse.json({ data: engagements }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
