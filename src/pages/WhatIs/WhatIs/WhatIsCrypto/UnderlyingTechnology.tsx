import React from "react";

function UnderlyingTechnology() {
  return (
    <div className="px-12 mb-12">
      <div>
        <h1 className="text-[#38bdf8] font-bold text-5xl pb-4">
          Undderlying Technology
        </h1>
      </div>

      <div className="text-gray-500 font-medium pr-16 pb-6">
        <div className="pb-6">
          <h2 className="text-xl font-semibold text-gray-700 pb-2">
            Blockchain
          </h2>
          <p>
            The blockchain is a decentralized digital ledger that records all
            transactions in a cryptocurrency network securely and transparently.
            It works like a chain of chained blocks, where each block contains a
            set of verified transactions.
          </p>
          <br />
          <p>
            Each block in the chain is linked to the previous block using a
            cryptographic hash, which guarantees the integrity of the chain.
            Transactions are validated and recorded by network nodes through a
            consensus process, such as Bitcoin mining or Ripple consensus.
          </p>
          <br />
          <p>
            Mining is the process by which new transactions are validated and
            added to the blockchain. Miners use computational power to solve
            complex cryptographic puzzles and add new blocks to the chain. In
            exchange for their work, miners are rewarded with new units of the
            cryptocurrency.
          </p>
          <br />
          <p>
            Smart contracts are autonomous computer programs that execute
            automatically when certain predefined conditions are met. These
            contracts are written in code and stored on the blockchain, which
            guarantees their transparent and secure execution without the need
            for intermediaries.
          </p>
        </div>
      </div>

      <div className="text-gray-500 font-medium pr-16 pb-6">
        <div className="pb-6">
          <h2 className="text-xl font-semibold text-gray-700 pb-2">
            Consensus Algorithms
          </h2>
          <p>
            Consensus algorithms are protocols that allow nodes in a blockchain
            network to reach agreement on the state of the chain and validate
            new transactions. Some examples include Proof of Work, Proof of
            Stake, Ripple Consensus, among others.
          </p>
          <br />
          <p>
            The choice of consensus algorithm can have a great impact on the
            security, scalability and efficiency of the blockchain network. For
            example, Bitcoin uses Proof of Work to validate transactions, while
            Ethereum is in the process of migrating to a Proof of Stake model.
          </p>
        </div>
      </div>

      <div className="text-gray-500 font-medium pr-16 pb-6 border-b-1">
        <div className="pb-6">
          <h2 className="text-xl font-semibold text-gray-700 pb-2">
            Recent Innovations
          </h2>
          <p>
            New solutions have been developed to address scalability and
            efficiency challenges in blockchain, such as the implementation of
            layer 2 solutions, such as the Lightning Network on Bitcoin and
            Optimistic Rollups on Ethereum.
          </p>
          <br />
          <p>
            Interoperability between different blockchains is a growing area of
            focus, with projects such as Polkadot and Cosmos seeking to
            facilitate communication and data transfer between different chains.
          </p>
          <br />
          <p>
            Solutions are being developed to improve privacy in blockchain
            transactions, such as coin mixing technologies and private smart
            contracts.
          </p>
        </div>
      </div>
    </div>
  );
}

export default UnderlyingTechnology;
