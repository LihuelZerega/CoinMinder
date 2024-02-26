import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import BnbChart1month from "./Charts/BnbChart1month";
import BnbChart1year from "./Charts/BnbChart1year";
import BnbChart24hs from "./Charts/BnbChart24hs";
import BnbChart3months from "./Charts/BnbChart3months";
import BnbChart5years from "./Charts/BnbChart5years";
import BnbChart7days from "./Charts/BnbChart7days";
import BnbChartFullData from "./Charts/BnbChartFullData";

function BnbChart() {
  return (
    <div>
      <Tabs aria-label="Options" variant="bordered" radius="sm">
        <Tab key="MAX" title="MAX">
          <Card shadow="none" fullWidth={true}>
            <CardBody>
              <BnbChartFullData />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="5Y" title="5Y" className="hidden sm:block">
          <Card shadow="none" fullWidth={true}>
            <CardBody>
              <BnbChart5years />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="1Y" title="1Y">
          <Card shadow="none" fullWidth={true}>
            <CardBody>
              <BnbChart1year />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="3M" title="3m">
          <Card shadow="none" fullWidth={true}>
            <CardBody>
              <BnbChart3months />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="1M" title="1M">
          <Card shadow="none" fullWidth={true}>
            <CardBody>
              <BnbChart1month />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="7D" title="7D">
          <Card shadow="none" fullWidth={true}>
            <CardBody>
              <BnbChart7days />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="24HS" title="24HS">
          <Card shadow="none" fullWidth={true}>
            <CardBody>
              <BnbChart24hs />
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}

export default BnbChart;
