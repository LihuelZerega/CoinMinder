"use client";
import React from "react";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { motion, useAnimation } from "framer-motion";
import { HeroSection } from "./BitcoinHalving/HeroSection";
import WhatisBitcoinHalving from "./BitcoinHalving/WhatisBitcoinHalving";
import BitcoinMining from "./BitcoinHalving/BitcoinMining";
import Howaffects from "./BitcoinHalving/Howaffects";
import TwoBitcoinHalvingCountdowns from "./BitcoinHalving/TwoBitcoinHalvingCountdowns";
import BitcoinHalvingDates from "./BitcoinHalving/BitcoinHalvingDates";
import BitcoinZeroInflation from "./BitcoinHalving/BitcoinZeroInflation";
import BitcoinHalvingin2024 from "./BitcoinHalving/BitcoinHalvingin2024";
import BitcoinHalvingHistory from "./BitcoinHalving/BitcoinHalvingHistory";
import BitcoinHalvingChart from "./BitcoinHalving/BitcoinHalvingChart";
import HowToTakeAdvantage from "./BitcoinHalving/HowToTakeAdvantage";
import HowToBuyBitcoinBefore from "./BitcoinHalving/HowToBuyBitcoinBefore";
import { ScrollShadow } from "@nextui-org/react";

function BitcoinHalving() {
  const controls = useAnimation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      controls.start({ y: element.offsetTop });
    }
  };

  return (
    <div className="h-screen">
      <NavBar />
      <main className="mx-auto max-w-7xl py-6 lg:px-8 mt-24 mb-24">
        <section className="px-6">
          <HeroSection />
          <div>
            <hr className="mx-24 mt-12 mb-12" />
          </div>
          <section className="flex flex-row">
            <div className="w-full md:block md:w-9/12">
              <div id="WhatisBitcoinHalving">
                <WhatisBitcoinHalving />
              </div>
              <div id="BitcoinMining">
                <BitcoinMining />
              </div>
              <div id="Howaffects">
                <Howaffects />
              </div>
              <div id="TwoBitcoinHalvingCountdowns">
                <TwoBitcoinHalvingCountdowns />
              </div>
              <div id="BitcoinHalvingDates">
                <BitcoinHalvingDates />
              </div>
              <div id="BitcoinZeroInflation">
                <BitcoinZeroInflation />
              </div>
              <div id="BitcoinHalvingin2024">
                <BitcoinHalvingin2024 />
              </div>
              <div id="BitcoinHalvingHistory">
                <BitcoinHalvingHistory />
              </div>
              <div id="BitcoinHalvingChart">
                <BitcoinHalvingChart />
              </div>
              <div id="HowToTakeAdvantage">
                <HowToTakeAdvantage />
              </div>
              <div id="HowToBuyBitcoinBefore">
                <HowToBuyBitcoinBefore />
              </div>
              <div className="flex flex-row space-x-2">
                <h1 className="text-gray-500 font-medium">
                  Information taken from
                </h1>
                <Link href="https://www.bitcoinsensus.com/es/es-bitcoin-halving-countdown/">
                  <h1 className="text-gray-500 hover:text-[#38bdf8] font-medium">
                    Bitcoinsensus.
                  </h1>
                </Link>
              </div>
            </div>

            <div className="hidden md:block md:w-3/12 md:pl-3 md:ml-6 border-l-2">
              <ScrollShadow hideScrollBar>
                <ul className="space-y-4">
                  <li className="">
                    <a
                      onClick={() => scrollToSection("WhatisBitcoinHalving")}
                      href="#WhatisBitcoinHalving"
                      className="text-md text-gray-500 hover:text-gray-600 font-medium "
                    >
                      What Is Bitcoin Halving?
                    </a>
                  </li>
                  <li className="">
                    <a
                      onClick={() => scrollToSection("BitcoinMining")}
                      href="#BitcoinMining"
                      className="text-md text-gray-500 hover:text-gray-600 font-medium "
                    >
                      Bitcoin Mining and the Reward of Mining
                    </a>
                  </li>
                  <li className="">
                    <a
                      onClick={() => scrollToSection("Howaffects")}
                      href="#Howaffects"
                      className="text-md text-gray-500 hover:text-gray-600 font-medium "
                    >
                      How does the Bitcoin halving affect miners?
                    </a>
                  </li>
                  <li className="">
                    <a
                      onClick={() =>
                        scrollToSection("TwoBitcoinHalvingCountdowns")
                      }
                      href="#TwoBitcoinHalvingCountdowns"
                      className="text-md text-gray-500 hover:text-gray-600 font-medium "
                    >
                      Two Bitcoin Halving Countdowns
                    </a>
                  </li>
                  <li className="">
                    <a
                      onClick={() => scrollToSection("BitcoinHalvingDates")}
                      href="#BitcoinHalvingDates"
                      className="text-md text-gray-500 hover:text-gray-600 font-medium "
                    >
                      Bitcoin Halving Dates
                    </a>
                  </li>
                  <li className="">
                    <a
                      onClick={() => scrollToSection("BitcoinZeroInflation")}
                      href="#BitcoinZeroInflation"
                      className="text-md text-gray-500 hover:text-gray-600 font-medium "
                    >
                      Bitcoin Zero Inflation
                    </a>
                  </li>
                  <li className="">
                    <a
                      onClick={() => scrollToSection("BitcoinHalvingin2024")}
                      href="#BitcoinHalvingin2024"
                      className="text-md text-gray-500 hover:text-gray-600 font-medium "
                    >
                      Bitcoin Halving in 2024
                    </a>
                  </li>
                  <li className="">
                    <a
                      onClick={() => scrollToSection("BitcoinHalvingHistory")}
                      href="#BitcoinHalvingHistory"
                      className="text-md text-gray-500 hover:text-gray-600 font-medium "
                    >
                      Bitcoin Halving History
                    </a>
                  </li>
                  <li className="">
                    <a
                      onClick={() => scrollToSection("BitcoinHalvingChart")}
                      href="#BitcoinHalvingChart"
                      className="text-md text-gray-500 hover:text-gray-600 font-medium "
                    >
                      Bitcoin Halving Dates
                    </a>
                  </li>
                  <li className="">
                    <a
                      onClick={() => scrollToSection("HowToTakeAdvantage")}
                      href="#HowToTakeAdvantage"
                      className="text-md text-gray-500 hover:text-gray-600 font-medium "
                    >
                      How to take advantage of the halving?
                    </a>
                  </li>
                  <li className="">
                    <a
                      onClick={() => scrollToSection("HowToBuyBitcoinBefore")}
                      href="#HowToBuyBitcoinBefore"
                      className="text-md text-gray-500 hover:text-gray-600 font-medium "
                    >
                      How to buy Bitcoin before the halving?
                    </a>
                  </li>
                </ul>
              </ScrollShadow>
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default BitcoinHalving;
