import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CryptoStats() {
  const [cryptoStats, setCryptoStats] = useState({
    activeCryptocurrencies: 0,
    upcomingICOs: 0,
    ongoingICOs: 0,
    endedICOs: 0,
    markets: 0,
  });

  useEffect(() => {
    const fetchCryptoStats = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/global'
        );

        if (response.data && response.data.data) {
          const data = {
            activeCryptocurrencies: response.data.data.active_cryptocurrencies,
            upcomingICOs: response.data.data.upcoming_icos,
            ongoingICOs: response.data.data.ongoing_icos,
            endedICOs: response.data.data.ended_icos,
            markets: response.data.data.markets,
          };

          setCryptoStats(data);
        }
      } catch (error) {
        console.error('Error fetching crypto stats:', error);
      }
    };

    fetchCryptoStats();
  }, []);

  return (
    <div className="mb-6 flex flex-row items-center justify-between">
      <div className="flex flex-row items-center space-x-2 font-semibold">
        <h2 className="text-gray-400 text-sm">Active Cryptocurrencies:</h2>
        <p className="text-md">{cryptoStats.activeCryptocurrencies}</p>
      </div>
      <div className="flex flex-row items-center space-x-2 font-semibold">
        <h2 className="text-gray-400 text-sm">Upcoming ICOs:</h2>
        <p className="text-md">{cryptoStats.upcomingICOs}</p>
      </div>
      <div className="flex flex-row items-center space-x-2 font-semibold">
        <h2 className="text-gray-400 text-sm">Ongoing ICOs:</h2>
        <p className="text-md">{cryptoStats.ongoingICOs}</p>
      </div>
      <div className="flex flex-row items-center space-x-2 font-semibold">
        <h2 className="text-gray-400 text-sm">Ended ICOs:</h2>
        <p className="text-md">{cryptoStats.endedICOs}</p>
      </div>
      <div className="flex flex-row items-center space-x-2 font-semibold">
        <h2 className="text-gray-400 text-sm">Markets:</h2>
        <p className="text-md">{cryptoStats.markets}</p>
      </div>
    </div>
  );
}

export default CryptoStats;
