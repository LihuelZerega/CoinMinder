"use client";
import React from "react";
import NavBar from "../NavBar";
import Footer from "@/components/Footer";
import Highlights from "./Highlights";
import CryptoPricesTable from "@/components/Crypto/CryptoPricesTable";
import TopTokensColapsablePanel from "./TopTokensColapsablePanel";

function Crypto() {
  return (
    <div className="h-screen">
      <NavBar />
      <main className="mx-auto max-w-7xl py-6 lg:px-8 mt-32 mb-24">
        <section className="border-b-1 pb-12 mb-6 mx-6">
          <h1 className="mb-4 text-lg font-light text-[#38bdf8]">Crypto</h1>
          <h1 className="font-medium text-4xl">Today&apos;s Crypto Prices</h1>
        </section>
        <section className="border-b-1 pb-6 mb-2 mx-6">
          <Highlights />
        </section>
        <section>
          <div className="px-6">
            <TopTokensColapsablePanel />
          </div>
          <div className="px-2">
            {/* <CryptoPricesTable /> */}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Crypto;
