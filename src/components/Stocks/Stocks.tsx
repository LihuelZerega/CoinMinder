"use client";
import React from "react";
import NavBar from "../NavBar";
import Footer from "@/components/Footer";
import StockPrices from "./StockPrices";

function Stocks() {
  return (
    <div className="h-screen">
      <NavBar />
      <main className="mx-auto max-w-7xl px-6 py-6 lg:px-8 mt-32 mb-24">
        <section className="border-b-1 pb-12 mb-12">
          <h1 className="mb-4 text-lg font-extralight">Stocks</h1>
          <h1 className="font-medium text-4xl">Today's Stocks Prices</h1>
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
