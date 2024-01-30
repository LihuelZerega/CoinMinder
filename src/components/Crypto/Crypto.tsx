"use client";
import React from "react";
import NavBar from "../NavBar";
import CryptoPricesTable from "@/components/Crypto/CryptoPricesTable";
import Footer from "@/components/Footer";
import Link from "next/link";
import Highlights from "./Highlights";

function Crypto() {
  return (
    <div className="h-screen">
      <NavBar />
      <main className="mx-auto max-w-7xl px-6 py-6 lg:px-8 mt-32 mb-24">
        <section className="border-b-1 pb-12 mb-6">
          <h1 className="mb-4 text-lg font-extralight">Crypto</h1>
          <h1 className="font-medium text-4xl">Today's Crypto Prices</h1>
          <h1 className="py-2 font-medium text-sm text-gray-400">
            Information provided by{" "}
            <span>
              {" "}
              <Link
                className="cursor-pointer hover:text-gray-500"
                href="https://www.coingecko.com/"
              >
                "CoinGecko.com"
              </Link>
            </span>
          </h1>
        </section>
        <section className="border-b-1 pb-12 mb-12">
          <Highlights />
        </section>
        <section className="mb-12">
          {/* <CryptoPricesTable /> */}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Crypto;
