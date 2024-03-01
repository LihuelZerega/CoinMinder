"use client";
import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "@/components/Footer";
import StockPrices from "./StockPrices";
import { StocksPrices, StocksPricesResponsive } from "@/utils/UI/MarketsOverview";

function Stocks() {
  return (
    <div className="h-screen">
      <NavBar />
      <main className="mx-auto max-w-7xl py-6 lg:px-8 mt-24 md:mt-32 mb-24">
      <section className="px-6">
          <div className="hidden md:block mb-5">
            <StocksPrices />
          </div>
          <div className="block md:hidden">
            <StocksPricesResponsive />
          </div>
        </section>
        <section className="mb-12">
          <StockPrices />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Stocks;
