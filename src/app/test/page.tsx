"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface CryptoData {
  [key: string]: {
    [key: string]: number;
  };
}

const supportedCryptos = [
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

const CryptoConverter: React.FC = () => {
  const [cryptoData, setCryptoData] = useState<CryptoData>({});
  const [fromCurrency, setFromCurrency] = useState<string>('bitcoin');
  const [toCurrency, setToCurrency] = useState<string>('usd');
  const [amount, setAmount] = useState<number>(1);
  const [convertedAmount, setConvertedAmount] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price`, {
          params: {
            ids: supportedCryptos.join(','),
            vs_currencies: toCurrency,
          },
        });

        setCryptoData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [toCurrency]);

  useEffect(() => {
    if (cryptoData[fromCurrency] && cryptoData[fromCurrency][toCurrency]) {
      const conversionRate = cryptoData[fromCurrency][toCurrency];
      setConvertedAmount(amount * conversionRate);
    }
  }, [amount, cryptoData, fromCurrency, toCurrency]);

  return (
    <div>
      <h1>Crypto Converter</h1>
      <div>
        <label>From Currency:</label>
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          {supportedCryptos.map((crypto) => (
            <option key={crypto} value={crypto}>
              {crypto}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>To Currency:</label>
        <input
          type="text"
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        />
      </div>
      <div>
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
      </div>
      <div>
        <p>Converted Amount: {convertedAmount}</p>
      </div>
    </div>
  );
};

export default CryptoConverter;
