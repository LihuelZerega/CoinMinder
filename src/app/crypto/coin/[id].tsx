import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

interface CryptoCurrency {
  id: number;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  // Otros campos...
}

const CryptoCurrencyDetails: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [cryptoCurrency, setCryptoCurrency] = useState<CryptoCurrency | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCryptoCurrencyDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/crypto/quote/${id}`);

        setCryptoCurrency(response.data);
      } catch (error) {
        setError('Error al obtener detalles de la criptomoneda');
        console.error(error);
      }
    };

    if (id) {
      fetchCryptoCurrencyDetails();
    }
  }, [id]);

  if (!id) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!cryptoCurrency) {
    return <div>No se encontraron detalles de la criptomoneda</div>;
  }

  return (
    <div>
      <h1>{cryptoCurrency.name}</h1>
      <p>Símbolo: {cryptoCurrency.symbol}</p>
      <p>Precio actual: ${cryptoCurrency.current_price}</p>
      <p>Capitalización de mercado: ${cryptoCurrency.market_cap}</p>
      {/* Otros detalles de la criptomoneda */}
    </div>
  );
};

export default CryptoCurrencyDetails;
