import React, { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const TetherChart: React.FC = () => {
  const [chartData, setChartData] = useState<any[]>([]);
  const maxPrice = 2;

  useEffect(() => {
    fetchTetherChartData();
  }, []);

  const fetchTetherChartData = async () => {
    try {
      const response = await fetch('https://coinminder-api.railway.internal.app/api/crypto/tether/chart');
      if (!response.ok) {
        throw new Error('Failed to fetch Tether chart data');
      }
      const data = await response.json();
      const formattedData = data.map((entry: any) => ({
        ...entry,
        timestamp: new Date(Number(entry.timestamp)).toLocaleDateString(),
        price: Number(entry.price),
      }));
      const last24hsData = formattedData.slice(-1825);
      setChartData(last24hsData);
    } catch (error) {
      console.error('Error fetching Tether chart data:', error);
    }
  };

  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <AreaChart
          data={chartData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis domain={[0, maxPrice]} />
          <Tooltip />
          <Area type="monotone" dataKey="price" stroke="#38bdf8" fill="#38bdf8" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TetherChart;