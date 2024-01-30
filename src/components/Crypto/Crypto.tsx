"use client";
import React from "react";
import NavBar from "../NavBar";
import CryptoPricesTable from "@/components/Crypto/CryptoPricesTable"
import Footer from "@/components/Footer";

function Crypto() {
  return (
    <div className="h-screen">
      <NavBar />
      <main className="mx-auto max-w-7xl px-6 py-6 lg:px-8 mt-32 mb-24">
        <section className="border-b-1 pb-12 mb-12">
          <h1 className="mb-4 text-lg font-extralight">Crypto</h1>
          <h1 className="font-medium text-4xl">Today's Crypto Prices</h1>
        </section>
        <section className="mb-12">
          <CryptoPricesTable />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Crypto;
