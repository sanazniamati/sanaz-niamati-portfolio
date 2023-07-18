// library
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { FaSun, FaRegMoon } from "react-icons/fa";

// components
import { LinkedInIcon, GithubIcon } from "../components/Icons";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} p-2 relative group`}>
      {title}
      <span
        className={`h-[2px] bg-dark  inline-block absolute left-0 -bottom-0.5 
      group-hover:w-full  transition-[width] ease duration-300
      ${router.asPath === href ? "w-full" : "w-0"} `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

function Navbar() {
  const { theme, setTheme } = useTheme();
  // const [mode, setMode] = useThemeSwitcher();
  return (
    <header className="w-full px-32 h-[56px]  font-medium flex justify-between items-center ">
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
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <FaSun /> : <FaRegMoon />}
        </motion.a>
      </nav>
    </header>
  );
}

export default Navbar;
