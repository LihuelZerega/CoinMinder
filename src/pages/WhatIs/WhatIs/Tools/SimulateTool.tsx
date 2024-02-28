import React from "react";

function Simulate() {
  return (
    <div className="px-8 md:px-12 mb-12">
      <div>
        <h1 className="text-[#38bdf8] font-bold text-3xl md:text-5xl pb-4">
          Simulate Tool
        </h1>
      </div>

      <div className="text-gray-500 font-medium pr-0 md:pr-16 pb-6">
        <p className="pb-6">
          With "Simulate", users have the ability to simulate investments easily
          and efficiently. This tool allows them to enter various
          investment-related parameters and receive detailed analyzes on the
          return potential of their investments over a given period of time.
        </p>
        <p className="pb-6">
          The operation of "Simulate" is simple and effective. Users simply
          enter the following data:
        </p>
      </div>

      <div className="text-gray-500 font-medium pr-0 md:pr-16 pb-6">
        <h2 className="text-xl font-semibold text-gray-700 pb-2">
          Initial investment:
        </h2>
        <p className="pb-6">
          The amount of money you want to invest initially. Annual Interest
          Rate: The expected annual interest rate on the investment.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 pb-2">
          Investment period:
        </h2>
        <p className="pb-6">
          The period of time during which they wish to hold the investment.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 pb-2">
          Monthly contribution:
        </h2>
        <p className="pb-6">
          The additional amount of money they wish to invest on a monthly basis.
        </p>
      </div>

      <div className="text-gray-500 font-medium pr-0 md:pr-16 pb-6 border-b-1">
        <p className="pb-6">
          Once users enter this data, "Simulate" performs complex calculations
          and generates a detailed ROI analysis.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 pb-2">
          Total return:
        </h2>
        <p className="pb-6">
          The total amount of money expected to be earned from the investment
          over the entire period.{" "}
        </p>

        <h2 className="text-xl font-semibold text-gray-700 pb-2">
          Return Percentage:
        </h2>
        <p className="pb-6">The percentage return on the initial investment.</p>

        <h2 className="text-xl font-semibold text-gray-700 pb-2">
          Monthly Returns:
        </h2>
        <p className="pb-6">The expected monthly return on the investment.</p>

        <h2 className="text-xl font-semibold text-gray-700 pb-2">
          Annual Returns:
        </h2>
        <p className="pb-6">The expected annual return on the investment.</p>

        <p className="pb-6">
          In addition to this data, "Simulate" can also generate a visual graph
          showing the evolution of the investment's value over time, allowing
          users to easily understand how their investment performs at different
          times.
        </p>
      </div>
    </div>
  );
}

export default Simulate;
