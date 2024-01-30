import React from "react";
import NavBar from "../NavBar";
import Footer from "@/components/Footer";
import CurrencyConverter from "./CurrencyConverter";
import CryptoConverter from "./CryptoConverter";

function Swap() {
  return (
    <div className="">
      <NavBar />
      <main className="flex flex-row items-start justify-center h-screen mx-auto max-w-7xl px-6 py-6 lg:px-8 mt-32 mb-24">
        <CurrencyConverter />
      </main>
      <Footer />
    </div>
  );
}

export default Swap;
