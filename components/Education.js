import { spring, useScroll } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
// component
import LiIcons from "../components/LiIcons";

const Details = ({ type, time, place, info }) => {
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
        <h3 className=" capitalize font-bold text-2xl ">{type}</h3>
        <span className=" capitalize">
          {time}| {place}
        </span>
        <p className=" font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
};
function Education() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-32">
      <h2 className="font-bold text-5xl mb-32 w-full text-center">Education</h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Bachelor of IT Engineering"
            cotimempany="Gitweld"
            time="2009-2012"
            place="Islamic Azad Univercity , Boushehr Iran"
            // info=""
          />
        </ul>
      </div>
    </div>
  );
}

export default Education;
