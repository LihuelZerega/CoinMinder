import React from "react";
import CurrencyChart from "./CurrencyChart";

function Home() {
  return (
    <div>
      <section>
        <h1 className="py-6 font-semibold text-2xl">Dollar Official</h1>
      </section>
      <section>
        <CurrencyChart />
      </section>
    </div>
  );
}

export default Home;
