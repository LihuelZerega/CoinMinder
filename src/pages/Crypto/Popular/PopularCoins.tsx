"use client";
import React from "react";
import { motion } from "framer-motion";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import GainersCoins from "./GainersCoins";
import LosersCoins from "./LosersCoins";
import TrendingCoins from "./TrendingCoins";

function PopularCoins() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="h-screen"
    >
      <NavBar />
      <main className="mx-auto max-w-7xl px-2 py-6 lg:px-8 mt-24 mb-24 select-none">
        <section className="border-b-1 pb-6 mb-6">
          <h1 className="text-3xl font-bold text-[#38bdf8]">
            Markets Overview
          </h1>
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
