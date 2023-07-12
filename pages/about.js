import Head from "next/head";
import Image from "next/image";
// component
import Layout from "../components/Layout.js";
import AnimatedText from "../components/AnimatedText";
import Skills from "../components/Skills.js";
import Experience from "../components/Experience.js";
// image
import profile from "../public/sanaz.jpeg";

function about(props) {
  return (
    <>
      <Head>
        <title>SanazNiamati | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center ">
        <Layout className="pt-8 bg-white">
          <div className="grid w-full grid-cols-6 gap-16">
            <div className=" col-span-3 flex flex-col items-center justify-start">
              <AnimatedText text={"ABOUT ME"} className="mb-8 text-5xl" />
              <p className=" font-medium ">
                Hi, I'm Sanaz Niamati, I'm a Frontend Web Developer building the
                Front-end of Websites and Web Applications that leads to the
                success of the overall product. Check out some of my work in the
                Projects section.
              </p>
              <p className=" font-medium my-4">
                I also like sharing content related to the stuff that I have
                learned over the years in Web Development so it can help other
                people of the Dev Community. Feel free to Connect or Follow me
                on my Linkedin where I post useful content related to Web
                Development and Programming
              </p>
              <p className=" font-medium ">
                I am looking for career opportunities where I can contribute,
                learn and grow. If you have a good opportunity that matches my
                skills and experience, don't hesitate to contact me.
              </p>
            </div>

            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 ">
              <div className="absolute top-1 -right-4  -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image
                className="w-full h-auto rounded-2xl  "
                src={profile}
                alt="profile-pic"
              />
            </div>
            {/* for experince */}
            {/* <div className="col-span-2 flex flex-col items-end justify-between ">
              <div className=" flex flex-col items-end justify-center">
                <span className=" inline-block text-7xl font-bold ">50+</span>
                <h2 className=" text-xl font-medium capitalize text-dark/75">
                  satisfied clints
                </h2>
              </div>
              <div className=" flex flex-col items-end justify-center">
                <span className=" inline-block text-7xl font-bold ">40+</span>
                <h2 className=" text-xl font-medium capitalize text-dark/75">
                  project completed
                </h2>
              </div>
              <div className=" flex flex-col items-end justify-center">
                <span className=" inline-block text-7xl font-bold ">4+</span>
                <h2 className=" text-xl font-medium capitalize text-dark/75">
                  years of experience
                </h2>
              </div>
            </div> */}
          </div>
          <Skills />
          <Experience />
        </Layout>
      </main>
    </>
  );
}

export default about;
