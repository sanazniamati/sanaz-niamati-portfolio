import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import Head from "next/head";
// component
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>sanaz niamati portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main
        className={`${montserrat.variable} font-mont bg-light w-full min-h-screen `}
      >
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}
