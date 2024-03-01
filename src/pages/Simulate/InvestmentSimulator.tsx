"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import ProgressiveLineChart from "./ProgressiveLineChart";
import InvestmentReturns from "./InvestmentReturns";

interface InvestmentSimulatorProps {
  initialInvestment: number;
  annualInterestRate: number;
  investmentPeriod: number;
}

const InvestmentSimulator: React.FC<InvestmentSimulatorProps> = ({
  initialInvestment: initialInvestmentProp,
  annualInterestRate: annualInterestRateProp,
  investmentPeriod: investmentPeriodProp,
}) => {
  const [initialInvestment, setInitialInvestment] = useState(
    initialInvestmentProp
  );
  const [annualInterestRate, setAnnualInterestRate] = useState(
    annualInterestRateProp
  );
  const [investmentPeriod, setInvestmentPeriod] =
    useState(investmentPeriodProp);
  const [monthlyContribution, setMonthlyContribution] = useState(0);
  const [futureValues, setFutureValues] = useState<number[]>([]);

  const calculateFutureValues = () => {
    const rate = annualInterestRate / 100;
    const periods = investmentPeriod;
    const values = Array.from({ length: periods + 1 }, (_, i) => {
      const monthlyAddition = monthlyContribution * (i + 1);
      return (initialInvestment + monthlyAddition) * Math.pow(1 + rate, i);
    });
    setFutureValues(values);
  };

  return (
    <div className="investment-simulator">
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 md:gap-4 max-w-4xl">
        <div className="flex flex-col p-4 border rounded-md w-full">
          <label className="text-sm" htmlFor="initialInvestment">
            Initial Investment:
          </label>
          <div className="flex flex-row items-center space-x-1 text-gray-400">
            <p className="text-3xl">$</p>
            <input
              className="py-2 text-3xl outline-none max-w-24 md:max-w-32"
              type="number"
              id="initialInvestment"
              value={initialInvestment}
              onChange={(e) => setInitialInvestment(Number(e.target.value))}
            />
          </div>
        </div>
        <div className="flex flex-col p-4 border rounded-md w-full">
          <label className="text-sm" htmlFor="annualInterestRate">
            Annual Interest Rate:
          </label>
          <div className="flex flex-row items-center space-x-1 text-gray-400">
            <p className="text-3xl">%</p>
            <input
              className="py-2 text-3xl outline-none max-w-24 md:max-w-32"
              type="number"
              id="annualInterestRate"
              value={annualInterestRate}
              onChange={(e) => setAnnualInterestRate(Number(e.target.value))}
            />
          </div>
        </div>
        <div className="flex flex-col p-4 border rounded-md w-full">
          <label className="text-sm" htmlFor="investmentPeriod">
            Investment Period (Years):
          </label>
          <div className="flex flex-row items-center space-x-1 text-gray-400">
            <input
              className="py-2 text-3xl outline-none max-w-24"
              type="number"
              id="investmentPeriod"
              value={investmentPeriod}
              onChange={(e) => setInvestmentPeriod(Number(e.target.value))}
            />
          </div>
        </div>
        <div className="flex flex-col p-4 border rounded-md w-full">
          <label className="text-sm" htmlFor="monthlyContribution">
            Monthly Contribution:
          </label>
          <div className="flex flex-row items-center space-x-1 text-gray-400">
            <p className="text-3xl">$</p>
            <input
              className="py-2 text-3xl outline-none max-w-24 md:max-w-32"
              type="number"
              id="monthlyContribution"
              value={monthlyContribution}
              onChange={(e) => setMonthlyContribution(Number(e.target.value))}
            />
          </div>
        </div>
      </section>

      <div className="flex flex-row items-center justify-center py-8 border-b mb-6">
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          className="rounded-md bg-[#38bdf8] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#35aee3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#38bdf8]"
          onClick={calculateFutureValues}
        >
          Calculate
        </motion.button>
      </div>

      {futureValues.length > 0 && (
        <div>
          <InvestmentReturns
            initialInvestment={initialInvestment}
            futureValues={futureValues}
          />
          <ProgressiveLineChart
            labels={Array.from({ length: investmentPeriod + 1 }, (_, i) => i)}
            data={futureValues}
          />
        </div>
      )}
    </div>
  );
};

export default InvestmentSimulator;
