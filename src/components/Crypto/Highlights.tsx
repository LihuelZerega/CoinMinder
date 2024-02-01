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
        <section className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          <MarketCap />
          <VolumeH />
          <Trending />
          <LargestGainers />
        </section>
      </div>
    </div>
  );
}

export default Highlights;
