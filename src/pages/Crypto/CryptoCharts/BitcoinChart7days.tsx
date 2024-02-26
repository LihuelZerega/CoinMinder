import React, { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const BitcoinChart24hs: React.FC = () => {
  const [chartData, setChartData] = useState<any[]>([]);

  useEffect(() => {
    fetchBitcoinChart24hsData();
  }, []);

  const fetchBitcoinChart24hsData = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/crypto/bitcoin/chart');
      if (!response.ok) {
        throw new Error('Failed to fetch Bitcoin chart data');
      }
      const data = await response.json();
      const formattedData = data.map((entry: any) => ({
        ...entry,
        timestamp: new Date(Number(entry.timestamp)).toLocaleDateString(), 
      }));
      const last24hsData = formattedData.slice(-7);
      setChartData(last24hsData);
    } catch (error) {
      console.error('Error fetching Bitcoin chart data:', error);
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
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="price" stroke="#38bdf8" fill="#38bdf8" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BitcoinChart24hs;
