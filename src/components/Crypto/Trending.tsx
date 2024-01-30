import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface TrendingCoin {
  id: string;
  name: string;
}

function Trending() {
  const [trendingCoins, setTrendingCoins] = useState<TrendingCoin[]>([]);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/search/trending'
        );

        if (response.data && response.data.coins) {
          const coins: TrendingCoin[] = response.data.coins.map((coin: any) => ({
            id: coin.item.id,
            name: coin.item.name,
          }));
          setTrendingCoins(coins);
        }
      } catch (error) {
        console.error('Error fetching trending coins:', error);
      }
    };

    fetchTrendingCoins();
  }, []);

  return (
    <div>
      <h2>Coins Trending</h2>
      <ul>
        {trendingCoins.map((coin) => (
          <li key={coin.id}>{coin.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Trending;