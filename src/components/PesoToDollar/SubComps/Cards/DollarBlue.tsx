import React, { useEffect, useState } from "react";
import axios from "axios";
import { Spinner } from "@nextui-org/react";

interface BCRAData {
  d: string;
  v: number;
}

function DollarBlue() {
  const [dollarData, setDollarData] = useState<BCRAData[]>([]);
  const [loading, setLoading] = useState(true);
  const [lastValue, setLastValue] = useState<number | null>(null);
  const [difference, setDifference] = useState<number | null>(null);
  const [isPositive, setIsPositive] = useState<boolean | null>(null);

  useEffect(() => {
    const fetchDataFromBackend = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/bcra-usd"
        );
        setDollarData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching dollar data from backend:", error);
        setLoading(false);
      }
    };

    fetchDataFromBackend();
  }, []);

  useEffect(() => {
    if (dollarData.length > 1) {
      const latestValue = dollarData[dollarData.length - 1].v;
      const previousValue = dollarData[dollarData.length - 2].v;
      setLastValue(latestValue);

      const percentageDifference =
        ((latestValue - previousValue) / previousValue) * 100;
      setDifference(percentageDifference);

      if (percentageDifference > 0) {
        setIsPositive(true);
      } else if (percentageDifference < 0) {
        setIsPositive(false);
      } else {
        setIsPositive(null);
      }
    }
  }, [dollarData]);

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <div>
          <div className=" py-4 px-3 rounded-md hover:bg-gray-50">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center w-1/3">
                <p className="font-semibold">Dollar Parallel</p>
              </div>

              <div className="w-1/3 lg:ml-3 2xl:ml-0">
                <p>${lastValue}</p>
              </div>

              <div className="flex flex-row items-center justify-center w-1/3">
                {difference !== null && (
                  <p
                    style={{
                      color: isPositive
                        ? "green"
                        : isPositive === false
                        ? "red"
                        : "black",
                    }}
                  >
                    {difference.toFixed(2)}%
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DollarBlue;
