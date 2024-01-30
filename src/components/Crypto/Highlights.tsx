import React from "react";
import MarketCap from "./MarketCap";
import VolumeH from "./VolumeH";
import Trending from "./Trending";
import CryptoStats from "./CryptoStats";

function Highlights() {
  return (
    <div>
      <CryptoStats />
      <div className="flex flex-row">
        <section className="w-1/3">
          <MarketCap />
          <VolumeH />
        </section>
        <section className="w-1/3">
          <Trending />
        </section>
        <section className="w-1/3">asdf</section>
      </div>
    </div>
  );
}

export default Highlights;
