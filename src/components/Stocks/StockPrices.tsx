"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";
import StocksPricesTable, { StockData } from "./StocksPricesTable";
import Loading from "../Loading";

interface QuoteData {
  c: number;
  d: number;
  dp: number;
  h: number;
  l: number;
  o: number;
  pc: number;
}

function StockPrices() {
  const [quoteData, setQuoteData] = useState<StockData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const symbols = [
    "AAPL", "MSFT", "AMZN", "TSLA", "GOOGL",
    "FB", "NVDA", "PYPL", "DIS",
    "GS", "BA", "WMT", "KO", "MCD",
    "PEP", "T", "VZ", "IBM", "CSCO",
    "INTC", "GE", "AMD", "NFLX", "MS",
    "AMZ", "JPM", "BAC", "AAP"
  ];

  const fetchQuoteData = async () => {
    try {
      const promises = symbols.map(async (symbol) => {
        const response = await axios.get(
          `http://localhost:8080/api/stock/${symbol}/quote`
        );
        return {
          symbol,
          quoteData: response.data as QuoteData,
        };
      });

      const quoteDataList: StockData[] = await Promise.all(promises);
      setQuoteData(quoteDataList);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching quote data:", error);
      setError("Error fetching quote data. Please try again later.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuoteData();
  }, []);

  const handleReload = () => {
    setLoading(true);
    setError(null);
    fetchQuoteData();
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <div className="flex flex-col items-center justify-center h-full text-red-600">
          <p className="mb-4">{error}</p>
          <button
            onClick={handleReload}
            className="rounded-md bg-[#38bdf8] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#35aee3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#38bdf8]"
          >
            Reload
          </button>
        </div>
      ) : (
        <StocksPricesTable stockData={quoteData} />
      )}
    </>
  );
}

export default StockPrices;
