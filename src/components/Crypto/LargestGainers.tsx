import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import RocketIcon from "@/images/RocketIcon.png";

interface TrendingCoin {
  id: string;
  name: string;
}

interface DetailedTrendingCoin extends TrendingCoin {
  image: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
}

function LarguestGainers() {
  const [trendingCoins, setTrendingCoins] = useState<DetailedTrendingCoin[]>(
    []
  );

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/search/trending"
        );

        if (response.data && response.data.coins) {
          const coins: TrendingCoin[] = response.data.coins.map(
            (coin: any) => ({
              id: coin.item.id,
              name: coin.item.name,
            })
          );

          const detailedCoins: DetailedTrendingCoin[] = await Promise.all(
            coins.map(async (coin) => {
              const coinDetails = await axios.get(
                `https://api.coingecko.com/api/v3/coins/${coin.id}`
              );

              return {
                ...coin,
                image: coinDetails.data.image.large,
                symbol: coinDetails.data.symbol,
                current_price: coinDetails.data.market_data.current_price.usd,
                price_change_percentage_24h:
                  coinDetails.data.market_data.price_change_percentage_24h,
                market_cap: coinDetails.data.market_data.marketcap.usd,
              };
            })
          );

          // Ordenamos las monedas por el cambio porcentual en las últimas 24 horas de forma descendente
          detailedCoins.sort(
            (a, b) =>
              b.price_change_percentage_24h - a.price_change_percentage_24h
          );

          // Tomamos las tres monedas con el mayor cambio porcentual
          const top3Coins = detailedCoins.slice(0, 3);

          setTrendingCoins(top3Coins);
        }
      } catch (error) {
        console.error("Error fetching trending coins:", error);
      }
    };

    fetchTrendingCoins();
  }, []);

  return (
    <div className="border rounded-md p-4 font-semibold">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center space-x-1">
          <Image
            src={RocketIcon}
            width={18}
            height={18}
            alt={"RocketIcon"}
          />
          <h2 className="text-gray-400 hover:text-gray-500 text-xs font-semibold cursor-pointer">
            Largest Gainers
          </h2>
        </div>
        <h2 className="text-gray-400 hover:text-gray-500 text-xs font-semibold cursor-pointer">
          See More →
        </h2>
      </div>

      <ul className="flex flex-row">
        {trendingCoins.map((coin) => (
          <li key={coin.id}>
            <div className="flex flex-col items-center space-y-2">
              <Image
                src={coin.image}
                width={30}
                height={30}
                alt={coin.name}
              />
              <div>{coin.name}</div>
              <div>{coin.symbol}</div>
              <div>${coin.market_cap.toLocaleString()}</div>
              <div
                style={{
                  color: coin.price_change_percentage_24h > 0 ? "green" : "red",
                }}
              >
                {coin.price_change_percentage_24h > 0 ? "+" : ""}
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LarguestGainers;