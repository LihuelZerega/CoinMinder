"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Crypto {
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
  const [fromCrypto, setFromCrypto] = useState<string>('bitcoin');
  const [toCrypto, setToCrypto] = useState<string>('ethereum');
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);
  const [cryptos, setCryptos] = useState<Crypto[]>([]);

  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        const response = await axios.get<Crypto[]>('https://api.coingecko.com/api/v3/coins/list');
        setCryptos(response.data);
        setExchangeRate(await getExchangeRate(fromCrypto, toCrypto));
      } catch (error) {
        console.error('Error fetching cryptocurrencies:', error);
      }
    };

    fetchCryptos();
  }, [fromCrypto, toCrypto]);

  useEffect(() => {
    if (fromCrypto !== toCrypto) {
      getExchangeRate(fromCrypto, toCrypto).then((rate) => setExchangeRate(rate));
    } else {
      setExchangeRate(1); // Si las criptomonedas son las mismas, la tasa de cambio es 1.
    }
  }, [fromCrypto, toCrypto]);

  const getExchangeRate = async (from: string, to: string): Promise<number> => {
    try {
      const response = await axios.get<ExchangeRateData>(
        `https://api.coingecko.com/api/v3/simple/price?ids=${from}&vs_currencies=${to}`
      );
      return response.data[from]?.[to] || 0;
    } catch (error) {
      console.error('Error fetching exchange rate:', error);
      return 0;
    }
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputAmount = parseFloat(e.target.value);
    setAmount(inputAmount);
  };

  const handleFromCryptoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFromCrypto(e.target.value);
  };

  const handleToCryptoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setToCrypto(e.target.value);
  };

  return (
    <div>
      <h2>Crypto Converter</h2>
      <div>
        <input type="number" value={amount} onChange={handleAmountChange} />
        <select value={fromCrypto} onChange={handleFromCryptoChange}>
          {cryptos.map((crypto) => (
            <option key={crypto.id} value={crypto.id}>
              {crypto.name} ({crypto.symbol})
            </option>
          ))}
        </select>
        <span> to </span>
        <select value={toCrypto} onChange={handleToCryptoChange}>
          {cryptos.map((crypto) => (
            <option key={crypto.id} value={crypto.id}>
              {crypto.name} ({crypto.symbol})
            </option>
          ))}
        </select>
      </div>
      <p>
        {amount} {fromCrypto.toUpperCase()} is equal to {exchangeRate !== null ? (amount * exchangeRate).toFixed(6) : '...'}{' '}
        {toCrypto.toUpperCase()}
      </p>
    </div>
  );
};

export default CryptoConverter;
