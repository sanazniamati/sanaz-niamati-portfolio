import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// images
import TorobPic from "../public/images/projects/torob-pic.png";
import BitBarg from "../public/images/projects/BitBarg.png";
import widened from "..//public/images/projects/widened-hy-butt.png";
import blob from "..//public/images/projects/create-blob.png";

const FetureProject = ({ title, summary, img, link, github }) => {
  return (
    <article className=" w-full flex items-center justify-between relative rounded-br-2xl p-12 rounded-3xl border border-solid border-dark bg-light shadow-2xl   ">
      {/* <div className="absolute top-0 -right-3 -z-10  w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" /> */}
      <Link
        href={link}
        target="_blank"
        className=" w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} className="w-full hauto" alt={title} />
      </Link>
      <div className=" w-1/2 flex flex-col items-start justify-between pl-6 ">
        {/* <span className=" text-primary font-medium text-xl">{type}</span> */}
        <Link href={link} target="_blank">
          <h2 className=" my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className=" my-2 font-medium text-dark ">{summary}</p>

        <div className="mt-2 flex items-center ">
          <Link href={github} target="_blank">
            <GithubIcon />
          </Link>
          <Link
            href={github}
            target="_blank"
            className="ml-4 rounded-lg text-light p-2 px-6 text-lg font-semibold bg-dark  "
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

// const Project = ({ title, img, link, github }) => {
//   return (
//     <article
//       className="w-full flex flex-col items-center justify-center rounded-2xl
//      border border-solid border-dark  p-4 relative "
//     >
//       <Link
//         href={link}
//         target="_blank"
//         className=" w-full cursor-pointer overflow-hidden rounded-lg"
//       >
//         <Image src={img} className="w-full hauto" alt={title} />
//       </Link>
//       <div className=" w-full flex flex-col items-start justify-between mt-4">
//         {/* <span className=" text-primary font-medium text-xl">{type}</span> */}
//         <Link href={link} target="_blank">
//           <h2 className=" my-2 w-full text-left text-3xl font-bold">{title}</h2>
//         </Link>

//         <div className="w-full mt-2 flex items-center justify-between ">
//           <Link
//             href={link}
//             target="_blank"
//             className="text-lg font-semibold underline  "
//           >
//             Visit
//           </Link>
//           <Link href={github} target="_blank" className="w-8">
//             <GithubIcon />
//           </Link>
//         </div>
//       </div>
//     </article>
//   );
// };

function projects() {
  return (
    <>
      <Head>
        <title>SanazNiamati | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className=" w-full mb-16 flex-col items-center justify-center">
        <Layout className=" pt-16 bg-white">
          <AnimatedText text="Projects" className="mb-16" />
          <div className=" grid grid-cols-12 gap-24">
            <div className=" col-span-12 ">
              <FetureProject
                title="Torob site simulation"
                img={TorobPic}
                summary="
                A simulation of torob website home page and mobile page   "
                link="https://trob-nextjs.vercel.app/"
                github={"https://github.com/sanazniamati/torob_nextjs.git"}
                // type="fetures projects"
              />
            </div>
            <div className=" col-span-12 ">
              <FetureProject
                title="react-konva project"
                img={widened}
                summary="
                drawing custom shape in canvas using react-konva   "
                link="https://github.com/sanazniamati/gitweldsn051.git"
                github={"https://github.com/sanazniamati/gitweldsn051.git"}
                // type="fetures projects"
              />
            </div>
            <div className=" col-span-12 ">
              <FetureProject
                title="BitBarg site simulation"
                img={BitBarg}
                summary="
                A simulation of BitBarg website home page and services page "
                link="https://sarafi-bit-barg.vercel.app/"
                github={"https://github.com/sanazniamati/SarafiBitBarg.git"}
                // type="fetures projects"
              />
            </div>
            <div className=" col-span-12 ">
              <FetureProject
                title="react-konva project"
                img={blob}
                summary="
                create blob shape in canvas using react-konva   "
                link="https://github.com/sanazniamati/projectRK088.git"
                github={"https://github.com/sanazniamati/projectRK088.git"}
                // type="fetures projects"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}

export default projects;
