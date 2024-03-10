"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const options = {
  elements: {
    point: {
      radius: 0,
    },
  },
};

const HistoricChart = ({ singleCoin }) => {
  const days = 365;
  const currency = "usd";
  const [singleCoinData, setSingleCoinData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("/api/cryptocurrency/get-single-coin-data", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ singleCoin }),
    })
      .then((res) => res.json())
      .then(({ data }) => {
        // console.log(data.prices);
        setSingleCoinData(data.prices);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [singleCoin]);

  if (loading)
    return (
      <div className="w-full h-screen flex items-center justify-center ">
        <p className="text-2xl font-bold text-red-500">Loading...</p>
      </div>
    );

  return (
    <div>
      <Line
        data={{
          labels: singleCoinData?.map((coin) => {
            let date = new Date(coin[0]);
            let time =
              date.getHours() > 12
                ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                : `${date.getHours()}:${date.getMinutes()} AM`;
            return days === 1 ? time : date.toLocaleDateString();
          }),

          datasets: [
            {
              data: singleCoinData.map((coin) => coin[1]),
              label: `Price ( Past ${days} Days ) in ${currency}`,
              borderColor: "#EEBC1D",
              backgroundColor: "#FFFFFF"
            },
          ],
        }}
        options={options}
      />
    </div>
  );
};

export default HistoricChart;
