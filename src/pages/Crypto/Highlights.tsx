import React from "react";
import { motion } from "framer-motion";
import MarketCap from "./MarketCap";
import VolumeH from "./VolumeH";
import Trending from "./Popular/Trending";
import CryptoStats from "./CryptoStats";
import TopGainers from "@/pages/Crypto/Popular/TopGainers";
import TopLosers from "@/pages/Crypto/Popular/TopLosers";

function Highlights() {
  return (
    <div>
      <CryptoStats />
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <MarketCap />
          <VolumeH />
        </motion.div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Trending />
          <TopGainers />
          <TopLosers />
        </div>
      </div>
    </div>
  );
}

export default Highlights;
