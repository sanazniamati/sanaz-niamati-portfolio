import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

function Logo(props) {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-16 h-16 bg-dark text-light rounded-full flex items-center justify-center font-bold "
        whileHover={{ scale: 1.5 }}
      >
        CB
      </MotionLink>
    </div>
  );
}

export default Logo;
