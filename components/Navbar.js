"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Layout from "./Layout";
import ThemeButton from "@/components/ThemeButton";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link
      href={href}
      className={`${className} p-2 relative group ${
        router.asPath === href ? "font-extrabold" : "font-semibold"
      } hover:font-bold  `}
    >
      {title}
      <span
        className={`h-1 inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-out duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const handelClick = () => {
    toggle();
    router.push(href);
  };
  return (
    <button
      href={href}
      className={`${className} p-2 relative group text-light dark:text-dark my-2`}
      onClick={handelClick}
    >
      {title}
      <span
        className={`h-[2px] bg-light dark:bg-dark duration-300 ease-out inline-block absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </button>
  );
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full font-medium">
      <Layout className=" bg-white h-14 px-32 flex justify-between items-center relative">
        <button
          onClick={handleClick}
          className="flex-col z-1000 justify-center items-center hidden lg:flex"
        >
          <span
            className={`bg-dark transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm -translate-y-0.5 ${
              isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
          />
          <span
            className={`bg-dark transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`bg-dark transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm traslate-y-0.5 ${
              isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}
          />
        </button>
        <div className="w-full flex justify-between items-center lg:hidden">
          <nav>
            <CustomLink href="/" title={"Home"} className="mr-4" />
            <CustomLink href="/about" title={"About"} className="mx-4" />
            <CustomLink href="/projects" title={"Projects"} className="mx-4" />
            <CustomLink href="/contact" title={"Contact"} className="ml-4" />
          </nav>

          <nav className="flex justify-center items-center flex-wrap mt-2">
            <motion.a
              href="https://www.linkedin.com/in/sanaz-niamati/"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1"
            >
              <FaLinkedin className="w-6 h-6" />
            </motion.a>

            <motion.a
              href="https://github.com/sanazniamati"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1"
            >
              <FaGithub className="w-6 h-6" />
            </motion.a>
            <ThemeButton />
          </nav>
        </div>
      </Layout>

      {isOpen ? (
        <motion.div
          className="min-w-[70vw] flex flex-col justify-between z-30 items-center
           fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
       bg-dark/90 dark:bg-light/90 rounded-lg backdrop-blur-md py-32"
          initial={{ scale: 0, opacity: 1, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <nav className="flex flex-col justify-center  items-center">
            <CustomMobileLink href="/" title={"Home"} toggle={handleClick} />
            <CustomMobileLink
              href="/about"
              title={"About"}
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title={"Projects"}
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/contact"
              title={"Contact"}
              toggle={handleClick}
            />
          </nav>

          <nav className="flex justify-center items-center flex-wrap">
            <motion.a
              href="https://www.linkedin.com/in/sanaz-niamati/"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3"
            >
              <FaLinkedin className="text-light w-6 h-6 dark:text-light" />
            </motion.a>

            <motion.a
              href="https://github.com/sanazniamati"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3"
            >
              <FaGithub className="text-light w-6 h-6 dark:text-light" />
            </motion.a>
            <ThemeButton />
          </nav>
        </motion.div>
      ) : null}
    </header>
  );
}

export default Navbar;
