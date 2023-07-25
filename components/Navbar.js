// library
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { FaSun, FaRegMoon, FaLinkedin, FaGithub } from "react-icons/fa";

// components
// import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} p-2 relative group `}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark 
        absolute left-0 -bottom-0.5
      group-hover:w-full  transition-[width] ease duration-300
      ${router.asPath === href ? "w-full" : "w-0"} `}
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
      className={`${className} p-2 relative group `}
      onClick={handelClick}
    >
      {title}
      <span
        className={`h-[2px] bg-dark duration-300 ease-out  inline-block absolute left-0 -bottom-0.5 
      group-hover:w-full  transition-[width] ease 
      ${router.asPath === href ? "w-full" : "w-0"} `}
      >
        &nbsp;
      </span>
    </button>
  );
};

function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  // const [mode, setMode] = useThemeSwitcher();
  return (
    <header className=" w-full px-32 py-8 font-medium flex justify-between items-center relative ">
      <button
        onClick={handleClick}
        className="flex-col justify-center items-center hidden lg:flex "
      >
        <span
          className={`bg-dark transition-all duration-300 ease-out  block h-0.5 w-6 rounded-sm -traslate-y-0.5 ${
            isOpen ? " rotate-45 translate-y-1" : " -translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm traslate-y-0.5 ${
            isOpen ? " -rotate-45 -translate-y-1" : " translate-y-0.5"
          }`}
        ></span>
      </button>
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title={"Home"} className="mr-4" />
          <CustomLink href="/about" title={"About"} className="mx-4" />
          <CustomLink href="/projects" title={"Projects"} className="mx-4" />
          <CustomLink href="/contact" title={"Contact"} className="ml-4" />
        </nav>

        <nav className="flex justify-center items-center flex-wrap">
          <motion.a
            href="https://www.linkedin.com/in/sanaz-niamati/"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <FaLinkedin className="w-6 h-6" />
          </motion.a>

          <motion.a
            href="https://github.com/sanazniamati"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <FaGithub className="w-6 h-6" />
          </motion.a>

          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
            onClick={() =>
              setTheme(
                theme === " transition-all duration-300 ease-out"
                  ? "light"
                  : " transition-all duration-300 ease-out"
              )
            }
          >
            {theme === " transition-all duration-300 ease-out" ? (
              <FaSun className="w-6 h-6" />
            ) : (
              <FaRegMoon className="w-6 h-6" />
            )}
          </motion.a>
        </nav>
      </div>

      {isOpen ? (
        <div
          className="min-w-[70vw] flex flex-col  justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
       bg-dark/90 rounded-lg backdrop-blur-md py-32 "
        >
          <nav className="flex flex-col justify-center items-center">
            <CustomMobileLink
              href="/"
              title={"Home"}
              className="mr-4"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title={"About"}
              className="mx-4"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title={"Projects"}
              className="mx-4"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/contact"
              title={"Contact"}
              className="ml-4"
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
              <LinkedInIcon />
            </motion.a>

            <motion.a
              href="https://github.com/sanazniamati"
              target="_blank"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3"
            >
              <GithubIcon />
            </motion.a>

            {/* <motion.a
          href="/"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 ml-3"
        >
          <SunIcon />
        </motion.a> */}
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3"
              onClick={() =>
                setTheme(
                  theme === " transition-all duration-300 ease-out"
                    ? "light"
                    : " transition-all duration-300 ease-out"
                )
              }
            >
              {theme === " transition-all duration-300 ease-out" ? (
                <FaSun />
              ) : (
                <FaRegMoon />
              )}
            </motion.a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;
