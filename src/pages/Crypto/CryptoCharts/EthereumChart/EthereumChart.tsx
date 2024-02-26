import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import EthereumChart1month from "./Charts/EthereumChart1month";
import EthereumChart1year from "./Charts/EthereumChart1year";
import EthereumChart24hs from "./Charts/EthereumChart24hs";
import EthereumChart3months from "./Charts/EthereumChart3months";
import EthereumChart5years from "./Charts/EthereumChart5years";
import EthereumChart7days from "./Charts/EthereumChart7days";
import EthereumChartFullData from "./Charts/EthereumChartFullData";

function EthereumChart() {
  return (
    <div>
      <Tabs aria-label="Options" variant="bordered" radius="sm">
        <Tab key="MAX" title="MAX">
          <Card shadow="none" fullWidth={true}>
            <CardBody>
              <EthereumChartFullData />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="5Y" title="5Y" className="hidden sm:block">
          <Card shadow="none" fullWidth={true}>
            <CardBody>
              <EthereumChart5years />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="1Y" title="1Y">
          <Card shadow="none" fullWidth={true}>
            <CardBody>
              <EthereumChart1year />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="3M" title="3m">
          <Card shadow="none" fullWidth={true}>
            <CardBody>
              <EthereumChart3months />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="1M" title="1M">
          <Card shadow="none" fullWidth={true}>
            <CardBody>
              <EthereumChart1month />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="7D" title="7D">
          <Card shadow="none" fullWidth={true}>
            <CardBody>
              <EthereumChart7days />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="24HS" title="24HS">
          <Card shadow="none" fullWidth={true}>
            <CardBody>
              <EthereumChart24hs />
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}

export default EthereumChart;
