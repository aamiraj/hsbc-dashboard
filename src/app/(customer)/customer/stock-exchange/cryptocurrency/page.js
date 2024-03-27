"use client";

import React, { useEffect, useState } from "react";
import { PiCurrencyDollarBold } from "react-icons/pi";
import HistoricChart from "./components/HistoricChart";

const gridLayout = {
  display: "grid",
  gridTemplateColumns: "auto 70%",
  gap: "2rem",
};

const currencyWithCommas = (string = "") =>
  string.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

async function getData(url) {
  const res = await fetch(url);

  if (!res.ok) {
    // throw new Error("Failed to fetch data");
    return;
  }

  return res.json();
}

const CryptoCurrencyData = () => {
  const [allCoinsData, setAllCoinsData] = useState([]);
  const [singleCoin, setSingleCoin] = useState("bitcoin");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getData("/api/cryptocurrency/get-all-coins-data").then(({ data }) => {
      setAllCoinsData(data);
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
        <div className="p-8 rounded-lg bg-white shadow-lg">
          <p className="text-xl font-bold pt-2 pb-4">Wallets</p>
          <div>
            {allCoinsData.length <= 0 ? (
              <p>No Data</p>
            ) : (
              allCoinsData?.map((d, i) => (
                <button
                  onClick={() => setSingleCoin(d?.id)}
                  type="button"
                  key={i}
                  className="w-full py-2 flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-md shadow-lg flex items-center justify-center">
                    <img src={d?.image} alt={d?.name} width={32} height={32} />
                  </div>
                  <div className="font-bold w-full flex items-center justify-between gap-4">
                    <div>
                      <p className="text-lest">{d?.name}</p>
                      <p className="text-left text-xs font-normal">
                        {d?.symbol}
                      </p>
                    </div>
                    <div>
                      <p className="text-right flex items-center">
                        <PiCurrencyDollarBold />
                        {currencyWithCommas(d?.current_price)}
                      </p>
                      <p
                        className="text-right"
                        style={
                          d?.price_change_percentage_24h > 0
                            ? { color: "#5CD124" }
                            : { color: "#EB5B5B" }
                        }
                      >
                        {d.price_change_percentage_24h > 0
                          ? "+" +
                            d?.price_change_percentage_24h.toFixed(2) +
                            "%"
                          : d?.price_change_percentage_24h.toFixed(2) + "%"}
                      </p>
                    </div>
                  </div>
                </button>
              ))
            )}
          </div>
        </div>
        <div>
          {allCoinsData
            ?.filter((coin) => coin?.id === singleCoin)
            ?.map((coin, i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow-lg w-full px-4 py-2 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-md shadow-lg flex items-center justify-center">
                  <img
                    src={coin?.image}
                    alt={coin?.name}
                    width={32}
                    height={32}
                  />
                </div>
                <div className="font-bold w-full flex items-center justify-between gap-4">
                  <div>
                    <p>{coin?.name}</p>
                    <p>{coin?.symbol}</p>
                  </div>
                  <div>
                    <p className="text-right flex items-center">
                      <PiCurrencyDollarBold />
                      {currencyWithCommas(coin?.current_price)}
                    </p>
                    <p
                      className="text-right"
                      style={
                        coin?.price_change_percentage_24h > 0
                          ? { color: "#5CD124" }
                          : { color: "#EB5B5B" }
                      }
                    >
                      {coin?.price_change_percentage_24h > 0
                        ? "+" +
                          coin?.price_change_percentage_24h.toFixed(2) +
                          "%"
                        : coin?.price_change_percentage_24h.toFixed(2) + "%"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          <div className="p-8 my-8 bg-white rounded-lg shadow-lg">
            <HistoricChart singleCoin={singleCoin} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoCurrencyData;
