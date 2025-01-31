import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";

const Tech = () => {
  const isMobile = window.innerWidth <= 768;
  const [shake, setShake] = useState(false); // State to trigger shake
  const displayedTechnologies = isMobile
    ? technologies.slice(0, 6)
    : technologies;

  // Trigger shake every 1 second
  useEffect(() => {
    const shakeInterval = setInterval(() => {
      setShake(true); 
      setTimeout(() => {
        setShake(false); 
      }, 900); 
    }, 1000); 

    return () => clearInterval(shakeInterval); 
  }, []);

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {displayedTechnologies.map((technology) => (
        <motion.div
          key={technology.name}
          className="w-28 h-28"
          style={{ pointerEvents: "auto" }}
          animate={shake ? { x: [0, 10, -10, 10, 0] } : {}}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 20,
            duration: 0.9, 
          }}
        >
          <BallCanvas icon={technology.icon} scale={isMobile ? 0.7 : 1} />
        </motion.div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
