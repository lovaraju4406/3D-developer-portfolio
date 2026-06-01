import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#FFFFFF",
        color: "#1C1917",
        boxShadow: "0px 6px 30px -8px rgba(124, 58, 237, 0.15)",
        border: "1px solid #EDE8DE",
        borderRadius: "16px",
      }}
      contentArrowStyle={{ borderRight: "7px solid #EDE8DE" }}
      date={experience.date}
      dateClassName='text-secondary font-medium text-[13px]'
      iconStyle={{
        background: experience.iconBg,
        boxShadow: "0 0 0 4px #EDE9FE, 0 2px 12px rgba(124,58,237,0.2)",
      }}
      icon={
        <div className='flex justify-center items-center w-full h-full rounded-full overflow-hidden p-1'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-full h-full object-contain rounded-full'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white-100 text-[20px] font-bold leading-snug'>
          {experience.title}
        </h3>
        <p
          className='text-accent text-[14px] font-semibold mt-1'
          style={{ margin: "4px 0 0" }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-none space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-secondary text-[13px] leading-relaxed flex gap-2'
          >
            <span className='text-accent mt-1 flex-shrink-0'>▸</span>
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-16 flex flex-col'>
        <VerticalTimeline lineColor='#DDD5F3'>
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
