import React, { useState } from "react";

interface Props {
  cryptos: Crypto[];
  onConvert: (amount: number) => void;
}

interface Crypto {
  id: number;
  name: string;
  image: string;
  current_price: number;
}

function FromCrypto({ cryptos, onConvert }: Props) {
  const [selectedCrypto, setSelectedCrypto] = useState<number | "">("");
  const [amountInput, setAmountInput] = useState<number>(0);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCrypto(parseInt(event.target.value));
  };

  const handleConvertClick = () => {
    const selectedCryptoData = cryptos.find(
      (crypto) => crypto.id === Number(selectedCrypto)
    );
    if (selectedCryptoData) {
      const conversionAmount = selectedCryptoData.current_price * amountInput;
      onConvert(conversionAmount);
    }
  };

  if (!cryptos) {
    return <div>Loading...</div>;
  }

  return (
    <div className="crypto-card bg-white rounded-lg p-4 shadow-md">
      <h2 className="text-lg font-semibold text-center mb-2">From Crypto</h2>
      <select
        className="block w-full p-2 border border-gray-300 rounded-md mb-4"
        value={selectedCrypto}
        onChange={handleSelectChange}
      >
        <option value="">Select Crypto</option>
        {cryptos.map((crypto) => (
          <option key={crypto.id} value={crypto.id}>
            {crypto.name}
          </option>
        ))}
      </select>
      <input
        type="number"
        className="block w-full p-2 border border-gray-300 rounded-md mb-4"
        placeholder="Enter Amount"
        value={amountInput}
        onChange={(e) => setAmountInput(parseFloat(e.target.value))}
      />
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-md"
        onClick={handleConvertClick}
      >
        Convert
      </button>
    </div>
  );
}

export default FromCrypto;
