import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  portfolio,
} from "../assets";

/* ===================== NAV LINKS ===================== */
export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Experience" },
  { id: "contact", title: "Contact" },
];

/* ===================== SERVICES (ALL-ROLE FRIENDLY) ===================== */
/* Covers: Software, Full Stack, Data, ML, DL (entry-level) */
const services = [
  { title: "Software Development", icon: web },
  { title: "Full Stack Web Development", icon: backend },
  { title: "Data Analysis & Machine Learning", icon: mobile },
  { title: "Problem Solving & System Thinking", icon: creator },
];

/* ===================== TECHNOLOGIES (ONLY FROM YOUR RESUME) ===================== */
const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Git", icon: git },
  { name: "Figma", icon: figma },
  { name: "Docker", icon: docker },
  { name: "Three JS", icon: threejs },
];

/* ===================== EXPERIENCE (YOUR REAL INTERNSHIPS) ===================== */
const experiences = [
  {
    title: "Full Stack Development Intern (MERN)",
    company_name: "SmartBridge Educational Services Pvt. Ltd. (APSCHE)",
    icon: web,
    iconBg: "#383E56",
    date: "May 2025 - July 2025",
    points: [
      "Completed a 2-month internship in Full Stack Development (MERN) under APSCHE.",
      "Developed full-stack applications using React, Node.js, Express.js, and MongoDB.",
      "Implemented RESTful APIs, authentication, and CRUD operations.",
      "Worked on responsive UI design and frontend-backend integration.",
      "Used Git for version control and followed industry-standard workflows.",
    ],
  },
  {
    title: "Data Science Intern",
    company_name: "Main Flow Services and Technologies Pvt. Ltd.",
    icon: backend,
    iconBg: "#1d1836",
    date: "October 2024 - November 2024",
    points: [
      "Completed a one-month internship in Data Science with Python.",
      "Worked on data preprocessing, analysis, and visualization.",
      "Applied Python-based techniques for extracting insights from datasets.",
      "Demonstrated analytical thinking and problem-solving skills.",
    ],
  },
  {
    title: "Web Development Intern",
    company_name: "Prodigy InfoTech",
    icon: mobile,
    iconBg: "#0f172a",
    date: "October 2024 - October 2024",
    points: [
      "Completed a one-month internship in Web Development with outstanding remarks.",
      "Built responsive web pages using HTML, CSS, and JavaScript.",
      "Improved UI structure, usability, and frontend logic.",
    ],
  },
];

/* ===================== TESTIMONIALS (REALISTIC & SAFE FOR STUDENTS) ===================== */
const testimonials = [
  {
    testimonial:
      "Lovaraju demonstrated strong technical fundamentals and a clear understanding of full-stack development concepts during his internship. His learning ability and dedication were commendable.",
    name: "Internship Mentor",
    designation: "Full Stack Development",
    company: "SmartBridge (APSCHE)",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    testimonial:
      "He showed genuine interest in data analysis and Python-based problem solving. His analytical approach and consistency stood out during the internship.",
    name: "Project Supervisor",
    designation: "Data Science Mentor",
    company: "Main Flow Services",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    testimonial:
      "Lovaraju worked sincerely on web development tasks and delivered responsive user interfaces. His positive attitude toward learning makes him a strong entry-level candidate.",
    name: "Technical Guide",
    designation: "Web Development",
    company: "Prodigy InfoTech",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
  },
];

/* ===================== PROJECTS (YOUR REAL GITHUB PROJECTS) ===================== */
const projects = [
  {
    name: "Blockchain Certificate Verification",
    description:
      "A blockchain-based certificate verification system that ensures secure, transparent, and tamper-proof academic certificate validation using decentralized technologies.",
    tags: [
      { name: "blockchain", color: "blue-text-gradient" },
      { name: "solidity", color: "green-text-gradient" },
      { name: "security", color: "pink-text-gradient" },
    ],
    image: carrent,
    source_code_link:
      "https://github.com/lovaraju4406/blockchain-certificate-verification",
  },
  {
    name: "ResolveNow – Complaint Management System",
    description:
      "A full-stack complaint registration and management system with role-based access, real-time status tracking, and file uploads built using the MERN stack.",
    tags: [
      { name: "mern", color: "blue-text-gradient" },
      { name: "jwt", color: "green-text-gradient" },
      { name: "socket.io", color: "pink-text-gradient" },
    ],
    image: jobit,
    source_code_link: "https://github.com/lovaraju4406/Resolve_complaint",
  },
  {
    name: "E-Commerce Platform",
    description:
      "A MERN-based e-commerce web application featuring product listings, user authentication, cart management, and order processing.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "https://github.com/lovaraju4406/Ecommerce-main",
  },
  {
    name: "Developer Portfolio",
    description:
      "A modern developer portfolio showcasing skills, internships, and projects with interactive UI and 3D animations.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "threejs", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: portfolio,
    source_code_link:
      "https://github.com/lovaraju4406/project_3D_developer_portfolio-main",
  },
];

export { services, technologies, experiences, testimonials, projects };
