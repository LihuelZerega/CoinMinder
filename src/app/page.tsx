"use client";
import { NextUIProvider } from "@nextui-org/react";
import NavBarConrtrollerMenu from "@/components/NavBarControllerMenu";
import MarketSummary from "@/components/LandingPageComponents/MarketSummary";

export default function Home() {
  return (
    <NextUIProvider>
      <NavBarConrtrollerMenu />
      <main className="mx-6 my-6 sm:mx-8 md:mx-12 lg:mx-32 xl:mx-48 2xl:mx-64 ">
        <MarketSummary />
      </main>
    </NextUIProvider>
  );
}
