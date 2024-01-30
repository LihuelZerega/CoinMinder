import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface MarketCapData {
  market_cap_change_percentage_24h_usd: number;
  market_cap_usd: number;
}

function MarketCap() {
  const [marketCapData, setMarketCapData] = useState<MarketCapData | null>(null);

  useEffect(() => {
    const fetchMarketCapData = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/global'
        );

        if (response.data && response.data.data) {
          const data: MarketCapData = {
            market_cap_change_percentage_24h_usd: response.data.data.market_cap_change_percentage_24h_usd,
            market_cap_usd: response.data.data.total_market_cap.usd,
          };

          setMarketCapData(data);
        }
      } catch (error) {
        console.error('Error fetching market cap data:', error);
      }
    };

    fetchMarketCapData();
  }, []);

  return (
    <div>
      <h2>Market Cap</h2>
      {marketCapData && (
        <div>
          <p>Market Cap: ${marketCapData.market_cap_usd.toLocaleString()}</p>
          <p>
            Change (24h): {marketCapData.market_cap_change_percentage_24h_usd.toFixed(2)}%
          </p>
        </div>
      )}
    </div>
  );
}

export default MarketCap;