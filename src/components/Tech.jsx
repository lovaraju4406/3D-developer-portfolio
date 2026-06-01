import React from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";

const Tech = () => {
  return (
    <>
      {/* Header */}
      <motion.div
        variants={textVariant()}
        className="text-center"
      >
        <p className={styles.sectionSubText}>
          My Toolkit
        </p>

        <h2 className={styles.sectionHeadText}>
          Technologies.
        </h2>
      </motion.div>

      {/* Description */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 mb-10 text-secondary text-[16px] max-w-4xl mx-auto text-justify leading-[30px]"
      >
        I leverage a diverse set of modern technologies, frameworks, and
        development tools to design, build, and deploy scalable software
        solutions. My technical toolkit spans Full-Stack Development,
        Backend Engineering, Database Management, Cloud Technologies,
        Generative AI, and Software Development best practices. These
        technologies enable me to create efficient, secure, and
        user-centric applications while continuously adapting to emerging
        industry trends and innovative development approaches.
      </motion.p>

      {/* Technology Container */}
      <div className="bg-white border border-black-200/60 rounded-3xl p-8 shadow-soft">
        <div className="flex flex-row flex-wrap justify-center gap-8">
          {technologies.map((technology) => (
            <div
              className="w-24 h-24 flex flex-col items-center gap-2"
              key={technology.name}
            >
              <BallCanvas icon={technology.icon} />

              <p className="text-secondary text-[11px] font-medium text-center truncate w-full">
                {technology.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");