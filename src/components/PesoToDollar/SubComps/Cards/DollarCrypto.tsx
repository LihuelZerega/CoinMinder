import React from "react";
import Tether from "./DollarCryptoSubComps/Tether";
import TrueUsd from "./DollarCryptoSubComps/TrueUsd";
import Usdc from "./DollarCryptoSubComps/Usdc";

function DollarCrypto() {

  return (
    <div className="flex flex-col sm:flex-row items-start justify-between rounded-md">
      <Tether />
      <Usdc />
      <TrueUsd />
    </div>
  );
}

export default DollarCrypto;
