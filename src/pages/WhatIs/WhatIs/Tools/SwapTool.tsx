import React from "react";

function SwapTool() {
  return (
    <div className="px-8 md:px-12 mb-12">
      <div>
        <h1 className="text-[#38bdf8] font-bold text-3xl md:text-5xl pb-4">
          Swap Tool
        </h1>
      </div>

      <div className="text-gray-500 font-medium pr-0 md:pr-16 pb-6">
        <p className="pb-6">
          With &quot;Swap&quot;, users have the ability to make exchange inquiries between
          international currencies and cryptocurrencies quickly and
          conveniently. This tool allows them to get up-to-date information on
          exchange rates and convert efficiently.
        </p>
        <p className="pb-6">
          The operation of &quot;Swap&quot; is very simple and practical. Users simply
          follow these steps:
        </p>
      </div>

      <div className="text-gray-500 font-medium pr-0 md:pr-16 pb-6">
        <h2 className="text-xl font-semibold text-gray-700 pb-2">
          Enter the amount to consult:
        </h2>
        <p className="pb-6">
          The user enters the amount of money they wish to convert. This amount
          can be in the currency of origin or in the cryptocurrency they wish to
          exchange.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 pb-2">
          Select currencies:
        </h2>
        <p className="pb-6">
          The user then chooses the currencies they want to convert between.
          They can select the source currency and destination currency from a
          drop-down list that includes a wide variety of international
          currencies and cryptocurrencies.
        </p>

        <h2 className="text-xl font-semibold text-gray-700 pb-2">
          Get the result:
        </h2>
        <p className="pb-6">
          Once the user has entered the amount and selected the currencies,
          &quot;Swap&quot; processes the query and displays the conversion result. This
          includes the amount converted into the destination currency, based on
          the current exchange rate.
        </p>
      </div>

      <div className="text-gray-500 font-medium pr-0 md:pr-16 pb-6 border-b-1">
        <p className="pb-6">
          With &quot;Swap&quot;, users can make conversions quickly and accurately,
          allowing them to obtain up-to-date information on changes in the value
          of international currencies and cryptocurrencies. Whether they need to
          know how much their savings would be worth in another currency or are
          interested in knowing the value of a specific cryptocurrency, &quot;Swap&quot;
          provides them with the necessary information instantly.
        </p>
      </div>
    </div>
  );
}

export default SwapTool;