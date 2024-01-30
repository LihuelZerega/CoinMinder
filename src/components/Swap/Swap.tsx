import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import NavBar from "../NavBar";
import Footer from "@/components/Footer";
import CurrencyConverter from "./CurrencyConverter";
import CryptoConverter from "./CryptoConverter";
import { IoReorderThree } from "react-icons/io5";
import { BiCategoryAlt } from "react-icons/bi";

function Swap() {
  return (
    <div className="">
      <NavBar />
      <main className="h-screen mx-auto max-w-7xl px-6 py-6 lg:px-8 mt-32 mb-24">
      <div className="flex w-full flex-col">
      <Tabs aria-label="Options">
        <Tab key="photos" title="Photos">
          <Card>
            <CardBody>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="music" title="Music">
          <Card>
            <CardBody>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </CardBody>
          </Card>  
        </Tab>
        <Tab key="videos" title="Videos">
          <Card>
            <CardBody>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </CardBody>
          </Card>  
        </Tab>
      </Tabs>
    </div>  
      </main>
      <Footer />
    </div>
  );
}

export default Swap;
