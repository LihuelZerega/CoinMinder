"use client";
import { NextUIProvider } from "@nextui-org/react";
import NavBarConrtrollerMenu from "@/components/NavBarControllerMenu";
import HeroSection from "@/components/LandingPageComponents/SubComps/HeroSection";
import MarketSummary from "@/components/LandingPageComponents/SubComps/MarketSummary";
import FinancialNews from "@/components/LandingPageComponents/SubComps/FinancialNews";
import LogoClouds from "@/components/LandingPageComponents/SubComps/LogoClouds";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <NextUIProvider>
      <NavBarConrtrollerMenu />

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#fcd535] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        <main className="mx-6 my-6 sm:mx-8 md:mx-12 lg:mx-32 xl:mx-48 2xl:mx-64">
          <HeroSection />
          {/* <section className="flex flex-col xl:flex-row border-b-1">
            <div className="w-full xl:w-2/3">
              <FinancialNews />
            </div>
            <div className="w-full xl:w-1/3">
              <MarketSummary />
            </div>
          </section> */}
        </main>

        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#fcd535] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>

      <Footer />
    </NextUIProvider>
  );
}
