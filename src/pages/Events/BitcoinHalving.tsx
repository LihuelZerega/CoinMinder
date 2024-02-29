"use client";
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { HeroSection } from "./BitcoinHalving/HeroSection";
import WhatisBitcoinHalving from "./BitcoinHalving/WhatisBitcoinHalving";
import BitcoinMining from "./BitcoinHalving/BitcoinMining";
import Howaffects from "./BitcoinHalving/Howaffects";

function BitcoinHalving() {
  return (
    <div className="h-screen">
      <NavBar />
      <main className="mx-auto max-w-7xl py-6 lg:px-8 mt-24 mb-24">
        <section className="px-6">
          <HeroSection />
          <WhatisBitcoinHalving />
          <BitcoinMining />
          <Howaffects />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default BitcoinHalving;
