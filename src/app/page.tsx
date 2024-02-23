"use client";
import { NextUIProvider } from "@nextui-org/react";
import { useState, useEffect } from "react";
import HeroSectionV2 from "@/pages/SubComps/HeroSectionV2";
import Stats from "@/pages/SubComps/Stats";
import Footer from "@/components/Footer";
import Faq from "@/pages/SubComps/Faq";
import TryFeatures from "@/pages/SubComps/TryFeatures";
import FinancialExplorer from "@/pages/SubComps/FinancialExplorer";
import LoadingPage from "@/components/LoadingPage";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <NextUIProvider>
      <div>
        {isLoading ? (
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-white bg-opacity-80 z-50">
            <LoadingPage />
          </div>
        ) : (
          <div>
            <HeroSectionV2 />
            <Stats />
            <main className="mx-auto max-w-7xl px-6 lg:px-8">
              <FinancialExplorer />
              <TryFeatures />
              <Faq />
            </main>
            <Footer />
          </div>
        )}
      </div>
    </NextUIProvider>
  );
}
