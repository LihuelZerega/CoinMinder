"use client";
import React from "react";
import { motion } from "framer-motion";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CryptoConverter from "@/pages/Swap/CryptoConverter/CryptoConverter";
import { HiOutlineExternalLink } from "react-icons/hi";
import Link from "next/link";
import { SwapTokens, SwapTokensResponsive } from "@/utils/UI/MarketsOverview";

function Page() {
  return (
    <>
      <NavBar />
      <main className="flex flex-col items-center justify-center  md:max-w-xl mx-auto max-w-7xl px-6 py-6 lg:px-8 mt-24 mb-24">
        <section className="px-3 mb-6">
          <div className="hidden md:block mb-4">
            <SwapTokens />
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="pt-6 text-sm leading-6 text-gray-600 text-wrap"
            >
              Simulate fast and seamless tokens swaps using our easy-to-use
              platform. Our service makes it very easy to exchange tokens
              without any problems.
            </motion.p>
          </div>
          <div className="block md:hidden">
            <SwapTokensResponsive />
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="py-6 text-sm leading-6 text-gray-600 text-wrap text-center"
            >
              Simulate fast and seamless tokens swaps using our easy-to-use
              platform. Our service makes it very easy to exchange tokens
              without any problems.
            </motion.p>
          </div>
        </section>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-full"
        >
          <CryptoConverter />
        </motion.div>

        <Link href="/swap">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h1 className="flex flex-row items-center py-3 text-[#38bdf8] underline hover:font-medium hover:text-[#0096d7]">
              Try Swap Currencies{" "}
              <span className="ml-2">
                <HiOutlineExternalLink />
              </span>
            </h1>
          </motion.div>
        </Link>
      </main>
      <Footer />
    </>
  );
}

export default Page;
