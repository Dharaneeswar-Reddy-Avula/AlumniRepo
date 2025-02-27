import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import annotationPlugin from "chartjs-plugin-annotation";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  annotationPlugin
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "top",
      labels: {
        font: {
          size: 14,
        },
        color: "#333",
      },
    },
    title: {
      display: true,
      text: "Alumni Donations Over Time",
      font: {
        size: 20,
        weight: "bold",
      },
      color: "#333",
      align: "center",
    },
    annotation: {
      annotations: {
        donationTarget: {
          type: "line",
          yMin: 50,
          yMax: 50,
          borderColor: "red",
          borderWidth: 2,
          borderDash: [6, 6],
          label: {
            content: "Donation Target",
            enabled: true,
            position: "end",
            backgroundColor: "rgba(255, 0, 0, 0.8)",
            font: {
              size: 12,
            },
            color: "#fff",
          },
        },
      },
    },
  },
  scales: {
    x: {
      grid: {
        color: "rgba(200, 200, 200, 0.3)",
      },
      title: {
        display: true,
        text: "Months",
        font: {
          size: 14,
          weight: "bold",
        },
        color: "#666",
      },
    },
    y: {
      grid: {
        color: "rgba(200, 200, 200, 0.3)",
      },
      title: {
        display: true,
        text: "Donations (in $)",
        font: {
          size: 14,
          weight: "bold",
        },
        color: "#666",
      },
    },
  },
};

const data = {
  labels: ["January", "February", "March", "April", "May"], // X-axis labels
  datasets: [
    {
      label: "Donations",
      data: [10, 25, 50, 40, 80], // Y-axis data for donations
      fill: true,
      backgroundColor: "rgba(75, 192, 192, 0.2)", // Light green fill
      borderColor: "rgba(75, 192, 192, 1)", // Green line color
      borderWidth: 2,
      tension: 0.4, // Smooth curve
      pointBackgroundColor: "rgba(75, 192, 192, 1)",
      pointRadius: 5,
    },
  ],
};

const Graph = () => {
  return <Line options={options} data={data} />;
};

export default Graph;
