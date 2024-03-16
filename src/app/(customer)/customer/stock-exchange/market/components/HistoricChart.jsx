"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  TimeSeriesScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "chartjs-adapter-date-fns";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  TimeSeriesScale,
  Title,
  Tooltip,
  Legend,
  {
    id: "candlestick",
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const {
        ctx,
        data,
        chartArea: { top, bottom, right, left, width, height },
        scales: { x, y },
      } = chart;

      ctx.save();
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = "rgba(0,0,0,1)";

      data.datasets[0].data.forEach((datapoint, index) => {
        // stick on the top
        ctx.beginPath();
        ctx.moveTo(
          chart.getDatasetMeta(0).data[index].x,
          chart.getDatasetMeta(0).data[index].y
        );
        ctx.lineTo(
          chart.getDatasetMeta(0).data[index].x,
          y.getPixelForValue(data.datasets[0].data[index].h)
        );
        ctx.stroke();

        // stick on the bottom
        ctx.beginPath();
        ctx.moveTo(
          chart.getDatasetMeta(0).data[index].x,
          chart.getDatasetMeta(0).data[index].y
        );
        ctx.lineTo(
          chart.getDatasetMeta(0).data[index].x,
          y.getPixelForValue(data.datasets[0].data[index].l)
        );
        ctx.stroke();
      });
    },
  }
);

const options = {
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  parsing: {
    xAxisKey: "x",
    yAxisKey: "s",
  },
  scales: {
    x: {
      type: "timeseries",
      time: {
        unit: "day",
      },
    },
    y: {
      beginAtZero: false,
      grace: "75%",
    },
  },
};

const HistoricChart = ({ singleStock }) => {
  const [days, setDays] = useState(30);
  const currency = "usd";
  const [singleStockData, setSingleStockData] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleDays = (e) => {
    setDays(e.target.value);
  };

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
        // console.log(data.slice(-60));
        setSingleStockData(data);
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
    <>
      <div className="w-full p-4 flex items-center justify-around gap-4 ">
        <div>
          <label htmlFor="days">Days: </label>
          <select
            name="days"
            id="days"
            className="outline-0 bg-slate-100 px-4 py-1 rounded-lg"
            defaultValue={days}
            onChange={handleDays}
          >
            <option value={1}>1 day</option>
            <option value={7}>7 days</option>
            <option value={14}>14 days</option>
            <option value={30}>1 month</option>
            <option value={90}>3 months</option>
            <option value={180}>6 months</option>
            <option value={365}>12 months</option>
          </select>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div>
        <Bar
          data={{
            datasets: [
              {
                data: singleStockData?.slice(-days)?.map((stock) => {
                  const time = stock?.date.split("-").reverse().join("-");

                  return {
                    x: new Date(time),
                    o: stock?.open,
                    h: stock?.high,
                    l: stock?.low,
                    c: stock?.close,
                    s: [stock?.open, stock?.close],
                  };
                }),
                backgroundColor: function (ctx) {
                  const {
                    raw: { o, c },
                  } = ctx;
                  let color;
                  if (o > c) {
                    color = "rgba(255, 0, 0, 1)";
                  } else {
                    color = "rgba(0, 255, 0, 1)";
                  }
                  return color;
                },
                borderColor: "rgba(0, 0, 0, 1)",
                borderWidth: 0.5,
                borderSkipped: false,
              },
            ],
          }}
          options={options}
        />
      </div>
    </>
  );
};

export default HistoricChart;

{
  /* <Line
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
/>; */
}
