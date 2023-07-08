import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import Head from "next/head";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>sanaz niamati portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${montserrat.variable} font-mont`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
