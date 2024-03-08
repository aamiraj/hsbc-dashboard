"use client";

import React from "react";
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
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const getOrCreateTooltip = (chart) => {
  let tooltipEl = chart.canvas.parentNode.querySelector("div");

  if (!tooltipEl) {
    tooltipEl = document.createElement("div");
    tooltipEl.classList.add("line_tooltip");

    const table = document.createElement("table");

    tooltipEl.appendChild(table);
    chart.canvas.parentNode.appendChild(tooltipEl);
  }

  return tooltipEl;
};

const externalTooltipHandler = (context) => {
  // Tooltip Element
  const { chart, tooltip } = context;
  const tooltipEl = getOrCreateTooltip(chart);

  // Hide if no tooltip
  if (tooltip.opacity === 0) {
    tooltipEl.style.opacity = 0;
    return;
  }

  // Set Text
  if (tooltip.body) {
    const bodyLines = tooltip.body.map((b) => b.lines);

    const tableHead = document.createElement("thead");

    const tableBody = document.createElement("tbody");
    bodyLines.forEach((body, i) => {
      const tr = document.createElement("tr");
      tr.style.backgroundColor = "inherit";
      tr.style.color = "black";
      tr.style.borderWidth = 0;

      const td = document.createElement("td");
      td.style.borderWidth = 0;

      const text = document.createTextNode(body);

      td.appendChild(text);

      tr.appendChild(td);
      tableBody.appendChild(tr);
    });

    const tableRoot = tooltipEl.querySelector("table");

    // Remove old children
    while (tableRoot.firstChild) {
      tableRoot.firstChild.remove();
    }

    // Add new children
    tableRoot.appendChild(tableHead);
    tableRoot.appendChild(tableBody);
  }

  const { offsetLeft: positionX, offsetTop: positionY } = chart.canvas;

  // Display, position, and set styles for font
  tooltipEl.style.opacity = 1;
  tooltipEl.style.left = positionX + tooltip.caretX + "px";
  tooltipEl.style.top = positionY + tooltip.caretY + "px";
  tooltipEl.style.font = tooltip.options.bodyFont.string;
  tooltipEl.style.padding =
    tooltip.options.padding + "px " + tooltip.options.padding + "px";
};

export const options = {
  elements: {
    point: {
      radius: 0,
      hoverRadius: 3,
    },
    line: {
      cubicInterpolationMode: "monotone",
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    tooltip: {
      enabled: false,
      position: "nearest",
      external: externalTooltipHandler,
    },
    interaction: {
        mode: 'nearest'
    }
  },
  scales: {
    x: {
      type: "category",
      axis: "x",
      position: "top",
      display: true,
      grid: {
        display: true,
      },
      border: {
        dash: [10, 5],
      },
      ticks: {
        autoSkip: true,
        maxRotation: 0,
        maxTicksLimit: 6,
      },
    },
    y: {
      type: "linear",
      axis: "y",
      display: false,
      grid: {
        display: false,
      },
    },
  },
};

const labels = [
  "8:00",
  "9:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Sales",
      data: labels.map(() => faker.number.int({ min: 0, max: 50 })),
      borderColor: "rgba(4, 231, 98, 1)",
      backgroundColor: "rgba(4, 231, 98, 0.5)",
      tension: 0.5,
    },
    {
      label: "Purchases",
      data: labels.map(() => faker.number.int({ min: 0, max: 50 })),
      borderColor: "rgba(255, 113, 91, 1)",
      backgroundColor: "rgba(255, 113, 91, 0.5)",
      tension: 0.5,
    },
  ],
};

export function LineChart() {
  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
}
