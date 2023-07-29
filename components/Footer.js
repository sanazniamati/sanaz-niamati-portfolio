import React from "react";
import Layout from "./Layout";
import Link from "next/link";

function Footer(props) {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <Layout className="h-14 bg-[#e0f8e7] flex items-center justify-between md:flex-col  ">
        <span>{new Date().getFullYear()}&copy;All Right Reserved</span>
        <div className="flex items-center">
          Build with
          <span className="text-primary text-2xl px-1">&#9825; </span>
          <Link href="/" className="underline underline-offset-2">
            sanaz-niamati
          </Link>
        </div>
      </Layout>
    </footer>
  );
}

export default Footer;
