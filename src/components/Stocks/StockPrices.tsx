import React, { useEffect, useState } from "react";
import axios from "axios";
import StocksPricesTable, { StockData } from "./StocksPricesTable";
import Loading from "../Loading";

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
  const [quoteData, setQuoteData] = useState<StockData[]>([]);
  const [loading, setLoading] = useState(true);
  const symbols = [
    "AAPL", "MSFT", "AMZN", "TSLA", "GOOGL",
    "FB", "NVDA", "PYPL", "V", "DIS",
    "GS", "BA", "WMT", "KO", "MCD",
    "PEP", "T", "VZ", "IBM", "CSCO",
    "INTC", "GE", "AMD", "NFLX", "MS",
    "AMZ", "JPM", "BAC", "AAP"
  ];

  useEffect(() => {
    const fetchQuoteData = async () => {
      try {
        const apiKey = "cmshlb9r01qqj2tig7k0cmshlb9r01qqj2tig7kg";
        const promises = symbols.map(async (symbol) => {
          const response = await axios.get(
            `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apiKey}`
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
        setLoading(false);
      }
    };

    fetchQuoteData();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <StocksPricesTable stockData={quoteData} />
      )}
    </>
  );
}

export default StockPrices;