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

const HistoricChart = ({ singleCoin }) => {
  const [days, setDays] = useState(1);
  const currency = "usd";
  const [singleCoinData, setSingleCoinData] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleDays = (e) => {
    setDays(e.target.value);
  };

  useEffect(() => {
    setLoading(true);
    fetch("/api/cryptocurrency/get-coin-ohlc-data", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ singleCoin, days }),
    })
      .then((res) => res.json())
      .then(({ data }) => {
        console.log(data);
        setSingleCoinData(data);
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
    <>
      <div className="w-full p-8 flex items-center justify-around gap-4 ">
        <select
          name="days"
          id="days"
          className="outline-0 bg-slate-500 px-4 py-2"
          defaultValue={days}
          onChange={handleDays}
        >
          <option value={1}>1 day</option>
          <option value={7}>7 days</option>
          <option value={30}>1 month</option>
          <option value={90}>3 months</option>
          <option value={180}>6 months</option>
          <option value={365}>12 months</option>
        </select>
      </div>
      <div>
        <Bar
          data={{
            datasets: [
              {
                data: singleCoinData?.slice(-days)?.map((coin) => {
                  return {
                    x: new Date(coin[0]),
                    o: coin[1],
                    h: coin[2],
                    l: coin[3],
                    c: coin[4],
                    s: [coin[1], coin[4]],
                  };
                }),
                label: ``,
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

// line chart for market price
// <Line
//   data={{
//     labels: singleCoinData?.map((coin) => {
//       let date = new Date(coin[0]);
//       let time =
//         date.getHours() > 12
//           ? `${date.getHours() - 12}:${date.getMinutes()} PM`
//           : `${date.getHours()}:${date.getMinutes()} AM`;
//       return days === 1 ? time : date.toLocaleDateString();
//     }),

//     datasets: [
//       {
//         data: singleCoinData.map((coin) => coin[1]),
//         label: `Price ( Past ${days} Days ) in ${currency}`,
//         borderColor: "#EEBC1D",
//         backgroundColor: "#FFFFFF",
//       },
//     ],
//   }}
//   options={options}
// />;
