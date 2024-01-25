import React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <hr />
      <div className="flex flex-col-reverse items-center py-6 select-none">
        <h3 className="mt-2">Designed by Lihuel Zerega</h3>
        <div className="flex flex-row items-center">
          <Link href="https://www.linkedin.com/in/lihuelzerega/">
            <AiFillLinkedin className="text-xl text-default-500" />
          </Link>
          <Link href="https://github.com/LihuelZerega">
            <FaGithub className="text-xl text-default-500" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;