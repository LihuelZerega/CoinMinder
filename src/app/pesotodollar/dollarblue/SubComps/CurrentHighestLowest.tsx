import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaArrowTrendUp, FaArrowTrendDown, FaArrowRightLong } from "react-icons/fa6";
import { Spinner } from "@nextui-org/react";

interface CurrencyData {
  d: string;
  v: number;
}

function CurrentHighestLowest() {
  const [loading, setLoading] = useState(true);
  const [currentValue, setCurrentValue] = useState<number>(0);
  const [highestValue, setHighestValue] = useState<number>(0);
  const [lowestValue, setLowestValue] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/bcra-usd");
        const data: CurrencyData[] = response.data;
        
        const current = data[data.length - 1]?.v || 0;
        const highest = Math.max(...data.map((item) => item.v));
        const lowest = Math.min(...data.map((item) => item.v));

        setCurrentValue(current);
        setHighestValue(highest);
        setLowestValue(lowest);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching currency data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
      {loading ? (
        <div className="w-full flex justify-center items-center py-4">
          <Spinner />
        </div>
      ) : (
        <>
          <div className="w-full flex flex-row items-center sm:justify-center py-4 sm:py-0">
            <FaArrowRightLong className="text-3xl text-gray-500" />
            <div className="flex flex-col ml-6">
              <h1>Current Value</h1>
              <h1>$ARS {currentValue}</h1>
            </div>
          </div>
          <div className="w-full flex flex-row items-center sm:justify-center py-4 sm:py-0 border-y sm:border-y-0 sm:border-x">
            <FaArrowTrendUp className="text-3xl text-green-500" />
            <div className="flex flex-col ml-6">
              <h1>Highest Value</h1>
              <h1>$ARS {highestValue}</h1>
            </div>
          </div>
          <div className="w-full flex flex-row items-center sm:justify-center py-4 sm:py-0">
            <FaArrowTrendDown className="text-3xl text-red-500" />
            <div className="flex flex-col ml-6">
              <h1>Lowest Value</h1>
              <h1>$ARS {lowestValue}</h1>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default CurrentHighestLowest;