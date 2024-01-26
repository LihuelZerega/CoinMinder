import React from "react";
import Top5Crypto from "@/components/Crypto/Top5Crypto";
import IndexPrices from "../../GlobalCoins/IndexPrices";
import StockPrices from "../../GlobalCoins/StockPrices";

function MarketSummary() {
  return (
    <div>
      <section className="block xl:hidden">
        <h1 className="py-6 font-semibold text-2xl">Market Summary</h1>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-1 gap-8 pb-12 border-b xl:border-b-0 xl:ml-8">
        <div className="rounded-md"><StockPrices /></div>
        <div className="rounded-md"><Top5Crypto /></div>
        <div className="rounded-md"><IndexPrices /></div>
      </section>
    </div>
  );
}

export default MarketSummary;
