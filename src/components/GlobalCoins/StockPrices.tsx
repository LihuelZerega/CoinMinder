"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

interface StockData {
  "01. symbol": string;
  "05. price": string;
  "09. change": string;
  "10. change percent": string;
}

function StockPrices() {
  const [stocksData, setStocksData] = useState<StockData[]>([]);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const apiKey = "AU14324B8OVPZ6AD";
        const symbols = ["AAPL", "GOOGL", "MSFT", "AMZN", "TSLA", "FB"];

        const promises = symbols.map(async (symbol) => {
          const response = await axios.get(
            `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`
          );
          return response.data["Global Quote"] as StockData;
        });

        const stocksData = await Promise.all(promises);
        setStocksData(stocksData);
      } catch (error) {
        console.error("Error fetching stock data:", error);
      }
    };

    fetchStockData();
  }, []);

  return (
    <div className="border p-4 rounded-md">
      <div className="flex justify-between items-center text-xs text-gray-400">
        <h1 className="hover:text-gray-500 cursor-pointer">Stock Prices</h1>
        <Link href="/">
          <h1 className="hover:text-gray-500 cursor-pointer">See More →</h1>
        </Link>
      </div>

      <div>
        {stocksData.length > 0 ? (
          stocksData.map((stockData, index) => (
            <div
              key={index}
              className="py-2 px-3 rounded-md hover:bg-gray-50 cursor-pointer"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center w-2/3">
                  <p className="font-semibold">
                    {stockData["01. symbol"] || "N/A"}
                  </p>
                </div>
                <div className="w-1/3 ml-3">
                  <p>{stockData["05. price"] || "N/A"}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Loading stock data...</p>
        )}
      </div>
    </div>
  );
}

export default StockPrices;
