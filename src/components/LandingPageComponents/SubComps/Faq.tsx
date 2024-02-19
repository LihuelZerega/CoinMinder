import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function App() {
  const Quest1 =
    "On our platform, you can access a wide range of financial information, including the latest financial news, index, stock and cryptocurrency prices, as well as valuable insights on market trends and analysis.";

  const Quest2 =
    "We offer simulation tools that allow you to experiment with short, medium and long-term investment strategies. You will be able to evaluate different scenarios and make informed decisions before making real investments.";

  const Quest3 =
    "Yes, you can use our currency exchange simulator to experiment with different exchange rates and understand how they would affect your investments. Additionally, we provide you with up-to-date information on actual exchange rates.";

  const Quest4 =
    "To get detailed stock information, simply navigate to the “Stock Information” section. There you will find accurate data on individual stocks, market trends and other relevant indicators.";

  const Quest5 =
    "Our Financial News section offers the latest financial news and expert analysis. Stay informed about important events that impact the markets and make decisions based on up-to-date information.";

  const Quest6 =
    "By using our platform, you gain access to key information to make informed financial decisions. Additionally, you can practice risk-free investment strategies through simulations and stay up to date with the latest financial news and trends.";

  return (
    <div className="flex flex-col items-center justify-center my-24 max-w-8xl">
      <div className="mx-auto max-w-8xl px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold leading-8 text-gray-600 mb-10">
          Unlocking Financial Wisdom: Your FAQ Guide
        </h2>
      </div>
      <Accordion selectionMode="multiple" className="text-gray-500">
        <AccordionItem
          key="1"
          aria-label="What type of financial information can I find on this platform?"
          title="What type of financial information can I find on this platform?"
        >
          {Quest1}
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="How can I simulate short, medium and long term investments?"
          title="How can I simulate short, medium and long term investments?"
        >
          {Quest2}
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Can I exchange and simulate currency exchange on the platform?"
          title="Can I exchange and simulate currency exchange on the platform?"
        >
          {Quest3}
        </AccordionItem>
        <AccordionItem
          key="4"
          aria-label="How can I access detailed information about specific stocks?"
          title="How can I access detailed information about specific stocks?"
        >
          {Quest4}
        </AccordionItem>
        <AccordionItem
          key="5"
          aria-label="Where can I find up-to-date financial news?"
          title="Where can I find up-to-date financial news?"
        >
          {Quest5}
        </AccordionItem>
        <AccordionItem
          key="6"
          aria-label="What benefits do I get from using this platform?"
          title="What benefits do I get from using this platform?"
        >
          {Quest6}
        </AccordionItem>
      </Accordion>
    </div>
  );
}
