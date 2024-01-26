import Image from "next/image";
import React from "react";
import Logo from "@/images/handy-coin.png"

export const AcmeLogo = () => (
  <div>
    <Image src={Logo} width={42} height={42} alt="Logo" className="mr-2"/>
  </div>
);
