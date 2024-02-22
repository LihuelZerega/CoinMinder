import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import TrendingIcon from "@/images/TrendingIcon.png";

interface TrendingCoin {
  id: number;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
}

function TopLosers() {
  const [trendingCoins, setTrendingCoins] = useState<TrendingCoin[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/crypto/toplosers"
        );

        if (response.data && Array.isArray(response.data)) {
          const uniqueCoins: TrendingCoin[] = [];
          const coins: TrendingCoin[] = response.data.map((coin: any) => ({
            id: coin.id,
            name: coin.name,
            symbol: coin.symbol,
            image: coin.image,
            current_price: coin.current_price,
            price_change_percentage_24h: coin.price_change_percentage_24h,
          }));

          coins.forEach((coin) => {
            if (!uniqueCoins.some((c) => c.name === coin.name)) {
              uniqueCoins.push(coin);
            }
          });

          setTrendingCoins(uniqueCoins.slice(0, 10));
        }
      } catch (error) {
        console.error("Error fetching trending coins:", error);
        setError(error as Error);
      }
    };

    fetchTrendingCoins();
  }, []);

  return (
    <div className="w-full border rounded-md p-4 font-semibold">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center space-x-1">
          <Image
            src={TrendingIcon}
            width={18}
            height={18}
            alt={"TrendingIcon"}
          />
          <h2 className="text-gray-400 hover:text-gray-500 text-xs font-semibold cursor-pointer">
            Top Losers
          </h2>
        </div>
        <h2 className="text-gray-400 hover:text-[#38bdf8] text-xs font-semibold cursor-pointer">
          See More →
        </h2>
      </div>

      <ul className="flex flex-col h-full">
        {trendingCoins.map((coin) => (
          <li key={coin.id}>
            <div className="flex flex-col pt-2.5">
              <div className="flex flex-row justify-between bg-transparent hover:bg-gray-50 rounded-md p-2 cursor-pointer">
                <div className="flex flex-row items-center space-x-2">
                  <Image
                    src={coin.image}
                    width={25}
                    height={25}
                    alt={coin.name}
                    className="rounded-full"
                  />
                  <div className="text-base lg:text-sm xl:text-base">
                    {coin.name}
                  </div>
                </div>
                <div className="flex flex-row items-center space-x-3">
                  <div className="text-base lg:text-sm xl:text-base">
                    ${coin.current_price.toFixed(2)}
                  </div>
                  <div
                    className={
                      coin.price_change_percentage_24h > 0
                        ? "text-green-500 font-semibold"
                        : "text-red-500 font-semibold"
                    }
                  >
                    {coin.price_change_percentage_24h > 0
                      ? `+${coin.price_change_percentage_24h.toFixed(2)}%`
                      : `${coin.price_change_percentage_24h.toFixed(2)}%`}
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {error && (
        <div className="text-red-500 text-sm text-center">
          Error fetching data: {error.message}
        </div>
      )}
    </div>
  );
}

export default TopLosers;