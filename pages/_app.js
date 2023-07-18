import React from "react";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
// component
import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider attribute="class">
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
