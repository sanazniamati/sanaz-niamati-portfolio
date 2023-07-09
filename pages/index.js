import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// component
import Layout from "../components/Layout";
import AnimatedText from "../components/AnimatedText";
import { LinkArrow } from "../components/Icons";

// icon profile
import profile from "../public/images/profile/profile.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>sanaz niamati portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2 ">
              <Image className="w-full h-auto" src={profile} alt="" />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center ">
              <AnimatedText
                text={"Turning Vision Into Reality With Code And Design."}
                className="!text-6xl !text-left"
              />
              <p className="my-4 text-base font-medium">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className="flex items-center self-start mt-2">
                <Link
                  href="/s.niamati-cv.pdf"
                  target="_blank"
                  className="flex items-center justify-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold border-2 border-solid
                  hover:bg-light hover:text-dark hover:border-dark "
                  download={true}
                >
                  Resume <LinkArrow className="" />
                </Link>
                <Link
                  href="mailto:sanaz.niamati@yahoo.com"
                  className="ml-4 text-lg font-medium capitalize text-dark underline"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
