"use client";
import React, { useState } from "react";
import ProgressiveLineChart from "./ProgressiveLineChart";

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
    const [futureValues, setFutureValues] = useState<number[]>([]);
  
    const calculateFutureValues = () => {
      const rate = annualInterestRate / 100;
      const periods = investmentPeriod;
      const values = Array.from(
        { length: periods + 1 },
        (_, i) => initialInvestment * Math.pow(1 + rate, i)
      );
      setFutureValues(values);
    };

  return (
    <div className="investment-simulator">
      <h2>Investment Simulator</h2>
      <div>
        <label htmlFor="initialInvestment">Initial Investment:</label>
        <input
          type="number"
          id="initialInvestment"
          value={initialInvestment}
          onChange={(e) => setInitialInvestment(Number(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="annualInterestRate">Annual Interest Rate (%):</label>
        <input
          type="number"
          id="annualInterestRate"
          value={annualInterestRate}
          onChange={(e) => setAnnualInterestRate(Number(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="investmentPeriod">Investment Period (years):</label>
        <input
          type="number"
          id="investmentPeriod"
          value={investmentPeriod}
          onChange={(e) => setInvestmentPeriod(Number(e.target.value))}
        />
      </div>
      <button onClick={calculateFutureValues}>Calculate</button>
      {futureValues.length > 0 && (
        <div>
          <h3>Future Values:</h3>
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