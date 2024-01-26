"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";

interface QuoteData {
  c: number; // Current price
  d: number; // Change
  dp: number; // Percent change
  h: number; // High price of the day
  l: number; // Low price of the day
  o: number; // Open price of the day
  pc: number; // Previous close price
}

function StockQuote() {
  const [quoteData, setQuoteData] = useState<QuoteData | null>(null);
  const symbol = "TSLA"; // Symbol for Tesla

  useEffect(() => {
    const fetchQuoteData = async () => {
      try {
        const apiKey = "cmpuqdhr01ql684rolagcmpuqdhr01ql684rolb0";
        const response = await axios.get(
          `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apiKey}`
        );

        setQuoteData(response.data);
      } catch (error) {
        console.error(`Error fetching quote data for ${symbol}:`, error);
      }
    };

    fetchQuoteData();
  }, []);

  return (
    <div className="border p-4 rounded-md">
      <h1 className="text-lg font-semibold mb-3">{symbol} Quote</h1>
      {quoteData ? (
        <div>
          <p>Current Price: ${quoteData.c.toFixed(2)}</p>
          {quoteData.d !== null && (
            <p>Change: ${quoteData.d.toFixed(2)}</p>
          )}
          {quoteData.dp !== null && (
            <p>Percent Change: {quoteData.dp.toFixed(2)}%</p>
          )}
          <p>High Price of the Day: ${quoteData.h.toFixed(2)}</p>
          <p>Low Price of the Day: ${quoteData.l.toFixed(2)}</p>
          <p>Open Price of the Day: ${quoteData.o.toFixed(2)}</p>
          <p>Previous Close Price: ${quoteData.pc.toFixed(2)}</p>
        </div>
      ) : (
        <p>Loading quote data...</p>
      )}
    </div>
  );
}

export default StockQuote;
