"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { BackgroundBeams } from "@/utils/background-beams";
import BitcoinHalvingCountDown from "./utils/BitcoinHalvingCountDown";

export function BitcoinHalvingCollapsiblePanel() {
  const [isOpen, setIsOpen] = useState(true);

  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`h-full w-full rounded-md bg-white relative flex flex-col items-center justify-between antialiased md:flex-row px-3 md:items-start border p-4 my-4 select-none ${
          isOpen ? "" : "hidden"
        }`}
      >
        <Link href="/events/bitcoin-halving">
          <section className="flex flex-col md:flex-row items-center md:items-start justify-between p-2 md:p-4">
            <div className="mx-auto space-y-6">
              <h1 className="flex flex-row relative containter z-10 text-4xl md:text-7xl text-[#38bdf8] text-center md:text-left font-sans font-bold">
                When Is the Next Bitcoin Halving?
              </h1>
              <p className="hidden md:block text-gray-600 hover:text-gray-700 max-w-xl">
                The next Bitcoin halving is anticipated for April 2024, although
                the precise date is uncertain due to variability in block
                height. This reduction occurs every 210,000 blocks, so it is
                projected to happen when the block height reaches 840,000 in
                that month.
              </p>
            </div>
            <div className="pr-0 md:pr-12">
              <BitcoinHalvingCountDown />
            </div>
          </section>
        </Link>

        <div className="hidden md:block h-full text-gray-600 hover:text-gray-700">
          <button
            onClick={togglePanel}
            className="focus:outline-none cursor-pointer"
          >
            <IoClose className="text-xl" />
          </button>
        </div>
        <BackgroundBeams />
      </div>
    </>
  );
}
