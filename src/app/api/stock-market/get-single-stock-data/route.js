import { NextResponse } from "next/server";
import { HistoricalChart } from "../../../../lib/stocksApi";

export async function POST(req) {
  const { singleStock } = await req.json();

  const res = await fetch(HistoricalChart(singleStock), {
    headers: {
      "X-RapidAPI-Key": process.env.X_RapidAPI_Key,
      "X-RapidAPI-Host": process.env.X_RapidAPI_Host,
    },
  });
  const data = await res.json();

  return NextResponse.json({ data });
}
