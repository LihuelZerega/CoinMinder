import React from "react";
import CurrencyChart from "./CurrencyChart";
import CurrentHighestLowest from "./CurrentHighestLowest";
import CurrencyConverter from "./CurrencyConverter";

function Home() {
  return (
    <div>
      <section>
        <h1 className="py-6 font-semibold text-2xl">Dollar Official</h1>
      </section>
      <section className="border-b pb-6">
        <CurrentHighestLowest />
      </section>
      <section className="border-b mb-6 pb-6">
        <h1 className="py-6 font-semibold text-2xl">Historical Values</h1>
        <CurrencyChart />
      </section>
      <section className="mb-12 pb-6">
        <CurrencyConverter />
      </section>
    </div>
  );
}

export default Home;
