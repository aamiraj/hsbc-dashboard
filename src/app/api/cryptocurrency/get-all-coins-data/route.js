import { NextResponse } from "next/server"
import { TrendingCoins } from "../../../../lib/cryptoApi";

export async function GET() {
    const currency = "usd";
    const res = await fetch(TrendingCoins(currency))
    const data = await res.json()
   
    return NextResponse.json({ data })
  }