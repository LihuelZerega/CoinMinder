import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, LinearScale, CategoryScale } from "chart.js";
import { LineController, PointElement, LineElement } from "chart.js";

Chart.register(LineController, LinearScale, PointElement, LineElement);

interface ProgressiveLineChartProps {
  labels: number[];
  data: number[];
}

const ProgressiveLineChart: React.FC<ProgressiveLineChartProps> = ({
  labels,
  data,
}) => {
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Progressive Line",
        data: data,
        fill: false,
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: "linear",
        position: "bottom",
        title: {
          display: true,
          text: "Years",
        },
      },
      y: {
        type: "linear",
        position: "left",
        title: {
          display: true,
          text: "Future Value",
        },
      },
    },
  } as const;

  return <Line data={chartData} options={options} />;
};

export default ProgressiveLineChart;
