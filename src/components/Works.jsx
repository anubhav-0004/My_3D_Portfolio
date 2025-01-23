import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { projects } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { textVariant } from "../utils/motion";

const ProjectCard = ({ project }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      iconStyle={{ background: project.iconBg || "#232631" }}
      icon={
        <motion.a
  href={project.live_link}
  target="_blank"
  rel="noopener noreferrer"
  className="flex justify-center items-center w-full h-full rounded-full bg-[#2c226f] overflow-hidden"
  initial={{ boxShadow: "0 0 0 rgba(255, 255, 255, 0)" }}
  animate={{
    boxShadow: [
      "0 0 10px rgba(255, 255, 255, 0.4)",
      "0 0 20px rgba(255, 255, 255, 0.6)",
      "0 0 30px rgba(255, 255, 255, 0.8)",
      "0 0 40px rgba(255, 255, 255, 1)",
      "0 0 30px rgba(255, 255, 255, 0.8)",
      "0 0 20px rgba(255, 255, 255, 0.6)",
      "0 0 10px rgba(255, 255, 255, 0.4)",
    ],
    transition: {
      duration: 1.5,
      repeat: Infinity,
    },
  }}
>
  <img
    src={project.image}
    alt={project.name}
    className="w-[60%] h-[60%] object-contain"
  />
</motion.a>

      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{project.name}</h3>
        <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
          {project.description}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {project.tags.map((tag, index) => (
          <li
            key={`project-tag-${index}`}
            className={`text-[14px] pl-1 tracking-wider ${tag.color}`}
          >
            {tag.name}
          </li>
        ))}
      </ul>

      <div className="mt-5">
        <a
          href={project.source_code_link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-400 hover:underline"
        >
          View Source Code
        </a>
      </div>
    </VerticalTimelineElement>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My Recent Work
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Projects.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} project={project} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
