import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";

// component
import Layout from "../components/Layout";
import AnimatedText from "../components/AnimatedText";
import { LinkArrow } from "../components/Icons";
import Footer from "../components/Footer";

// icon profile
import profile from "../public/images/profile/s.jpg";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

export default function Home() {
  return (
    <>
      <Head>
        <title>SanazNiamati | portfolio</title>
        <link rel="icon" href="/sanaz.jpeg" />
      </Head>
      <div className="w-screen min-h-full flex flex-col ">
        <main className="font-mont flex items-center text-dark w-full min-h-calc-(100vh-(footer-header)) lg:min-h-calc-22 dark:text-light  ">
          <div className="pt-0 w-full z-0   px-32 ">
            <div className="flex items-center justify-between w-full">
              <div className="w-1/2 mr-4 ">
                <Image className="w-full h-auto" src={profile} alt="" />
              </div>
              <div className="w-1/2 ml-4 flex flex-col items-center self-center ">
                <AnimatedText
                  text={"Hey , i'm sanaz niamati"}
                  className="!text-6xl !text-left"
                />

                <p className="my-4 text-base font-medium">
                  A Frontend focused Web Developer building the Frontend of
                  Websites and Web Applications that leads to the success of the
                  overall product
                </p>
                <div className="flex items-center self-start mt-2">
                  <Link
                    href="/s.niamati-cv.pdf"
                    target="_blank"
                    className="flex items-center justify-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold border-dark border-2 border-solid
                  hover:bg-light hover:text-dark hover:border-dark dark:bg-light dark:text-dark dark:hover:bg-red-700 "
                    download={true}
                  >
                    Resume <LinkArrow />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
