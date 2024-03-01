import React from "react";

interface InvestmentReturnsProps {
  initialInvestment: number;
  futureValues: number[];
}

const InvestmentReturns: React.FC<InvestmentReturnsProps> = ({
  initialInvestment,
  futureValues,
}) => {
  const calculateReturns = () => {
    if (!futureValues || !Array.isArray(futureValues)) return null;
  
    const totalValue = futureValues[futureValues.length - 1];
    const totalReturns = totalValue - initialInvestment;
    const monthlyReturns = totalReturns / futureValues.length;
    const annualReturns = monthlyReturns * 12;
  
    const returnsPercentage = (totalReturns / initialInvestment) * 100;
  
    return {
      totalReturns,
      returnsPercentage,
      monthlyReturns,
      annualReturns,
    };
  };  

  const returns = calculateReturns();

  if (returns) {
    const { totalReturns, returnsPercentage, monthlyReturns, annualReturns } = returns;

  return (
    <div className="investment-returns">
      <section className="grid gird-cols-2 md:grid-cols-4 gap-4 max-w-4xl py-8">
        <div className="flex flex-col p-4 border rounded-md">
          <p className="text-sm">Total Returns</p>
          <p className="flex flex-row items-center space-x-1 text-[#38bdf8] font-medium py-2 text-3xl">${totalReturns.toFixed(2)}</p>
        </div>
        <div className="flex flex-col p-4 border rounded-md">
          <p className="text-sm">Returns Percentage</p>
          <p className="flex flex-row items-center space-x-1 text-[#38bdf8] font-medium py-2 text-3xl">{returnsPercentage.toFixed(2)}%</p>
        </div>
        <div className="flex flex-col p-4 border rounded-md">
          <p className="text-sm">Monthly Returns</p>
          <p className="flex flex-row items-center space-x-1 text-[#38bdf8] font-medium py-2 text-3xl">${monthlyReturns.toFixed(2)}</p>
        </div>
        <div className="flex flex-col p-4 border rounded-md">
          <p className="text-sm">Annual Returns</p>
          <p className="flex flex-row items-center space-x-1 text-[#38bdf8] font-medium py-2 text-3xl">${annualReturns.toFixed(2)}</p>
        </div>
      </section>
    </div>
    );
  } else {
    return (
      <div className="investment-returns">
        <p className="text-red-500">No data available for investment returns.</p>
      </div>
    );
  }
};

export default InvestmentReturns;