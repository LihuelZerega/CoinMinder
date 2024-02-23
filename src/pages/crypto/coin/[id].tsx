import React, { useEffect, useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import axios from "axios";
import { useRouter } from "next/router";

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
  const [cryptoCurrency, setCryptoCurrency] = useState<CryptoCurrency | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCryptoCurrencyDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/crypto/quote/${id}`
        );

        setCryptoCurrency(response.data);

        if (response.data && response.data.name) {
          document.title = `BullSwap | ${response.data.name}`;
        }
      } catch (error) {
        setError("Error al obtener detalles de la criptomoneda");
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
    <div className="h-screen">
      <NavBar />
      <section>
        <h1>{cryptoCurrency.name}</h1>
        <p>Símbolo: {cryptoCurrency.symbol}</p>
        <p>Precio actual: ${cryptoCurrency.current_price}</p>
        <p>Capitalización de mercado: ${cryptoCurrency.market_cap}</p>
      </section>
      <Footer />
    </div>
  );
};

export default CryptoCurrencyDetails;
