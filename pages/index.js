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
      <div className=" bg-gray-600 w-screen min-h-screen flex flex-col ">
        <main className=" bg-slate-200 font-mont flex items-center text-dark w-full min-h-calc-(100vh-(footer-header))">
          <Layout>
            <div className=" bg-yellow-400 w-full px-32  ">
              <div className="bg-green flex items-center">
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
                    Websites and Web Applications that leads to the success of
                    the overall product
                  </p>
                  <div className="flex items-center self-start mt-2">
                    <Link
                      href="/s.niamati-cv.pdf"
                      target="_blank"
                      className="flex items-center justify-center bg-dark text-green p-2.5 px-6 rounded-lg text-lg font-semibold border-dark border-2 border-solid
                  hover:bg-light hover:text-dark hover:border-dark "
                      download={true}
                    >
                      Resume <LinkArrow />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Layout>
        </main>
        <Footer />
      </div>
    </>
  );
}
