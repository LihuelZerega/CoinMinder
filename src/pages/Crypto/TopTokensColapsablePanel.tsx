import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import TrendingIcon from "@/images/TrendingIcon.png";

const CollapsiblePanel = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isClosed, setIsClosed] = useState(false);

  const togglePanel = () => {
    setIsOpen(!isOpen);
    setIsClosed(true);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 1, height: "auto" }}
      animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden"
    >
      {isOpen && (
        <div className="w-full border rounded-md p-4 my-4">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center space-x-2">
              <Image
                src={TrendingIcon}
                width={40}
                height={40}
                alt={"TrendingIcon"}
                className="block sm:hidden"
              />
              <Image
                src={TrendingIcon}
                width={20}
                height={20}
                alt={"TrendingIcon"}
                className="hidden sm:block"
              />
              <h1 className="font-semibold py-3 text-xl">
                Top tokens by market capitalization
              </h1>
            </div>
            <button
              onClick={togglePanel}
              disabled={!isOpen || isClosed}
              className="focus:outline-none"
            >
              <IoClose className="text-xl" />
            </button>
          </div>
          <div>
            <p className="font-normal text-sm pb-3">
              Get a complete snapshot of all cryptocurrencies available on Coin
              Gecko. This page shows the latest prices, 24-hour trading volume,
              price changes, and market capitalizations of all cryptocurrencies
              on Coin Gecko. Users can quickly access key information about
              these digital assets from here.
            </p>
            <p className="font-normal text-sm">
              The data displayed is for informational purposes only. Some data
              is provided by Coin Gecko and is presented &quot;as is&quot; without
              representation or warranty of any kind.
            </p>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default CollapsiblePanel;