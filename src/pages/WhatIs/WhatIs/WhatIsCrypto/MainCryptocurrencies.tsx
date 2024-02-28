import React from "react";

function MainCryptocurrencies() {
  return (
    <div className="px-12 mb-12">
      <div>
        <h1 className="text-[#38bdf8] font-bold text-5xl pb-4">
          Main Cryptocurrencies
        </h1>
      </div>

      <div className="text-gray-500 font-medium pr-16 pb-6">
        <div className="pb-6">
          <h2 className="text-xl font-semibold text-gray-700 pb-2">
            Bitcoin (BTC):
          </h2>
          <h2 className="font-semibold text-gray-700">Summary:</h2>
          <p>
            Bitcoin is the first and best-known cryptocurrency, created in 2009
            by Satoshi Nakamoto. It is a peer-to-peer digital cash system that
            allows global transactions without the need for intermediaries.
          </p>
          <br />
          <h2 className="font-semibold text-gray-700">History:</h2>
          <p>
            The concept of Bitcoin was first introduced in a whitepaper
            published by Nakamoto in 2008. Since then, it has seen massive
            growth in its adoption and value.
          </p>
          <br />
          <h2 className="font-semibold text-gray-700">Main features:</h2>
          <p>
            Bitcoin operates on a decentralized network of nodes that validate
            and record transactions through blockchain technology. It has a
            limited supply of 21 million coins and is primarily used as a store
            of value and medium of exchange.
          </p>
          <br />
          <h2 className="font-semibold text-gray-700">Use Cases:</h2>
          <p>
            Bitcoin is primarily used as a store of value and as a medium of
            digital exchange. It is also used to make international remittances
            and as a hedge against inflation.
          </p>
        </div>
      </div>

      <div className="text-gray-500 font-medium pr-16 pb-6">
        <div className="pb-6">
          <h2 className="text-xl font-semibold text-gray-700 pb-2">
            Ethereum (ETH):
          </h2>
          <h2 className="font-semibold text-gray-700">Summary:</h2>
          <p>
            Ethereum is a decentralized platform that allows the creation and
            execution of smart contracts and decentralized applications (dApps).
          </p>
          <br />
          <h2 className="font-semibold text-gray-700">History:</h2>
          <p>
            Ethereum was proposed by Vitalik Buterin in 2013 and launched in
            2015. It is the second largest cryptocurrency by market
            capitalization after Bitcoin.
          </p>
          <br />
          <h2 className="font-semibold text-gray-700">Key Features:</h2>
          <p>
            Ethereum introduces the concept of smart contracts, which are
            computer programs that run automatically when certain conditions are
            met. These smart contracts enable a wide range of decentralized
            applications.
          </p>
          <br />
          <h2 className="font-semibold text-gray-700">Use Cases:</h2>
          <p>
            Ethereum is used for a variety of decentralized applications,
            including decentralized finance (DeFi), gaming, digital identity,
            and more.
          </p>
        </div>
      </div>

      <div className="text-gray-500 font-medium pr-16 pb-6 border-b-1">
        <div className="pb-6">
          <h2 className="text-xl font-semibold text-gray-700 pb-2">
            Ripple (XRP):
          </h2>
          <h2 className="font-semibold text-gray-700">Summary:</h2>
          <p>
            Ripple is both a payment settlement platform and a cryptocurrency
            (XRP) used to facilitate instant, low-cost cross-border
            transactions.
          </p>
          <br />
          <h2 className="font-semibold text-gray-700">History:</h2>
          <p>
            Ripple was launched in 2012 with the aim of revolutionizing the
            global payments system. Unlike Bitcoin and Ethereum, Ripple Labs,
            the company behind Ripple, maintains some control over the network.
          </p>
          <br />
          <h2 className="font-semibold text-gray-700">Key Features:</h2>
          <p>
            Ripple uses its own consensus technology called Ripple Consensus,
            which does not require mining and is more efficient in terms of
            energy and transaction speed.
          </p>
          <br />
          <h2 className="font-semibold text-gray-700">Use Cases:</h2>
          <p>
            Ripple is primarily used in the financial sector to facilitate
            international payments and cross-border remittances quickly and
            cheaply.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainCryptocurrencies;
