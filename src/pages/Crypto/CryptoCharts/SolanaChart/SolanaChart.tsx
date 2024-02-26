import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import SolanaChart1month from "./Charts/SolanaChart1month";
import SolanaChart1year from "./Charts/SolanaChart1year";
import SolanaChart24hs from "./Charts/SolanaChart24hs";
import SolanaChart3months from "./Charts/SolanaChart3months";
import SolanaChart5years from "./Charts/SolanaChart5years";
import SolanaChart7days from "./Charts/SolanaChart7days";
import SolanaChartFullData from "./Charts/SolanaChartFullData";

function SolanaChart() {
  return (
    <div>
      <Tabs aria-label="Options" variant="bordered" radius="sm">
        <Tab key="MAX" title="MAX">
          <Card shadow="none" fullWidth={true}>
            <CardBody>
              <SolanaChartFullData />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="5Y" title="5Y" className="hidden sm:block">
          <Card shadow="none" fullWidth={true}>
            <CardBody>
              <SolanaChart5years />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="1Y" title="1Y">
          <Card shadow="none" fullWidth={true}>
            <CardBody>
              <SolanaChart1year />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="3M" title="3m">
          <Card shadow="none" fullWidth={true}>
            <CardBody>
              <SolanaChart3months />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="1M" title="1M">
          <Card shadow="none" fullWidth={true}>
            <CardBody>
              <SolanaChart1month />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="7D" title="7D">
          <Card shadow="none" fullWidth={true}>
            <CardBody>
              <SolanaChart7days />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="24HS" title="24HS">
          <Card shadow="none" fullWidth={true}>
            <CardBody>
              <SolanaChart24hs />
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}

export default SolanaChart;
