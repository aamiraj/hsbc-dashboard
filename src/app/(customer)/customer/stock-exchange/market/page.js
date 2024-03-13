"use client";

import React, { useEffect, useState } from "react";
import HistoricChart from "./components/HistoricChart";

const gridLayout = {
  display: "grid",
  gridTemplateColumns: "auto 70%",
  gap: "2rem",
};

async function getData(url) {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const StockMarket = () => {
  const [allStocksData, setAllStocksData] = useState([]);
  const [singleStock, setSingleStock] = useState("TM");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getData("/api/stock-market/get-all-stocks-data").then(({ data }) => {
      const { body } = data;
      setAllStocksData(body);
      setLoading(false);
    });
  }, []);

  if (loading)
    return (
      <div className="w-full h-screen flex items-center justify-center ">
        <p className="text-2xl font-bold text-red-500">Loading...</p>
      </div>
    );

  return (
    <div className="w-[90%] mx-auto py-10">
      <div style={gridLayout}>
        <div className="p-4 rounded-lg bg-white shadow-lg">
          <p className="text-xl font-bold pt-2 pb-4">Stock Markets</p>
          <div>
            {allStocksData.length <= 0 ? (
              <p>No Data</p>
            ) : (
              allStocksData?.map((stock, i) => (
                <button
                  onClick={() => setSingleStock(stock?.symbol)}
                  type="button"
                  key={i}
                  className="w-full my-2 px-2 py-2 bg-slate-100 rounded-lg"
                >
                  <div className="font-bold w-full grid grid-cols-2 gap-2">
                    <p>{stock?.symbol}</p>
                    <p>{stock?.lastsale}</p>
                    <p
                      style={
                        parseFloat(stock?.netchange) > 0
                          ? { color: "#5CD124" }
                          : { color: "#EB5B5B" }
                      }
                    >
                      {parseFloat(stock?.netchange) > 0
                        ? "+" + stock?.pctchange
                        : stock?.pctchange}
                    </p>
                    <p>{stock?.marketCap}</p>
                  </div>
                </button>
              ))
            )}
          </div>
        </div>
        <div>
          {allStocksData
            ?.filter((stock) => stock?.symbol === singleStock)
            ?.map((stock, i) => (
              <div
                key={i}
                className="w-full my-2 px-2 py-2 bg-white rounded-lg"
              >
                <div className="font-bold w-full grid grid-cols-2 gap-2">
                  <p className="flex items-center gap-2">
                    {stock?.name}{" "}
                    <span className="text-sm font-normal">{`${stock.symbol}`}</span>
                  </p>
                  <p>{stock?.lastsale}</p>
                  <p
                    style={
                      parseFloat(stock?.netchange) > 0
                        ? { color: "#5CD124" }
                        : { color: "#EB5B5B" }
                    }
                  >
                    {parseFloat(stock?.netchange) > 0
                      ? "+" + stock?.pctchange
                      : stock?.pctchange}
                  </p>
                  <p>{stock?.marketCap}</p>
                </div>
              </div>
            ))}
          <div className="p-8 my-8 bg-white rounded-lg shadow-lg">
            <HistoricChart singleStock={singleStock} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockMarket;
