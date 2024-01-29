import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  { id: 1, name: "Happy Customers", value: 9874 },
  { id: 2, name: "Successful Trades", value: 35219 },
  { id: 3, name: "Daily News Coverage", value: "24/7" },
  { id: 4, name: "Global Reach", value: "150+" },
];

export default function Stats() {
  const controls = useAnimation();
  const [happyCustomers, setHappyCustomers] = useState(
    stats[0].value as number
  );
  const [successfulTrades, setSuccessfulTrades] = useState(
    stats[1].value as number
  );

  useEffect(() => {
    // Animation for initial appearance
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });

    // Interval for updating values every 4 seconds
    const interval = setInterval(() => {
      setHappyCustomers((prev) => prev + getRandomIncrement());
      setSuccessfulTrades((prev) => prev + getRandomIncrement());
    }, 4000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [controls]);

  const getRandomIncrement = () => Math.floor(Math.random() * 20) + 1;

  const incrementAndAnimate = async (
    setter: React.Dispatch<React.SetStateAction<number>>
  ) => {
    await controls.start({ scale: 1.1, transition: { duration: 0.3 } });
    setter((prev) => prev + 1);
    controls.start({ scale: 1, transition: { duration: 0.3 } });
  };

  return (
    <div className="py-12 sm:pb-32 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900 mb-10">
          Empower Your Financial Journey with Our Services
        </h2>
        <motion.dl
          className="grid grid-cols-1 gap-x-8 gap-y-16 text-center md:grid-cols-2 xl:grid-cols-4"
          animate={controls}
          initial={{ opacity: 0, y: 20 }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.name === "Happy Customers" ? (
                  <motion.span
                    onClick={() => incrementAndAnimate(setHappyCustomers)}
                  >
                    {new Intl.NumberFormat().format(
                      happyCustomers +
                        (typeof stat.value === "number" ? stat.value : 0)
                    )}
                  </motion.span>
                ) : stat.name === "Successful Trades" ? (
                  <motion.span
                    onClick={() => incrementAndAnimate(setSuccessfulTrades)}
                  >
                    {new Intl.NumberFormat().format(
                      successfulTrades +
                        (typeof stat.value === "number" ? stat.value : 0)
                    )}
                  </motion.span>
                ) : (
                  stat.value
                )}
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </div>
  );
}
