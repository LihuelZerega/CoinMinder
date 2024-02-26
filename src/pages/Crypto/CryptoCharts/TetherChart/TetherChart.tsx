import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import TetherChart1month from "./Charts/TetherChart1month";
import TetherChart1year from "./Charts/TetherChart1year";
import TetherChart24hs from "./Charts/TetherChart24hs";
import TetherChart3months from "./Charts/TetherChart3months";
import TetherChart5years from "./Charts/TetherChart5years";
import TetherChart7days from "./Charts/TetherChart7days";
import TetherChartFullData from "./Charts/TetherChartFullData";

function TetherChart() {
  return (
    <div>
      <Tabs aria-label="Options" variant="bordered" radius="sm">
        <Tab key="MAX" title="MAX">
          <Card shadow="none" fullWidth={true}>
            <CardBody>
              <TetherChartFullData />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="5Y" title="5Y" className="hidden sm:block">
          <Card shadow="none" fullWidth={true}>
            <CardBody>
              <TetherChart5years />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="1Y" title="1Y">
          <Card shadow="none" fullWidth={true}>
            <CardBody>
              <TetherChart1year />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="3M" title="3m">
          <Card shadow="none" fullWidth={true}>
            <CardBody>
              <TetherChart3months />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="1M" title="1M">
          <Card shadow="none" fullWidth={true}>
            <CardBody>
              <TetherChart1month />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="7D" title="7D">
          <Card shadow="none" fullWidth={true}>
            <CardBody>
              <TetherChart7days />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="24HS" title="24HS">
          <Card shadow="none" fullWidth={true}>
            <CardBody>
              <TetherChart24hs />
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}

export default TetherChart;
