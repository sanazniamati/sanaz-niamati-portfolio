import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
// import { ThemeProvider } from "next-themes";
// component
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <ThemeProvider attribute="class"> */}
      <main
        className={`${montserrat.variable} font-mont bg-yellow-200 w-full min-h-full`}
      >
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </main>
      {/* </ThemeProvider> */}
    </>
  );
}
