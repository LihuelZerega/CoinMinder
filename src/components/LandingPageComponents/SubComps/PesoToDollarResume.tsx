import React from "react";
import PesoToDollarBlue from "./PesoToDollarBlue";
import PesoToDollarOfficial from "./PesoToDollarOfficial";
import PesoToDollarOfficialMinorista from "./PesoToDollarOfficialMinorista";
import PesoToDollarCrypto from "./PesoToDollarCrypto";
import Link from "next/link";

function PesoToDollarResume() {
  return (
    <div className="border p-4 rounded-md">
      <div className="flex flex-row justify-between text-xs text-gray-400">
        <h1 className="hover:text-gray-500 cursor-pointer">Peso to dollar</h1>
        <Link href="/">
          <h1 className="hover:text-gray-500 cursor-pointer">See More →</h1>
        </Link>
      </div>
      <Link href="/pesotodollar/dollaroffcial">
        <PesoToDollarOfficial />
      </Link>

      <Link href="/pesotodollar/dollarblue">
        <PesoToDollarBlue />
      </Link>
      <Link href="/pesotodollar/dollarretail">
        <PesoToDollarOfficialMinorista />
      </Link>
      <Link href="/pesotodollar/dollarcrypto">
        <PesoToDollarCrypto />
      </Link>
    </div>
  );
}

export default PesoToDollarResume;
