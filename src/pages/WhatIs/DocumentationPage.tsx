"use client";
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Image from "next/image";
import LogoBullSwap from "@/images/bullswap_icon-skyblue.png";
import { ScrollShadow } from "@nextui-org/react";
import Introduction from "./Introduction";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { motion, useAnimation } from "framer-motion";
import FinancialNews from "./WhatIs/FinancialNews";
import Stocks from "./WhatIs/Stocks";
import Crypto from "./WhatIs/Crypto";
import Simulate from "./WhatIs/Simulate";
import Swap from "./WhatIs/Swap";
import StocksIntroduction from "./WhatIs/WhatIsStocks/StocksIntroduction";
import TypesofStocks from "./WhatIs/WhatIsStocks/TypesofStocks";
import FundamentalAnalysis from "./WhatIs/WhatIsStocks/FundamentalAnalysis";
import HowtoBuyStocks from "./WhatIs/WhatIsStocks/HowtoBuyStocks";
import Technicalanalysis from "./WhatIs/WhatIsStocks/Technicalanalysis";
import InvestmentStrategies from "./WhatIs/WhatIsStocks/InvestmentStrategies";
import RiskandConsiderations from "./WhatIs/WhatIsStocks/RisksandConsiderations";
import OriginsoftheStockMarket from "./WhatIs/WhatIsStocks/OriginsoftheStockMarket";
import Casestudiesofsuccessfulandfailedcompanies from "./WhatIs/WhatIsStocks/Casestudiesofsuccessfulandfailedcompanies";
import GoToTheTopButon from "./WhatIs/GoToTheTopButton";

function DocumentationPage() {
  const controls = useAnimation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      controls.start({ y: element.offsetTop });
    }
  };

  return (
    <div className="h-screen" id="Top">
      <NavBar />
      <main className="mx-auto max-w-7xl py-6 lg:px-8 mt-24 mb-24">
        <div className="flex flex-row items-center space-x-4 border-b-1 pb-6 mb-6 select-none">
          <Image src={LogoBullSwap} width={50} height={50} alt="LogoBullSwap" />
          <h1 className="text-5xl font-bold text-[#38bdf8]">Bull Swap Learn</h1>
          <a
            onClick={() => scrollToSection("Top")}
            href="#Top"
            className="text-transparent"
          >
            <GoToTheTopButon />
          </a>
        </div>
        <div className="flex">
          <div className="w-1/4 h-screen border-r-1 pr-4 mr-4">
            <ScrollShadow hideScrollBar className="w-[300px] h-[2800px]">
              <ul>
                <li className="border-b-1 mr-12 pb-3">
                  <a
                    onClick={() => scrollToSection("Introduction")}
                    href="#Introduction"
                    className="text-lg text-gray-500 hover:text-gray-600 font-medium "
                  >
                    • Introduction
                  </a>
                </li>
                {/* What Is? */}
                <li className="border-b-1 mr-12">
                  <Accordion>
                    <AccordionItem key="1" title="What is?">
                      <div className="flex flex-col">
                        <a
                          onClick={() => scrollToSection("FinancialNews")}
                          href="#FinancialNews"
                          className="font-medium text-md text-gray-500 hover:text-gray-600 pb-3"
                        >
                          <div className="flex flex-row">
                            <h1 className="mr-2">•</h1>
                            <h1>Financial News</h1>
                          </div>
                        </a>
                        <a
                          onClick={() => scrollToSection("Stocks")}
                          href="#Stocks"
                          className="font-medium text-md text-gray-500 hover:text-gray-600 pb-3"
                        >
                          <div className="flex flex-row">
                            <h1 className="mr-2">•</h1>
                            <h1>Stocks</h1>
                          </div>
                        </a>
                        <a
                          onClick={() => scrollToSection("Crypto")}
                          href="#Crypto"
                          className="font-medium text-md text-gray-500 hover:text-gray-600 pb-3"
                        >
                          <div className="flex flex-row">
                            <h1 className="mr-2">•</h1>
                            <h1>Crypto</h1>
                          </div>
                        </a>
                        <a
                          onClick={() => scrollToSection("Simulate")}
                          href="#Simulate"
                          className="font-medium text-md text-gray-500 hover:text-gray-600 pb-3"
                        >
                          <div className="flex flex-row">
                            <h1 className="mr-2">•</h1>
                            <h1>Simulate</h1>
                          </div>
                        </a>
                        <a
                          onClick={() => scrollToSection("Swap")}
                          href="#Swap"
                          className="font-medium text-md text-gray-500 hover:text-gray-600 pb-3"
                        >
                          <div className="flex flex-row">
                            <h1 className="mr-2">•</h1>
                            <h1>Swap</h1>
                          </div>
                        </a>
                      </div>
                    </AccordionItem>
                  </Accordion>
                </li>
                {/* What Is Stocks? */}
                <li className="border-b-1 mr-12">
                  <Accordion>
                    <AccordionItem key="1" title="What is Stocks?">
                      <div className="flex flex-col">
                        <a
                          onClick={() => scrollToSection("StocksIntroduction")}
                          href="#StocksIntroduction"
                          className="font-medium text-md text-gray-500 hover:text-gray-600 pb-3"
                        >
                          <div className="flex flex-row">
                            <h1 className="mr-2">•</h1>
                            <h1>Stocks Introduction</h1>
                          </div>
                        </a>
                        <a
                          onClick={() => scrollToSection("TypesofStocks")}
                          href="#TypesofStocks"
                          className="font-medium text-md text-gray-500 hover:text-gray-600 pb-3"
                        >
                          <div className="flex flex-row">
                            <h1 className="mr-2">•</h1>
                            <h1>Types of Stocks</h1>
                          </div>
                        </a>
                        <a
                          onClick={() => scrollToSection("HowtoBuyStocks")}
                          href="#HowtoBuyStocks"
                          className="font-medium text-md text-gray-500 hover:text-gray-600 pb-3"
                        >
                          <div className="flex flex-row">
                            <h1 className="mr-2">•</h1>
                            <h1>How to Buy Stocks</h1>
                          </div>
                        </a>
                        <a
                          onClick={() => scrollToSection("FundamentalAnalysis")}
                          href="#FundamentalAnalysis"
                          className="font-medium text-md text-gray-500 hover:text-gray-600 pb-3"
                        >
                          <div className="flex flex-row">
                            <h1 className="mr-2">•</h1>
                            <h1>Fundamental Analysis</h1>
                          </div>
                        </a>
                        <a
                          onClick={() => scrollToSection("Technicalanalysis")}
                          href="#Technicalanalysis"
                          className="font-medium text-md text-gray-500 hover:text-gray-600 pb-3"
                        >
                          <div className="flex flex-row">
                            <h1 className="mr-2">•</h1>
                            <h1>Technical analysis</h1>
                          </div>
                        </a>
                        <a
                          onClick={() =>
                            scrollToSection("InvestmentStrategies")
                          }
                          href="#InvestmentStrategies"
                          className="font-medium text-md text-gray-500 hover:text-gray-600 pb-3"
                        >
                          <div className="flex flex-row">
                            <h1 className="mr-2">•</h1>
                            <h1>Investment Strategies</h1>
                          </div>
                        </a>
                        <a
                          onClick={() =>
                            scrollToSection("RiskandConsiderations")
                          }
                          href="#RiskandConsiderations"
                          className="font-medium text-md text-gray-500 hover:text-gray-600 pb-3"
                        >
                          <div className="flex flex-row">
                            <h1 className="mr-2">•</h1>
                            <h1>Risk and Considerations</h1>
                          </div>
                        </a>
                        <a
                          onClick={() =>
                            scrollToSection("OriginsoftheStockMarket")
                          }
                          href="#OriginsoftheStockMarket"
                          className="font-medium text-md text-gray-500 hover:text-gray-600 pb-3"
                        >
                          <div className="flex flex-row">
                            <h1 className="mr-2">•</h1>
                            <h1>Origins of the stock market</h1>
                          </div>
                        </a>
                        <a
                          onClick={() =>
                            scrollToSection(
                              "Casestudiesofsuccessfulandfailedcompanies"
                            )
                          }
                          href="#Casestudiesofsuccessfulandfailedcompanies"
                          className="font-medium text-md text-gray-500 hover:text-gray-600 pb-3"
                        >
                          <div className="flex flex-row">
                            <h1 className="mr-2">•</h1>
                            <h1>
                              Case studies of successful and failed companies
                            </h1>
                          </div>
                        </a>
                      </div>
                    </AccordionItem>
                  </Accordion>
                </li>
                {/* What Is Crypto? */}
                <li className="border-b-1 mr-12">
                  <Accordion>
                    <AccordionItem key="1" title="What is Crypto?">
                      <div className="flex flex-col">
                        <a
                          onClick={() => scrollToSection("FinancialNews")}
                          href="#FinancialNews"
                          className="font-medium text-md text-gray-500 hover:text-gray-600 pb-3"
                        >
                          <div className="flex flex-row">
                            <h1 className="mr-2">•</h1>
                            <h1>Financial News</h1>
                          </div>
                        </a>
                        <a
                          onClick={() => scrollToSection("Stocks")}
                          href="#Stocks"
                          className="font-medium text-md text-gray-500 hover:text-gray-600 pb-3"
                        >
                          <div className="flex flex-row">
                            <h1 className="mr-2">•</h1>
                            <h1>Stocks</h1>
                          </div>
                        </a>
                        <a
                          onClick={() => scrollToSection("Crypto")}
                          href="#Crypto"
                          className="font-medium text-md text-gray-500 hover:text-gray-600 pb-3"
                        >
                          <div className="flex flex-row">
                            <h1 className="mr-2">•</h1>
                            <h1>Crypto</h1>
                          </div>
                        </a>
                        <a
                          onClick={() => scrollToSection("Simulate")}
                          href="#Simulate"
                          className="font-medium text-md text-gray-500 hover:text-gray-600 pb-3"
                        >
                          <div className="flex flex-row">
                            <h1 className="mr-2">•</h1>
                            <h1>Simulate</h1>
                          </div>
                        </a>
                        <a
                          onClick={() => scrollToSection("Swap")}
                          href="#Swap"
                          className="font-medium text-md text-gray-500 hover:text-gray-600 pb-3"
                        >
                          <div className="flex flex-row">
                            <h1 className="mr-2">•</h1>
                            <h1>Swap</h1>
                          </div>
                        </a>
                      </div>
                    </AccordionItem>
                  </Accordion>
                </li>
                {/* What Is Simulate? */}
                <li className="border-b-1 mr-12">
                  <Accordion>
                    <AccordionItem key="1" title="What is Simulate?">
                      <div className="flex flex-col">
                        <a
                          onClick={() => scrollToSection("FinancialNews")}
                          href="#FinancialNews"
                          className="font-medium text-md text-gray-500 hover:text-gray-600 pb-3"
                        >
                          <div className="flex flex-row">
                            <h1 className="mr-2">•</h1>
                            <h1>Financial News</h1>
                          </div>
                        </a>
                        <a
                          onClick={() => scrollToSection("Stocks")}
                          href="#Stocks"
                          className="font-medium text-md text-gray-500 hover:text-gray-600 pb-3"
                        >
                          <div className="flex flex-row">
                            <h1 className="mr-2">•</h1>
                            <h1>Stocks</h1>
                          </div>
                        </a>
                        <a
                          onClick={() => scrollToSection("Crypto")}
                          href="#Crypto"
                          className="font-medium text-md text-gray-500 hover:text-gray-600 pb-3"
                        >
                          <div className="flex flex-row">
                            <h1 className="mr-2">•</h1>
                            <h1>Crypto</h1>
                          </div>
                        </a>
                        <a
                          onClick={() => scrollToSection("Simulate")}
                          href="#Simulate"
                          className="font-medium text-md text-gray-500 hover:text-gray-600 pb-3"
                        >
                          <div className="flex flex-row">
                            <h1 className="mr-2">•</h1>
                            <h1>Simulate</h1>
                          </div>
                        </a>
                        <a
                          onClick={() => scrollToSection("Swap")}
                          href="#Swap"
                          className="font-medium text-md text-gray-500 hover:text-gray-600 pb-3"
                        >
                          <div className="flex flex-row">
                            <h1 className="mr-2">•</h1>
                            <h1>Swap</h1>
                          </div>
                        </a>
                      </div>
                    </AccordionItem>
                  </Accordion>
                </li>
                {/* What Is Swap? */}
                <li className="border-b-1 mr-12">
                  <Accordion>
                    <AccordionItem key="1" title="What is Swap?">
                      <div className="flex flex-col">
                        <a
                          onClick={() => scrollToSection("FinancialNews")}
                          href="#FinancialNews"
                          className="font-medium text-md text-gray-500 hover:text-gray-600 pb-3"
                        >
                          <div className="flex flex-row">
                            <h1 className="mr-2">•</h1>
                            <h1>Financial News</h1>
                          </div>
                        </a>
                        <a
                          onClick={() => scrollToSection("Stocks")}
                          href="#Stocks"
                          className="font-medium text-md text-gray-500 hover:text-gray-600 pb-3"
                        >
                          <div className="flex flex-row">
                            <h1 className="mr-2">•</h1>
                            <h1>Stocks</h1>
                          </div>
                        </a>
                        <a
                          onClick={() => scrollToSection("Crypto")}
                          href="#Crypto"
                          className="font-medium text-md text-gray-500 hover:text-gray-600 pb-3"
                        >
                          <div className="flex flex-row">
                            <h1 className="mr-2">•</h1>
                            <h1>Crypto</h1>
                          </div>
                        </a>
                        <a
                          onClick={() => scrollToSection("Simulate")}
                          href="#Simulate"
                          className="font-medium text-md text-gray-500 hover:text-gray-600 pb-3"
                        >
                          <div className="flex flex-row">
                            <h1 className="mr-2">•</h1>
                            <h1>Simulate</h1>
                          </div>
                        </a>
                        <a
                          onClick={() => scrollToSection("Swap")}
                          href="#Swap"
                          className="font-medium text-md text-gray-500 hover:text-gray-600 pb-3"
                        >
                          <div className="flex flex-row">
                            <h1 className="mr-2">•</h1>
                            <h1>Swap</h1>
                          </div>
                        </a>
                      </div>
                    </AccordionItem>
                  </Accordion>
                </li>
              </ul>
            </ScrollShadow>
          </div>
          <div className="w-3/4">
            <div id="Introduction">
              <Introduction />
            </div>
            <div id="FinancialNews">
              <FinancialNews />
            </div>
            <div id="Stocks">
              <Stocks />
            </div>
            <div id="Crypto">
              <Crypto />
            </div>
            <div id="Simulate">
              <Simulate />
            </div>
            <div id="Swap">
              <Swap />
            </div>
            <div id="StocksIntroduction">
              <StocksIntroduction />
            </div>
            <div id="TypesofStocks">
              <TypesofStocks />
            </div>
            <div id="HowtoBuyStocks">
              <HowtoBuyStocks />
            </div>
            <div id="FundamentalAnalysis">
              <FundamentalAnalysis />
            </div>
            <div id="Technicalanalysis">
              <Technicalanalysis />
            </div>
            <div id="InvestmentStrategies">
              <InvestmentStrategies />
            </div>
            <div id="RiskandConsiderations">
              <RiskandConsiderations />
            </div>
            <div id="OriginsoftheStockMarket">
              <OriginsoftheStockMarket />
            </div>
            <div id="Casestudiesofsuccessfulandfailedcompanies">
              <Casestudiesofsuccessfulandfailedcompanies />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default DocumentationPage;
