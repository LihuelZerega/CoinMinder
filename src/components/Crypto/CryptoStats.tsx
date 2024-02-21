import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function CryptoStats() {
  const [cryptoStats, setCryptoStats] = useState({
    activeCryptocurrencies: 0,
    upcomingICOs: 0,
    ongoingICOs: 0,
    endedICOs: 0,
    markets: 0,
  });

  useEffect(() => {
    const fetchCryptoStats = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/crypto/market"
        );

        if (response.data) {
          const {
            active_cryptocurrencies,
            upcoming_icos,
            ongoing_icos,
            ended_icos,
            markets,
          } = response.data;

          const data = {
            activeCryptocurrencies: active_cryptocurrencies,
            upcomingICOs: upcoming_icos,
            ongoingICOs: ongoing_icos,
            endedICOs: ended_icos,
            markets: markets,
          };

          setCryptoStats(data);
        }
      } catch (error) {
        console.error("Error fetching crypto stats:", error);
      }
    };

    fetchCryptoStats();
  }, []);

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <CryptoStat title="Active Currencies" value={cryptoStats.activeCryptocurrencies} />
      <CryptoStat title="Upcoming ICOs" value={cryptoStats.upcomingICOs} />
      <CryptoStat title="Ongoing ICOs" value={cryptoStats.ongoingICOs} />
      <CryptoStat title="Ended ICOs" value={cryptoStats.endedICOs} />
      <CryptoStat title="Markets" value={cryptoStats.markets} />
    </motion.div>
  );
}

const CryptoStat = ({ title, value }: { title: string, value: number }) => {
  return (
    <motion.div
      className="flex flex-row items-center space-x-2 font-semibold bg-gray-100 p-4 rounded-md"
      whileHover={{ scale: 1.05 }}
    >
      <h2 className="text-gray-400 text-sm">{title}:</h2>
      <p className="text-md">{value}</p>
    </motion.div>
  );
};

export default CryptoStats;
