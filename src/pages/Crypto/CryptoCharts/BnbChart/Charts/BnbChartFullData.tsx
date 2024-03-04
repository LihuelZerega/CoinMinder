import React, { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const BnbChart: React.FC = () => {
  const [chartData, setChartData] = useState<any[]>([]);
  const maxPrice = 70000;

  useEffect(() => {
    fetchBnbChartData();
  }, []);

  const fetchBnbChartData = async () => {
    try {
      const response = await fetch('https://coinminder-api.railway.internal.app/api/crypto/bnb/chart');
      if (!response.ok) {
        throw new Error('Failed to fetch Bnb chart data');
      }
      const data = await response.json();
      const formattedData = data.map((entry: any) => ({
        ...entry,
        timestamp: new Date(Number(entry.timestamp)).toLocaleDateString(),
        price: Number(entry.price),
      }));
      setChartData(formattedData);
    } catch (error) {
      console.error('Error fetching Bnb chart data:', error);
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

export default BnbChart;