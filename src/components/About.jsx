import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[240px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full p-[1px] rounded-2xl shadow-card hover:shadow-card-hover transition-shadow duration-300"
      style={{
        background:
          "linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(191,97,255,0.15) 100%)",
      }}
    >
      <div
        className="bg-white rounded-2xl py-6 px-8 min-h-[220px] flex justify-evenly items-center flex-col border border-black-200/60"
        style={{
          background: "linear-gradient(145deg, #FFFFFF, #FAF8F5)",
        }}
      >
        <div className="w-16 h-16 rounded-2xl bg-accent-light flex items-center justify-center shadow-sm">
          <img src={icon} alt={title} className="w-10 h-10 object-contain" />
        </div>

        <h3 className="text-white-100 text-[17px] font-bold text-center leading-snug">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      {/* INTRODUCTION */}
      <motion.div
        variants={textVariant()}
        className="flex flex-col items-center text-center"
      >
        <p className={styles.sectionSubText}>Introduction</p>

        <h2 className={styles.sectionHeadText}>Overview.</h2>

        {/* Main Attraction */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-4 text-[30px] sm:text-[48px] font-black leading-tight bg-gradient-to-r from-purple-600 via-pink-500 to-purple-700 bg-clip-text text-transparent"
        >
          Full-Stack Developer
        </motion.h3>

        <p className="mt-3 text-[18px] sm:text-[22px] font-semibold text-secondary">
          Java & MERN Stack Enthusiast • Problem Solver
        </p>
      </motion.div>

      {/* DESCRIPTION */}
      <motion.p
  variants={fadeIn("", "", 0.1, 1)}
  className="mt-8 text-secondary text-[17px] max-w-4xl leading-[34px] mx-auto text-center md:text-justify"
>
  Passionate about building scalable web applications, backend systems,
  and data-driven solutions. Skilled in Java, JavaScript, React.js,
  Node.js, Express.js, MongoDB, MySQL, and Python, with a strong
  foundation in Data Structures and Algorithms. Dedicated to creating
  efficient, user-friendly software that solves real-world problems and
  delivers meaningful impact. I enjoy transforming complex challenges
  into innovative digital solutions through clean code, thoughtful
  architecture, and continuous learning.
</motion.p>
      {/* BUTTONS */}
      <motion.div
        variants={fadeIn("", "", 0.3, 1)}
        className="mt-10 flex justify-center items-center gap-4 flex-wrap"
      >
        <a
          href="/lovaraju_resume.pdf"
          download
          className="inline-flex items-center gap-2 bg-accent text-white px-7 py-3 rounded-xl font-semibold shadow-card hover:bg-purple-700 hover:shadow-card-hover transition-all duration-300"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          Download Resume
        </a>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-white text-accent border border-accent/30 px-7 py-3 rounded-xl font-semibold hover:bg-accent-light transition-all duration-300"
        >
          Get in Touch
        </a>
      </motion.div>

      {/* Divider */}
      <div className="section-divider mt-16 mb-2" />

      {/* Services */}
      <div className="mt-12 flex flex-wrap gap-8 justify-center">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");