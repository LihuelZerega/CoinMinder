import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "@/components/Footer";
import InvestmentSimulator from "./InvestmentSimulator";

function Simulate() {
  return (
    <div>
      <NavBar />
      <main className="flex flex-col items-center justify-center mx-auto w-full px-6 py-6 lg:px-8 mt-24 mb-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-3xl font-bold tracking-tight  text-[#38bdf8]">
            Simulate Your Investment With Bull Swap
          </h1>
          <p className="pt-6 text-sm leading-8 text-gray-600">
            Simulate your short, medium and long-term investments using our
            easy-to-use platform.
          </p>
          <p className="text-sm leading-8 text-gray-600">
            Our service makes it very easy to simulate investments without any
            problems.
          </p>
        </div>
        <InvestmentSimulator
          initialInvestment={0}
          annualInterestRate={0}
          investmentPeriod={0}
        />
      </main>
      <Footer />
    </div>
  );
}

export default Simulate;
