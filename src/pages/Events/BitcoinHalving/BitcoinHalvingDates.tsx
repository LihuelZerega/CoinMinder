import React from "react";
import Image from "next/image";
import BitcoinDates from "@/images/Events/BitcoinHalving/Twitter-1-1024x576 (1).png";

function BitcoinHalvingDates() {
  return (
    <div className="mb-6">
      <div>
        <h1 className="text-[#38bdf8] font-bold text-3xl pb-4">
          Bitcoin Halving Dates
        </h1>
      </div>

      <div className="text-gray-500 font-medium pr-0 md:pr-16 pb-6 space-y-3">
        <p>
          When the Bitcoin network was first launched on January 1, 2009, the
          Bitcoin block reward was 50 Bitcoins per block.
        </p>
        <p>
          Almost four years later, on November 28, 2012, Bitcoin had its first
          halving and the block reward was cut in half, to 25 Bitcoins.
        </p>
        <p>
          Another four years later, on July 9, 2016, the second Bitcoin halving
          took place and the block reward was halved again, to 12.5 Bitcoins per
          block.
        </p>
        <p>
          The third Bitcoin halving took place on May 11, 2020, reducing the
          block reward to 6.25 Bitcoins per block.
        </p>

        <div>
          <Image
            src={BitcoinDates}
            width={1024}
            height={576}
            alt="Bitcoin Inflation"
            className="my-10 rounded-md"
          />
        </div>

        <p>
          In another 4 years, in 2024, there will be a fourth Bitcoin halving,
          reducing the reward to 3,125 Bitcoins per block. As already stated,
          this reduction schedule will continue until Bitcoin inflation is 0%.
        </p>
      </div>
    </div>
  );
}

export default BitcoinHalvingDates;
