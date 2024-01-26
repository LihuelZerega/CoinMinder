"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

interface QuoteData {
  c: number; // Current price
  d: number; // Change
  dp: number; // Percent change
  h: number; // High price of the day
  l: number; // Low price of the day
  o: number; // Open price of the day
  pc: number; // Previous close price
}

function StockPrices() {
  const [quoteData, setQuoteData] = useState<QuoteData[]>([]);
  const symbols = ["AAPL", "MSFT", "AMZN", "TSLA", "META", "NVDA"];

  useEffect(() => {
    const fetchQuoteData = async () => {
      try {
        const apiKey = "cmpuqdhr01ql684rolagcmpuqdhr01ql684rolb0";
        const promises = symbols.map(async (symbol) => {
          const response = await axios.get(
            `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apiKey}`
          );
          return response.data as QuoteData;
        });

        const quoteDataList = await Promise.all(promises);
        setQuoteData(quoteDataList);
      } catch (error) {
        console.error("Error fetching quote data:", error);
      }
    };

    fetchQuoteData();
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
        {quoteData.length > 0 ? (
          quoteData.map((data, index) => (
            <div
              key={index}
              className="py-4 px-3 rounded-md hover:bg-gray-50 cursor-pointer"
            >
              <div className="flex flex-row items-center justify-between">

                <div className="flex flex-row items-center w-1/3">
                  <p className="font-semibold">{symbols[index]}</p>
                </div>

                <div className="w-1/3 lg:ml-3 2xl:ml-0">
                  <p>${data.c.toFixed(2)}</p>
                </div>

                <div className="flex flex-row items-center justify-center w-1/3">
                  <p
                    className={data.dp > 0 ? "text-green-500" : "text-red-500"}
                  >
                    {data.dp > 0
                      ? `+${data.dp.toFixed(2)}%`
                      : `${data.dp.toFixed(2)}%`}
                  </p>
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