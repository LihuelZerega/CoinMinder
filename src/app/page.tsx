"use client";
import { NextUIProvider } from "@nextui-org/react";
import HeroSectionV2 from "@/components/LandingPageComponents/SubComps/HeroSectionV2";
import Stats from "@/components/LandingPageComponents/SubComps/Stats";
import Footer from "@/components/Footer";
import Faq from "@/components/LandingPageComponents/SubComps/Faq";
import TryFeatures from "@/components/LandingPageComponents/SubComps/TryFeatures";
import FinancialExplorer from "@/components/LandingPageComponents/SubComps/FinancialExplorer";

export default function Home() {
  return (
    <NextUIProvider>
      <HeroSectionV2 />
      <Stats />
      <main className="mx-auto max-w-7xl px-6 lg:px-8">
        <FinancialExplorer />
        <TryFeatures />
        <Faq />
      </main>
      <Footer />
    </NextUIProvider>
  );
}
