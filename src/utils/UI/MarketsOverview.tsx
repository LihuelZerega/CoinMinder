import React from "react";
import { motion } from "framer-motion";
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

export function SwapCurrencies() {
  const SwapCurrenciesText = [
    {
      text: "Swap Your Currencies Instantly",
      className: "text-4xl sm:text-3xl font-bold tracking-tight text-[#38bdf8]",
    },
  ];

  const SwapCurrenciesText2 = [
    {
      text: "Using Bull Swap!",
      className: "text-4xl sm:text-3xl font-bold tracking-tight text-[#38bdf8]",
    },
  ];

  return (
    <section>
      <motion.div className="flex flex-col items-center justify-center">
        <TypewriterEffectSmooth words={SwapCurrenciesText} />
        <TypewriterEffectSmooth words={SwapCurrenciesText2} />
      </motion.div>
    </section>
  );
}

export function SwapCurrenciesResponsive() {
  const SwapCurrenciesText = [
    {
      text: "Swap Your Currencies",
      className: "text-3xl sm:text-3xl font-bold tracking-tight text-[#38bdf8]",
    },
  ];

  const SwapCurrenciesText2 = [
    {
      text: "Instantly Using",
      className: "text-3xl sm:text-3xl font-bold tracking-tight text-[#38bdf8]",
    },
  ];

  const SwapCurrenciesText3 = [
    {
      text: "Bull Swap!",
      className: "text-3xl sm:text-3xl font-bold tracking-tight text-[#38bdf8]",
    },
  ];

  return (
    <section>
      <motion.div className="flex flex-col items-center justify-center">
        <TypewriterEffectSmooth words={SwapCurrenciesText} />
        <TypewriterEffectSmooth words={SwapCurrenciesText2} />
        <TypewriterEffectSmooth words={SwapCurrenciesText3} />
      </motion.div>
    </section>
  );
}

export function SwapTokens() {
  const SwapCurrenciesText = [
    {
      text: "Swap Your Tokens Instantly",
      className: "text-4xl font-bold tracking-tight text-[#38bdf8]",
    },
  ];

  const SwapCurrenciesText2 = [
    {
      text: "Using Bull Swap!",
      className: "text-4xl font-bold tracking-tight text-[#38bdf8]",
    },
  ];

  return (
    <section>
      <motion.div className="flex flex-col items-center justify-center">
        <TypewriterEffectSmooth words={SwapCurrenciesText} />
        <TypewriterEffectSmooth words={SwapCurrenciesText2} />
      </motion.div>
    </section>
  );
}

export function SwapTokensResponsive() {
  const SwapCurrenciesText = [
    {
      text: "Swap Your Tokens",
      className: "text-4xl font-bold tracking-tight text-[#38bdf8]",
    },
  ];

  const SwapCurrenciesText2 = [
    {
      text: "Instantly Using",
      className: "text-4xl font-bold tracking-tight text-[#38bdf8]",
    },
  ];

  const SwapCurrenciesText3 = [
    {
      text: "Bull Swap!",
      className: "text-4xl sm:text-3xl font-bold tracking-tight text-[#38bdf8]",
    },
  ];

  return (
    <section>
      <motion.div className="flex flex-col items-center justify-center">
        <TypewriterEffectSmooth words={SwapCurrenciesText} />
        <TypewriterEffectSmooth words={SwapCurrenciesText2} />
        <TypewriterEffectSmooth words={SwapCurrenciesText3} />
      </motion.div>
    </section>
  );
}