import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

/* ── Social profile links ── update these URLs with your actual profiles */
const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/lovaraju4406",
    color: "#1C1917",
    hoverBg: "#f0f0f0",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/lova-raju-dungala-367591314/",
    color: "#0A66C2",
    hoverBg: "#EBF3FB",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/lovaraj/",
    color: "#FFA116",
    hoverBg: "#FFF7E6",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M13.483 0a1.374 1.374 0 00-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 00-1.209 2.104 5.35 5.35 0 00-.125.513 5.527 5.527 0 00.062 2.362 5.83 5.83 0 00.349 1.017 5.938 5.938 0 001.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 00-1.951-.003l-2.396 2.392a3.021 3.021 0 01-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 01.066-.523 2.545 2.545 0 01.619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 00-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0013.483 0zm-2.866 12.815a1.38 1.38 0 00-1.38 1.382 1.38 1.38 0 001.38 1.382H20.79a1.38 1.38 0 001.38-1.382 1.38 1.38 0 00-1.38-1.382z" />
      </svg>
    ),
  },
  {
    name: "GeeksForGeeks",
    url: "https://www.geeksforgeeks.org/profile/lovarajudungala",
    color: "#2F8D46",
    hoverBg: "#E8F5E9",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M21.45 14.315c-.143.28-.334.532-.565.745a3.691 3.691 0 01-1.104.695 4.51 4.51 0 01-3.116-.016 3.79 3.79 0 01-1.106-.702c-.12-.116-.23-.24-.328-.371a4.87 4.87 0 01-.52-1.071H12.7a4.87 4.87 0 01-.52 1.071 3.581 3.581 0 01-.328.371 3.79 3.79 0 01-1.106.702 4.51 4.51 0 01-3.116.016 3.691 3.691 0 01-1.104-.695 3.31 3.31 0 01-.565-.745A3.486 3.486 0 015.6 12.9c0-.47.087-.93.262-1.367.175-.437.432-.84.762-1.17a4.493 4.493 0 011.168-.8 3.5 3.5 0 011.432-.302 3.64 3.64 0 011.537.337 4.2 4.2 0 011.117.777c.134.13.254.27.362.42H12c.107-.149.228-.29.362-.42a4.2 4.2 0 011.117-.777 3.64 3.64 0 011.537-.337 3.5 3.5 0 011.432.302 4.493 4.493 0 011.168.8c.33.33.587.733.762 1.17.175.437.263.898.262 1.367a3.486 3.486 0 01-.19 1.415zm.552-8.58a1.286 1.286 0 00-.592-.338 3.024 3.024 0 00-.91-.124 3.41 3.41 0 00-1.115.188 3.872 3.872 0 00-.96.5 4.487 4.487 0 00-.77.722 5.08 5.08 0 00-.54.872H6.885a5.08 5.08 0 00-.54-.872 4.487 4.487 0 00-.77-.722 3.872 3.872 0 00-.96-.5A3.41 3.41 0 003.5 5.273a3.024 3.024 0 00-.91.124 1.286 1.286 0 00-.592.338.758.758 0 00-.2.545c.01.222.07.44.175.636.106.196.256.365.438.494a2.12 2.12 0 00.637.29 2.886 2.886 0 00.776.099 4.08 4.08 0 001.315-.206 4.613 4.613 0 001.1-.533 5.28 5.28 0 00.854-.747 6.018 6.018 0 00.626-.87h7.562a6.018 6.018 0 00.626.87 5.28 5.28 0 00.854.747 4.613 4.613 0 001.1.533 4.08 4.08 0 001.315.206 2.886 2.886 0 00.776-.099 2.12 2.12 0 00.637-.29 1.4 1.4 0 00.438-.494 1.36 1.36 0 00.175-.636.758.758 0 00-.2-.545z" />
      </svg>
    ),
  },
];

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto overflow-hidden'>

      {/* Decorative background blobs */}
      <div className='absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse pointer-events-none' />
      <div className='absolute top-40 right-10 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse pointer-events-none' style={{ animationDelay: "1s" }} />
      <div className='absolute bottom-40 left-1/3 w-56 h-56 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse pointer-events-none' style={{ animationDelay: "2s" }} />

      {/* Hero content */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-10`}
      >
        {/* Purple accent line */}
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-accent' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        {/* Text content */}
        <div className='mt-2'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Eyebrow label */}
            <span className='inline-block px-3 py-1 rounded-full bg-accent-light text-accent text-[12px] font-semibold tracking-widest uppercase mb-4'>
              Available for opportunities
            </span>

            <h1 className={`${styles.heroHeadText}`}>
              Hi, I'm{" "}
              <span className='text-accent'>Lovaraju</span>
            </h1>
          </motion.div>

          <motion.p
            className={`${styles.heroSubText} mt-3 max-w-xl`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            I build scalable software,{" "}
            <br className='sm:block hidden' />
            full-stack web apps & intelligent systems.
          </motion.p>

          {/* Quick badges */}
          <motion.div
            className='mt-6 flex flex-wrap gap-2'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          >
            {["MERN Stack", "Data Science", "Blockchain", "3 Internships"].map((badge) => (
              <span
                key={badge}
                className='px-3 py-1 rounded-full bg-white border border-black-200 text-secondary text-[12px] font-medium shadow-sm'
              >
                {badge}
              </span>
            ))}
          </motion.div>

          {/* ── Social profile icons ── */}
          <motion.div
            className='mt-5 flex items-center gap-3'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          >
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target='_blank'
                rel='noopener noreferrer'
                title={social.name}
                className='group relative flex items-center justify-center w-10 h-10 rounded-xl bg-white border border-black-200 shadow-sm transition-all duration-200 hover:scale-110 hover:shadow-soft'
                style={{ color: social.color }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = social.hoverBg;
                  e.currentTarget.style.borderColor = social.color + "55";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#FFFFFF";
                  e.currentTarget.style.borderColor = "";
                }}
              >
                {social.icon}

                {/* Tooltip */}
                <span className='absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white-100 text-white text-[10px] font-semibold px-2 py-0.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none shadow-soft'>
                  {social.name}
                </span>
              </a>
            ))}

            {/* Divider + label */}
            <div className='flex items-center gap-2 ml-1'>
              <div className='w-px h-5 bg-black-200' />
              <span className='text-secondary text-[11px] font-medium'>Find me on</span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* 3D Computer Canvas */}
      <ComputersCanvas />

      {/* Scroll indicator */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[32px] h-[56px] rounded-3xl border-2 border-accent/30 flex justify-center items-start p-2 hover:border-accent transition-colors duration-300'>
            <motion.div
              animate={{ y: [0, 18, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className='w-2.5 h-2.5 rounded-full bg-accent'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;