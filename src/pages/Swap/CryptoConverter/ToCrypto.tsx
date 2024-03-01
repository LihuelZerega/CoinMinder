// ToCrypto.tsx
import React, { useState } from 'react';

interface Props {
  cryptos: Crypto[];
  onConvert: (selectedCryptoId: number) => void;
}

interface Crypto {
  id: number;
  name: string;
  image: string;
  current_price: number;
}

function ToCrypto({ cryptos, onConvert }: Props) {
  const [selectedCrypto, setSelectedCrypto] = useState<number | "">("");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCrypto(parseInt(event.target.value));
  };

  const handleConvertClick = () => {
    if (selectedCrypto) {
      onConvert(selectedCrypto);
    }
  };

  return (
    <div className="crypto-card bg-white rounded-lg p-4 shadow-md">
      <h2 className="text-lg font-semibold text-center mb-2">To Crypto</h2>
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
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-md"
        onClick={handleConvertClick}
      >
        Convert
      </button>
    </div>
  );
}

export default ToCrypto;
