import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import BitcoinLogo from "@/images/Bitcoin.svg";
import CountDown from "./CountDown";

interface CryptoData {
  current_price: number;
}

export default function HeroSection() {
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 1;

  const router = useRouter();

  useEffect(() => {
    fetchData();
  }, [startIndex]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get("${process.env.API_BASE_URL}/api/crypto");
      if (res.data.length > 0) {
        setCryptoData([res.data[0]]);
      }
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  const handleRedirect = (id: number) => {
    router.push(`/coin/${id}`);
  };

  return (
    <div className="h-full w-full rounded-md flex md:items-left md:justify-left bg-transparent antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <div className="flex flex-row p-4 max-w-7xl mx-auto w-full pt-6 md:pt-0">
        <div className="w-full md:w-2/3 space-y-8">
          <h1 className="text-4xl md:text-7xl font-bold text-center md:text-left bg-clip-text text-transparent bg-gradient-to-b from-[#38bdf8] to-[#2d99c9] bg-opacity-50">
            When Is the Next <br className="hidden md:block"/> Bitcoin Halving <br className="hidden md:block"/> in 2024?
          </h1>
          <div className="flex flex-col md:flex-row">
            <h1 className="block md:hidden text-sm text-center text-gray-500">Bitcoin Halving Countdown</h1>
            <CountDown />
          </div>
          <p className="w-full md:max-w-xl font-normal text-base text-gray-500 text-wrap">
            The next Bitcoin halving is expected to take place in April 2024. It
            is difficult to predict the exact date as it depends on the block
            height. Since halving happens every 210,000 blocks, the next Bitcoin
            halving is expected to occur in April 2024 when the block height
            reaches 840,000.
          </p>
          <div className="flex flex-row items-center justify-center md:items-start md:justify-start">
            <div>
              <motion.div
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-row items-center space-x-1 w-fit p-1 rounded-md cursor-pointer bg-[#38bdf8] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#35aee3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#38bdf8]"
                onClick={() => handleRedirect(0)}
              >
                <div>
                  <Image
                    src={BitcoinLogo}
                    width={24}
                    height={24}
                    alt="Bitcoin Logo"
                  />
                </div>

                <div className="flex flex-row space-x-2 ">
                  <h1 className="font-bold">BTC</h1>
                  <h1 className="font-bold">
                    $
                    {cryptoData.length > 0
                      ? cryptoData[0].current_price.toFixed()
                      : "Loading..."}
                  </h1>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="hidden md:block md:w-1/3 items-center justify-center">
          <Image
            src="https://dgbijzg00pxv8.cloudfront.net/730e2e3d-6058-4f2f-b90e-19a8f43d3574/000000-0000000000/29714182317096389116622984018383799166334810000320155336077102762626826855522/ITEM_PREVIEW1.gif"
            width={500}
            height={500}
            alt="Trending Icon"
          />
        </div>
      </div>
    </div>
  );
}
