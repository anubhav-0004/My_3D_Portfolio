import React from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";

const Tech = () => {
  const isMobile = window.innerWidth <= 768; 
  const displayedTechnologies = isMobile
    ? technologies.slice(0, 6)
    : technologies;

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div
          className="w-28 h-28"
          key={technology.name}
          style={{ pointerEvents: "auto" }}
        >
          <BallCanvas icon={technology.icon} scale={isMobile ? 0.7 : 1} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
