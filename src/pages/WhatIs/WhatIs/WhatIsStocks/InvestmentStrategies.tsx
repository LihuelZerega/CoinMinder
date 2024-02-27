import React from "react";

function InvestmentStrategies() {
  return (
    <div className="px-12 mb-12">
      <div>
        <h1 className="text-[#38bdf8] font-bold text-5xl pb-4">
          Investment Strategies
        </h1>
        <p className="text-gray-500 font-medium pr-16 pb-6">
          Investment strategies are specific approaches used by investors and
          traders to manage their portfolios and make investment decisions in
          the financial market. These strategies may vary depending on each
          individual's time horizon, level of risk, and financial objectives.
        </p>
      </div>
      <div className="text-gray-500 font-medium pr-16 pb-6">
        <div className="pb-6">
          <h2 className="text-xl font-semibold text-gray-700 pb-2">
            Short Term Strategies:
          </h2>
          <p className="pt-2 text-gray-700">Day Trading:</p>
          <p>
            Day trading is an investment strategy in which traders buy and sell
            financial assets within the same trading day. They seek to take
            advantage of short-term price fluctuations and usually close all
            their positions before the market closes.
          </p>
          <p className="pt-2 text-gray-700">Swing Trading:</p>
          <p>
            Swing trading is a strategy that focuses on taking advantage of
            price fluctuations or "swings" over a period of days or weeks.
            Traders seek to identify short-term trends and take positions with
            the goal of making profits when the price moves in the expected
            direction.
          </p>
        </div>
      </div>

      <div className="text-gray-500 font-medium pr-16 pb-6">
        <div className="pb-6">
          <h2 className="text-xl font-semibold text-gray-700 pb-2">
            Long Term Strategies:
          </h2>
          <p className="pt-2 text-gray-700">Buy and Hold:</p>
          <p>
            This strategy involves buying financial assets and holding them for
            the long term, regardless of short-term market fluctuations.
            Investors rely on long-term growth and dividends to generate
            returns.
          </p>
          <p className="pt-2 text-gray-700">Dividend Investing:</p>
          <p>
            Investors who follow this strategy look for stocks of companies that
            pay consistent and growing dividends. The goal is to generate
            passive income through dividends and benefit from the potential for
            long-term capital appreciation.
          </p>
        </div>
      </div>

      <div className="text-gray-500 font-medium pr-16 pb-6 border-b-1">
        <div className="pb-6">
          <h2 className="text-xl font-semibold text-gray-700 pb-2">
            Portfolio Diversification:
          </h2>
          <p>
            Portfolio diversification is a fundamental strategy to reduce risk
            when investing. It involves allocating capital across different
            asset classes, sectors, geographic regions, and investment types to
            mitigate the impact of volatility in a single investment.
          </p>
          <p>
            Diversification can help protect a portfolio against significant
            losses should a specific asset or sector experience difficulties,
            and can also improve overall return potential by taking advantage of
            different investment opportunities.
          </p>
        </div>
      </div>
    </div>
  );
}

export default InvestmentStrategies;
