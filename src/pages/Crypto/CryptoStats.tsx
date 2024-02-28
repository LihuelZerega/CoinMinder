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
      className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <CryptoStat
          title="Active Currencies"
          value={cryptoStats.activeCryptocurrencies}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <CryptoStat title="Upcoming ICOs" value={cryptoStats.upcomingICOs} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <CryptoStat title="Ongoing ICOs" value={cryptoStats.ongoingICOs} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <CryptoStat title="Ended ICOs" value={cryptoStats.endedICOs} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <CryptoStat title="Markets" value={cryptoStats.markets} />
      </motion.div>
    </motion.div>
  );
}

const CryptoStat = ({ title, value }: { title: string; value: number }) => {
  return (
    <motion.div className="flex flex-col md:flex-row items-center space-x-2 font-semibold border p-3 rounded-md">
      <h2 className="text-gray-400 text-sm">{title}:</h2>
      <p className="text-sm">{value}</p>
    </motion.div>
  );
};

export default CryptoStats;
