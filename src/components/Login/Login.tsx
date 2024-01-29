"use client";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Tooltip, Button } from "@nextui-org/react";
import { Dialog } from "@headlessui/react";
import { HiBars3 } from "react-icons/hi2";
import { HiOutlineXMark } from "react-icons/hi2";
import { motion } from "framer-motion";

const navigation = [
  { name: "Financial News", href: "/news" },
  { name: "Indexs", href: "/indexs" },
  { name: "Stocks", href: "/stocks" },
  { name: "Crypto", href: "/crypto" },
  { name: "Simulate", href: "/simulate" },
  { name: "Swap", href: "/swap" },
];

export default function Login() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav
            className="flex items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Bull Swap</span>
                <img
                  className="h-8 w-auto"
                  src="https://res.cloudinary.com/dszjgdktf/image/upload/v1706544546/cwxrrvhlipgwfub2homc.png"
                  alt=""
                />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <HiBars3 className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </nav>
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
                      href="#"
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

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-16 w-auto"
            src="https://res.cloudinary.com/dszjgdktf/image/upload/v1706544546/cwxrrvhlipgwfub2homc.png"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#38bdf8] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-[#38bdf8] hover:text-[#35aee3]"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#38bdf8] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <Tooltip content="It doesn't work yet, it will have functionality soon :(">
                <Button className="flex w-full justify-center rounded-md bg-[#38bdf8] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#35aee3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#38bdf8]">
                  Sign in
                </Button>
              </Tooltip>
            </div>
          </form>

          <div>
            <div className="flex flex-row relative items-center my-4">
              <div className="flex-1 h-0.5 bg-gray-300"></div>
              <h1 className="mx-4 text-xs text-gray-400">Or</h1>
              <div className="flex-1 h-0.5 bg-gray-300"></div>
            </div>
            <div className="flex flex-col md:flex-row gap-3">
              <button className="flex flex-row items-center justify-center border-1 rounded-md px-3.5 py-2.5 text-sm font-semibold w-full">
                <FaFacebook className="mr-1" />
                Facebook
              </button>
              <button className="flex flex-row items-center justify-center border-1 rounded-md px-3.5 py-2.5 text-sm font-semibold w-full">
                <FcGoogle className="mr-1" />
                Google
              </button>
            </div>
          </div>

          <p className="mt-10 font-medium text-center text-xs text-gray-400">
            By singin in to BullSwap, you agree to our{" "}
            <span className="text-gray-500 hover:text-gray-600 cursor-pointer">
              Terms
            </span>{" "}
            and{" "}
            <span className="text-gray-500 hover:text-gray-600 cursor-pointer">
              Privacy Policy
            </span>
          </p>

          <p className="mt-4 font-medium text-center text-xs text-gray-400">
            This site is protected by reCAPTCHA Enterprise and the Google{" "}
            <span className="text-gray-500 hover:text-gray-600 cursor-pointer">
              Privacy Policy
            </span>{" "}
            and{" "}
            <span className="text-gray-500 hover:text-gray-600 cursor-pointer">
              Terms of Service
            </span>{" "}
            apply.
          </p>
        </div>
      </div>
    </>
  );
}
