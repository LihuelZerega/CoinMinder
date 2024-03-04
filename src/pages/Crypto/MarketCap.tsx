import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

interface MarketCapData {
  market_cap_change_percentage_24h_usd?: number;
  market_cap_usd?: number;
}

const MarketCap = () => {
  const [error, setError] = useState<Error | null>(null);
  const [marketCapData, setMarketCapData] = useState<MarketCapData | null>(
    null
  );

  useEffect(() => {
    const fetchMarketCapData = async () => {
      try {
        const response = await axios.get(
          "${process.env.API_BASE_URL}/api/crypto/market"
        );

        if (response.data && response.data.total_market_cap) {
          const totalMarketCapUSD = JSON.parse(
            response.data.total_market_cap
          ).usd;

          const data: MarketCapData = {
            market_cap_change_percentage_24h_usd:
              response.data.market_cap_change_percentage_24h_usd,
            market_cap_usd: totalMarketCapUSD,
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
    if (percentage === undefined) return "black";

    return percentage > 0 ? "green" : percentage < 0 ? "red" : "black";
  };

  const getChangeSymbol = (percentage?: number) => {
    return percentage !== undefined && percentage > 0
      ? <FaCaretUp style={{ color: "green" }} />
      : percentage !== undefined && percentage < 0
      ? <FaCaretDown style={{ color: "red" }} />
      : null;
  };

  return (
    <motion.div
      className="w-full border rounded-md p-4 font-semibold"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {marketCapData && (
        <div className="flex flex-row items-center justify-between">
          <div>
            <p className="text-lg">
              ${marketCapData.market_cap_usd?.toLocaleString()}
            </p>
            <div className="flex flex-row space-x-2 py-1">
              <h2 className="text-sm text-gray-400">Total Market Cap</h2>
              {marketCapData && (
                <div className="flex flex-row items-center justify-between">
                  <div>
                    <p
                      className={`text-xs flex flex-row items-center space-x-1 ${getChangeColor(
                        marketCapData.market_cap_change_percentage_24h_usd
                      )}`}
                    >
                      {getChangeSymbol(
                        marketCapData.market_cap_change_percentage_24h_usd
                      )}
                      <span style={{ color: getChangeColor(marketCapData.market_cap_change_percentage_24h_usd) }}>
                        {Math.abs(
                          marketCapData.market_cap_change_percentage_24h_usd!
                        ).toFixed(2)}
                        %
                      </span>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="px-1">
            <Image src="https://www.coingecko.com/total_market_cap.svg" width={135} height={50} alt="total_market_cap" />
          </div>
        </div>
      )}

      {error && (
        <div className="text-red-500 text-sm text-center">
          Error fetching data: {error.message}
        </div>
      )}
    </motion.div>
  );
};

export default MarketCap;
