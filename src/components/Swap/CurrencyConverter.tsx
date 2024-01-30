"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

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
    <div className="bg-white border-1 max-w-md rounded-md p-1">
      <section>
        <div className="bg-gray-100 flex flex-row items-center justify-between">
          <div className="p-4">
            <h1 className="font-semibold text-sm text-gray-400">You Pay</h1>
            <div className="py-4 text-2xl text-gray-500 bg-transparent">
              <input
                type="number"
                value={amount}
                onChange={handleAmountChange}
              />
            </div>
          </div>
          <div>
            <select className="py-3 px-2" value={fromCurrency} onChange={handleFromCurrencyChange}>
              {currencies.map((currency) => (
                <option key={currency.code} value={currency.code}>
                  {currency.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <span> to </span>

      <section>
        <div className="bg-gray-100 flex flex-row items-center justify-between">
          <div className="p-4">
            <h1 className="font-semibold text-sm text-gray-400">You Receive</h1>
            <div className="py-4 text-2xl text-gray-500">
            {convertedAmount}
            </div>
          </div>
          <div>
            <select className="py-3 px-2" value={toCurrency} onChange={handleToCurrencyChange}>
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
