import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import LogoBullSwap from "@/images/bullswap_icon-skyblue.png";
import { TypewriterEffectSmooth } from "@/utils/typewriter-effect";

export function MarketsOverview() {
  const MarketsOverview = [
    {
      text: "Markets Overview",
      className: "text-3xl md:text-4xl font-bold text-[#38bdf8]",
    },
    {
      text: "/",
      className: "text-2xl md:text-3xl font-semibold text-gray-500",
    },
    {
      text: "Today's Cryptos Prices",
      className: "text-2xl md:text-3xl font-semibold text-gray-500",
    },
  ];

  return (
    <section>
      <motion.div className="flex flex-row items-center space-x-3 pb-3 mb-6 border-b-1">
        <TypewriterEffectSmooth words={MarketsOverview} className="space-x-3" />
      </motion.div>
    </section>
  );
}

export function MarketsOverviewResponsive() {
  const MarketsOverviewResponsive = [
    {
      text: "Markets Overview",
      className: "text-3xl md:text-4xl font-bold text-[#38bdf8]",
    },
  ];

  const MarketsOverviewPopuparCoinsResponsive = [
    {
      text: "Today's Cryptos Prices",
      className: "text-2xl md:text-3xl font-semibold text-gray-500",
    },
  ];

  return (
    <section>
      <motion.div className="flex flex-col items-left mb-6 border-b-1">
        <div className="flex flex-row space-x-3">
          <div className="mb-4">
            <TypewriterEffectSmooth words={MarketsOverviewResponsive} />
            <TypewriterEffectSmooth
              words={MarketsOverviewPopuparCoinsResponsive}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export function StocksPrices() {
  const MarketsOverview = [
    {
      text: "Stocks",
      className: "text-3xl md:text-4xl font-bold text-[#38bdf8]",
    },
    {
      text: "/",
      className: "text-2xl md:text-3xl font-semibold text-gray-500",
    },
    {
      text: "Today's Stock Prices",
      className: "text-2xl md:text-3xl font-semibold text-gray-500",
    },
  ];

  return (
    <section>
      <motion.div className="flex flex-row items-center space-x-3 pb-3 mb-6 border-b-1">
        <TypewriterEffectSmooth words={MarketsOverview} className="space-x-3" />
      </motion.div>
    </section>
  );
}

export function StocksPricesResponsive() {
  const MarketsOverviewResponsive = [
    {
      text: "Markets Overview",
      className: "text-3xl md:text-4xl font-bold text-[#38bdf8]",
    },
  ];

  const MarketsOverviewPopuparCoinsResponsive = [
    {
      text: "Today's Stocks Prices",
      className: "text-2xl md:text-3xl font-semibold text-gray-500",
    },
  ];

  return (
    <section>
      <motion.div className="flex flex-col items-left mb-6 border-b-1">
        <div className="flex flex-row space-x-3">
          <div>
            <TypewriterEffectSmooth words={MarketsOverviewResponsive} />
            <TypewriterEffectSmooth
              words={MarketsOverviewPopuparCoinsResponsive}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export function MarketsOverviewPopularCoins() {
  const MarketsOverview = [
    {
      text: "Markets",
      className: "text-3xl md:text-4xl font-bold text-[#38bdf8]",
    },
    {
      text: "Overview",
      className: "text-3xl md:text-4xl font-bold text-[#38bdf8]",
    },
    {
      text: "/",
      className: "text-2xl md:text-3xl font-semibold text-gray-500",
    },
    {
      text: "Popular",
      className: "text-2xl md:text-3xl font-semibold text-gray-500",
    },
    {
      text: "Coins",
      className: "text-2xl md:text-3xl font-semibold text-gray-500",
    },
  ];

  return (
    <section>
      <motion.div className="flex flex-row items-center space-x-3 pb-3 mb-6 border-b-1">
        <TypewriterEffectSmooth words={MarketsOverview} />
      </motion.div>
    </section>
  );
}

export function MarketsOverviewPopularCoinsResponsive() {
  const MarketsOverviewResponsive = [
    {
      text: "Markets",
      className: "text-3xl md:text-4xl font-bold text-[#38bdf8]",
    },
    {
      text: "Overview",
      className: "text-3xl md:text-4xl font-bold text-[#38bdf8]",
    },
  ];

  const MarketsOverviewPopuparCoinsResponsive = [
    {
      text: "Popular",
      className: "text-2xl md:text-3xl font-semibold text-gray-500",
    },
    {
      text: "Coins",
      className: "text-2xl md:text-3xl font-semibold text-gray-500",
    },
  ];

  return (
    <section>
      <div className="flex flex-col items-left mb-6 border-b-1">
        <div className="flex flex-row space-x-3">
          <div>
            <TypewriterEffectSmooth words={MarketsOverviewResponsive} />
            <TypewriterEffectSmooth
              words={MarketsOverviewPopuparCoinsResponsive}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
