import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import LogoBullSwap from "@/images/bullswap_icon-skyblue.png";
import { TypewriterEffectSmooth } from "@/utils/typewriter-effect";

export function MarketsOverview() {
  return <div>MarketsOverview</div>;
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
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-row items-center space-x-3 pb-3 mb-6 border-b-1"
      >
        <Image
          src={LogoBullSwap}
          width={50}
          height={50}
          alt="LogoBullSwap"
          className="mr-3"
        />
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
      <motion.div className="flex flex-col items-left mb-6 border-b-1">
        <div className="flex flex-row space-x-3">
          <Image
            src={LogoBullSwap}
            width={80}
            height={80}
            alt="LogoBullSwap"
            className="mb-4 ml-2"
          />
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
