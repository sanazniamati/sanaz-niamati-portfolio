import Layout from "@/components/Layout";
import AnimatedText from "../components/AnimatedText";
import Head from "next/head";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { FaPhoneSquare, FaEnvelope } from "react-icons/fa";

function contact(props) {
  return (
    <div>
      <Head>
        <title>SanazNiamati | Contact Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="flex w-full items-center justify-center ">
        <Layout className="py-16 bg-white">
          <div className="flex w-full bg-light">
            <div className=" w-1/2 flex flex-col items-center text-start">
              <AnimatedText text={"Contact Me"} className="my-8 text-5xl" />
              <div className="  w-full">
                <div className="flex justify-center items-center p-4 ">
                  <FaPhoneSquare className="h-12 w-12 pr-2 " />
                  <a
                    href="tel:+989384997337"
                    className=" font-semibold text-2xl"
                  >
                    +98 938 499 7337
                  </a>
                </div>
                <div className="flex justify-center items-center ">
                  <FaEnvelope className="h-12 w-12 pr-2" />
                  <a
                    href="mailto:sanaz.niamati@yahoo.com"
                    className=" font-semibold text-2xl"
                  >
                    sanaz.niamati@yahoo.com
                  </a>
                </div>
              </div>
            </div>
            <form className=" bg-slate-200 w-1/2 p-16 ">
              <input
                className="w-full p-2 m-2 rounded"
                type="text"
                value={""}
                placeholder="Name"
              />
              <input
                className="w-full p-2 m-2 rounded "
                type="email"
                value={""}
                placeholder="Email"
              />
              <textarea
                className=" w-full p-2 m-2 rounded"
                type="text"
                placeholder="Your Message"
                rows={5}
              />
              <input
                className="flex justify-center items-center bg-dark text-light font-bold py-2 px-4 border border-dark border-solid rounded-3xl hover:bg-light hover:text-dark hover:cursor-pointer "
                type="submit"
                value={"Contact me"}
              />
            </form>
          </div>
        </Layout>
      </main>
    </div>
  );
}

export default contact;
