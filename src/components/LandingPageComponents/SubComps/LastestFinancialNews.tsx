import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import IphoneImageExample from "@/images/IphoneMockupExample.png";
import { FaNewspaper, FaChartLine, FaMoneyBillWave } from "react-icons/fa";

const LatestFinancialNews = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col lg:flex-row w-full py-12 my-6">
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="hidden md:block w-full lg:w-1/2 mb-8 lg:mb-0"
      >
        <motion.div variants={itemVariants} className="flex flex-col items-center justify-center">
          <Image src={IphoneImageExample} alt="Iphone Mockup" />
        </motion.div>
      </motion.section>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full lg:w-1/2"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-4xl font-bold text-[#181818]">
            Check out the latest{" "}
            <span className="text-[#fcd535]">financial news</span>!
          </h1>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="text-[#181818] text-sm lg:text-base mb-6"
        >
          Stay informed and ahead of the curve with our curated updates on the
          ever-changing landscape of financial markets. We bring you the latest
          news, trends, and insights to empower your financial decisions.
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
        >
          <div className="flex items-center mb-4">
            {" "}
            <FaNewspaper className="text-3xl mr-2 text-[#fcd535]"/>
            <h1 className="font-semibold">Daily News Highlights</h1>
          </div>
          <div className="flex items-center mb-4">
            {" "}
            <FaChartLine className="text-3xl mr-2 text-[#fcd535]"/>
            <h1 className="font-semibold">Market Trends Analysis</h1>
          </div>
          <div className="flex items-center mb-4">
            {" "}
            <FaMoneyBillWave className="text-3xl mr-2 text-[#fcd535]"/>
            <h1 className="font-semibold">Financial Insights & Tips</h1>
          </div>
        </motion.div>

        <motion.button
          variants={itemVariants}
          className="bg-[#fcd535] hover:bg-[#e5c333] text-[#181818] text-sm py-3 px-6 font-medium rounded-xl"
        >
          Read More
        </motion.button>
      </motion.section>
    </div>
  );
};

export default LatestFinancialNews;
