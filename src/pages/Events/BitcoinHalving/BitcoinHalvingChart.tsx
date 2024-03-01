import React from "react";
import Image from "next/image";
import BitcoinChart from "@/images/Events/BitcoinHalving/Twitter-2-1024x576 (1).png";

function BitcoinHalvingChart() {
  return (
    <div className="mb-6">
      <div>
        <h1 className="text-[#38bdf8] font-bold text-3xl pb-4">
          Bitcoin Halving Dates
        </h1>
      </div>

      <div className="text-gray-500 font-medium pr-0 md:pr-16 pb-6 space-y-3">
        <p>
          Everyone in Bitcoin trading is trying to use historical halvings to
          predict the future. Historical price action can never guarantee future
          price action. However, sometimes we can find significant patterns that
          can at least help us see some possible trends. Looking at the Bitcoin
          halving chart we can see a clear trend of Bitcoin price rising
          massively after each Bitcoin halving.
        </p>
        <p>
          The vertical red lines in this image represent Bitcoin halves. In the
          image, you can see how the price of Bitcoin has had an incredible bull
          run following the previous three Bitcoin halvings.
        </p>
        <div>
          <Image
            src={BitcoinChart}
            width={1024}
            height={576}
            alt="Bitcoin Chart"
            className="my-10 rounded-md"
          />
        </div>
        <p>
          And while this is not set in stone, we can clearly see that there is a
          very high probability that the price of Bitcoin will rise to new highs
          after each halving due to a massive supply cut.
        </p>
        <p>
          This historical data can help us better prepare and take advantage of
          the next bull run in the upcoming Bitcoin halving. The next halving is
          expected around 2024 and will reduce the block reward to 3,125 BTC.
        </p>
      </div>
    </div>
  );
}

export default BitcoinHalvingChart;
