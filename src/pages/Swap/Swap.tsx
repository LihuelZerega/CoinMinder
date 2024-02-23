import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "@/components/Footer";
import CurrencyConverter from "./CurrencyConverter";
import { HiOutlineExternalLink } from "react-icons/hi";
import Link from "next/link";

function Swap() {
  return (
    <div>
      <NavBar />
      <main className="flex flex-col items-center justify-center  md:max-w-xl mx-auto max-w-7xl px-6 py-6 lg:px-8 mt-24 mb-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-3xl font-bold tracking-tight  text-[#38bdf8]">
            Swap Your Currencies Instantly Using Bull Swap!
          </h1>
          <p className="pt-6 text-sm leading-8 text-gray-600">
            Simulate fast and seamless currency swaps using our easy-to-use
            platform. Our service makes it very easy to exchange currencies
            without any problems.
          </p>
        </div>

        <CurrencyConverter />

        <Link href="/swap/crypto">
          <h1 className="flex flex-row items-center py-3 text-[#38bdf8] underline hover:font-medium hover:text-[#0096d7]">
            Try Swap Cryptocurrencies{" "}
            <span className="ml-2">
              <HiOutlineExternalLink />
            </span>
          </h1>
        </Link>
      </main>
      <Footer />
    </div>
  );
}

export default Swap;
