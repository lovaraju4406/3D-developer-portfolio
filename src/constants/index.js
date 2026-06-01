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

/* ── NAV LINKS ── */
export const navLinks = [
  { id: "about",   title: "About"      },
  { id: "work",    title: "Experience" },
  { id: "contact", title: "Contact"    },
];

/* ── SERVICES ── */
const services = [
  { title: "Software Development",               icon: web     },
  { title: "Full Stack Web Development",         icon: backend },
  { title: "Data Analysis & Machine Learning",   icon: mobile  },
  { title: "Problem Solving & System Thinking",  icon: creator },
];

/* ── TECHNOLOGIES ── */
const technologies = [
  { name: "HTML 5",       icon: html       },
  { name: "CSS 3",        icon: css        },
  { name: "JavaScript",   icon: javascript },
  { name: "TypeScript",   icon: typescript },
  { name: "React JS",     icon: reactjs    },
  { name: "Redux Toolkit",icon: redux      },
  { name: "Tailwind CSS", icon: tailwind   },
  { name: "Node JS",      icon: nodejs     },
  { name: "MongoDB",      icon: mongodb    },
  { name: "Git",          icon: git        },
  { name: "Figma",        icon: figma      },
  { name: "Docker",       icon: docker     },
  { name: "Three JS",     icon: threejs    },
];

/* ── EXPERIENCES (3 real + 1 placeholder) ── */
const experiences = [
  {
    title: "Web Development Intern",
    company_name: "Prodigy InfoTech",
    icon: mobile,
    iconBg: "#E0F2FE",
    date: "October 2024 - October 2024",
    points: [
      "Completed a Web Development internship and delivered responsive, user-friendly web applications.",
      "Developed interactive web pages using HTML, CSS, JavaScript, and modern frontend practices.",
      "Enhanced website usability, performance, and accessibility through optimized UI/UX design.",
      "Applied debugging and testing techniques to improve application reliability and user experience."
    ],
  },

  {
    title: "Data Science Intern",
    company_name: "Main Flow Services and Technologies Pvt. Ltd.",
    icon: backend,
    iconBg: "#FEF3C7",
    date: "October 2024 - November 2024",
    points: [
      "Worked on data preprocessing, exploratory data analysis, and visualization using Python.",
      "Utilized Pandas, NumPy, and Matplotlib to extract meaningful insights from large datasets.",
      "Performed data cleaning, transformation, and feature engineering to improve analysis quality.",
      "Developed analytical and problem-solving skills by working on real-world data-driven challenges."
    ],
  },

  {
    title: "Full Stack Development Intern (MERN)",
    company_name: "SmartBridge Educational Services Pvt. Ltd. (APSCHE)",
    icon: web,
    iconBg: "#EDE9FE",
    date: "May 2025 - July 2025",
    points: [
      "Built full-stack web applications using React.js, Node.js, Express.js, and MongoDB.",
      "Designed and integrated RESTful APIs for seamless frontend-backend communication.",
      "Implemented authentication, authorization, and CRUD functionalities following best practices.",
      "Developed responsive and scalable user interfaces with modern React development techniques.",
      "Collaborated using Git and GitHub, following industry-standard version control workflows."
    ],
  },

  {
    title: "Generative AI Engineer Intern",
    company_name: "SmartBridge (APSCHE) - Google Cloud",
    icon: creator,
    iconBg: "#E0F2FE",
    date: "Oct 2025 - Mar 2026",
    points: [
      "Developed an AI-powered Natural Language to SQL (NL-to-SQL) platform using Google Cloud Vertex AI, enabling users to query databases through natural language.",
      "Implemented Prompt Engineering, Retrieval-Augmented Generation (RAG), and Vector Search pipelines to improve response accuracy and contextual understanding.",
      "Integrated Large Language Models (LLMs) with structured and unstructured data sources for intelligent information retrieval and query generation.",
      "Optimized AI workflows and automation processes, reducing manual reporting efforts and improving operational efficiency.",
      "Worked with embeddings, vector databases, model orchestration, and cloud-native AI deployment on Google Cloud Platform.",
      "Gained hands-on experience in Generative AI, LLM applications, prompt optimization, and enterprise AI solution development."
    ],
  },
];

/* ── TESTIMONIALS ── */
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

/* ── PROJECTS (4 real + 2 placeholder) ── */
const projects = [
  {
    name: "Blockchain Certificate Verification",
    description:
      "A blockchain-based certificate verification system ensuring secure, transparent, and tamper-proof academic certificate validation using decentralized technologies.",
    tags: [
      { name: "blockchain",  color: "blue-text-gradient"  },
      { name: "solidity",    color: "green-text-gradient" },
      { name: "security",    color: "pink-text-gradient"  },
    ],
    image: carrent,
    source_code_link: "https://github.com/lovaraju4406/blockchain-certificate-verification",
  },
  {
    name: "ResolveNow – Complaint Management",
    description:
      "Full-stack complaint registration and management system with role-based access, real-time status tracking, AI-powered suggestions, and file uploads built using the MERN stack.",
    tags: [
      { name: "mern",       color: "blue-text-gradient"  },
      { name: "jwt",        color: "green-text-gradient" },
      { name: "socket.io",  color: "pink-text-gradient"  },
    ],
    image: jobit,
    source_code_link: "https://github.com/lovaraju4406/Resolve_complaint",
  },
  {
    name: "E-Commerce Platform",
    description:
      "A MERN-based e-commerce web application featuring product listings, user authentication, cart management, and order processing with an admin dashboard.",
    tags: [
      { name: "react",    color: "blue-text-gradient"  },
      { name: "nodejs",   color: "green-text-gradient" },
      { name: "mongodb",  color: "pink-text-gradient"  },
    ],
    image: tripguide,
    source_code_link: "https://github.com/lovaraju4406/Ecommerce-main",
  },
  {
    name: "Developer Portfolio (3D)",
    description:
      "Modern developer portfolio with interactive 3D animations, Three.js canvas models, Framer Motion transitions, and a contact form powered by EmailJS.",
    tags: [
      { name: "react",    color: "blue-text-gradient"  },
      { name: "threejs",  color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient"  },
    ],
    image: portfolio,
    source_code_link: "https://github.com/lovaraju4406/3D-developer-portfolio.git",
  },
  {
  name: "CivicConnect - Smart Citizen Grievance Portal",
  description:
    "Developed a full-stack civic issue management platform that bridges communication between Citizens, Officers, Workers, and Administrators. Citizens can report issues with images and location details, officers can assign tasks to field workers, workers can update progress in real time, and administrators can monitor system-wide performance through analytics dashboards. Features include role-based authentication, complaint lifecycle tracking, notifications, geolocation support, and real-time status management.",
  tags: [
    { name: "reactjs", color: "blue-text-gradient" },
    { name: "expressjs", color: "green-text-gradient" },
    { name: "mysql", color: "pink-text-gradient" },
  ],
  image: mobile,
  source_code_link: "https://github.com/lovaraju4406",
},
  {
  name: "DevSync - Professional Networking Platform",
  description:
    "Built a scalable LinkedIn-inspired networking platform where professionals can create detailed profiles, connect with peers, publish posts, interact through likes and comments, and expand their professional network. Implemented secure JWT authentication, role-based access control, real-time notifications, profile management, and optimized REST APIs to deliver a seamless user experience across devices.",
  tags: [
  { name: "nextjs", color: "blue-text-gradient" },
  { name: "expressjs", color: "green-text-gradient" },
  { name: "mongodb", color: "pink-text-gradient" },
  ],
  image: web,
  source_code_link: "https://github.com/lovaraju4406/ConnectPro",
},
];

export { services, technologies, experiences, testimonials, projects };
