"use client";
import "tailwindcss/tailwind.css";
import React, { useEffect, useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import axios from "axios";
import { useRouter } from "next/router";
import {
  Breadcrumbs,
  BreadcrumbItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Divider,
} from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import { CiStar, CiShare2 } from "react-icons/ci";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { IoInformationCircleOutline } from "react-icons/io5";

interface CryptoCurrency {
  id: number;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: number;
  roi: number;
  last_updated: string;
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
    <div className="h-full">
      <NavBar />
      <main className="h-full mx-auto max-w-7xl px-2 sm:px-0 py-6 lg:px-8 mt-20 mb-24">
        <div className="block sm:hidden py-4">
          <Breadcrumbs>
            <BreadcrumbItem>
              <Link href="http://localhost:3000/crypto"></Link>Cryptocurrencies
            </BreadcrumbItem>
            <BreadcrumbItem>{cryptoCurrency.name}</BreadcrumbItem>
          </Breadcrumbs>
        </div>

        <div className="flex flex-col sm:flex-row items-start gap-4">
          <div className="w-full sm:w-1/3 border-0 sm:border-1 rounded-md p-4">
            <section className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center space-x-3">
                <div>
                  <Image
                    src={cryptoCurrency.image}
                    width={40}
                    height={40}
                    alt={cryptoCurrency.image}
                  />
                </div>

                <div>
                  <div className="flex flex-row items-end space-x-1">
                    <h1 className="text-xl font-semibold">
                      {cryptoCurrency.name}
                    </h1>
                    <span className="text-base font-normal text-gray-400">
                      {cryptoCurrency.symbol.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-row space-x-2">
                <div className="bg-gray-100 p-1.5 rounded-md">
                  <CiStar className="font-bold text-lg text-gray-500" />
                </div>
                <div className="bg-gray-100 p-1.5 rounded-md">
                  <CiShare2 className="font-bold text-lg text-gray-500" />
                </div>
              </div>
            </section>

            <section className="flex flex-col my-2">
              <div className="flex flex-row items-center justify-between space-x-3 py-3">
                <h1 className="text-4xl font-bold">
                  {cryptoCurrency.current_price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 2,
                  })}
                </h1>

                <div className="flex flex-col text-base font-semibold">
                  <h1
                    className={
                      cryptoCurrency.price_change_24h < 0
                        ? "text-red-500"
                        : "text-green-500"
                    }
                  >
                    {cryptoCurrency.price_change_24h < 0 ? (
                      <FaCaretDown className="inline-block" />
                    ) : (
                      <FaCaretUp className="inline-block" />
                    )}{" "}
                    ${Math.abs(cryptoCurrency.price_change_24h).toFixed(2)}{" "}
                    (24hs)
                  </h1>
                  <h1
                    className={
                      cryptoCurrency.price_change_percentage_24h < 0
                        ? "text-red-500"
                        : "text-green-500"
                    }
                  >
                    {cryptoCurrency.price_change_percentage_24h < 0 ? (
                      <FaCaretDown className="inline-block" />
                    ) : (
                      <FaCaretUp className="inline-block" />
                    )}{" "}
                    {Math.abs(
                      cryptoCurrency.price_change_percentage_24h
                    ).toFixed(2)}
                    % (24hs)
                  </h1>
                </div>
              </div>
            </section>

            <section>
              <div className="flex flex-row items-center justify-between border-t-1 py-3">
                <div className="flex flex-row items-center space-x-1">
                  <h1 className="font-semibold text-sm text-gray-600">
                    Market Cap Rank
                  </h1>
                  <Popover placement="bottom-end" showArrow={true}>
                    <PopoverTrigger>
                      <button>
                        <IoInformationCircleOutline className="text-sm text-gray-600 " />{" "}
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
                <div>
                  <h1 className="font-semibold text-base text-gray-800">
                    {cryptoCurrency.market_cap_rank}
                  </h1>
                </div>
              </div>

              <div className="flex flex-row items-center justify-between border-t-1 py-3">
                <div className="flex flex-row items-center space-x-1">
                  <h1 className="font-semibold text-sm text-gray-600">
                    High (24hs)
                  </h1>
                  <Popover placement="bottom-end" showArrow={true}>
                    <PopoverTrigger>
                      <button>
                        <IoInformationCircleOutline className="text-sm text-gray-600 " />{" "}
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
                <div>
                  <h1 className="font-semibold text-sm text-gray-800">
                    ${cryptoCurrency.high_24h.toLocaleString()}
                  </h1>
                </div>
              </div>

              <div className="flex flex-row items-center justify-between border-t-1 py-3">
                <div className="flex flex-row items-center space-x-1">
                  <h1 className="font-semibold text-sm text-gray-600">
                    Low (24hs)
                  </h1>
                  <Popover placement="bottom-end" showArrow={true}>
                    <PopoverTrigger>
                      <button>
                        <IoInformationCircleOutline className="text-sm text-gray-600 " />{" "}
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
                <div>
                  <h1 className="font-semibold text-sm text-gray-800">
                    ${cryptoCurrency.low_24h.toLocaleString()}
                  </h1>
                </div>
              </div>

              <div className="flex flex-row items-center justify-between border-t-1 py-3">
                <div className="flex flex-row items-center space-x-1">
                  <h1 className="font-semibold text-sm text-gray-600">
                    Market Cap
                  </h1>
                  <Popover placement="bottom-end" showArrow={true}>
                    <PopoverTrigger>
                      <button>
                        <IoInformationCircleOutline className="text-sm text-gray-600 " />{" "}
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
                <div>
                  <h1 className="font-semibold text-sm text-gray-800">
                    ${cryptoCurrency.market_cap.toLocaleString()}
                  </h1>
                </div>
              </div>

              <div className="flex flex-row items-center justify-between border-t-1 py-3">
                <div className="flex flex-row items-center space-x-1">
                  <h1 className="font-semibold text-sm text-gray-600">
                    Total Volume
                  </h1>
                  <Popover placement="bottom-end" showArrow={true}>
                    <PopoverTrigger>
                      <button>
                        <IoInformationCircleOutline className="text-sm text-gray-600 " />{" "}
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
                <div>
                  <h1 className="font-semibold text-sm text-gray-800">
                    ${cryptoCurrency.total_volume.toLocaleString()}
                  </h1>
                </div>
              </div>

              <div className="flex flex-row items-center justify-between border-t-1 py-3">
                <div className="flex flex-row items-center space-x-1">
                  <h1 className="font-semibold text-sm text-gray-600">
                    Total Supply
                  </h1>
                  <Popover placement="bottom-end" showArrow={true}>
                    <PopoverTrigger>
                      <button>
                        <IoInformationCircleOutline className="text-sm text-gray-600 " />{" "}
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
                <div>
                  <h1 className="font-semibold text-sm text-gray-800">
                    ${cryptoCurrency.total_supply.toLocaleString()}
                  </h1>
                </div>
              </div>

              <div className="flex flex-row items-center justify-between border-t-1 py-3">
                <div className="flex flex-row items-center space-x-1">
                  <h1 className="font-semibold text-sm text-gray-600">
                    Max. Supply
                  </h1>
                  <Popover placement="bottom-end" showArrow={true}>
                    <PopoverTrigger>
                      <button>
                        <IoInformationCircleOutline className="text-sm text-gray-600 " />{" "}
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
                <div>
                  <h1 className="font-semibold text-sm text-gray-800">
                    ${cryptoCurrency.max_supply.toLocaleString()}
                  </h1>
                </div>
              </div>

              <div className="flex flex-row items-center justify-between border-t-1 py-3">
                <div className="flex flex-row items-center space-x-1">
                  <h1 className="font-semibold text-sm text-gray-600">
                    Fully Diluted Valuation
                  </h1>
                  <Popover placement="bottom-end" showArrow={true}>
                    <PopoverTrigger>
                      <button>
                        <IoInformationCircleOutline className="text-sm text-gray-600 " />{" "}
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
                <div>
                  <h1 className="font-semibold text-sm text-gray-800">
                    ${cryptoCurrency.fully_diluted_valuation.toLocaleString()}
                  </h1>
                </div>
              </div>
            </section>
          </div>

          <div className="w-full sm:w-2/3 h-full border-1 rounded-md p-4">asdf</div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CryptoCurrencyDetails;
