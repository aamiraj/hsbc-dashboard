import { NextResponse } from "next/server";
import { TrendingStocks } from "../../../../lib/stocksApi";

export async function GET() {
  const res = await fetch(TrendingStocks(), {
    headers: {
      "X-RapidAPI-Key": process.env.X_RapidAPI_Key,
      "X-RapidAPI-Host": process.env.X_RapidAPI_Host,
    },
  });
  const data = await res.json();

  return NextResponse.json({ data });
}
