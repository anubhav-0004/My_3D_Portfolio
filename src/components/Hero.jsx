import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Text from "../components/Text";

const Hero = () => {
  return (
    <section className="relative w-full sm:h-[130vh] max-sm:h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[100px] max-sm:top-[110px] max-w-7xl mx-auto flex flow-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
          <div className="w-1 sm:h-80 h-52 violet-gradient"></div>
        </div>
        <div className="max-sm:mt-0 max-lg:mt-9">
          <h1
            className={`${styles.heroHeadText} max-sm:font-semibold max-sm:text-[2.2rem] max-sm:leading-[2.5rem] text-white max-sm:mt-7`}
          >
            Hi, I'm <Text />
          </h1>
          <p
            className={`${styles.heroSubText} text-white-100 mt-2 max-lg:hidden max-sm:block`}
          >
            an undergraduate Computer Science & Engineering student at Kamla
            Nehru Institute of Technology, Sultanpur. I have skills in C, C++,
            HTML, CSS, TailwindCSS, ReactJS, JavaScript, ReduxJS, Node.js and
            MongoDB. I’ve worked on projects to enhance my frontend development
            skills and am currently seeking internships opportunities,
            specializing in ReactJS.
          </p>
          <p className={`${styles.heroSubText} text-white-100 mt-2 lg:hidden max-sm:hidden`}>
            a Computer Science undergraduate at KNIT Sultanpur, skilled in
            ReactJS, JavaScript, Node.js, and MongoDB. Passionate about building
            seamless user interfaces and seeking opportunities to advance
            frontend development expertise.
          </p>
        </div>
      </div>
        <ComputersCanvas />
      <div className="absolute sm:bottom-2 max-lg:top-[90%] sm:mt-6 max-sm:top-[85%] w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
