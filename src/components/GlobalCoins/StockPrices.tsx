import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

interface StockData {
  symbol: string;
  name: string;
  price: number | null;
}

function StockPrices() {
  const [stockData, setStockData] = useState<StockData[]>([
    { symbol: "AAPL", name: "Apple Inc.", price: null },
    { symbol: "GOOGL", name: "Alphabet Inc. (Google)", price: null },
    { symbol: "MSFT", name: "Microsoft Corporation", price: null },
    { symbol: "AMZN", name: "Amazon.com Inc.", price: null },
    { symbol: "TSLA", name: "Tesla Inc.", price: null },
    { symbol: "FB", name: "Facebook Inc.", price: null },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = "AU14324B8OVPZ6AD";

        const requests = stockData.map(async (stock) => {
          try {
            const response = await axios.get(
              `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stock.symbol}&apikey=${apiKey}`
            );

            const rawPrice = response.data["Global Quote"]?.["05. price"];
            const price = rawPrice ? parseFloat(rawPrice) : null;

            if (isNaN(price!)) {
              throw new Error(`Invalid price for ${stock.name}`);
            }

            return { ...stock, price };
          } catch (error) {
            console.error(`Error fetching data for ${stock.name}:`, error);
            return { ...stock, price: null };
          }
        });

        const updatedStockData = await Promise.all(requests);

        setStockData(updatedStockData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="border p-4 rounded-md">
      <div className="flex flex-row justify-between text-xs text-gray-400">
        <h1 className="hover:text-gray-500 cursor-pointer">Stock Prices</h1>
        <Link href="/">
          <h1 className="hover:text-gray-500 cursor-pointer">See More →</h1>
        </Link>
      </div>
      <div>
        {stockData.map((stock) => (
          <div
            key={stock.symbol}
            className="py-[14.5px] px-3 rounded-md hover:bg-gray-50"
          >
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center w-2/3">
                <p className="font-semibold">{stock.name}</p>
              </div>

              <div className="w-1/3 lg:ml-3 2xl:ml-0">
                <p>{stock.price !== null ? `$${stock.price.toFixed(2)}` : "N/A"}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StockPrices;
