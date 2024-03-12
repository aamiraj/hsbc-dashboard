import Link from "next/link";
import React from "react";

const StockExchange = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Link href={"/customer/stock-exchange/cryptocurrency"}>
        Go to Cryptocurrency page to see the trends.
      </Link>
    </div>
  );
};

export default StockExchange;
