"use client"
import { useState, useEffect } from "react";
import LoadingPage from "@/components/LoadingPage";
import PopularCoins from "@/pages/Crypto/Popular/PopularCoins";

function page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div>
        {isLoading ? (
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-white bg-opacity-80 z-50">
            <LoadingPage />
          </div>
        ) : (
          <PopularCoins />
        )}
      </div>
    </>
  );
}

export default page;
