"use client"
import React, { useState, useEffect, ChangeEvent } from "react";
import axios from "axios";
import { IoMdArrowDown } from "react-icons/io";
import {
  Select,
  SelectItem,
  Avatar,
  SelectedItem,
} from "@nextui-org/react";
import { coins } from "./CryptoCurrencieData";

interface Coin {
  data: {
    id: number;
    name: string;
    symbol: string;
    avatar: string;
  };
  key: number;
}

interface CryptoData {
  [key: string]: {
    [key: string]: number;
  };
}

const CryptoConverter: React.FC = () => {
  const [cryptoData, setCryptoData] = useState<CryptoData>({});
  const [fromCurrency, setFromCurrency] = useState<string>("");
  const [toCurrency, setToCurrency] = useState<string>("");
  const [amount, setAmount] = useState<number>(1);
  const [convertedAmount, setConvertedAmount] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fromResponse = await axios.get(
          `https://api.coingecko.com/api/v3/simple/price`,
          {
            params: {
              ids: fromCurrency,
              vs_currencies: toCurrency,
            },
          }
        );

        const toResponse = await axios.get(
          `https://api.coingecko.com/api/v3/simple/price`,
          {
            params: {
              ids: toCurrency,
              vs_currencies: fromCurrency,
            },
          }
        );

        setCryptoData({
          [fromCurrency]: {
            [toCurrency]: fromResponse.data[fromCurrency][toCurrency],
          },
          [toCurrency]: {
            [fromCurrency]: toResponse.data[toCurrency][fromCurrency],
          },
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    if (cryptoData[fromCurrency] && cryptoData[toCurrency]) {
      const conversionRate = cryptoData[fromCurrency][toCurrency];
      setConvertedAmount(amount * conversionRate);
    }
  }, [amount, cryptoData, fromCurrency, toCurrency]);

  const handleFromCurrencySelect = (
    selectedItems: SelectedItem<Coin> | SelectedItem<Coin>[]
  ) => {
    const selectedCoin = Array.isArray(selectedItems)
      ? selectedItems[0]
      : selectedItems;
    if (selectedCoin && selectedCoin.data) {
      setFromCurrency(selectedCoin.data.name);
    }
  };

  const handleToCurrencySelect = (
    selectedItems: SelectedItem<Coin> | SelectedItem<Coin>[]
  ) => {
    const selectedCoin = Array.isArray(selectedItems)
      ? selectedItems[0]
      : selectedItems;
    if (selectedCoin && selectedCoin.data) {
      setToCurrency(selectedCoin.data.symbol);
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
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setAmount(Number(e.target.value))
                }
                className="text-2xl max-w-44 outline-none bg-transparent"
              />
            </div>
          </div>
          <div className="bg-white flex w-1/2 flex-wrap md:flex-nowrap gap-4 max-w-sm">
            <Select
              items={coins}
              placeholder="Select Crypto"
              labelPlacement="outside"
              classNames={{
                base: "max-w-xs",
                trigger: "h-12",
              }}
              renderValue={(items: SelectedItems) => {
                return items.map((item) => (
                  <div key={item.key} className="flex items-center gap-2">
                    <Avatar
                      alt={item.data.name}
                      className="flex-shrink-0"
                      size="sm"
                      src={item.data.avatar}
                    />
                    <div className="flex flex-col">
                      <span>{item.data.name}</span>
                    </div>
                  </div>
                ));
              }}
              onSelect={handleToCurrencySelect}
            >
              {(coin) => (
                <SelectItem key={coin.data.id} textValue={coin.data.name} data={coin}>
                  <div className="flex gap-2 items-center">
                    <Avatar
                      alt={coin.data.name}
                      className="flex-shrink-0"
                      size="sm"
                      src={coin.data.avatar}
                    />
                    <div className="flex flex-col">
                      <span className="text-small">{coin.data.name}</span>
                    </div>
                  </div>
                </SelectItem>
              )}
            </Select>
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
              ${convertedAmount.toFixed(2)}
            </div>
          </div>
          <div className="bg-white flex w-1/2 flex-wrap md:flex-nowrap gap-4 max-w-sm">
            <Select
              items={coins}
              placeholder="Select Crypto"
              labelPlacement="outside"
              classNames={{
                base: "max-w-xs",
                trigger: "h-12",
              }}
              renderValue={(items: SelectedItems) => {
                return items.map((item) => (
                  <div key={item.key} className="flex items-center gap-2">
                    <Avatar
                      alt={item.data.name}
                      className="flex-shrink-0"
                      size="sm"
                      src={item.data.avatar}
                    />
                    <div className="flex flex-col">
                      <span>{item.data.name}</span>
                    </div>
                  </div>
                ));
              }}
              onSelect={handleFromCurrencySelect}
            >
              {(coin) => (
                <SelectItem key={coin.data.id} textValue={coin.data.name} data={coin}>
                  <div className="flex gap-2 items-center">
                    <Avatar
                      alt={coin.data.name}
                      className="flex-shrink-0"
                      size="sm"
                      src={coin.data.avatar}
                    />
                    <div className="flex flex-col">
                      <span className="text-small">{coin.data.name}</span>
                    </div>
                  </div>
                </SelectItem>
              )}
            </Select>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CryptoConverter;
