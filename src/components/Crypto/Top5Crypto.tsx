import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

interface CryptoData {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
}

function Top5Crypto() {
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<CryptoData[]>(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              ids: "bitcoin,ethereum,binancecoin,solana,ripple",
            },
          }
        );
        setCryptoData(response.data);
      } catch (error) {
        console.error("Error fetching crypto data:", error);
      }
    };

    fetchData();
  }, []);

  const getChangeColor = (percentageChange: number) => {
    return percentageChange >= 0 ? "text-green-600" : "text-red-600";
  };

  return (
    <div className="border p-4 rounded-md">
      <div className="flex flex-row justify-between text-xs text-gray-400">
        <h1 className="hover:text-gray-500 cursor-pointer">Featured Crypto</h1>
        <Link href="/">
          <h1 className="hover:text-gray-500 cursor-pointer">See More →</h1>
        </Link>
      </div>

      <div className="">
        {cryptoData.map((crypto) => (
          <div
            key={crypto.id}
            className=" py-4 px-3 rounded-md hover:bg-gray-50"
          >
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center w-1/3">
                <img
                  src={crypto.image}
                  alt={crypto.name}
                  className="w-8 h-8 mr-2 rounded-full"
                />
                <p className="font-semibold">{crypto.symbol.toUpperCase()}</p>
              </div>

              <div className="w-1/3 lg:ml-3 2xl:ml-0">
                <p>${crypto.current_price.toFixed(2)}</p>
              </div>

              <div className="flex flex-row items-center justify-center w-1/3">
                <p
                  className={getChangeColor(crypto.price_change_percentage_24h)}
                >
                  {crypto.price_change_percentage_24h > 0
                    ? `+${crypto.price_change_percentage_24h.toFixed(2)}%`
                    : `${crypto.price_change_percentage_24h.toFixed(2)}%`}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Top5Crypto;
