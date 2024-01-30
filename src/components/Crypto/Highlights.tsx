import React from "react";
import MarketCap from "./MarketCap";
import VolumeH from "./VolumeH";
import Trending from "./Trending";

function Highlights() {
  return (
    <div className="flex flex-row">
      <section className="w-1/3">
        <MarketCap />
      </section>
      <section className="w-1/3">
        <VolumeH />
      </section>
      <section className="w-1/3">
        <Trending />
      </section>
    </div>
  );
}

export default Highlights;
