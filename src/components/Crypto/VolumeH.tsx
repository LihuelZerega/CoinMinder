import React, { useEffect, useState } from "react";
import axios from "axios";
import { FiTrendingUp, FiTrendingDown } from "react-icons/fi";

function VolumeH() {
  const [volumeH, setH24Volume] = useState<number | undefined>(0);

  useEffect(() => {
    const fetch24hVolume = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/global"
        );
        setH24Volume(response.data.data.total_volume.usd);
      } catch (error) {
        console.error("Error fetching 24h volume:", error);
      }
    };

    fetch24hVolume();
  }, []);

  const TrendingIcon = () => {
    if (volumeH === undefined) {
      return null;
    }

    return volumeH > 0 ? (
      <FiTrendingUp style={{ color: "green" }} />
    ) : volumeH < 0 ? (
      <FiTrendingDown style={{ color: "red" }} />
    ) : null;
  };

  return (
    <div className="mt-4 border rounded-md p-4 font-semibold">
      <div className="flex flex-row items-center justify-between">
        <div>
          <p className="text-xl">${volumeH?.toLocaleString()}</p>
          <h2 className="text-gray-400">24h Trading Volume</h2>
        </div>
        <div className="text-6xl">
          <TrendingIcon />
        </div>
      </div>
    </div>
  );
}

export default VolumeH;