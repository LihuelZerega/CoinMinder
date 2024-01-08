import React, { useEffect, useState } from "react";
import axios from "axios";
import { SiConvertio } from "react-icons/si";
import { Button, Input } from "@nextui-org/react";

interface CurrencyData {
  d: string;
  v: number;
}

function CurrencyConverter() {
  const [dollarAmount, setDollarAmount] = useState<number>(0);
  const [result, setResult] = useState<number>(0);
  const [currentValue, setCurrentValue] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/bcra-usd"
        );
        const data: CurrencyData[] = response.data;

        const current = data[data.length - 1]?.v || 0;

        setCurrentValue(current);
      } catch (error) {
        console.error("Error fetching currency data:", error);
      }
    };

    fetchData();
  }, []);

  const convertCurrency = () => {
    setResult(dollarAmount * currentValue);
  };

  return (
    <div>
      <div>
        <h1 className="py-6 font-semibold text-2xl">Convert Dollar To Peso</h1>
      </div>

      <section className="flex flex-col sm:flex-row items-center justify-between">
        <div className="pb-4 sm:pb-0">
          <h1 className="text-gray-400 text-xs py-1">Insert dollar value</h1>
          <Input
            variant="bordered"
            type="number"
            placeholder="0"
            onChange={(e) => setDollarAmount(+e.target.value)}
            className="w-fit"
            startContent={
              <div className="pointer-events-none flex items-center">
                <span className="text-default-400 text-small">$USD</span>
              </div>
            }
          />
        </div>

        <div className="pb-4 sm:pb-0">
          <h1 className="text-gray-400 text-xs py-1">Amount in Pesos is</h1>
          <Input
            variant="bordered"
            type="number"
            placeholder={Number(result).toLocaleString("es-ES")}
            className="w-fit"
            startContent={
              <div className="pointer-events-none flex items-center">
                <span className="text-default-400 text-small">$ARS</span>
              </div>
            }
          />
        </div>

        <div className="pb-4 sm:pb-0">
          <Button
            color="success"
            onClick={convertCurrency}
            radius="sm"
            className="text-white"
          >
            Convert
          </Button>
        </div>
      </section>
    </div>
  );
}

export default CurrencyConverter;
