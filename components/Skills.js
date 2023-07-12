import { motion } from "framer-motion";
const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

function Skills() {
  return (
    <>
      <h2 className="font-bold text-8xl mt-32 text-center">Skills</h2>
      <div className=" w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          web
        </motion.div>
        <Skill name="HTML" x="-15vw" y="2vw" />
        <Skill name="CSS" x="0vw" y="-9vw" />
        <Skill name="Tailwindcss" x="15vw" y="-1vw" />
        <Skill name="Bootstrap" x="0vw" y="8vw" />
        <Skill name="Javascript" x="-17vw" y="-10vw" />
        <Skill name="Typescript" x="15vw" y="10vw" />
        <Skill name="Reactjs" x="-29vw" y="5vw" />
        <Skill name="Nextjs" x="10vw" y="-16vw" />
        <Skill name="Redux-Toolkit" x="-25vw" y="18vw" />
        <Skill name="React-Konva" x="25vw" y="18vw" />
        <Skill name="Konvajs" x="37vw" y="-8vw" />
      </div>
    </>
  );
}

export default Skills;
