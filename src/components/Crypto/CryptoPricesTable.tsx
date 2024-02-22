import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Spinner,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import { motion } from "framer-motion";
import { FaInfoCircle } from "react-icons/fa";
import Image from "next/image";

interface CryptoData {
  image: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
  total_volume: number;
  low_24h: number;
  high_24h: number;
  circulating_supply: number;
}

export default function CryptoPricesTable() {
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 25;

  useEffect(() => {
    fetchData();
  }, [startIndex]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get("http://localhost:8080/api/crypto");
      setCryptoData((prevData) => [...prevData, ...res.data.slice(startIndex, startIndex + itemsPerPage)]);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  const loadMoreData = () => {
    setStartIndex((prevIndex) => prevIndex + itemsPerPage);
  };

  const formatMarketCap = (value: number) => {
    return `$${value.toLocaleString()}`;
  };

  const formatCirculatingSupply = (value: number, symbol: string) => {
    return `${value.toLocaleString()} ${symbol}`;
  };

  const formatTotalVolume = (value: number) => {
    return `$${value.toLocaleString()}`;
  };

  return (
    <>
      <div className="block sm:hidden">
        <Table shadow="none" aria-label="Stock Prices Table">
          <TableHeader>
            <TableColumn key="image" className="text-transparent">
              Imag
            </TableColumn>
            <TableColumn key="name">Symbol</TableColumn>
            <TableColumn key="current_price">Price (USD)</TableColumn>
            <TableColumn key="price_change_percentage_24h">
              Change (24h)
            </TableColumn>
          </TableHeader>

          <TableBody
            items={cryptoData}
            isLoading={isLoading}
            loadingContent={<Spinner />}
          >
            {(item) => (
              <TableRow
                key={item.name}
                className="bg-transparent hover:bg-gray-50 cursor-pointer my-6 rounded-md border-b-1"
              >
                <TableCell>
                  <Image
                    src={item.image}
                    width={50}
                    height={50}
                    alt={item.image}
                  />
                </TableCell>
                <TableCell className="font-semibold text-gray-950 py-4 my-6">
                  {item.name}{" "}
                  <h1 className="text-xs text-gray-600">
                    ({item.symbol.toUpperCase()})
                  </h1>
                </TableCell>
                <TableCell className="font-semibold text-gray-950">
                  ${item.current_price.toFixed(2)}
                </TableCell>
                <TableCell
                  className={
                    item.price_change_percentage_24h > 0
                      ? "text-green-500 font-semibold"
                      : "text-red-500 font-semibold"
                  }
                >
                  {item.price_change_percentage_24h > 0
                    ? `+${item.price_change_percentage_24h.toFixed(2)}%`
                    : `${item.price_change_percentage_24h.toFixed(2)}%`}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="hidden md:block lg:hidden">
        <Table shadow="none" aria-label="Stock Prices Table">
          <TableHeader>
            <TableColumn key="image" className="text-transparent">
              imag
            </TableColumn>
            <TableColumn key="name">Symbol</TableColumn>
            <TableColumn key="current_price">Price (USD)</TableColumn>
            <TableColumn key="low_24h">Low (24h)</TableColumn>
            <TableColumn key="high_24h">High (24h)</TableColumn>
            <TableColumn key="price_change_percentage_24h">
              Change (24h)
            </TableColumn>
            <TableColumn key="market_cap">
              <div className="flex flex-row items-center space-x-2">
                <h1> Market Cap (USD) </h1>
                <Popover placement="bottom-end" showArrow={true}>
                  <PopoverTrigger>
                    <button>
                      <FaInfoCircle />{" "}
                    </button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <div className="px-1 py-2">
                      <div className="text-tiny font-medium text-gray-400 space-y-1">
                        <h1>
                          The total market value of a cryptocurrencys
                          circulating supply.
                        </h1>
                        <h1>
                          It is analogous to the free-float capitalization in
                          the stock market.
                        </h1>
                        <h1>
                          Market Cap = Current Price x Circulating Supply.
                        </h1>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </TableColumn>
          </TableHeader>

          <TableBody
            items={cryptoData}
            isLoading={isLoading}
            loadingContent={<Spinner />}
            className="bg-green-300"
          >
            {(item) => (
              <TableRow
                key={item.name}
                className="bg-transparent hover:bg-gray-50 cursor-pointer my-6 rounded-md border-b-1"
              >
                <TableCell>
                  {" "}
                  <Image
                    src={item.image}
                    width={30}
                    height={30}
                    alt={item.image}
                  />
                </TableCell>
                <TableCell className="font-semibold text-gray-950 py-4 my-6">
                  {item.name}{" "}
                  <h1 className="text-sm text-gray-600">
                    ({item.symbol.toUpperCase()})
                  </h1>
                </TableCell>
                <TableCell className="font-semibold text-gray-950">
                  ${item.current_price.toFixed(2)}
                </TableCell>
                <TableCell className="font-semibold text-gray-950">
                  ${item.low_24h.toFixed(2)}
                </TableCell>
                <TableCell className="font-semibold text-gray-950">
                  ${item.high_24h.toFixed(2)}
                </TableCell>
                <TableCell
                  className={
                    item.price_change_percentage_24h > 0
                      ? "text-green-500 font-semibold"
                      : "text-red-500 font-semibold"
                  }
                >
                  {item.price_change_percentage_24h > 0
                    ? `+${item.price_change_percentage_24h.toFixed(2)}%`
                    : `${item.price_change_percentage_24h.toFixed(2)}%`}
                </TableCell>
                <TableCell className="font-semibold text-gray-950">
                  {formatMarketCap(item.market_cap)}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="hidden lg:block xl:hidden">
        <Table shadow="none" aria-label="Stock Prices Table">
          <TableHeader>
            <TableColumn key="image" className="text-transparent">
              #
            </TableColumn>
            <TableColumn key="name">Symbol</TableColumn>
            <TableColumn key="current_price">Price (USD)</TableColumn>
            <TableColumn key="low_24h">Low (24h)</TableColumn>
            <TableColumn key="high_24h">High (24h)</TableColumn>
            <TableColumn key="price_change_percentage_24h">
              Change (24h)
            </TableColumn>
            <TableColumn key="market_cap">
              <div className="flex flex-row items-center space-x-2">
                <h1> Market Cap (USD) </h1>
                <Popover placement="bottom-end" showArrow={true}>
                  <PopoverTrigger>
                    <button>
                      <FaInfoCircle />{" "}
                    </button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <div className="px-1 py-2">
                      <div className="text-tiny font-medium text-gray-400 space-y-1">
                        <h1>
                          The total market value of a cryptocurrencys
                          circulating supply.
                        </h1>
                        <h1>
                          It is analogous to the free-float capitalization in
                          the stock market.
                        </h1>
                        <h1>
                          Market Cap = Current Price x Circulating Supply.
                        </h1>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </TableColumn>

            <TableColumn key="total_volume">
              <div className="flex flex-row items-center space-x-2">
                <h1> Total Volume</h1>
                <Popover placement="bottom-end" showArrow={true}>
                  <PopoverTrigger>
                    <button>
                      <FaInfoCircle />{" "}
                    </button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <div className="px-1 py-2">
                      <div className="text-tiny font-medium text-gray-400 space-y-1">
                        <h1>A measure of the amount of cryptocurrency</h1>
                        <h1>that has been traded in all of history.</h1>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </TableColumn>
          </TableHeader>

          <TableBody
            items={cryptoData}
            isLoading={isLoading}
            loadingContent={<Spinner />}
            className="bg-green-300"
          >
            {(item) => (
              <TableRow
                key={item.name}
                className="bg-transparent hover:bg-gray-50 cursor-pointer my-6 rounded-md border-b-1"
              >
                <TableCell>
                  {" "}
                  <Image
                    src={item.image}
                    width={30}
                    height={30}
                    alt={item.image}
                  />
                </TableCell>
                <TableCell className="font-semibold text-gray-950 py-4 my-6">
                  {item.name}{" "}
                  <h1 className="text-sm text-gray-600">
                    ({item.symbol.toUpperCase()})
                  </h1>
                </TableCell>
                <TableCell className="font-semibold text-gray-950">
                  ${item.current_price.toFixed(2)}
                </TableCell>
                <TableCell className="font-semibold text-gray-950">
                  ${item.low_24h.toFixed(2)}
                </TableCell>
                <TableCell className="font-semibold text-gray-950">
                  ${item.high_24h.toFixed(2)}
                </TableCell>
                <TableCell
                  className={
                    item.price_change_percentage_24h > 0
                      ? "text-green-500 font-semibold"
                      : "text-red-500 font-semibold"
                  }
                >
                  {item.price_change_percentage_24h > 0
                    ? `+${item.price_change_percentage_24h.toFixed(2)}%`
                    : `${item.price_change_percentage_24h.toFixed(2)}%`}
                </TableCell>
                <TableCell className="font-semibold text-gray-950">
                  {formatMarketCap(item.market_cap)}
                </TableCell>
                <TableCell className="font-semibold text-gray-950">
                  {formatTotalVolume(item.total_volume)}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="hidden xl:block">
        <Table shadow="none" aria-label="Stock Prices Table">
          <TableHeader>
            <TableColumn key="image" className="text-transparent">
              #
            </TableColumn>
            <TableColumn key="name">Symbol</TableColumn>
            <TableColumn key="current_price">Price (USD)</TableColumn>
            <TableColumn key="low_24h">Low (24h)</TableColumn>
            <TableColumn key="high_24h">High (24h)</TableColumn>
            <TableColumn key="price_change_percentage_24h">
              Change (24h)
            </TableColumn>
            <TableColumn key="market_cap">
              <div className="flex flex-row items-center space-x-2">
                <h1> Market Cap (USD) </h1>
                <Popover placement="bottom-end" showArrow={true}>
                  <PopoverTrigger>
                    <button>
                      <FaInfoCircle />{" "}
                    </button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <div className="px-1 py-2">
                      <div className="text-tiny font-medium text-gray-400 space-y-1">
                        <h1>
                          The total market value of a cryptocurrencys
                          circulating supply.
                        </h1>
                        <h1>
                          It is analogous to the free-float capitalization in
                          the stock market.
                        </h1>
                        <h1>
                          Market Cap = Current Price x Circulating Supply.
                        </h1>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </TableColumn>

            <TableColumn key="total_volume">
              <div className="flex flex-row items-center space-x-2">
                <h1> Total Volume</h1>
                <Popover placement="bottom-end" showArrow={true}>
                  <PopoverTrigger>
                    <button>
                      <FaInfoCircle />{" "}
                    </button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <div className="px-1 py-2">
                      <div className="text-tiny font-medium text-gray-400 space-y-1">
                        <h1>A measure of the amount of cryptocurrency</h1>
                        <h1>that has been traded in all of history.</h1>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </TableColumn>

            <TableColumn key="circulating_supply">
              <div className="flex flex-row items-center space-x-2">
                <h1> Circulating Supply</h1>
                <Popover placement="bottom-end" showArrow={true}>
                  <PopoverTrigger>
                    <button>
                      <FaInfoCircle />{" "}
                    </button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <div className="px-1 py-2">
                      <div className="text-tiny font-medium text-gray-400 space-y-1">
                        <h1>The amount of coins that are circulating in the</h1>
                        <h1>
                          market and are in public hands. It is analogous to
                        </h1>
                        <h1>the flowing shares in the stock market.</h1>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </TableColumn>
          </TableHeader>

          <TableBody
            items={cryptoData}
            isLoading={isLoading}
            loadingContent={<Spinner />}
            className="bg-green-300"
          >
            {(item) => (
              <TableRow
                key={item.name}
                className="bg-transparent hover:bg-gray-50 cursor-pointer my-6 rounded-md border-b-1"
              >
                <TableCell>
                  {" "}
                  <Image
                    src={item.image}
                    width={30}
                    height={30}
                    alt={item.image}
                  />
                </TableCell>
                <TableCell className="font-semibold text-gray-950 py-4 my-6">
                  {item.name}{" "}
                  <h1 className="text-sm text-gray-600">
                    ({item.symbol.toUpperCase()})
                  </h1>
                </TableCell>
                <TableCell className="font-semibold text-gray-950">
                  ${item.current_price.toFixed(2)}
                </TableCell>
                <TableCell className="font-semibold text-gray-950">
                  ${item.low_24h.toFixed(2)}
                </TableCell>
                <TableCell className="font-semibold text-gray-950">
                  ${item.high_24h.toFixed(2)}
                </TableCell>
                <TableCell
                  className={
                    item.price_change_percentage_24h > 0
                      ? "text-green-500 font-semibold"
                      : "text-red-500 font-semibold"
                  }
                >
                  {item.price_change_percentage_24h > 0
                    ? `+${item.price_change_percentage_24h.toFixed(2)}%`
                    : `${item.price_change_percentage_24h.toFixed(2)}%`}
                </TableCell>
                <TableCell className="font-semibold text-gray-950">
                  {formatMarketCap(item.market_cap)}
                </TableCell>
                <TableCell className="font-semibold text-gray-950">
                  {formatTotalVolume(item.total_volume)}
                </TableCell>
                <TableCell className="font-semibold text-gray-950">
                  {formatCirculatingSupply(
                    item.circulating_supply,
                    item.symbol.toUpperCase()
                  )}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex justify-center mt-4">
        <motion.button
          onClick={loadMoreData}
          disabled={isLoading}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          className="rounded-md bg-[#38bdf8] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#35aee3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#38bdf8]"
        >
          {isLoading ? "Loading..." : "Load More"}
        </motion.button>
      </div>
    </>
  );
}
