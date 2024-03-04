"use client";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog } from "@headlessui/react";
import { HiBars3 } from "react-icons/hi2";
import { HiOutlineXMark } from "react-icons/hi2";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/react";
import { MdOutlineQuestionAnswer, MdOutlineSwapHoriz } from "react-icons/md";
import { CiCoins1 } from "react-icons/ci";
import { IoTrendingUp } from "react-icons/io5";
import { GiBuyCard } from "react-icons/gi";

const navigation = [
  { name: "Financial News", href: "/news" },
  { name: "Stocks", href: "/stocks" },
  { name: "Crypto", href: "/crypto" },
  { name: "Simulate", href: "/simulate" },
  { name: "Swap", href: "/swap" },
  { name: "Learn", href: "/learn" },
];
function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <header className="absolute inset-x-0 top-0 z-50">
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between p-6 lg:px-8 border-b-1 shadow-sm"
          aria-label="Global"
        >
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex lg:flex-1"
          >
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Bull Swap</span>
              <img
                className="h-8 w-auto"
                src="https://res.cloudinary.com/dszjgdktf/image/upload/v1706544546/cwxrrvhlipgwfub2homc.png"
                alt=""
              />
            </a>
          </motion.div>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex lg:hidden"
          >
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <HiBars3 className="h-6 w-6" aria-hidden="true" />
            </button>
          </motion.div>
          <div className="hidden lg:flex lg:gap-x-12">
            <motion.a
              href="/news"
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-[#38bdf8]"
              whileHover={{ scale: 1.05 }}
            >
              Financial News
            </motion.a>
            <motion.a
              href="/stocks"
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-[#38bdf8]"
              whileHover={{ scale: 1.05 }}
            >
              Stocks
            </motion.a>

            <Dropdown>
              <DropdownTrigger>
                <motion.h1
                  className="text-sm font-semibold leading-6 text-gray-900 hover:text-[#38bdf8] cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  Crypto
                </motion.h1>
              </DropdownTrigger>
              <DropdownMenu
                variant="faded"
                aria-label="Dropdown menu with description"
              >
                <DropdownSection title="Cryptocurrencies" showDivider>
                  <DropdownItem
                    href="/crypto"
                    key="marketcap"
                    startContent={
                      <CiCoins1 className="text-2xl font-bold text-[#38bdf8]" />
                    }
                  >
                    By Market Cap
                  </DropdownItem>
                </DropdownSection>
                <DropdownSection title="Popular" showDivider>
                  <DropdownItem
                    href="/crypto/popular"
                    key="trending"
                    startContent={
                      <IoTrendingUp className="text-xl font-bold text-[#38bdf8]" />
                    }
                  >
                    Trending
                  </DropdownItem>
                  <DropdownItem
                    href="/crypto/popular"
                    key="gainers&losers"
                    startContent={
                      <GiBuyCard className="text-xl font-bold text-[#38bdf8]" />
                    }
                  >
                    Gainers & Losers
                  </DropdownItem>
                </DropdownSection>
                <DropdownSection title="Tools" showDivider>
                  <DropdownItem
                    href="/swap/crypto"
                    key="convert"
                    startContent={
                      <MdOutlineSwapHoriz className="text-xl font-bold text-[#38bdf8]" />
                    }
                  >
                    Convert
                  </DropdownItem>
                </DropdownSection>
                <DropdownSection title="Events">
                  <DropdownItem
                    href="/crypto/events/bitcoin-halving"
                    key="terms"
                    startContent={
                      <MdOutlineQuestionAnswer className="text-xl font-bold text-[#38bdf8]" />
                    }
                  >
                    Bitcoin Halving
                  </DropdownItem>
                </DropdownSection>
                <DropdownSection title="What Is?">
                  <DropdownItem
                    href="/learn#IntroductiontoCryptocurrencies"
                    key="terms"
                    startContent={
                      <MdOutlineQuestionAnswer className="text-xl font-bold text-[#38bdf8]" />
                    }
                  >
                    Terms
                  </DropdownItem>
                </DropdownSection>
              </DropdownMenu>
            </Dropdown>

            <motion.a
              href="/simulate"
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-[#38bdf8]"
              whileHover={{ scale: 1.05 }}
            >
              Simulate
            </motion.a>
            <motion.a
              href="/swap"
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-[#38bdf8]"
              whileHover={{ scale: 1.05 }}
            >
              Swap
            </motion.a>
            <motion.a
              href="/learn"
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-[#38bdf8]"
              whileHover={{ scale: 1.05 }}
            >
              Learn
            </motion.a>
          </div>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="hidden lg:flex lg:flex-1 lg:justify-end"
          >
            <motion.a
              href="/login"
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-[#38bdf8]"
              whileHover={{ scale: 1.05 }}
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </motion.a>
          </motion.div>
        </motion.nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Bull Swap</span>
                <img
                  className="h-8 w-auto"
                  src="https://res.cloudinary.com/dszjgdktf/image/upload/v1706544546/cwxrrvhlipgwfub2homc.png"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
}

export default NavBar;
