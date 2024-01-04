import React, { useEffect, useState } from "react";
import axios from "axios";

interface CryptoData {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
}

function DollarCrypto() {
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<CryptoData[]>(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "ars",
              ids: "tether",
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
    <div className="flex flex-col sm:flex-row items-start rounded-md w-full">
      {cryptoData.map((crypto) => (
        <div key={crypto.id} className="py-4 px-3 rounded-md hover:bg-gray-50 w-full">
          <div className="flex flex-row items-start justify-between">

            <section className="flex flex-row items-start">
              <img
                src={crypto.image}
                alt={crypto.name}
                className="w-8 h-8 mr-2 rounded-full"
              />
              <div className="">
                <p className="font-semibold">{crypto.name}</p>
                <p className="font-light text-xs">
                  {crypto.symbol.toUpperCase()}
                </p>
              </div>
            </section>

            <section className="flex flex-col items-end justify-end">
              <div className="lg:ml-3 2xl:ml-0">
                <p>${crypto.current_price.toFixed(2)}</p>
              </div>

              <div className="flex flex-row items-center justify-center">
                <p
                  className={getChangeColor(crypto.price_change_percentage_24h)}
                >
                  {crypto.price_change_percentage_24h.toFixed(2)}%
                </p>
              </div>
            </section>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DollarCrypto;
