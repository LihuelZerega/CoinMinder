import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

const BitcoinHalvingCollapsiblePanel = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isClosed, setIsClosed] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const togglePanel = () => {
    setIsOpen(!isOpen);
    setIsClosed(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const targetDate = new Date("April 21, 2024 21:50:00 UTC");
      const now = new Date();
      const timeDifference = targetDate.getTime() - now.getTime();

      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      layout
      initial={{ opacity: 1, height: "auto" }}
      animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden"
    >
      {isOpen && (
        <div className="w-full border rounded-md p-4 my-4 select-none">
          <div className="flex flex-row items-center justify-between">
            <div className="text-transparent">d</div>
            <button
              onClick={togglePanel}
              disabled={!isOpen || isClosed}
              className="focus:outline-none"
            >
              <IoClose className="text-xl" />
            </button>
          </div>
          <div className="flex flex-col md:flex-row px-3 space-x-12">
            <section>
              <div className="pb-6">
                <h1 className="text-center md:text-left font-semibold text-3xl md:text-4xl">
                  When Is the Next Bitcoin
                </h1>
                <h1 className="text-center md:text-left font-semibold text-3xl md:text-4xl">
                  Halving in 2024?
                </h1>
              </div>
              <div>
                <div className="flex flex-row items-center justify-center md:items-start md:justify-start space-x-4">
                  <div className="flex flex-col items-center">
                    <h1 className="font-semibold text-2xl md:text-3xl">{countdown.days}</h1>
                    <h1 className="font-normal text-sm">DAYS</h1>
                  </div>
                  <h1 className="text-xl font-bold space-x-6">:</h1>
                  <div className="flex flex-col items-center">
                    <h1 className="font-semibold text-2xl md:text-3xl">
                      {countdown.hours}
                    </h1>
                    <h1 className="font-normal text-sm">HOURS</h1>
                  </div>
                  <h1 className="text-xl font-bold space-x-6">:</h1>

                  <div className="flex flex-col items-center">
                    <h1 className="font-semibold text-2xl md:text-3xl">
                      {countdown.minutes}
                    </h1>
                    <h1 className="font-normal text-sm">MINS</h1>
                  </div>
                  <h1 className="text-xl font-bold space-x-6">:</h1>

                  <div className="flex flex-col items-center">
                    <h1 className="font-semibold text-2xl md:text-3xl">
                      {countdown.seconds}
                    </h1>
                    <h1 className="font-normal text-sm">SECS</h1>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="hidden md:block max-w-lg text-sm font-medium text-gray-700">
                <h1 className="pb-2">
                  The next Bitcoin halving is anticipated to occur in April
                  2024. The exact date is difficult to predict as it depends on
                  the block height. Since the halving occurs every 210,000
                  blocks, the next Bitcoin halving is expected to take place in
                  April 2024 when the block height reaches 840,000.
                </h1>
                <Link href="/events/halving">
                  <h1 className="hover:text-[#38bdf8]">Read More</h1>
                </Link>
              </div>
            </section>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default BitcoinHalvingCollapsiblePanel;
