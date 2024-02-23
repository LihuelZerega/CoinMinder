import React from "react";
import MarketCap from "./MarketCap";
import VolumeH from "./VolumeH";
import Trending from "./Trending";
import CryptoStats from "./CryptoStats";
import TopGainers from "@/pages/Crypto/TopGainers";
import TopLosers from "@/pages/Crypto/TopLosers";

function Highlights() {
  return (
    <div>
      <CryptoStats />
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <MarketCap />
          <VolumeH />
        </div>
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
