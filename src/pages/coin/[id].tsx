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
  Tooltip,
  Spacer,
} from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import { CiStar, CiShare2 } from "react-icons/ci";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { IoInformationCircleOutline } from "react-icons/io5";
import BitcoinChart from "../Crypto/CryptoCharts/BitcoinChart/BitcoinChart";
import BnbChart from "../Crypto/CryptoCharts/BnbChart/BnbChart";
import EthereumChart from "../Crypto/CryptoCharts/EthereumChart/EthereumChart";
import SolanaChart from "../Crypto/CryptoCharts/SolanaChart/SolanaChart";
import TetherChart from "../Crypto/CryptoCharts/TetherChart/TetherChart";
import ChartError from "../Crypto/CryptoCharts/ChartError";
import CryptoPricesTable from "@/pages/Crypto/CryptoPricesTable";
import LoadingPage from "@/components/LoadingPage";
import ErrorPage from "@/app/not-found";

interface CryptoCurrency {
  id: number;
  symbol?: string;
  name?: string;
  image?: string;
  current_price?: number;
  market_cap?: number;
  market_cap_rank?: number;
  fully_diluted_valuation?: number;
  total_volume?: number;
  high_24h?: number;
  low_24h?: number;
  price_change_24h?: number;
  price_change_percentage_24h?: number;
  market_cap_change_24h?: number;
  market_cap_change_percentage_24h?: number;
  circulating_supply?: number;
  total_supply?: number;
  max_supply?: number;
  ath?: number;
  ath_change_percentage?: number;
  ath_date?: string;
  atl?: number;
  atl_change_percentage?: number;
  atl_date?: number;
  roi?: number;
  last_updated?: string;
}

const CryptoCurrencyDetails: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [cryptoCurrency, setCryptoCurrency] = useState<CryptoCurrency | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const fetchCryptoCurrencyDetails = async () => {
      try {
        const response = await axios.get(
          `https://coinminder-api-production.up.railway.app/api/crypto/quote/${id}`
        );

        setCryptoCurrency(response.data);

        if (response.data && response.data.id) {
          document.title = `BullSwap | ${response.data.id}`;
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
    return (
      <div>
        <LoadingPage />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!cryptoCurrency) {
    return (
      <div>
        <ErrorPage />
      </div>
    );
  }

  const { market_cap_rank } = cryptoCurrency;

  let ChartComponent = null;

  switch (market_cap_rank) {
    case 1:
      ChartComponent = <BitcoinChart />;
      break;
    case 2:
      ChartComponent = <EthereumChart />;
      break;
    case 3:
      ChartComponent = <TetherChart />;
      break;
    case 4:
      ChartComponent = <BnbChart />;
      break;
    case 5:
      ChartComponent = <SolanaChart />;
      break;
    default:
      ChartComponent = <ChartError />;
      break;
  }

  return (
    <div className="h-full">
      {isLoading ? (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-white bg-opacity-80 z-50">
          <LoadingPage />
        </div>
      ) : (
        <div>
          <NavBar />
          <main className="h-full mx-auto max-w-7xl px-2 sm:px-0 py-6 lg:px-8 mt-20 mb-24">
            <div className="block md:hidden py-4">
              <Breadcrumbs>
                <BreadcrumbItem>
                  <Link href="https://coinminder-api-production.up.railway.app/crypto">
                    Cryptocurrencies
                  </Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  {cryptoCurrency.name ? cryptoCurrency.name : "Error"}
                </BreadcrumbItem>
              </Breadcrumbs>
            </div>

            <div className="space-y-4">
              <section className="flex flex-col lg:flex-row items-start gap-4">
                <div className="w-full lg:w-1/3 border-0 sm:border-1 rounded-md p-4">
                  <section className="flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center space-x-3">
                      <div>
                        <Image
                          src={
                            cryptoCurrency.image
                              ? cryptoCurrency.image
                              : "Error"
                          }
                          width={40}
                          height={40}
                          alt={
                            cryptoCurrency.image
                              ? cryptoCurrency.image
                              : "Error"
                          }
                        />
                      </div>

                      <div>
                        <div className="flex flex-row items-end space-x-1">
                          <h1 className="text-xl font-semibold">
                            {cryptoCurrency.name
                              ? cryptoCurrency.name
                              : "Error"}
                          </h1>
                          <span className="text-base font-normal text-gray-400">
                            {cryptoCurrency.symbol
                              ? cryptoCurrency.symbol.toUpperCase()
                              : "Error"}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-row space-x-2">
                      <Tooltip content="This action will be available soon...">
                        <div className="bg-gray-100 p-1.5 rounded-md">
                          <CiStar className="font-bold text-lg text-gray-500 hover:text-yellow-400 cursor-pointer" />
                        </div>
                      </Tooltip>
                      <Tooltip content="This action will be available soon...">
                        <div className="bg-gray-100 p-1.5 rounded-md">
                          <CiShare2 className="font-bold text-lg text-gray-500 hover:text-[#38bdf8] cursor-pointer" />
                        </div>
                      </Tooltip>
                    </div>
                  </section>

                  <section className="flex flex-col my-2">
                    <div className="flex flex-row items-center justify-between space-x-3 py-3">
                      <h1 className="text-4xl font-bold">
                        {cryptoCurrency.current_price
                          ? cryptoCurrency.current_price.toLocaleString(
                              "en-US",
                              {
                                style: "currency",
                                currency: "USD",
                                minimumFractionDigits: 2,
                              }
                            )
                          : "Error"}
                      </h1>

                      <div className="flex flex-col text-base font-semibold">
                        <h1
                          className={
                            cryptoCurrency.price_change_24h &&
                            cryptoCurrency.price_change_24h < 0
                              ? "text-red-500"
                              : "text-green-500"
                          }
                        >
                          {cryptoCurrency.price_change_24h &&
                          cryptoCurrency.price_change_24h < 0 ? (
                            <FaCaretDown className="inline-block" />
                          ) : (
                            <FaCaretUp className="inline-block" />
                          )}{" "}
                          $
                          {cryptoCurrency.price_change_24h
                            ? Math.abs(cryptoCurrency.price_change_24h).toFixed(
                                2
                              )
                            : "Error"}{" "}
                          (24hs)
                        </h1>
                        <h1
                          className={
                            cryptoCurrency.price_change_percentage_24h &&
                            cryptoCurrency.price_change_percentage_24h < 0
                              ? "text-red-500"
                              : "text-green-500"
                          }
                        >
                          {cryptoCurrency.price_change_percentage_24h &&
                          cryptoCurrency.price_change_percentage_24h < 0 ? (
                            <FaCaretDown className="inline-block" />
                          ) : (
                            <FaCaretUp className="inline-block" />
                          )}{" "}
                          {cryptoCurrency.price_change_percentage_24h
                            ? Math.abs(
                                cryptoCurrency.price_change_percentage_24h
                              ).toFixed(2)
                            : "Error"}
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
                        <Popover placement="bottom-start" showArrow={true}>
                          <PopoverTrigger>
                            <button>
                              <IoInformationCircleOutline className="text-sm text-gray-600 " />{" "}
                            </button>
                          </PopoverTrigger>
                          <PopoverContent>
                            <div className="px-1 py-2">
                              <div className="text-tiny font-medium text-gray-400 space-y-1">
                                <h1>
                                  The market capitalization rank indicates the
                                  position of a
                                </h1>
                                <h1>
                                  cryptocurrency relative to others in terms of
                                  market value.
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
                        <Popover placement="bottom-start" showArrow={true}>
                          <PopoverTrigger>
                            <button>
                              <IoInformationCircleOutline className="text-sm text-gray-600 " />{" "}
                            </button>
                          </PopoverTrigger>
                          <PopoverContent>
                            <div className="px-1 py-2">
                              <div className="text-tiny font-medium text-gray-400 space-y-1">
                                <h1>
                                  The highest price at which a cryptocurrency
                                  has
                                </h1>
                                <h1>traded within the last 24 hours.</h1>
                              </div>
                            </div>
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div>
                        <h1 className="font-semibold text-sm text-gray-800">
                          $
                          {cryptoCurrency.high_24h
                            ? cryptoCurrency.high_24h.toLocaleString()
                            : "Error"}
                        </h1>
                      </div>
                    </div>

                    <div className="flex flex-row items-center justify-between border-t-1 py-3">
                      <div className="flex flex-row items-center space-x-1">
                        <h1 className="font-semibold text-sm text-gray-600">
                          Low (24hs)
                        </h1>
                        <Popover placement="bottom-start" showArrow={true}>
                          <PopoverTrigger>
                            <button>
                              <IoInformationCircleOutline className="text-sm text-gray-600 " />{" "}
                            </button>
                          </PopoverTrigger>
                          <PopoverContent>
                            <div className="px-1 py-2">
                              <div className="text-tiny font-medium text-gray-400 space-y-1">
                                <h1>
                                  The lowest price at which a cryptocurrency has
                                </h1>
                                <h1>traded within the last 24 hours.</h1>
                              </div>
                            </div>
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div>
                        <h1 className="font-semibold text-sm text-gray-800">
                          $
                          {cryptoCurrency.low_24h
                            ? cryptoCurrency.low_24h.toLocaleString()
                            : "Error"}
                        </h1>
                      </div>
                    </div>

                    <div className="flex flex-row items-center justify-between border-t-1 py-3">
                      <div className="flex flex-row items-center space-x-1">
                        <h1 className="font-semibold text-sm text-gray-600">
                          Market Cap
                        </h1>
                        <Popover placement="bottom-start" showArrow={true}>
                          <PopoverTrigger>
                            <button>
                              <IoInformationCircleOutline className="text-sm text-gray-600 " />{" "}
                            </button>
                          </PopoverTrigger>
                          <PopoverContent>
                            <div className="px-1 py-2">
                              <div className="text-tiny font-medium text-gray-400 space-y-1">
                                <h1>
                                  Market cap represents the total market value
                                  of a
                                </h1>
                                <h1>
                                  cryptocurrencys circulating supply. It is
                                </h1>
                                <h1>
                                  calculated by multiplying the current price by
                                  the
                                </h1>
                                <h1>circulating supply.</h1>
                              </div>
                            </div>
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div>
                        <h1 className="font-semibold text-sm text-gray-800">
                          $
                          {cryptoCurrency.market_cap
                            ? cryptoCurrency.market_cap.toLocaleString()
                            : "Error"}
                        </h1>
                      </div>
                    </div>

                    <div className="flex flex-row items-center justify-between border-t-1 py-3">
                      <div className="flex flex-row items-center space-x-1">
                        <h1 className="font-semibold text-sm text-gray-600">
                          Total Volume
                        </h1>
                        <Popover placement="bottom-start" showArrow={true}>
                          <PopoverTrigger>
                            <button>
                              <IoInformationCircleOutline className="text-sm text-gray-600 " />{" "}
                            </button>
                          </PopoverTrigger>
                          <PopoverContent>
                            <div className="px-1 py-2">
                              <div className="text-tiny font-medium text-gray-400 space-y-1">
                                <h1>
                                  Total volume refers to the total amount of
                                </h1>
                                <h1>
                                  a cryptocurrency traded within a specific time
                                </h1>
                                <h1>period.</h1>
                              </div>
                            </div>
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div>
                        <h1 className="font-semibold text-sm text-gray-800">
                          $
                          {cryptoCurrency.total_volume
                            ? cryptoCurrency.total_volume.toLocaleString()
                            : "Error"}
                        </h1>
                      </div>
                    </div>

                    <div className="flex flex-row items-center justify-between border-t-1 py-3">
                      <div className="flex flex-row items-center space-x-1">
                        <h1 className="font-semibold text-sm text-gray-600">
                          Total Supply
                        </h1>
                        <Popover placement="bottom-start" showArrow={true}>
                          <PopoverTrigger>
                            <button>
                              <IoInformationCircleOutline className="text-sm text-gray-600 " />{" "}
                            </button>
                          </PopoverTrigger>
                          <PopoverContent>
                            <div className="px-1 py-2">
                              <div className="text-tiny font-medium text-gray-400 space-y-1">
                                <h1>
                                  Total supply refers to the total number of
                                  coins or
                                </h1>
                                <h1>tokens that will ever be created for a</h1>
                                <h1>cryptocurrency.</h1>
                              </div>
                            </div>
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div>
                        <h1 className="font-semibold text-sm text-gray-800">
                          $
                          {cryptoCurrency.total_supply
                            ? cryptoCurrency.total_supply.toLocaleString()
                            : "Error"}
                        </h1>
                      </div>
                    </div>

                    <div className="flex flex-row items-center justify-between border-t-1 py-3">
                      <div className="flex flex-row items-center space-x-1">
                        <h1 className="font-semibold text-sm text-gray-600">
                          Max. Supply
                        </h1>
                        <Popover placement="bottom-start" showArrow={true}>
                          <PopoverTrigger>
                            <button>
                              <IoInformationCircleOutline className="text-sm text-gray-600 " />{" "}
                            </button>
                          </PopoverTrigger>
                          <PopoverContent>
                            <div className="px-1 py-2">
                              <div className="text-tiny font-medium text-gray-400 space-y-1">
                                <h1>
                                  Max supply indicates the maximum number of
                                  coins or
                                </h1>
                                <h1>tokens that will ever be created for a</h1>
                                <h1>cryptocurrency.</h1>
                              </div>
                            </div>
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div>
                        <h1 className="font-semibold text-sm text-gray-800">
                          $
                          {cryptoCurrency.max_supply
                            ? cryptoCurrency.max_supply.toLocaleString()
                            : "Error"}
                        </h1>
                      </div>
                    </div>

                    <div className="flex flex-row items-center justify-between border-t-1 py-3">
                      <div className="flex flex-row items-center space-x-1">
                        <h1 className="font-semibold text-sm text-gray-600">
                          Fully Diluted Valuation
                        </h1>
                        <Popover placement="bottom-start" showArrow={true}>
                          <PopoverTrigger>
                            <button>
                              <IoInformationCircleOutline className="text-sm text-gray-600 " />{" "}
                            </button>
                          </PopoverTrigger>
                          <PopoverContent>
                            <div className="px-1 py-2">
                              <div className="text-tiny font-medium text-gray-400 space-y-1">
                                <h1>
                                  The fully diluted valuation represents the
                                </h1>
                                <h1>theoretical market capitalization of a</h1>
                                <h1>
                                  cryptocurrency if all coins were in
                                  circulation.
                                </h1>
                              </div>
                            </div>
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div>
                        <h1 className="font-semibold text-sm text-gray-800">
                          $
                          {cryptoCurrency.fully_diluted_valuation
                            ? cryptoCurrency.fully_diluted_valuation.toLocaleString()
                            : "Error"}
                        </h1>
                      </div>
                    </div>
                  </section>
                </div>

                <div className="w-full lg:w-2/3 h-full border-t-1 sm:border-1 rounded-md p-4">
                  {ChartComponent}

                  <div className="flex flex-col sm:flex-row border-t-1 py-3 w-full">
                    <div className="flex flex-row items-center justify-between w-full py-3 sm:py-0 border-b-1 sm:border-b-0">
                      <div className="flex flex-col items-start">
                        <h1 className="font-semibold text-sm text-gray-600">
                          All-Time High
                        </h1>
                        <h1 className="font-semibold text-xs text-gray-600">
                          {cryptoCurrency.ath_date
                            ? `(${new Date(
                                cryptoCurrency.ath_date
                              ).toLocaleDateString()})`
                            : ""}
                        </h1>
                      </div>

                      <div className="flex flex-col items-end">
                        <h1 className="font-semibold text-sm text-gray-800">
                          {cryptoCurrency.ath
                            ? cryptoCurrency.ath.toLocaleString()
                            : "Error"}
                        </h1>

                        <div className="flex flex-row items-center">
                          <div className="flex flex-col text-xs font-semibold">
                            <h1
                              className={
                                cryptoCurrency.ath_change_percentage !==
                                  undefined &&
                                cryptoCurrency.ath_change_percentage < 0
                                  ? "text-red-500"
                                  : "text-green-500"
                              }
                            >
                              {cryptoCurrency.ath_change_percentage !==
                                undefined &&
                              cryptoCurrency.ath_change_percentage < 0 ? (
                                <FaCaretDown className="inline-block" />
                              ) : (
                                <FaCaretUp className="inline-block" />
                              )}
                              {cryptoCurrency.ath_change_percentage !==
                              undefined
                                ? Math.abs(
                                    cryptoCurrency.ath_change_percentage
                                  ).toFixed(2)
                                : "Error"}{" "}
                              %
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="hidden sm:block">
                      <Spacer x={8} />
                    </div>
                    <div className="flex flex-row items-center justify-between w-full py-3 sm:py-0 border-b-1 sm:border-b-0">
                      <div className="flex flex-col items-start">
                        <h1 className="font-semibold text-sm text-gray-600">
                          All-Time Low
                        </h1>
                        <h1 className="font-semibold text-xs text-gray-600">
                          {cryptoCurrency.atl_date
                            ? `(${new Date(
                                cryptoCurrency.atl_date
                              ).toLocaleDateString()})`
                            : ""}
                        </h1>
                      </div>

                      <div className="flex flex-col items-end">
                        <h1 className="font-semibold text-sm text-gray-800">
                          {cryptoCurrency.atl
                            ? cryptoCurrency.atl.toLocaleString()
                            : "Error"}
                        </h1>

                        <div className="flex flex-row items-center">
                          <div className="flex flex-col text-xs font-semibold">
                            <h1
                              className={
                                cryptoCurrency.atl_change_percentage !==
                                  undefined &&
                                cryptoCurrency.atl_change_percentage < 0
                                  ? "text-red-500"
                                  : "text-green-500"
                              }
                            >
                              {cryptoCurrency.atl_change_percentage !==
                                undefined &&
                              cryptoCurrency.atl_change_percentage < 0 ? (
                                <FaCaretDown className="inline-block" />
                              ) : (
                                <FaCaretUp className="inline-block" />
                              )}
                              {cryptoCurrency.atl_change_percentage !==
                              undefined
                                ? Math.abs(
                                    cryptoCurrency.atl_change_percentage
                                  ).toFixed(2)
                                : "Error"}{" "}
                              %
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="hidden sm:block">
                      <Spacer x={8} />
                    </div>
                    <div className="flex flex-row justify-between w-full py-3 sm:py-0">
                      <div className="flex flex-col items-start justify-start">
                        <h1 className="font-semibold text-sm text-gray-600">
                          Last Updated
                        </h1>
                      </div>

                      <div className="flex flex-col items-end">
                        <h1 className="font-semibold text-xs text-gray-600">
                          {cryptoCurrency.last_updated
                            ? `(${new Date(
                                cryptoCurrency.last_updated
                              ).toLocaleDateString()})`
                            : ""}
                        </h1>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row items-center justify-center border-t-1 pt-5 w-full">
                    <Link href="/">
                      <h1 className="text-gray-500 text-xs hover:text-[#38bdf8] font-medium cursor-pointer">
                        All information is updated every 6 hours | Charts every
                        24 hours | Data update at 00:00 UTC.
                      </h1>
                    </Link>
                  </div>
                </div>
              </section>

              <div className="border-t-1 sm:border-1 rounded-md p-4">
                <CryptoPricesTable />
              </div>
            </div>
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default CryptoCurrencyDetails;
