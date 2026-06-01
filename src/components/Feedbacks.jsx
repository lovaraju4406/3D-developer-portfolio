import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-white p-8 rounded-2xl xs:w-[320px] w-full border border-black-200/60 shadow-soft hover:shadow-soft-hover transition-shadow duration-300 flex flex-col"
  >
    {/* Quote Mark */}
    <div className="w-10 h-10 rounded-full bg-accent-light flex items-center justify-center mb-4">
      <span className="text-accent font-black text-[22px] leading-none">
        "
      </span>
    </div>

    {/* Testimonial */}
    <p className="text-white-100 text-[15px] leading-relaxed flex-grow text-justify">
      {testimonial}
    </p>

    {/* User Info */}
    <div className="mt-6 flex items-center gap-3 pt-5 border-t border-black-200/60">
      <img
        src={image}
        alt={name}
        className="w-11 h-11 rounded-full object-cover border-2 border-accent-light"
      />

      <div>
        <p className="text-white-100 font-semibold text-[14px]">
          {name}
        </p>

        <p className="text-secondary text-[12px] mt-0.5">
          {designation} · {company}
        </p>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <>
      {/* Header */}
      <motion.div
        variants={textVariant()}
        className="text-center"
      >
        <p className={styles.sectionSubText}>
          What others say
        </p>

        <h2 className={styles.sectionHeadText}>
          Testimonials.
        </h2>
      </motion.div>

      {/* Description */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] mx-auto text-center"
      >
        Feedback from mentors and supervisors across my internships,
        academic projects, and professional experiences. These
        testimonials reflect my dedication, technical skills,
        problem-solving ability, and commitment to delivering
        high-quality software solutions.
      </motion.p>

      {/* Divider */}
      <div className="section-divider mt-10 mb-2" />

      {/* Testimonial Cards */}
      <div className="mt-12 flex flex-wrap justify-center gap-7">
        {testimonials.map((testimonial, index) => (
          <FeedbackCard
            key={testimonial.name}
            index={index}
            {...testimonial}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Feedbacks, "");