import React from "react";

function StocksIntroduction() {
  return (
    <div className="px-12 mb-12">
      <div>
        <h1 className="text-[#38bdf8] font-bold text-5xl pb-4">
          What is Stocks?
        </h1>
      </div>
      <div className="text-gray-500 font-medium pr-16 pb-6 border-b-1">
        <div className="pb-6">
          <h2 className="text-xl font-semibold text-gray-700 pb-2">
            What are actions?
          </h2>
          <p>
            Stocks represent a portion of ownership in a company. When a company
            decides to grow and expand, it often seeks additional financing for
            its operations. A common way to obtain this financing is through the
            issuance of shares. By purchasing shares in a company, investors
            become partial owners of that company and have the right to
            participate in its profits and important decisions.
          </p>
        </div>
        <div className="pb-6">
          <h2 className="text-xl font-semibold text-gray-700 pb-2">
            Operation in the financial market
          </h2>
          <p>
            Stocks are traded on what we know as the stock market. This is a
            place where investors buy and sell shares of public companies. When
            a company decides to take part of its ownership public, it offers
            its shares to the public through an Initial Public Offering (IPO).
            Once shares are available to the public, they can be bought and sold
            on the stock market through financial intermediaries such as
            stockbrokers.
          </p>
        </div>
        <div className="pb-6">
          <h2 className="text-xl font-semibold text-gray-700 pb-2">
            Price dynamics
          </h2>
          <p>
            The price of a stock in the stock market is determined by supply and
            demand. When there is high demand for a particular stock and limited
            supply, its price tends to rise. Conversely, if supply exceeds
            demand, the stock price is likely to decline. This makes the stock
            market a dynamic environment where prices can constantly fluctuate
            in response to market conditions and economic news.
          </p>
        </div>
        <div className="pb-6">
          <h2 className="text-xl font-semibold text-gray-700 pb-2">
            Benefits and risks
          </h2>
          <p>
            Investing in stocks can offer investors the opportunity to make
            significant gains over time, either through increasing share value
            or dividends distributed by the company. However, it also carries
            certain risks, as the value of shares can fluctuate and companies
            may face financial difficulties that affect their performance in the
            stock market.
          </p>
        </div>
      </div>
    </div>
  );
}

export default StocksIntroduction;
