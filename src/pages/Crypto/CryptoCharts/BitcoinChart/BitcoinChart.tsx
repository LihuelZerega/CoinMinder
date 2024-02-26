import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import BitcoinChart1month from "./BitcoinChart1month";
import BitcoinChart1year from "./BitcoinChart1year";
import BitcoinChart24hs from "./BitcoinChart24hs";
import BitcoinChart3months from "./BitcoinChart3months";
import BitcoinChart5years from "./BitcoinChart5years";
import BitcoinChart7days from "./BitcoinChart7days";
import BitcoinChartFullData from "./BitcoinChartFullData";

function BitcoinChart() {
  return (
    <div>
      <Tabs aria-label="Options" variant="bordered" radius="sm">
        <Tab key="MAX" title="MAX">
          <Card shadow="none" fullWidth={true}>
            <CardBody>
              <BitcoinChartFullData />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="5Y" title="5Y" className="hidden sm:block">
          <Card shadow="none" fullWidth={true}>
            <CardBody>
              <BitcoinChart5years />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="1Y" title="1Y">
          <Card shadow="none" fullWidth={true}>
            <CardBody>
              <BitcoinChart1year />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="3M" title="3m">
          <Card shadow="none" fullWidth={true}>
            <CardBody>
              <BitcoinChart3months />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="1M" title="1M">
          <Card shadow="none" fullWidth={true}>
            <CardBody>
              <BitcoinChart1month />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="7D" title="7D">
          <Card shadow="none" fullWidth={true}>
            <CardBody>
              <BitcoinChart7days />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="24HS" title="24HS">
          <Card shadow="none" fullWidth={true}>
            <CardBody>
              <BitcoinChart24hs />
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}

export default BitcoinChart;
