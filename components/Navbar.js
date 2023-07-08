// library
import Link from "next/link";

// components
import Logo from "../components/Logo";

function Navbar(props) {
  return (
    <header className="w-full px-32 py-8 font-medium flex justify-between items-center">
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/articles">Articles</Link>
      </nav>
      <Logo />
      <nav>
        <Link href="/" target="_blank">
          T
        </Link>
        <Link href="/" target="_blank">
          T
        </Link>

        <Link href="/" target="_blank">
          T
        </Link>

        <Link href="/" target="_blank">
          T
        </Link>

        <Link href="/" target="_blank">
          T
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
