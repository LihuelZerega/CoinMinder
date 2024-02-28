import React from "react";

export default function Technicalanalysis() {
  return (
    <div className="px-8 md:px-12 mb-12">
      <div>
        <h1 className="text-[#38bdf8] font-bold text-3xl md:text-5xl pb-4">
          Technical Analysis
        </h1>
        <p className="text-gray-500 font-medium pr-0 md:pr-16 pb-6">
          Technical analysis is a methodology used to predict future price
          movements of stocks, cryptocurrencies, or other financial assets by
          studying historical market data such as prices and trading volumes.
          Unlike fundamental analysis, which focuses on a company&apos;s
          fundamentals, technical analysis is based exclusively on price action
          and market behavior patterns.
        </p>
      </div>
      <div className="text-gray-500 font-medium pr-0 md:pr-16 pb-6">
        <div className="pb-6">
          <h2 className="text-xl font-semibold text-gray-700 pb-2">
            What is Technical Analysis and How is it Used:
          </h2>
          <p>
            Technical analysis is based on the premise that history tends to
            repeat itself and that past price movements can provide information
            about future price movements.
          </p>
          <p>
            Technical analysts use charts and technical tools to identify
            trends, price patterns, support and resistance levels, as well as
            buy and sell signals in financial markets.
          </p>
          <p>
            It is used to make trading decisions, such as entering and exiting
            positions, setting price targets, and managing risk.
          </p>
        </div>
      </div>
      <div className="text-gray-500 font-medium pr-0 md:pr-16 pb-6 border-b-1">
        <div className="pb-6">
          <h2 className="text-xl font-semibold text-gray-700 pb-2">
            Common Technical Analysis Tools:
          </h2>
          <p className="pt-2 text-gray-700">Charts:</p>
          <p>
            Charts are the main tool of technical analysis. Technical analysts
            use different types of charts, such as line charts, bar charts, and
            candlestick charts, to visualize price action and market patterns.
          </p>
          <p className="pt-2 text-gray-700">Technical Indicators:</p>
          <p>
            Technical indicators are mathematical calculations based on prices
            and volumes that help analysts identify trends, overbought or
            oversold levels, as well as possible turning points in the market.
            Some examples of common technical indicators include the RSI
            (Relative Strength Index), MACD (Moving Average Convergence
            Divergence), and moving averages.
          </p>
          <p className="pt-2 text-gray-700">Trends:</p>
          <p>
            Identifying and following market trends is a fundamental part of
            technical analysis. Technical analysts use tools such as trend
            lines, channels, and trend continuation or reversal patterns to
            identify and confirm market direction.
          </p>
        </div>
      </div>
    </div>
  );
}