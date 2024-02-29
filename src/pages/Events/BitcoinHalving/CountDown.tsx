import React, { useState, useEffect } from "react";

function CountDown() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const targetDate = new Date("April 21, 2024 21:50:00 UTC");
      const now = new Date();
      const timeDifference = targetDate.getTime() - now.getTime();

      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-row md:flex-row items-center justify-center md:gap-2">
      <section className="flex flex-row items-center md:gap-2">
        <div className="flex flex-col md:w-unit-3xl items-center py-2 px-2 md:border-solid md:border-2 md:border-sky-500 md:rounded-md">
          <h1 className="text-5xl md:text-3xl text-[#38bdf8] text-left font-sans font-medium md:font-bold">
            {countdown.days}
          </h1>
          <h1 className="font-normal text-xs md:text-sm">DAYS</h1>
        </div>
        <h1 className="block md:hidden text-lg text-left font-sans font-bold">
          :
        </h1>
        <div className="flex flex-col md:w-unit-3xl items-center py-2 px-2 md:border-solid md:border-2 md:border-sky-500 md:rounded-md">
          <h1 className="text-5xl md:text-3xl text-[#38bdf8] text-left font-sans font-medium md:font-bold">
            {countdown.hours}
          </h1>
          <h1 className="font-normal text-xs md:text-sm">HOURS</h1>
        </div>
        <h1 className="block md:hidden text-lg text-left font-sans font-bold">
          :
        </h1>
      </section>

      <section className="flex flex-row items-center md:gap-2">
        <div className="flex flex-col md:w-unit-3xl items-center py-2 px-2 md:border-solid md:border-2 md:border-sky-500 md:rounded-md">
          <h1 className="text-5xl md:text-3xl text-[#38bdf8] text-left font-sans font-medium md:font-bold">
            {countdown.minutes}
          </h1>
          <h1 className="font-normal text-xs md:text-sm">MINS</h1>
        </div>
        <h1 className="block md:hidden text-lg text-left font-sans font-bold">
          :
        </h1>
        <div className="flex flex-col md:w-unit-3xl items-center py-2 px-2 md:border-solid md:border-2 md:border-sky-500 md:rounded-md">
          <h1 className="text-5xl md:text-3xl text-[#38bdf8] text-left font-sans font-medium md:font-bold">
            {countdown.seconds}
          </h1>
          <h1 className="font-normal text-xs md:text-sm">SECS</h1>
        </div>
      </section>
    </div>
  );
}

export default CountDown;
