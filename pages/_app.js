import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import { ThemeProvider } from "next-themes";
// component
import Navbar from "@/components/Navbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider attribute="class">
        <main
          className={`${montserrat.variable} font-mont bg-light w-full min-h-screen`}
        >
          <Navbar />
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  );
}
