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

const HistoricChart = ({ singleStock }) => {
  const days = 365;
  const currency = "usd";
  const [singleStockData, setSingleStockData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("/api/stock-market/get-single-stock-data", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ singleStock }),
    })
      .then((res) => res.json())
      .then(({ data: { body } }) => {
        const data = [];
        for (let obj in body) {
          data.push(body[obj]);
        }
        // console.log(data);
        setSingleStockData(data.slice(-days));
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, [singleStock]);

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
          labels: singleStockData?.map((stock) => stock?.date),
          datasets: [
            {
              data: singleStockData.map((stock) => stock?.close),
              label: `Price ( Past ${singleStockData?.length} Days ) in ${currency}`,
              borderColor: "#EEBC1D",
              backgroundColor: "#FFFFFF",
            },
          ],
        }}
        options={options}
      />
    </div>
  );
};

export default HistoricChart;
