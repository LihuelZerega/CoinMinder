import React from "react";
import Image from "next/image";

function Howaffects() {
  return (
    <div>
      <h1>How does the Bitcoin halving affect miners?</h1>
      <p>
        When the Bitcoin halving occurs, the total amount of new Bitcoin awarded
        to a miner for validating a transaction on the Bitcoin network is
        halved.
        <br />
        This means that new Bitcoin created from block validation drops
        dramatically reduces supply while demand for the cryptocurrency
        continues to increase.
      </p>
      <p>
        The creator of Bitcoin, Satoshi Nakamoto, decided that the limit of the
        total number of Bitcoins should be 21 million. No one knows why he chose
        this figure, and the number itself does not matter. What matters is that
        there can never be more than 21 million Bitcoins in circulation.
        <br />
        However, not all of these Bitcoins have been minted yet. In fact, it
        will be more than a hundred years before all Bitcoins are mined. It is
        estimated that the last Bitcoin will be minted in the year 2144.
        <br />
        Satoshi Nakamoto decided that the newly created supply of Bitcoins would
        be distributed through mining until the limit of 21 million coins was
        reached. These Bitcoins will be distributed through a strict set of
        rules. The rule says that the block reward will be halved every four
        years until all Bitcoin is mined. In other words, Bitcoin inflation will
        halve every four years.
        <br />
        The block reward is currently 6.25 BTC per valid block mined. But this
        reward changes approximately every four years, or after every 210,000
        blocks mined.
        <br />
        This means that approximately 900 Bitcoins are generated every day.
        After the next halving, this figure will be reduced to 450 Bitcoins per
        day.
        <br />
        Below is an image showing us Bitcoin inflation in orange, and Bitcoin
        supply in blue over the next 50 years. As you can see, the orange line
        has clear steps down every four years with each halving. And as
        inflation goes down you can see the blue line leveling out.
      </p>
      <Image src="https://www.bitcoinsensus.com/wp-content/uploads/2020/01/inflation-1024x455.png" width={1024} height={455} alt="Bitcoin Inflation" />
    </div>
  );
}

export default Howaffects;