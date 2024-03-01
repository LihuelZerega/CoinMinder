import React from "react";

function TwoBitcoinHalvingCountdowns() {
  return (
    <div className="mb-6">
      <div>
        <h1 className="text-[#38bdf8] font-bold text-3xl pb-4">
          Two Bitcoin Halving Countdowns
        </h1>
        <p className="text-gray-500 font-medium pr-16 pb-6">
          There are two countdowns to the Bitcoin halving. And on this page, you
          will see the two separate Bitcoin halving countdowns. This is to give
          you access to both ways of estimating the Bitcoin halving date.
        </p>
      </div>

      <div className="text-gray-500 font-medium pr-0 md:pr-16 pb-6">
        <div className="pb-6">
          <h2 className="text-xl font-semibold text-gray-700 pb-2">
            The purple bitcoin halving countdown
          </h2>
          <div className="space-y-3">
            <p>
              The purple countdown is based on on-chain data directly from the
              Bitcoin blockchain. This means that the estimated time of arrival
              (ETA) of the halving may vary.
            </p>
            <p>
              Because? Well, block time is NOT always 10 minutes. The 10 minute
              lockout time is just average. Therefore, if the blocking time
              decreases to 9 minutes, the estimated arrival time will be faster
              than expected, and vice versa.
            </p>
            <p>
              However, thanks to Bitcoin&apos;s difficulty adjustment, the block time
              usually stays close to 10 minutes.
            </p>
          </div>
        </div>
      </div>

      <div className="text-gray-500 font-medium pr-0 md:pr-16 pb-6">
        <div className="pb-6">
          <h2 className="text-xl font-semibold text-gray-700 pb-2">
            The Bitcoin Halving Countdown
          </h2>
          <div className="space-y-3">
            <p>
              The turquoise Bitcoin halving countdown is based on the average
              block time of 10 minutes. This countdown gives us a good estimate
              of the approximate arrival of the halving.
            </p>
            <p>
              Most people use the average block time to estimate the halving.
              However, we have decided to put both countdowns on this page. This
              way, you will have all the information on one page instead of
              having to go from one site to another.
            </p>
          </div>
        </div>
      </div>

      <div className="text-gray-500 font-medium pr-0 md:pr-16 pb-6">
        <div className="pb-6">
          <h2 className="text-xl font-semibold text-gray-700 pb-2">
            The Mechanics of Half
          </h2>
          <div className="space-y-3">
            <p>
              Sometimes the purple countdown may move a little slower or a
              little faster than normal. This is because a new block is added
              approximately every 10 minutes, but the block time changes from
              day to day. When the block time changes, so does the countdown
              arrival time.
            </p>
            <p>
              On this page, you can see the current block time, and it is that
              number that is used to estimate the Bitcoin halving date for the
              turquoise countdown.
            </p>
            <p>
              When Bitcoin hash rate increases dramatically. This leads to a
              delay in automatic difficulty adjustment. The effect is that the
              halving could occur sooner than expected and vice versa.
            </p>
            <p>
              The halving occurs approximately every 4 years. However, a more
              concrete measure is that the halving takes place every 210,000
              blocks.
            </p>
            <p>
              That&apos;s why we created this on-chain Bitcoin halving countdown. The
              timer updates the target date in real time whenever the blockchain
              data demands it. This will help you better estimate the Bitcoin
              halving date.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TwoBitcoinHalvingCountdowns;