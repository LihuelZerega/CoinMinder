import React, { useState, useEffect } from "react";
import { IoMdArrowDown } from "react-icons/io";

interface Crypto {
  id: number;
  name: string;
  image: string;
  current_price: number;
}

function CryptoConverter() {
  const [cryptos, setCryptos] = useState<Crypto[]>([]);
  const [fromCryptoAmount, setFromCryptoAmount] = useState("");
  const [selectedFromCrypto, setSelectedFromCrypto] = useState<Crypto | null>(
    null
  );
  const [selectedToCrypto, setSelectedToCrypto] = useState<Crypto | null>(null);
  const [toCryptoAmount, setToCryptoAmount] = useState("");

  useEffect(() => {
    async function fetchCryptos() {
      try {
        const response = await fetch("https://coinminder-api.railway.internal.app/api/crypto/");
        const data = await response.json();
        const first25Cryptos = data.slice(0, 25);
        setCryptos(first25Cryptos);
      } catch (error) {
        console.error("Error fetching cryptos:", error);
      }
    }

    fetchCryptos();
  }, []);

  useEffect(() => {
    if (!selectedFromCrypto || !selectedToCrypto || !fromCryptoAmount) {
      return;
    }

    const fromCryptoPrice = selectedFromCrypto.current_price;
    const amountToConvert = parseFloat(fromCryptoAmount);
    const convertedAmount =
      fromCryptoPrice * amountToConvert * selectedToCrypto.current_price;
    setToCryptoAmount(convertedAmount.toFixed(2));
  }, [selectedFromCrypto, selectedToCrypto, fromCryptoAmount]);

  const handleFromSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedCryptoId = parseInt(event.target.value);
    const selectedCrypto = cryptos.find(
      (crypto) => crypto.id === selectedCryptoId
    );
    setSelectedFromCrypto(selectedCrypto || null);
  };

  const handleToSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedCryptoId = parseInt(event.target.value);
    const selectedCrypto = cryptos.find(
      (crypto) => crypto.id === selectedCryptoId
    );
    setSelectedToCrypto(selectedCrypto || null);
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
                className="text-2xl max-w-24 md:max-w-44 outline-none bg-transparent"
                placeholder="Enter Amount"
                value={fromCryptoAmount}
                onChange={(e) => setFromCryptoAmount(e.target.value)}
              />
            </div>
          </div>
          <div>
            <select
              className="py-3 px-4 mr-4 rounded-md max-w-36 md:max-w-44"
              value={selectedFromCrypto?.id || ""}
              onChange={handleFromSelectChange}
            >
              <option value="">Select Crypto</option>
              {cryptos.map((crypto) => (
                <option key={crypto.id} value={crypto.id}>
                  {crypto.name}
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
          <div className="p-4 h-xl">
            <h1 className="font-semibold text-sm text-gray-400">You Receive</h1>
            <div className="py-4 text-2xl text-gray-500">{toCryptoAmount}</div>
          </div>
          <div>
            <select
              className="py-3 px-4 mr-4 rounded-md max-w-36 md:max-w-44"
              value={selectedToCrypto?.id || ""}
              onChange={handleToSelectChange}
            >
              <option value="">Select Crypto</option>
              {cryptos.map((crypto) => (
                <option key={crypto.id} value={crypto.id}>
                  {crypto.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CryptoConverter;
