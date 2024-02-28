import React from "react";

function TypesofStocks() {
  return (
    <div className="px-12 mb-12">
      <div>
        <h1 className="text-[#38bdf8] font-bold text-5xl pb-4">
          Types of Actions
        </h1>
        <p className="text-gray-500 font-medium pr-16 pb-6">
          Shares represent partial ownership of a company and are a common form
          of investment in the financial market. There are several types of
          stocks, each with unique characteristics that can influence their
          value and benefits to investors.
        </p>
      </div>
      <div className="text-gray-500 font-medium pr-16 pb-6">
        <div className="pb-6">
          <h2 className="text-xl font-semibold text-gray-700 pb-2">
            1. Common and Preferred Shares:
          </h2>
          <p>
            Common stock is the most common type of stock that companies issue
            to investors. Owners of common stock have voting rights in corporate
            decisions and may receive dividends if the company declares them.
          </p>
          <p>
            On the other hand, preferred shares grant their owners certain
            benefits over common shares, such as priority in the payment of
            dividends and reimbursement in the event of the company&apos;s
            bankruptcy. However, owners of preferred stock generally do not have
            voting rights.
          </p>
        </div>
      </div>
      <div className="text-gray-500 font-medium pr-16 pb-6">
        <div className="pb-6">
          <h2 className="text-xl font-semibold text-gray-700 pb-2">
            2. Growth Stocks vs. Value Stocks:
          </h2>
          <p>
            Growth stocks are issued by companies that are expected to
            experience rapid growth in their earnings and market value.
            Investors who buy growth stocks are interested in the potential for
            the company to increase in value in the future.
          </p>
          <p>
            On the other hand, value stocks are associated with companies that
            trade at a price lower than their intrinsic value. Value stock
            investors look for undervalued investment opportunities and hope the
            market recognizes their true value over time.
          </p>
        </div>
      </div>
      <div className="text-gray-500 font-medium pr-16 pb-6 border-b-1">
        <div className="pb-6">
          <h2 className="text-xl font-semibold text-gray-700 pb-2">
            3. Dividend Stocks and Growth Stocks:
          </h2>
          <p>
            Dividend stocks are issued by companies that have a stable history
            of distributing dividends to their shareholders. These stocks tend
            to be more stable and offer regular income to investors in the form
            of dividends.
          </p>
          <p>
            On the other hand, growth stocks are issued by companies that
            reinvest most of their profits in business expansion and growth
            rather than distributing dividends. Investors in growth stocks are
            more interested in the long-term value appreciation potential of the
            stock than in dividend income.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TypesofStocks;