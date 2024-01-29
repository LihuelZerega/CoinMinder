import React from "react";
import TryConvertCoin from "./TrySwapCoin";
import TrySimulateInvestment from "./TrySimulateInvestment";

function TryFeatures() {
  return (
    <div className="flex flex-col md:flex-row gap-8 mb-12">
      <section className="w-1/2">
        <TryConvertCoin />
      </section>
      <section className="w-1/2">
        <TrySimulateInvestment />
      </section>
    </div>
  );
}

export default TryFeatures;
