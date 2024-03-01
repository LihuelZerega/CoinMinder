import React from "react";

function BitcoinHalvingHistory() {
  return (
    <div className="mb-6">
      <div>
        <h1 className="text-[#38bdf8] font-bold text-3xl pb-4">
          Bitcoin Halving History
        </h1>
      </div>

      <div className="text-gray-500 font-medium pr-0 md:pr-16 pb-6 space-y-3">
        <p>
          On January 3, 2009, the bitcoin network was born with Satoshi Nakamoto
          mining the bitcoin genesis block (block number 0), which had a reward
          of 50 bitcoins. In these 13 years of Bitcoin history, we have only
          seen 3 Bitcoin halvings so far.
        </p>
        <p>
          No one knows why Satoshi Nakamoto chose the 21 million Bitcoin limit
          or why inflation halves every four years. Logically, it could also
          have been 134 million Bitcoins in total and a halving every 10 years.
          However, Bitcoin inflation continues to halve every four years and
          this will continue until approximately the year 2144.
        </p>
      </div>
    </div>
  );
}

export default BitcoinHalvingHistory;
