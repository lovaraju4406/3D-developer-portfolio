import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      className="h-full w-full"
    >
      <Tilt
        options={{ max: 12, scale: 1.02, speed: 400 }}
        className="bg-white rounded-2xl h-full flex flex-col border border-black-200/60 shadow-soft hover:shadow-soft-hover transition-shadow duration-300"
      >
        {/* Project Image */}
        <div className="relative w-full h-[180px] overflow-hidden rounded-t-2xl">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

          {/* GitHub Button */}
          <div className="absolute inset-0 flex justify-end m-3">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex justify-center items-center cursor-pointer hover:bg-white hover:scale-110 transition-all duration-200 shadow-soft"
            >
              <img
                src={github}
                alt="github"
                className="w-5 h-5 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-white-100 font-bold text-[18px] leading-snug text-center">
            {name}
          </h3>

          <p className="mt-3 text-secondary text-[13px] leading-relaxed text-justify flex-grow">
            {description}
          </p>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2 justify-center">
            {tags.map((tag) => (
              <span
                key={`${name}-${tag.name}`}
                className="tag-pill"
              >
                #{tag.name}
              </span>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      {/* Header */}
      <motion.div
        variants={textVariant()}
        className="text-center"
      >
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      {/* Description */}
      <div className="w-full flex justify-center">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-4xl leading-[32px] text-justify mx-auto"
        >
          These projects demonstrate my expertise in Full-Stack Development,
          Software Engineering, System Design, and Problem Solving through the
          development of scalable, efficient, and user-centric applications.
          From citizen grievance management systems and professional networking
          platforms to modern web applications, each project reflects my ability
          to transform real-world challenges into innovative digital solutions.
          By leveraging modern technologies, clean architecture, and industry
          best practices, I focus on building secure, maintainable, and
          high-performance software that delivers meaningful impact and enhances
          user experiences.
        </motion.p>
      </div>

      {/* Divider */}
      <div className="section-divider mt-10 mb-2" />

      {/* Projects Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch justify-items-center">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");