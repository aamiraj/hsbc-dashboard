import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
};

export const data = {
  labels: [],
  datasets: [
    {
      label: "",
      data: [20, 40, 40],
      backgroundColor: [
        "rgba(255, 0, 122, 1)",
        "rgba(70, 35, 233, 1)",
        "rgba(241, 239, 251, 1)",
      ],
      cutout: "60%",
      radius: 90,
      animateScale: true,
      hoverBorderWidth: 10,
      hoverBackgroundColor: [
        "rgba(255, 0, 122, 1)",
        "rgba(70, 35, 233, 1)",
        "rgba(241, 239, 251, 1)",
      ],
      hoverBorderColor: [
        "rgba(255, 0, 122, 1)",
        "rgba(70, 35, 233, 1)",
        "rgba(241, 239, 251, 1)",
      ],
    },
  ],
};

const Dougnutchart = () => {
  return (
    <div className="relative w-full h-full p-4 flex justify-center items-center">
      <p className="flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-base font-bold">
        65%
        <span className="text-xs">Total Online</span>
        <span className="text-xs">Member</span>
      </p>
      <Doughnut options={options} data={data} />
    </div>
  );
};

export default Dougnutchart;
