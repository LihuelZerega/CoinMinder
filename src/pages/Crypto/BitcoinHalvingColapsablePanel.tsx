import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import BitcoinLogo from "@/images/Bitcoin.svg";

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
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: isOpen ? "auto" : 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden"
    >
      <div className="w-full flex flex-col md:flex-row px-3 items-center md:items-start justify-between border rounded-md p-4 my-4 select-none">
        <div className="flex flex-row items-center space-x-4 pb-4 md:pb-0">
          <Image src={BitcoinLogo} width={50} height={50} alt="BitcoinLogo" className="hidden md:block"/>
          <div className="flex flex-col text-center md:text-left">
            <h1 className="font-semibold text-2xl md:text-3xl">
              When Is the Next Bitcoin Halving in 2024?
            </h1>
            <p className="hidden md:block text-gray-600 font-medium text-sm">The next Bitcoin halving is expected to take place in April 2024.</p>
          </div>
        </div>

        <div className="">
          <div className="flex flex-row space-x-4">
            <div className="flex flex-col items-center">
              <h1 className="font-semibold text-2xl md:text-3xl">
                {countdown.days}
              </h1>
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

        <div className="hidden md:block h-full text-gray-600 hover:text-gray-700">
          <button
            onClick={togglePanel}
            disabled={!isOpen || isClosed}
            className="focus:outline-none"
          >
            <IoClose className="text-xl" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default BitcoinHalvingCollapsiblePanel;
