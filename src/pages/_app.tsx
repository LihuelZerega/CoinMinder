import "@/components/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import axios from "axios";
require('dotenv').config();
import type { AppProps } from "next/app";
axios.defaults.baseURL = "https://coinminder-api-production.up.railway.app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
