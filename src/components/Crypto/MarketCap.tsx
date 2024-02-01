import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiTrendingUp, FiTrendingDown } from "react-icons/fi";

interface MarketCapData {
  market_cap_change_percentage_24h_usd?: number;
  market_cap_usd?: number;
}

function MarketCap() {
  const [error, setError] = useState<Error | null>(null);
  const [marketCapData, setMarketCapData] = useState<MarketCapData | null>(
    null
  );

  useEffect(() => {
    const fetchMarketCapData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/global"
        );

        if (response.data && response.data.data) {
          const data: MarketCapData = {
            market_cap_change_percentage_24h_usd:
              response.data.data.market_cap_change_percentage_24h_usd,
            market_cap_usd: response.data.data.total_market_cap.usd,
          };

          setMarketCapData(data);
        }
      } catch (error) {
        console.error("Error fetching market cap data:", error);
        setError(error as Error);
      }
    };

    fetchMarketCapData();
  }, []);

  const getChangeColor = (percentage?: number) => {
    return percentage !== undefined && percentage > 0
      ? "green"
      : percentage !== undefined && percentage < 0
      ? "red"
      : "black";
  };

  const getChangeSymbol = (percentage?: number) => {
    return percentage !== undefined && percentage > 0
      ? "▲"
      : percentage !== undefined && percentage < 0
      ? "▼"
      : "";
  };

  const TrendingIcon = () => {
    if (marketCapData?.market_cap_change_percentage_24h_usd === undefined) {
      return null;
    }

    if (marketCapData.market_cap_change_percentage_24h_usd > 0) {
      return <FiTrendingUp style={{ color: "green" }} />;
    } else if (marketCapData.market_cap_change_percentage_24h_usd < 0) {
      return <FiTrendingDown style={{ color: "red" }} />;
    }

    return null;
  };

  return (
    <div className="w-full border rounded-md p-4 font-semibold">
      {marketCapData && (
        <div className="flex flex-row items-center justify-between">
          <div>
            <p className="text-xl">
              ${marketCapData.market_cap_usd?.toLocaleString()}
            </p>
            <div className="flex flex-row space-x-2">
              <h2 className="text-gray-400">Market Cap</h2>
              <p
                style={{
                  color: getChangeColor(
                    marketCapData.market_cap_change_percentage_24h_usd
                  ),
                }}
              >
                {getChangeSymbol(
                  marketCapData.market_cap_change_percentage_24h_usd
                )}
                {Math.abs(
                  marketCapData.market_cap_change_percentage_24h_usd!
                ).toFixed(2)}
                %
              </p>
            </div>
          </div>
          <div className="text-6xl">
            <TrendingIcon />
          </div>
        </div>
      )}
      {error && (
        <div className="text-red-500 text-sm text-center">
          Error fetching data: {error.message}
        </div>
      )}
    </div>
  );
}

export default MarketCap;
