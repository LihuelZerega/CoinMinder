import Image from "next/image";
import React from "react";
import Logo from "@/images/handy-coin.png"

export const AcmeLogo = () => (
  <div>
    <Image src={Logo} width={32} height={32} alt="Logo" className="mr-1"/>
  </div>
);
