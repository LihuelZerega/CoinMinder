import React from "react";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";

function FinancialExplorer() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="flex flex-col gap-8 mb-12">
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        <div className="border-1 p-6 rounded-md h-full">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight sm:text-4xl text-[#38bdf8]">
              Latest Financial News
            </h1>
            <p className="mx-auto pr-32 pt-4 pb-16 text-gray-600 text-sm">
              Stay updated with the latest financial news and market insights.
            </p>
          </div>
          <div>
            <Link href="/news">
              <motion.button
                disabled={isLoading}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-row items-center cursor-pointer rounded-md bg-[#38bdf8] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#35aee3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#38bdf8]"
              >
                Learn More
                <span className="ml-1">
                  <GoArrowUpRight />
                </span>{" "}
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col lg:flex-row gap-8"
      >
        <div className="lg:w-1/3">
          <div className="flex flex-col items-start justify-between border-1 p-6 rounded-md h-full">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight sm:text-4xl text-[#38bdf8]">
                Learn
              </h1>
              <p className="mx-auto pr-32 pt-4 pb-16 text-gray-600 text-sm">
                Learn the basics of the financial world with Bull Swap
              </p>
            </div>
            <div>
              <Link href="/learn">
                <motion.button
                  disabled={isLoading}
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-row items-center cursor-pointer rounded-md bg-[#38bdf8] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#35aee3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#38bdf8]"
                >
                  Start Learn
                  <span className="ml-1">
                    <GoArrowUpRight />
                  </span>{" "}
                </motion.button>
              </Link>
            </div>
          </div>
        </div>

        <div className="lg:w-1/3">
          <div className="flex flex-col items-start justify-between border-1 p-6 rounded-md h-full">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight sm:text-4xl text-[#38bdf8]">
                Stocks
              </h1>
              <p className="mx-auto pr-32 pt-4 pb-16 text-gray-600 text-sm">
                Get detailed information on stocks and make informed decisions.
              </p>
            </div>
            <div>
              <Link href="/stocks">
                <motion.button
                  disabled={isLoading}
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-row items-center cursor-pointer rounded-md bg-[#38bdf8] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#35aee3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#38bdf8]"
                >
                  View Information
                  <span className="ml-1">
                    <GoArrowUpRight />
                  </span>{" "}
                </motion.button>
              </Link>
            </div>
          </div>
        </div>

        <div className="lg:w-1/3">
          <div className="flex flex-col items-start justify-between border-1 p-6 rounded-md h-full">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight sm:text-4xl text-[#38bdf8]">
                Crypto
              </h1>
              <p className="mx-auto pr-32 pt-4 pb-16 text-gray-600 text-sm">
                Stay informed about the latest trends and insights in
                cryptocurrencies.
              </p>
            </div>
            <div>
              <Link href="/crypto">
                <motion.button
                  disabled={isLoading}
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-row items-center cursor-pointer rounded-md bg-[#38bdf8] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#35aee3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#38bdf8]"
                >
                  View Information
                  <span className="ml-1">
                    <GoArrowUpRight />
                  </span>{" "}
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default FinancialExplorer;
