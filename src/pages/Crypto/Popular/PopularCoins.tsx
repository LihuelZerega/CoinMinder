"use client";
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import GainersCoins from "./GainersCoins";
import LosersCoins from "./LosersCoins";
import TrendingCoins from "./TrendingCoins";

function PopularCoins() {
  return (
    <div className="h-screen">
      <NavBar />
      <main className="mx-auto max-w-7xl px-2 py-6 lg:px-8 mt-24 mb-24 select-none">
        <section className="border-b-1 pb-6 mb-6">
          <h1 className="text-3xl font-bold text-[#38bdf8]">
            Markets Overview
          </h1>
        </section>
        <section className="flex flex-col md:flex-row justify-between gap-8">
          <div className="w-full h-full">
            <TrendingCoins />
          </div>
          <div className="w-full h-full">
            <GainersCoins />
          </div>
          <div className="w-full h-full">
            <LosersCoins />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default PopularCoins;
