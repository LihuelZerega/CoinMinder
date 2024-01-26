"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";

interface StockData {
  "01. symbol": string;
  "05. price": string;
  "09. change": string;
  "10. change percent": string;
}

const StockDataComponent: React.FC = () => {
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
    <div>
      {stocksData.length > 0 ? (
        stocksData.map((stockData, index) => (
          <div key={index}>
            <h2>{stockData["01. symbol"]}</h2>
            <p>Price: {stockData["05. price"]}</p>
            <p>Change: {stockData["09. change"]}</p>
            <p>Percent Change: {stockData["10. change percent"]}</p>
            <hr />
          </div>
        ))
      ) : (
        <p>Loading stock data...</p>
      )}
    </div>
  );
};

export default StockDataComponent;