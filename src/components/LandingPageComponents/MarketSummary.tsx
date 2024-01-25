import React from "react";
import Top5Crypto from "@/components/Crypto/Top5Crypto";
import IndexPrices from "../GlobalCoins/IndexPrices";
import PesoToDollarResume from "./SubComps/PesoToDollarResume";
import StockPrices from "../GlobalCoins/StockPrices";

function MarketSummary() {
  return (
    <div>
      <section>
        <h1 className="py-6 font-semibold text-2xl">Market Summary</h1>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-b pb-12">
        <div className="rounded-md"><Top5Crypto /></div>
        <div className="rounded-md"><IndexPrices /></div>
        <div className="rounded-md"><StockPrices /></div>
        {/* <div className="rounded-md"><PesoToDollarResume /></div> */}
      </section>
    </div>
  );
}

export default MarketSummary;
