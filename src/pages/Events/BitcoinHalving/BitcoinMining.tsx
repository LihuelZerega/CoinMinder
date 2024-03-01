import React from "react";

function BitcoinMining() {
  return (
    <div className="mb-6">
      <div>
        <h1 className="text-[#38bdf8] font-bold text-3xl pb-4">
          Bitcoin Mining and the Reward of Mining
        </h1>
      </div>

      <div className="text-gray-500 font-medium pr-0 md:pr-16 pb-6 space-y-3">
        <p>
          Bitcoin mining refers to the process of digitally adding transaction
          records to the blockchain.
        </p>
        <p>
          By mining, you can earn cryptocurrency without having to put money
          into it. So, when someone uses their computing power to validate
          transactions, they are rewarded with newly minted Bitcoins.
        </p>
        <p>
          This is done because the Bitcoin network is decentralized, so there is
          no central bank or authority validating transactions.
        </p>
        <p>
          The Bitcoin network is self-sustaining by using newly minted coins as
          an incentive for people to offer their computing power.
        </p>
        <p>
          Every time a miner solves a mathematical problem in a block of the
          Bitcoin blockchain, they are rewarded with Bitcoin. This is called a
          “block reward.” A new block is added to the blockchain approximately
          every 10 minutes.
        </p>
      </div>
    </div>
  );
}

export default BitcoinMining;
