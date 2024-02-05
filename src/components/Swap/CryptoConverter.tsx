"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoMdArrowDown } from "react-icons/io";

interface Crypto {
  market_cap_rank: any;
  image: string;
  id: string;
  name: string;
  symbol: string;
}

interface ExchangeRateData {
  [key: string]: {
    [key: string]: number;
  };
}

const CryptoConverter: React.FC = () => {
  const [amount, setAmount] = useState<number>(1);
  const [fromCrypto, setFromCrypto] = useState<string>("bitcoin");
  const [toCrypto, setToCrypto] = useState<string>("ethereum");
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);
  const [cryptos, setCryptos] = useState<Crypto[]>([]);
  const selectedCryptos = [
    "bitcoin",
    "ethereum",
    "tether",
    "binancecoin",
    "solana",
    "ripple",
    "usd-coin",
    "lido-staked-ether",
    "cardano",
    "avalanche-2",
    "dogecoin",
  ];

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await axios.get<ExchangeRateData>(
          `https://api.coingecko.com/api/v3/simple/price?ids=${fromCrypto}&vs_currencies=${toCrypto}`
        );
        setExchangeRate(response.data[fromCrypto]?.[toCrypto] || 0);
      } catch (error) {
        console.error("Error fetching exchange rate:", error);
        setExchangeRate(0);
      }
    };

    fetchExchangeRate();
  }, [fromCrypto, toCrypto]);

  useEffect(() => {
    if (fromCrypto !== toCrypto) {
      getExchangeRate(fromCrypto, toCrypto).then((rate) =>
        setExchangeRate(rate)
      );
    } else {
      setExchangeRate(1);
    }
  }, [fromCrypto, toCrypto]);

  const getExchangeRate = async (from: string, to: string): Promise<number> => {
    try {
      const response = await axios.get<ExchangeRateData>(
        `https://api.coingecko.com/api/v3/simple/price?ids=${from}&vs_currencies=${to}`
      );
      return response.data[from]?.[to] || 0;
    } catch (error) {
      console.error("Error fetching exchange rate:", error);
      return 0;
    }
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputAmount = parseFloat(e.target.value);
    setAmount(isNaN(inputAmount) ? 0 : inputAmount);
  };

  const handleFromCryptoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFromCrypto(e.target.value);
  };

  const handleToCryptoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setToCrypto(e.target.value);
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
              className="py-3 px-4 mr-4 rounded-md max-w-sm"
              value={fromCrypto}
              onChange={handleFromCryptoChange}
            >
              {cryptos.map((crypto) => (
                <option key={crypto.id} value={crypto.id}>
                  <img
                    src={crypto.image}
                    alt={crypto.name}
                    className="inline-block w-8 h-8 mr-2"
                  />
                  {crypto.name} ({crypto.symbol.toUpperCase()})
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <div className="relative w-full text-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="bg-white font-semibold rounded-md">
            <IoMdArrowDown className="bg-gray-50 rounded-md m-1 p-1 text-2xl" />
          </h1>
        </div>
      </div>

      <section>
        <div className="bg-gray-50 flex flex-row items-center justify-between rounded-md">
          <div className="p-4">
            <h1 className="font-semibold text-sm text-gray-400">You Receive</h1>
            <div className="py-4 text-2xl text-gray-500">
              {exchangeRate !== null
                ? (amount * exchangeRate).toLocaleString(undefined, {
                    minimumFractionDigits: 6,
                    maximumFractionDigits: 6,
                  })
                : "Exchange rate not available"}
            </div>
          </div>
          <div>
            <select
              className="py-3 px-4 mr-4 rounded-md max-w-sm"
              value={toCrypto}
              onChange={handleToCryptoChange}
            >
              {cryptos.map((crypto) => (
                <option key={crypto.id} value={crypto.id}>
                  <div className="inline-block font-bold">{crypto.name}</div> (
                  {crypto.symbol.toUpperCase()})
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>
      <p className="text-center text-sm py-2">
        {amount} {fromCrypto.toUpperCase()} is equal to{" "}
        {exchangeRate !== null ? (amount * exchangeRate).toFixed(6) : "..."}{" "}
        {toCrypto.toUpperCase()}
      </p>
    </div>
  );
};

export default CryptoConverter;
