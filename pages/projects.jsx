import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import trob from "./../public/images/projects/torob.png";
import todo from "./../public/images/projects/todo.png";
import bitbarg from "./../public/images/projects/bitbarg.png";
import rk088 from "./../public/images/projects/rk088.png";
import SteepFlankedSingleV from "./../public/images/projects/SteepFlankedSingleV.png";
import widenedHyButt from "./../public/images/projects/widened-hy-butt.png";

const FeaturedProject = ({ type, title, summery, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between rounded-3xl
     border border-solid border-dark bg-light shadow-2xl p-12 relative "
    >
      <div
        className={
          "absolute top-1 -right-2 -z-10 w-[101%] h-[102%] rounded-[2rem] bg-dark rounded-br-3xl"
        }
      />
      <Link
        href={link}
        target={"_blank"}
        className={"w-1/2 cursor-pointer overflow-hidden rounded-lg"}
      >
        <Image src={img} alt={title} className={"w-full h-46"} />
      </Link>
      <div className={"w-1/2 flex flex-col justify-between pl-6"}>
        <span className={"text-primary font-medium text-xl"}> {type}</span>
        <Link
          href={link}
          target="_lank"
          className={"hover:underline underline-offset-2"}
        >
          <h2 className={"my-2 w-full text-left text-4xl font-bold"}>
            {title}
          </h2>
        </Link>

        <p className={"my-2 font-medium text-dark"}>{summery}</p>
        <div className={"mt-2 flex items-center"}>
          <Link href={github} target="_lank">
            <FaGithub />
          </Link>
          <Link
            className={
              "ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
            }
            href={link}
            target="_lank"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};
const Project = ({ type, title, summery, img, link, github }) => {
  return (
    <article
      className={
        "w-full flex flex-col items-center justify-center rounded-2xl bg-light p-6 relative border border-solid border-dark"
      }
    >
      <div
        className={
          "absolute top-0 -right-2 -z-10 w-[101%] h-[102%] rounded-[2rem] bg-dark rounded-br-3xl"
        }
      />
      <Link
        href={link}
        target={"_blank"}
        className={"w-full cursor-pointer overflow-hidden rounded-lg"}
      >
        <Image src={img} alt={title} className={"w-full h-40"} />
      </Link>
      <div className={"w-full flex flex-col justify-between mt-4 "}>
        <span className={"text-primary font-medium text-xl"}> {type}</span>
        <Link
          href={link}
          target="_lank"
          className={"hover:underline underline-offset-2"}
        >
          <h2 className={"my-2 w-full text-left text-4xl font-bold"}>
            {title}
          </h2>
        </Link>

        <p className={"my-2 font-medium text-dark"}>{summery}</p>
        <div className={" w-full mt-2 flex items-center justify-between"}>
          <Link
            className={"text-lg font-semibold underline"}
            href={link}
            target="_lank"
          >
            Visit
          </Link>
          <Link href={github} target="_lank">
            <FaGithub size={28} />
          </Link>
        </div>
      </div>
    </article>
  );
};
function Projects() {
  return (
    <>
      <Head>
        <title>SanazNiamati | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className=" w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16 bg-white ">
          <AnimatedText text="Projects" className={"mb-16"} />
          <div className="grid grid-cols-12 gap-24  ">
            <div className="col-span-12">
              <FeaturedProject
                title="Trob site simulation"
                img={trob}
                summery="Trob site simulation Trob site simulation"
                link="https://trob-nextjs.vercel.app/"
                github="https://github.com/sanazniamati/torob_nextjs"
                type="Feature Project"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="Trob site simulation"
                img={widenedHyButt}
                // summery="Trob site simulation Trob site simulation"
                link="https://trob-nextjs.vercel.app/"
                github="https://github.com/sanazniamati/torob_nextjs"
                type="Feature Project"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Trob site simulation"
                img={bitbarg}
                // summery="Trob site simulation Trob site simulation"
                link="https://trob-nextjs.vercel.app/"
                github="https://github.com/sanazniamati/torob_nextjs"
                type="Feature Project"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Trob site simulation"
                img={todo}
                // summery="Trob site simulation Trob site simulation"
                link="https://trob-nextjs.vercel.app/"
                github="https://github.com/sanazniamati/torob_nextjs"
                type="Feature Project"
              />
            </div>
            <div className="col-span-12">
              <Project
                title="Trob site simulation"
                img={rk088}
                summery="Trob site simulation Trob site simulation"
                link="https://trob-nextjs.vercel.app/"
                github="https://github.com/sanazniamati/torob_nextjs"
                type="Feature Project"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Trob site simulation"
                img={SteepFlankedSingleV}
                summery="Trob site simulation Trob site simulation"
                link="https://trob-nextjs.vercel.app/"
                github="https://github.com/sanazniamati/torob_nextjs"
                type="Feature Project"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}

export default Projects;
