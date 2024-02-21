import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";
import { Chart, LinearScale, CategoryScale } from "chart.js";
import { registerables } from "chart.js";

Chart.register(...registerables, LinearScale, CategoryScale);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
