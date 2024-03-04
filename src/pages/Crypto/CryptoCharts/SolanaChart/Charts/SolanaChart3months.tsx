import React, { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const SolanaChart24hs: React.FC = () => {
  const [chartData, setChartData] = useState<any[]>([]);

  useEffect(() => {
    fetchSolanaChart24hsData();
  }, []);

  const fetchSolanaChart24hsData = async () => {
    try {
      const response = await fetch('https://coinminder-api-production.up.railway.app/api/crypto/solana/chart');
      if (!response.ok) {
        throw new Error('Failed to fetch Solana chart data');
      }
      const data = await response.json();
      const formattedData = data.map((entry: any) => ({
        ...entry,
        timestamp: new Date(Number(entry.timestamp)).toLocaleDateString(), 
      }));
      const last24hsData = formattedData.slice(-90);
      setChartData(last24hsData);
    } catch (error) {
      console.error('Error fetching Solana chart data:', error);
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

export default SolanaChart24hs;
