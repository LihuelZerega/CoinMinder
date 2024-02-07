"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { coins } from "./CryptoCurrencieData";
import { Select, SelectItem, Avatar } from "@nextui-org/react";
import { IoMdArrowDown } from "react-icons/io";

interface CryptoData {
  id: number;
  name: string;
  symbol: string;
  avatar: string;
}

const CryptoConverter: React.FC = () => {
  const [selectedCrypto, setSelectedCrypto] = useState<CryptoData | null>(
    coins.find((crypto) => crypto.symbol === "BTC") || null
  );
  const [amount, setAmount] = useState<number>(0);
  const [convertedValue, setConvertedValue] = useState<number | null>(null);

  useEffect(() => {
    if (selectedCrypto && amount > 0) {
      convertCrypto(selectedCrypto, amount);
    }
  }, [selectedCrypto, amount]);

  const handleCryptoChange = (symbol: string) => {
    const selectedCrypto =
      coins.find((crypto) => crypto.symbol === symbol) || null;
    setSelectedCrypto(selectedCrypto);
  };

  const handleAmountChange = (value: string) => {
    const newAmount = parseFloat(value);
    if (!isNaN(newAmount)) {
      setAmount(newAmount);
    } else {
      setAmount(0);
    }
  };

  const convertCrypto = (crypto: CryptoData | null, amount: number) => {
    if (crypto) {
      axios
        .get(
          `https://api.coingecko.com/api/v3/simple/price?ids=${crypto.name.toLowerCase()}&vs_currencies=usd`
        )
        .then((response) => {
          const price = response.data[crypto.name.toLowerCase()]?.usd;
          if (price) {
            setConvertedValue(price * amount);
          }
        })
        .catch((error) => {
          console.error("Error fetching price data:", error);
        });
    }
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
                onChange={(e) => handleAmountChange(e.target.value)}
                className="text-2xl max-w-44 outline-none bg-transparent"
                aria-label="Amount"
              />
            </div>
          </div>
          <div className="bg-white flex w-1/2 flex-wrap md:flex-nowrap gap-4 max-w-sm">
            <Select
              onChange={(event) => handleCryptoChange(event.target.value)}
              value={selectedCrypto?.symbol}
            >
              {coins.map((crypto) => (
                <SelectItem
                  key={crypto.id}
                  value={crypto.symbol}
                  startContent={
                    <Avatar
                      alt={crypto.name}
                      className="w-6 h-6"
                      src={crypto.avatar}
                    />
                  }
                >
                  {crypto.name}
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>
      </section>

      <section>
        <div className="relative w-full text-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="bg-white font-semibold rounded-md">
              <IoMdArrowDown className="bg-gray-50 rounded-md m-1 p-1 text-2xl" />
            </h1>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-gray-50 flex flex-row items-center justify-between rounded-md">
          <div className="p-4">
            <h1 className="font-semibold text-sm text-gray-400">You Receive</h1>
            <div className="py-4 text-2xl text-gray-500">
              {convertedValue !== null && !isNaN(convertedValue) && (
                <p>{convertedValue.toFixed(2)}</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CryptoConverter;
