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
        <section className="flex flex-col gap-8 w-1/3">
          <MarketCap />
          <VolumeH />
        </section>
        <section className="flex flex-row gap-8 w-2/3">
          <Trending />
          <LargestGainers />
        </section>
      </div>
    </div>
  );
}

export default Highlights;
