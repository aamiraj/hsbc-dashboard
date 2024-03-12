import { NextResponse } from "next/server";
import { HistoricalChart } from "../../../../lib/cryptoApi";

export async function POST(req) {
  const { singleCoin } = await req.json();
  
  const currency = "usd";
  const res = await fetch(HistoricalChart(singleCoin, currency));
  const data = await res.json();

  return NextResponse.json({ data });
}
