"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoMdArrowDown } from "react-icons/io";

interface Currency {
  code: string;
  name: string;
}

interface ExchangeRateData {
  base: string;
  rates: { [key: string]: number };
}

const CurrencyConverter: React.FC = () => {
  const [amount, setAmount] = useState<number>(1);
  const [fromCurrency, setFromCurrency] = useState<string>("USD");
  const [toCurrency, setToCurrency] = useState<string>("EUR");
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);
  const [convertedAmount, setConvertedAmount] = useState<string | null>(null);
  const [currencies, setCurrencies] = useState<Currency[]>([]);

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await axios.get<ExchangeRateData>(
          "https://api.exchangerate-api.com/v4/latest/USD"
        );
        const data = response.data;
        const currenciesList: Currency[] = [
          { code: data.base, name: data.base },
          ...Object.keys(data.rates).map((code) => ({ code, name: code })),
        ];
        setCurrencies(currenciesList);
        setExchangeRate(data.rates[toCurrency]);
      } catch (error) {
        console.error("Error fetching currencies:", error);
      }
    };

    fetchCurrencies();
  }, [toCurrency]);

  useEffect(() => {
    if (exchangeRate !== null) {
      setConvertedAmount((amount * exchangeRate).toFixed(2));
    }
  }, [amount, exchangeRate]);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputAmount = parseFloat(e.target.value);
    setAmount(inputAmount);
  };

  const handleFromCurrencyChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setToCurrency(e.target.value);
  };

  return (
    <div className="bg-white border-1 w-full rounded-md p-1 space-y-1">
      <section>
        <div className="bg-gray-50 flex flex-row items-center justify-between rounded-md">
          <div className="p-4">
            <h1 className="font-semibold text-sm text-gray-400">You Pay</h1>
            <div className="py-4 text-2xl text-gray-500 bg-transparent">
              <input
                type="number"
                value={amount}
                onChange={handleAmountChange}
                className="text-2xl max-w-44 outline-none bg-transparent"
              />
            </div>
          </div>
          <div>
            <select
              className="py-3 px-4 mr-4 rounded-md"
              value={fromCurrency}
              onChange={handleFromCurrencyChange}
            >
              {currencies.map((currency) => (
                <option key={currency.code} value={currency.code}>
                  {currency.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <div className="relative w-full text-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="bg-white font-semibold rounded-md">
            <IoMdArrowDown className="bg-gray-50 rounded-md m-1 p-1 text-2xl"/>
          </h1>
        </div>
      </div>

      <section>
        <div className="bg-gray-50 flex flex-row items-center justify-between rounded-md">
          <div className="p-4">
            <h1 className="font-semibold text-sm text-gray-400">You Receive</h1>
            <div className="py-4 text-2xl text-gray-500">{convertedAmount}</div>
          </div>
          <div>
            <select
              className="py-3 px-4 mr-4 rounded-md"
              value={toCurrency}
              onChange={handleToCurrencyChange}
            >
              {currencies.map((currency) => (
                <option key={currency.code} value={currency.code}>
                  {currency.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CurrencyConverter;
