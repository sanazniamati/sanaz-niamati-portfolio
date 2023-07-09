import React from "react";
import Layout from "./Layout";
import Link from "next/link";

function Footer(props) {
  return (
    <footer className=" h-[76px] w-full border-t-2 border-solid border-dark font-medium text-lg">
      <Layout className="py-2 flex items-center justify-between">
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
      </Layout>
    </footer>
  );
}

export default Footer;
