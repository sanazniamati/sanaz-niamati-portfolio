import { spring, useScroll } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
// component
import LiIcons from "../components/LiIcons";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-center"
    >
      <LiIcons reference="ref" />

      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: spring }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position};
          <a href={companyLink} className="text-primary capitalize">
            @{company}
          </a>
        </h3>
        <span className="capitalize">
          {time}| {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};
function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-32">
      <h2 className="font-bold text-5xl mb-32 w-full text-center">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Remote - FrontEnd Developer"
            company="Gitweld"
            // companyLink={"www.google.com"}
            time="June 2022-March 2023"
            address="dusseldorf/Germany"
            work="Drawing complex canvas graphics using React-Konva"
          />
          <Details
            position="Remote - CafeTadris training course"
            company="CafeTadris"
            // companyLink={"www.google.com"}
            time="November 2021-May 2022"
            address="Tehran"
            work="simolate Trob , Bitbarg , Terello"
          />
        </ul>
      </div>
    </div>
  );
}

export default Experience;
