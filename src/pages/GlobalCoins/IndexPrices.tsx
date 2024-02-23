"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

interface IndexData {
  symbol: string;
  name: string;
  price: number | null;
}

function IndexPrices() {
  const [indexData, setIndexData] = useState<IndexData[]>([
    { symbol: "^GSPC", name: "S&P 500", price: null },
    { symbol: "^DJI", name: "Dow Jones Industrial Average", price: null },
    { symbol: "^IXIC", name: "NASDAQ Composite", price: null },
    { symbol: "^FTSE", name: "FTSE 100", price: null },
    { symbol: "^N225", name: "Nikkei 225", price: null },
    { symbol: "^STOXX50E", name: "Euro Stoxx 50", price: null },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = "tu_api_key_de_finnhub";

        const requests = indexData.map(async (index) => {
          try {
            const response = await axios.get(
              `https://finnhub.io/api/v1/quote?symbol=${index.symbol}&token=${apiKey}`
            );

            const price = response.data.c !== undefined ? response.data.c : null;

            return { ...index, price };
          } catch (error) {
            console.error(`Error fetching data for ${index.name}:`, error);
            return { ...index, price: null };
          }
        });

        const updatedIndexData = await Promise.all(requests);

        setIndexData(updatedIndexData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="border p-4 rounded-md">
      <div className="flex flex-row justify-between text-xs text-gray-400">
        <h1 className="hover:text-gray-500 cursor-pointer">Index Prices</h1>
        <Link href="/">
          <h1 className="hover:text-gray-500 cursor-pointer">See More →</h1>
        </Link>
      </div>
      <div>
        {indexData.map((index) => (
          <div
            key={index.symbol}
            className="py-[14.5px] px-3 rounded-md hover:bg-gray-50"
          >
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center w-2/3">
                <p className="font-semibold">{index.name}</p>
              </div>

              <div className="w-1/3 lg:ml-3 2xl:ml-0">
                <p>{index.price !== null ? `$${index.price.toFixed(2)}` : "N/A"}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IndexPrices;
