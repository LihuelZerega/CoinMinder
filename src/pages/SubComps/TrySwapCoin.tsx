import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

function TrySwapCoin() {
  return (
    <div className="flex flex-col items-start justify-between border-1 p-6 rounded-md h-full">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight sm:text-4xl text-[#38bdf8]">
          Swap Coins
        </h1>
        <p className="mx-auto pr-32 pt-4 pb-16 text-gray-600 text-sm">
          Experience the convenience of calculating exchange rates instantly and
          make informed decisions about your finances.
        </p>
      </div>
      <div>
        <Link href="/swap">
          <button className="flex flex-row items-center rounded-md bg-[#38bdf8] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#35aee3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#38bdf8]">
            Try Swap
            <span className="ml-1">
              <GoArrowUpRight />
            </span>{" "}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default TrySwapCoin;
