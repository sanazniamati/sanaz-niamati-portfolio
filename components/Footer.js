import React from "react";
import Layout from "./Layout";
import Link from "next/link";

function Footer(props) {
  return (
    <footer className="bg-light w-full font-medium text-lg">
      <div className=" w-full  h-[58px]  z-0  px-32 flex items-center justify-between">
        <span>{new Date().getFullYear()}&copy;All Right Reserved</span>
        <div className="flex items-center">
          Build with
          <span className=" text-primary text-2xl px-1 ">&#9825; </span>
          <Link href="/" className=" underline underline-offset-2">
            sanaz-niamati
          </Link>
        </div>
        <Link href="/" target={"_blank"}>
          say Hello
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
