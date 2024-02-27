import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import TrendingIcon from "@/images/TrendingIcon.png";

interface TrendingCoin {
  id: number;
  name: string;
  symbol: string;
  thumb: string;
  current_price: string;
  sparkline: string;
}

const Trending: React.FC = () => {
  const [trendingCoins, setTrendingCoins] = useState<TrendingCoin[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/crypto/market/trending"
        );

        if (response.data && Array.isArray(response.data)) {
          const coins: TrendingCoin[] = response.data
            .slice(0, 25)
            .map((coin: any) => ({
              id: coin.id,
              name: coin.name,
              symbol: coin.symbol,
              thumb: coin.thumb,
              current_price: formatPrice(coin.price),
              sparkline: coin.sparkline,
            }));

          setTrendingCoins(coins);
        }
      } catch (error) {
        console.error("Error fetching trending coins:", error);
        setError(error as Error);
      }
    };

    fetchTrendingCoins();
  }, []);

  const formatPrice = (price: string) => {
    const matches = price.match(/\$0\.0<sub\s+title="(\d+\.\d+)">/);
    if (matches) {
      const [, decimal] = matches;
      return `$0.${decimal}`;
    } else {
      return price;
    }
  };

  return (
    <div className="w-full border rounded-md p-4 font-semibold">
      <div className="flex flex-row items-center justify-between border-b-1 pb-2">
        <h1 className="text-[#38bdf8] text-lg font-semibold">Hot Coins</h1>
      </div>

      <div className="flex flex-row items-center justify-between border-b-1 pb-2 p-2 text-gray-500">
        <div>
          <h1 className="text-sm">Coin</h1>
        </div>
        <div className="flex flex-row space-x-4">
          <h1 className="text-sm">Price</h1>
          <h1 className="hidden sm:block text-sm">Change (24hs)</h1>
        </div>
      </div>

      <ul className="flex flex-col h-full">
        {trendingCoins.map((coin) => (
          <li key={coin.id} className="cursor-pointer">
            <div className="flex flex-col pt-2.5">
              <div className="flex flex-row justify-between bg-transparent hover:bg-gray-50 rounded-md p-2">
                <div className="flex flex-row items-center space-x-2">
                  <Image
                    src={coin.thumb}
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
                    {coin.current_price}
                  </div>
                  <div className="block sm:hidden max-h-2">
                    <Image
                      src={coin.sparkline}
                      width={40}
                      height={5}
                      alt={coin.sparkline}
                    />
                  </div>
                  <div className="hidden sm:block max-h-5">
                    <Image
                      src={coin.sparkline}
                      width={70}
                      height={20}
                      alt={coin.sparkline}
                    />
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
};

export default Trending;
