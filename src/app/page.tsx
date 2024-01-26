"use client";
import { NextUIProvider } from "@nextui-org/react";
import NavBarConrtrollerMenu from "@/components/NavBarControllerMenu";
import HeroSection from "@/components/LandingPageComponents/SubComps/HeroSection"
import MarketSummary from "@/components/LandingPageComponents/SubComps/MarketSummary";
import FinancialNews from "@/components/LandingPageComponents/SubComps/FinancialNews";
import LogoClouds from "@/components/LandingPageComponents/SubComps/LogoClouds"
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <NextUIProvider>
      {/* <NavBarConrtrollerMenu /> */}
      <HeroSection />
      <main className="mx-6 my-6 sm:mx-8 md:mx-12 lg:mx-32 xl:mx-48 2xl:mx-64 ">
        <LogoClouds />
        <FinancialNews />
        <MarketSummary />
      </main>
      <Footer />
    </NextUIProvider>
  );
}
