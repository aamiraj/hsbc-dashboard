import { NextResponse } from "next/server";
import { OhlcData } from "../../../../lib/cryptoApi";

export async function POST(req) {
  const { singleCoin, days } = await req.json();
  
  // const currency = "usd";
  const res = await fetch(OhlcData(singleCoin, days));
  const data = await res.json();

  return NextResponse.json({ data });
}
