import React from "react";
import Link from "next/link";
import DollarOfficial from "./SubComps/Cards/DollarOfficial";
import DollarBlue from "./SubComps/Cards/DollarBlue";
import DollarRetail from "./SubComps/Cards/DollarRetail";
import DollarCrypto from "./SubComps/Cards/DollarCrypto";

function PesoToDollarSummary() {
  return (
    <div>
      <section>
        <h1 className="py-6 font-semibold text-2xl">Peso To Dollar</h1>
      </section>
      <section className="border-b pb-12 space-y-6">
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="rounded-md w-1/3 border p-4">
            <Link href="/pesotodollar/dollaroffcial">
              <DollarOfficial />
            </Link>
          </div>
          <div className="rounded-md w-1/3 border p-4">
            <Link href="/pesotodollar/dollarblue">
              <DollarBlue />
            </Link>
          </div>
          <div className="rounded-md w-1/3 border p-4">
            <Link href="/pesotodollar/dollarretail">
              <DollarRetail />
            </Link>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-8">
          <div className="rounded-md border p-4 w-full">
            <DollarCrypto />
          </div>
        </div>
      </section>
    </div>
  );
}

export default PesoToDollarSummary;
