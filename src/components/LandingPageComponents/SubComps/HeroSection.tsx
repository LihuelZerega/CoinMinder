import React from "react";
import Image from "next/image";
import HeroSectionImage from "@/images/handy-money-characters-banknote-and-coin_out.png";

function HeroSection() {
  return (
    <div className="flex flex-col xl:flex-row select-none py-24">
      <section className="flex flex-col items-center xl:items-start justify-center xl:w-1/2">

        <div className="flex flex-col lg:flex-row xl:flex-col items-center justify-center xl:items-start font-semibold space-x-0 lg:space-x-3 xl:space-x-0">
          {" "}
          <h1 className="text-5xl lg:text-4xl xl:text-6xl 2xl:text-7xl text-[#fcd535]">Real-time data</h1> {" "}
          <h1 className="text-5xl lg:text-4xl xl:text-6xl 2xl:text-7xl text-[#181818]">to boost your</h1>{" "}
          <h1 className="text-5xl lg:text-4xl xl:text-6xl 2xl:text-7xl text-[#fcd535]">investments</h1>
        </div>

        <p className="flex flex-col text-center xl:text-start px-4 xl:px-0 py-6 xl:py-12 text-[#181818] text-sm pr-0 xl:pr-32">
          Explore the fascinating world of finance with us. We offer you
          real-time data to enhance your investment experience. From current
          stock prices to indices and cryptocurrencies, our platform is designed
          to provide you with the most recent and accurate information.
        </p>

        <div className="flex flex-col items-center lg:flex-row xl:flex-col 2xl:flex-row space-x-0 lg:space-x-6 xl:space-x-0 2xl:space-x-6 md:w-fit lg:w-full xl:w-full">
          <button className="bg-[#fcd535] hover:bg-[#e5c333] text-[#181818] text-sm py-4 px-4 font-medium rounded-xl w-full">
            Take a step towards financial success!
          </button>
          <button className="w-full bg-transparent border-2 border-[#fcd535] hover:bg-gray-50 text-[#181818] font-medium text-sm py-4 px-4 mt-4 lg:mt-0 xl:mt-4 2xl:mt-0 rounded-xl">
            Get more information →
          </button>
        </div>

      </section>
      <section className="hidden xl:flex items-start justify-end xl:w-1/2">
        <Image
          src={HeroSectionImage}
          width={600}
          height={600}
          alt="HeroSectionImage"
        />
      </section>
    </div>
  );
}

export default HeroSection;
