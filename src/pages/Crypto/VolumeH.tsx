import React, { useEffect, useState } from "react";
import axios from "axios";
import { FiTrendingUp, FiTrendingDown } from "react-icons/fi";
import { motion } from "framer-motion";
import Image from "next/image";

function VolumeH() {
  const [volumeData, setVolumeData] = useState<number>(0);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchVolumeData = async () => {
      try {
        const response = await axios.get(
          "${process.env.API_BASE_URL}/api/crypto/market"
        );
        const totalVolumeUSD = JSON.parse(response.data.total_volume)["usd"];
        setVolumeData(totalVolumeUSD);
      } catch (error) {
        console.error("Error fetching 24h volume:", error);
        setError(error as Error);
      }
    };

    fetchVolumeData();
  }, []);

  const TrendingIcon = () => {
    if (volumeData > 0) {
      return <FiTrendingUp style={{ color: "green" }} />;
    } else if (volumeData < 0) {
      return <FiTrendingDown style={{ color: "red" }} />;
    } else {
      return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full border rounded-md p-4 font-semibold"
    >
      <div className="flex flex-row items-center justify-between">
        <div>
          <p className="text-lg">${volumeData.toLocaleString()}</p>
          <h2 className="text-sm text-gray-400 py-1">24h Trading Volume</h2>
        </div>
        <div className="px-4">
          <Image src="https://www.coingecko.com/total_volume.svg" width={135} height={50} alt="total_volume" />
        </div>
      </div>
      {error && (
        <div className="text-red-500 text-sm text-center">
          Error fetching data: {error.message}
        </div>
      )}
    </motion.div>
  );
}

export default VolumeH;
