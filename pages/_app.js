import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import { ThemeProvider } from "next-themes";
// component
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Provider from "@/pages/provider";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  return (
    <>
       <Provider attribute="class">
      <main className={`${montserrat.variable} font-mont w-full min-h-full`}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </main>
       </Provider>
    </>
  );
}
