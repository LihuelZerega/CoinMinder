import React from "react";
import MarketCap from "./MarketCap";
import VolumeH from "./VolumeH";
import Trending from "./Trending";
import CryptoStats from "./CryptoStats";
import LargestGainers from "@/components/Crypto/LargestGainers";

function Highlights() {
  return (
    <div>
      <CryptoStats />
      <div className="flex flex-row gap-8">
        <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex flex-col gap-4">
            <MarketCap />
            <VolumeH />
          </div>
          <Trending />
          <LargestGainers />
        </section>
      </div>
    </div>
  );
}

export default Highlights;
