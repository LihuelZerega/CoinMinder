import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import BitcoinChart1month from "@/pages/Crypto/CryptoCharts/BitcoinChart/BitcoinChart";
import BitcoinChart1year from "@/pages/Crypto/CryptoCharts/BitcoinChart/Charts/BitcoinChart1year";
import BitcoinChart24hs from "@/pages/Crypto/CryptoCharts/BitcoinChart/Charts/BitcoinChart24hs";
import BitcoinChart3months from "@/pages/Crypto/CryptoCharts/BitcoinChart/Charts/BitcoinChart3months";
import BitcoinChart5years from "@/pages/Crypto/CryptoCharts/BitcoinChart/Charts/BitcoinChart5years";
import BitcoinChart7days from "@/pages/Crypto/CryptoCharts/BitcoinChart/Charts/BitcoinChart7days";
import BitcoinChartFullData from "@/pages/Crypto/CryptoCharts/BitcoinChart/Charts/BitcoinChartFullData";
import Image from "next/image";
import BullSwapLogo from "@/images/bullswap_icon-skyblue.png";

function ErrorChart() {
  return (
    <div>
      <Tabs aria-label="Options" variant="bordered" radius="sm">
        <Tab key="MAX" title="MAX">
          <div className="border rounded-md">
            <Card shadow="none" fullWidth={true}>
              <CardBody>
                <div className="flex flex-col items-center justify-center p-4">
                  <div className="py-3">
                    <Image
                      src={BullSwapLogo}
                      width={100}
                      height={100}
                      alt="BullSwapLogo"
                    />
                  </div>
                  <div className="px-6">
                    <h1 className="text-center text-4xl text-gray-600 font-bold">
                      This{" "}
                      <span className="text-[#38bdf8]">cryptocurrency</span>{" "}
                      does not yet have a chart it will
                      <span className="text-[#38bdf8]"> soon...</span>
                    </h1>
                    <h1 className="text-center text-sm text-gray-600 font-medium mt-10">
                      Thanks for understanding.{" "}
                      <span className="text-[#38bdf8]">Bull Swap Team.</span>
                    </h1>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </Tab>
        <Tab key="5Y" title="5Y" className="hidden sm:block">
          <div className="border rounded-md">
            <Card shadow="none" fullWidth={true}>
              <CardBody>
                <div className="flex flex-col items-center justify-center p-4">
                  <div className="py-3">
                    <Image
                      src={BullSwapLogo}
                      width={100}
                      height={100}
                      alt="BullSwapLogo"
                    />
                  </div>
                  <div className="px-6">
                    <h1 className="text-center text-4xl text-gray-600 font-bold">
                      This{" "}
                      <span className="text-[#38bdf8]">cryptocurrency</span>{" "}
                      does not yet have a chart it will
                      <span className="text-[#38bdf8]"> soon...</span>
                    </h1>
                    <h1 className="text-center text-sm text-gray-600 font-medium mt-10">
                      Thanks for understanding.{" "}
                      <span className="text-[#38bdf8]">Bull Swap Team.</span>
                    </h1>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </Tab>
        <Tab key="1Y" title="1Y">
          <div className="border rounded-md">
            <Card shadow="none" fullWidth={true}>
              <CardBody>
                <div className="flex flex-col items-center justify-center p-4">
                  <div className="py-3">
                    <Image
                      src={BullSwapLogo}
                      width={100}
                      height={100}
                      alt="BullSwapLogo"
                    />
                  </div>
                  <div className="px-6">
                    <h1 className="text-center text-4xl text-gray-600 font-bold">
                      This{" "}
                      <span className="text-[#38bdf8]">cryptocurrency</span>{" "}
                      does not yet have a chart it will
                      <span className="text-[#38bdf8]"> soon...</span>
                    </h1>
                    <h1 className="text-center text-sm text-gray-600 font-medium mt-10">
                      Thanks for understanding.{" "}
                      <span className="text-[#38bdf8]">Bull Swap Team.</span>
                    </h1>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </Tab>
        <Tab key="3M" title="3m">
          <div className="border rounded-md">
            <Card shadow="none" fullWidth={true}>
              <CardBody>
                <div className="flex flex-col items-center justify-center p-4">
                  <div className="py-3">
                    <Image
                      src={BullSwapLogo}
                      width={100}
                      height={100}
                      alt="BullSwapLogo"
                    />
                  </div>
                  <div className="px-6">
                    <h1 className="text-center text-4xl text-gray-600 font-bold">
                      This{" "}
                      <span className="text-[#38bdf8]">cryptocurrency</span>{" "}
                      does not yet have a chart it will
                      <span className="text-[#38bdf8]"> soon...</span>
                    </h1>
                    <h1 className="text-center text-sm text-gray-600 font-medium mt-10">
                      Thanks for understanding.{" "}
                      <span className="text-[#38bdf8]">Bull Swap Team.</span>
                    </h1>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </Tab>
        <Tab key="1M" title="1M">
          <div className="border rounded-md">
            <Card shadow="none" fullWidth={true}>
              <CardBody>
                <div className="flex flex-col items-center justify-center p-4">
                  <div className="py-3">
                    <Image
                      src={BullSwapLogo}
                      width={100}
                      height={100}
                      alt="BullSwapLogo"
                    />
                  </div>
                  <div className="px-6">
                    <h1 className="text-center text-4xl text-gray-600 font-bold">
                      This{" "}
                      <span className="text-[#38bdf8]">cryptocurrency</span>{" "}
                      does not yet have a chart it will
                      <span className="text-[#38bdf8]"> soon...</span>
                    </h1>
                    <h1 className="text-center text-sm text-gray-600 font-medium mt-10">
                      Thanks for understanding.{" "}
                      <span className="text-[#38bdf8]">Bull Swap Team.</span>
                    </h1>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </Tab>
        <Tab key="7D" title="7D">
          <div className="border rounded-md">
            <Card shadow="none" fullWidth={true}>
              <CardBody>
                <div className="flex flex-col items-center justify-center p-4">
                  <div className="py-3">
                    <Image
                      src={BullSwapLogo}
                      width={100}
                      height={100}
                      alt="BullSwapLogo"
                    />
                  </div>
                  <div className="px-6">
                    <h1 className="text-center text-4xl text-gray-600 font-bold">
                      This{" "}
                      <span className="text-[#38bdf8]">cryptocurrency</span>{" "}
                      does not yet have a chart it will
                      <span className="text-[#38bdf8]"> soon...</span>
                    </h1>
                    <h1 className="text-center text-sm text-gray-600 font-medium mt-10">
                      Thanks for understanding.{" "}
                      <span className="text-[#38bdf8]">Bull Swap Team.</span>
                    </h1>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </Tab>
        <Tab key="24HS" title="24HS">
          <div className="border rounded-md">
            <Card shadow="none" fullWidth={true}>
              <CardBody>
                <div className="flex flex-col items-center justify-center p-4">
                  <div className="py-3">
                    <Image
                      src={BullSwapLogo}
                      width={100}
                      height={100}
                      alt="BullSwapLogo"
                    />
                  </div>
                  <div className="px-6">
                    <h1 className="text-center text-4xl text-gray-600 font-bold">
                      This{" "}
                      <span className="text-[#38bdf8]">cryptocurrency</span>{" "}
                      does not yet have a chart it will
                      <span className="text-[#38bdf8]"> soon...</span>
                    </h1>
                    <h1 className="text-center text-sm text-gray-600 font-medium mt-10">
                      Thanks for understanding.{" "}
                      <span className="text-[#38bdf8]">Bull Swap Team.</span>
                    </h1>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default ErrorChart;
