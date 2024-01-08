import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import axios from "axios";
import { Spinner } from "@nextui-org/react";

interface DailyData {
  d: string;
  v: number;
}

interface MonthlyAverage {
  month: string;
  average: number;
}

const CurrencyChart: React.FC = () => {
  const [monthlyAverages, setMonthlyAverages] = useState<MonthlyAverage[]>([]);
  const [loading, setLoading] = useState(true);
  const chartRef = useRef<Chart>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<DailyData[]>("http://localhost:5000/api/bcra-usdofmin");
        const monthlyData: { [key: string]: number[] } = {};

        response.data.forEach((data) => {
          const [year, month] = data.d.split("-");
          const key = `${year}-${month}`;

          if (!monthlyData[key]) {
            monthlyData[key] = [];
          }

          monthlyData[key].push(data.v);
        });

        const averages: MonthlyAverage[] = Object.keys(monthlyData).map((key) => {
          const values = monthlyData[key];
          const average = values.reduce((acc, val) => acc + val, 0) / values.length;
          return { month: key, average };
        });

        setMonthlyAverages(averages);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching daily data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (monthlyAverages.length > 0) {
      if (chartRef.current) {
        chartRef.current.destroy();
      }

      const labels = monthlyAverages.map((data) => data.month);
      const averages = monthlyAverages.map((data) => data.average);

      const ctx = document.getElementById("currencyChart") as HTMLCanvasElement;
      chartRef.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Peso - Dólar",
              data: averages,
              borderColor: "blue",
              borderWidth: 2,
              pointBackgroundColor: "blue",
              pointRadius: 2,
              fill: false,
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: "Date",
                font: {
                  size: 14,
                  weight: 'bold'
                },
                color: 'black'
              },
              ticks: {
                font: {
                  size: 10,
                },
                color: 'black'
              },
            },
            y: {
              title: {
                display: true,
                text: "Value",
                font: {
                  size: 14,
                  weight: 'bold'
                },
                color: 'black'
              },
              ticks: {
                font: {
                  size: 10,
                },
                color: 'black'
              },
            },
          },
        },
      });
    }
  }, [monthlyAverages]);

  return (
    <div style={{ position: 'relative' }}>
      {loading && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}>
          <Spinner />
        </div>
      )}
      <canvas id="currencyChart" width={800} height={400} />
    </div>
  );
};

export default CurrencyChart;