import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

interface TrendingCoin {
  id: number;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
}

function LosersCoins() {
  const [trendingCoins, setTrendingCoins] = useState<TrendingCoin[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await axios.get(
          "http://coinminder-api-production.up.railway.app/api/crypto/toplosers"
        );

        if (response.data && Array.isArray(response.data)) {
          const coins: TrendingCoin[] = response.data.map((coin: any) => ({
            id: coin.id,
            name: coin.name,
            symbol: coin.symbol,
            image: coin.image,
            current_price: coin.current_price,
            price_change_percentage_24h: coin.price_change_percentage_24h,
          }));

          const uniqueNames: Set<string> = new Set();
          const filteredCoins: TrendingCoin[] = [];

          for (let i = 0; i < coins.length; i++) {
            if (filteredCoins.length === 16) break;

            const coin = coins[i];
            if (!uniqueNames.has(coin.name)) {
              filteredCoins.push(coin);
              uniqueNames.add(coin.name);
            }
          }

          setTrendingCoins(filteredCoins);
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
      <div className="flex flex-row items-center justify-between border-b-1 pb-2">
        <h1 className="text-[#38bdf8] text-lg font-semibold">Top Losers</h1>
      </div>

      <div className="flex flex-row items-center justify-between border-b-1 pb-2 p-2 text-gray-500">
        <div>
          <h1 className="text-sm">Coin</h1>
        </div>
        <div className="flex flex-row space-x-4">
          <h1 className="text-sm">Price</h1>
          <h1 className="block sm:hidden text-sm">C.(24hs)</h1>
          <h1 className="hidden sm:block text-sm">Change (24hs)</h1>
        </div>
      </div>

      <ul className="flex flex-col h-full">
        {trendingCoins.map((coin) => (
          <li key={coin.id} className="cursor-pointer">
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
                  <div className="text-sm md:text-sm xl:text-base">
                    {coin.name}
                  </div>
                </div>
                <div className="flex flex-row items-center space-x-3">
                  <div className="text-sm md:text-sm xl:text-base">
                    ${coin.current_price.toFixed(2)}
                  </div>
                  <div className="text-sm md:text-sm xl:text-base">
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

export default LosersCoins;
