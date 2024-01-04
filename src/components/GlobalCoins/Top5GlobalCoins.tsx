import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

interface CurrencyData {
  currency: string;
  rate: number;
  change_percentage_24h: number | null;
}

function Top5GlobalCoins() {
  const [currencyData, setCurrencyData] = useState<CurrencyData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.exchangerate-api.com/v4/latest/USD"
        );

        const rates = response.data.rates;
        const selectedCurrencies = ["EUR", "GBP", "JPY", "CAD", "AUD", "ARS"];

        const filteredData: CurrencyData[] = Object.keys(rates)
          .filter((currency) => selectedCurrencies.includes(currency))
          .map((currency) => ({
            currency,
            rate: rates[currency],
            change_percentage_24h: null,
          }));

        setCurrencyData(filteredData);
      } catch (error) {
        console.error("Error fetching currency data:", error);
      }
    };

    fetchData();
  }, []);

  const getChangeColor = (percentageChange: number | null) => {
    if (percentageChange === null) {
      return "text-gray-500";
    }
    return percentageChange >= 0 ? "text-green-600" : "text-red-600";
  };

  const getChangeText = (percentageChange: number | null) => {
    if (percentageChange === null) {
      return "N/A";
    }
    return `${percentageChange.toFixed(2)}%`;
  };

  return (
    <div className="border p-4 rounded-md">
      <div className="flex flex-row justify-between text-xs text-gray-400">
        <h1 className="hover:text-gray-500 cursor-pointer">
          International Currencies
        </h1>
        <Link href="/">
          <h1 className="hover:text-gray-500 cursor-pointer">See More →</h1>
        </Link>
      </div>
      <div className="">
        {currencyData.map((currency) => (
          <div
            key={currency.currency}
            className="py-[14.5px] px-3 rounded-md hover:bg-gray-50"
          >
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center w-1/3">
                <p className="font-semibold">{currency.currency}</p>
              </div>

              <div className="w-1/3 lg:ml-3 2xl:ml-0">
                <p>${currency.rate.toFixed(2)}</p>
              </div>

              <div className="flex flex-row items-center justify-center w-1/3">
                <p className={getChangeColor(currency.change_percentage_24h)}>
                  {getChangeText(currency.change_percentage_24h)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Top5GlobalCoins;
