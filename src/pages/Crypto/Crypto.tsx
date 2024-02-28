"use client";
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Highlights from "./Highlights";
import CryptoPricesTable from "@/pages/Crypto/CryptoPricesTable";
import TopTokensColapsablePanel from "./TopTokensColapsablePanel";
import BitcoinHalvingCollapsiblePanel from "./BitcoinHalvingColapsablePanel";

function Crypto() {
  return (
    <div className="h-screen">
      <NavBar />
      <main className="mx-auto max-w-7xl py-6 lg:px-8 mt-24 mb-24">
        {/* <section className="flex flex-row items-center space-x-4 border-b-1 pb-6 mb-2 mx-6">
          <div>
            <h1 className="mb-4 text-lg font-light text-[#38bdf8]">Crypto</h1>
            <h1>Today&apos;s Crypto Prices</h1>
          </div>
        </section> */}

        <section className="px-6">
          <BitcoinHalvingCollapsiblePanel />
        </section>

        <section className="border-b-1 pb-6 mb-2 mx-6">
          <Highlights />
        </section>

        <section>
          <div className="px-6">
            <TopTokensColapsablePanel />
          </div>
          <div className="px-2">
            <CryptoPricesTable />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Crypto;
