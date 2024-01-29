import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import HeroSectionImage from "@/images/handy-money-characters-banknote-and-coin_out.png";

const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col xl:flex-row select-none mb-16 pb-16 border-b-1"
    >
      <motion.section
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col items-center xl:items-start justify-center xl:w-1/2"
      >
        <div className="flex flex-col md:flex-row xl:flex-col items-center justify-center xl:items-start font-semibold space-x-0 md:space-x-3 xl:space-x-0">
          <h1 className="text-4xl md:text-3xl lg:text-3xl xl:text-5xl 2xl:text-7xl text-[#fcd535]">
            Real-time data
          </h1>{" "}
          <h1 className="text-4xl md:text-3xl lg:text-3xl xl:text-5xl 2xl:text-7xl text-[#181818]">
            to boost your
          </h1>{" "}
          <h1 className="text-4xl md:text-3xl lg:text-3xl xl:text-5xl 2xl:text-7xl text-[#fcd535]">
            investments
          </h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col text-center xl:text-start px-4 xl:px-0 py-6 xl:py-12 text-[#181818] text-sm xl:text-xs pr-0 xl:pr-32"
        >
          Explore the fascinating world of finance with us. We offer you
          real-time data to enhance your investment experience. From current
          stock prices to indices and cryptocurrencies, our platform is designed
          to provide you with the most recent and accurate information.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center lg:flex-row xl:flex-col 2xl:flex-row space-x-0 lg:space-x-6 xl:space-x-0 2xl:space-x-6 md:w-fit"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#fcd535] hover:bg-[#e5c333] text-[#181818] text-sm py-4 px-4 font-medium rounded-xl w-full"
          >
            Take a step towards financial success!
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-transparent border-2 border-[#fcd535] hover:bg-gray-50 text-[#181818] font-medium text-sm py-4 px-4 mt-4 lg:mt-0 xl:mt-4 2xl:mt-0 rounded-xl"
          >
            Get more information →
          </motion.button>
        </motion.div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="hidden xl:flex items-start justify-center xl:w-1/2"
      >
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -5, 0], transition: { duration: 2, repeat: Infinity } }}
        >
          <Image
            src={HeroSectionImage}
            width={600}
            height={600}
            alt="HeroSectionImage"
            className="pl-12"
          />
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default HeroSection;
