import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
import CryptoPricesTable from "@/components/Crypto/CryptoPricesTable";
import HeatMap from "./HeatMap";
import { IoReorderThree } from "react-icons/io5";
import { BiCategoryAlt } from "react-icons/bi";

function CryptoTabs() {
  return (
    <div className="">
      <Tabs>
        <Tab
          key="cryptocurrencies"
          title={
            <div className="flex items-center space-x-2">
              <IoReorderThree className="text-2xl" />
            </div>
          }
        >
          <CryptoPricesTable />
        </Tab>
        <Tab
          key="heatmap"
          title={
            <div className="flex items-center space-x-2">
              <BiCategoryAlt className="text-2xl" />
            </div>
          }
        >
          <HeatMap />
        </Tab>
      </Tabs>
    </div>
  );
}

export default CryptoTabs;
