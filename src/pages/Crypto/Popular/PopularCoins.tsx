"use client";
import React from "react";
import { motion } from "framer-motion";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import GainersCoins from "./GainersCoins";
import LosersCoins from "./LosersCoins";
import TrendingCoins from "./TrendingCoins";
import {
  MarketsOverviewPopularCoins,
  MarketsOverviewPopularCoinsResponsive,
} from "@/utils/UI/MarketsOverview";

function PopularCoins() {
  return (
    <motion.div className="h-screen">
      <NavBar />
      <main className="mx-auto max-w-7xl px-2 py-6 lg:px-8 mt-24 mb-24 select-none">
        <section className="px-3">
          <div className="hidden md:block">
            <MarketsOverviewPopularCoins />
          </div>
          <div className="block md:hidden">
            <MarketsOverviewPopularCoinsResponsive />
          </div>
        </section>
        <section className="flex flex-col md:flex-row justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full h-full"
          >
            <TrendingCoins />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full h-full"
          >
            <GainersCoins />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="w-full h-full"
          >
            <LosersCoins />
          </motion.div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
}

export default PopularCoins;
