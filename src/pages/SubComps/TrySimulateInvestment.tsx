import Link from "next/link";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";

function TrySimulateInvestment() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-start justify-between border-1 p-6 rounded-md h-full"
    >
      <div>
        <h1 className="text-2xl font-semibold tracking-tight sm:text-4xl text-[#38bdf8]">
          Investment simulator
        </h1>
        <p className="mx-auto pr-32 pt-4 pb-16 text-gray-600 text-sm">
          Simulate short, medium, and long-term investments to maximize your
          returns.
        </p>
      </div>
      <div>
        <Link href="/simulate">
          <motion.button
            disabled={isLoading}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-row items-center cursor-pointer rounded-md bg-[#38bdf8] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#35aee3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#38bdf8]"
          >
            Try Simulator
            <span className="ml-1">
              <GoArrowUpRight />
            </span>{" "}
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}

export default TrySimulateInvestment;
