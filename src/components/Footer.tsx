import React from "react";
import Link from "next/link";
import {
  FaGithub,
  FaDiscord,
  FaTelegramPlane,
  FaTiktok,
  FaFacebookF,
  FaRedditAlien,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { GiGecko } from "react-icons/gi";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <hr />

      <section className="flex flex-row justify-between mx-auto py-6 max-w-7xl px-6 lg:px-8 select-none">
        <div>
          <h1 className="font-bold text-lg text-[#38bdf8] mb-2">Community</h1>
          <div>
            <div className="flex flex-row items-center justify-start pb-3">
              <FaDiscord className="text-2xl text-gray-600 hover:text-gray-800 cursor-pointer" />
              <FaTelegramPlane className="text-2xl text-gray-600 hover:text-gray-800 cursor-pointer ml-2" />
              <FaTiktok className="text-2xl text-gray-600 hover:text-gray-800 cursor-pointer ml-2" />
            </div>
            <div className="flex flex-row items-center justify-start pb-3">
              <FaFacebookF className="text-2xl text-gray-600 hover:text-gray-800 cursor-pointer" />
              <FaRedditAlien className="text-2xl text-gray-600 hover:text-gray-800 cursor-pointer ml-2" />
              <FaInstagram className="text-2xl text-gray-600 hover:text-gray-800 cursor-pointer ml-2" />
            </div>
            <div className="flex flex-row items-center justify-start pb-3">
              <FaYoutube className="text-2xl text-gray-600 hover:text-gray-800 cursor-pointer" />
              <GiGecko className="text-2xl text-gray-600 hover:text-gray-800 cursor-pointer ml-2" />
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-lg text-[#38bdf8] mb-2">About Us</h1>
          <p className="font-medium text-gray-600 hover:text-gray-800 py-1 cursor-pointer">
            About
          </p>
          <p className="font-medium text-gray-600 hover:text-gray-800 py-1 cursor-pointer">
            Business Contacts
          </p>
          <p className="font-medium text-gray-600 hover:text-gray-800 py-1 cursor-pointer">
            Careers
          </p>
          <p className="font-medium text-gray-600 hover:text-gray-800 py-1 cursor-pointer">
            Announcements
          </p>
          <p className="font-medium text-gray-600 hover:text-gray-800 py-1 cursor-pointer">
            News
          </p>
          <p className="font-medium text-gray-600 hover:text-gray-800 py-1 cursor-pointer">
            Press
          </p>
          <p className="font-medium text-gray-600 hover:text-gray-800 py-1 cursor-pointer">
            Legal
          </p>
          <p className="font-medium text-gray-600 hover:text-gray-800 py-1 cursor-pointer">
            Terms
          </p>
          <p className="font-medium text-gray-600 hover:text-gray-800 py-1 cursor-pointer">
            Privacy
          </p>
        </div>
        <div>
          <h1 className="font-bold text-lg text-[#38bdf8] mb-2">Products</h1>
          <p className="font-medium text-gray-600 hover:text-gray-800 py-1 cursor-pointer">
            Financial News
          </p>
          <p className="font-medium text-gray-600 hover:text-gray-800 py-1 cursor-pointer">
            Indexs
          </p>
          <p className="font-medium text-gray-600 hover:text-gray-800 py-1 cursor-pointer">
            Stocks
          </p>
          <p className="font-medium text-gray-600 hover:text-gray-800 py-1 cursor-pointer">
            Crypto
          </p>
          <p className="font-medium text-gray-600 hover:text-gray-800 py-1 cursor-pointer">
            Simulate
          </p>
          <p className="font-medium text-gray-600 hover:text-gray-800 py-1 cursor-pointer">
            Swap
          </p>
        </div>
        <div>
          <h1 className="font-bold text-lg text-[#38bdf8] mb-2">Learn</h1>
          <p className="font-medium text-gray-600 hover:text-gray-800 py-1 cursor-pointer">
            View AAPL
          </p>
          <p className="font-medium text-gray-600 hover:text-gray-800 py-1 cursor-pointer">
            View TSLA
          </p>
          <p className="font-medium text-gray-600 hover:text-gray-800 py-1 cursor-pointer">
            View MSFT
          </p>
          <p className="font-medium text-gray-600 hover:text-gray-800 py-1 cursor-pointer">
            View Bitcoin
          </p>
          <p className="font-medium text-gray-600 hover:text-gray-800 py-1 cursor-pointer">
            View Ethereum
          </p>
          <p className="font-medium text-gray-600 hover:text-gray-800 py-1 cursor-pointer">
            View Ripple
          </p>
          <p className="font-medium text-gray-600 hover:text-gray-800 py-1 cursor-pointer">
            View DogeCoin
          </p>
          <p className="font-medium text-gray-600 hover:text-gray-800 py-1 cursor-pointer">
            View BNB
          </p>
        </div>
        <div>
          <h1 className="font-bold text-lg text-[#38bdf8] mb-2">Support</h1>
          <p className="font-medium text-gray-600 hover:text-gray-800 py-1 cursor-pointer">
            24/7 Chat Support
          </p>
          <p className="font-medium text-gray-600 hover:text-gray-800 py-1 cursor-pointer">
            Support Center
          </p>
          <p className="font-medium text-gray-600 hover:text-gray-800 py-1 cursor-pointer">
            Product Feedback & Suggestions
          </p>
        </div>
      </section>

      <hr />

      <section>
        <div className="flex flex-col-reverse items-center py-6 select-none">
          <h3 className="mt-2">Designed by Lihuel Zerega</h3>
          <div className="flex flex-row items-center">
            <Link href="https://www.linkedin.com/in/lihuelzerega/">
              <AiFillLinkedin className="text-xl text-default-500" />
            </Link>
            <Link href="https://github.com/LihuelZerega">
              <FaGithub className="text-xl text-default-500" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
