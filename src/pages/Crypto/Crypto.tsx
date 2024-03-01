"use client";
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Highlights from "./Highlights";
import CryptoPricesTable from "@/pages/Crypto/CryptoPricesTable";
import TopTokensColapsablePanel from "./TopTokensColapsablePanel";
import BitcoinHalvingCollapsiblePanel from "./BitcoinHalvingColapsablePanel";
import { MarketsOverview, MarketsOverviewResponsive } from "@/utils/UI/MarketsOverview";

function Crypto() {
  return (
    <div className="h-screen">
      <NavBar />
      <main className="mx-auto max-w-7xl py-6 lg:px-8 mt-24 mb-24">
      <section className="px-6">
          <div className="hidden md:block mb-5">
            <MarketsOverview />
          </div>
          <div className="block md:hidden">
            <MarketsOverviewResponsive />
          </div>
        </section>

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
