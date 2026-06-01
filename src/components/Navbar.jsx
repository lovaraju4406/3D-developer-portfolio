import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-20 transition-all duration-300 ${
        scrolled ? "navbar-glass shadow-soft" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        {/* Logo */}
        <Link
          to='/'
          className='flex items-center gap-3 group'
          onClick={() => { setActive(""); window.scrollTo(0, 0); }}
        >
          <div className='w-9 h-9 rounded-xl bg-accent-light flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-200'>
            <img src={logo} alt='logo' className='w-6 h-6 object-contain' />
          </div>
          <div className='flex flex-col leading-tight'>
            <p className='text-white-100 text-[16px] font-bold tracking-tight'>
              Lovaraju Dungala
            </p>
            <p className='text-secondary text-[11px] font-medium hidden sm:block'>
              Software Developer
            </p>
          </div>
        </Link>

        {/* Desktop nav links */}
        <ul className='list-none hidden sm:flex flex-row gap-1'>
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <a
                href={`#${nav.id}`}
                onClick={() => setActive(nav.title)}
                className={`px-4 py-2 rounded-lg text-[14px] font-semibold transition-all duration-200 ${
                  active === nav.title
                    ? "bg-accent-light text-accent"
                    : "text-secondary hover:text-white-100 hover:bg-black-100"
                }`}
              >
                {nav.title}
              </a>
            </li>
          ))}

          {/* Resume CTA */}
          <li>
            <a
              href='/resume.pdf'
              download
              className='ml-2 px-4 py-2 rounded-lg text-[14px] font-semibold bg-accent text-white hover:bg-purple-700 transition-all duration-200 shadow-sm'
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <button
            className='w-9 h-9 flex items-center justify-center rounded-lg bg-black-100 hover:bg-black-200 transition-colors'
            onClick={() => setToggle(!toggle)}
          >
            <img
              src={toggle ? close : menu}
              alt='menu'
              className='w-5 h-5 object-contain'
            />
          </button>

          {/* Mobile dropdown */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-5 bg-white shadow-soft border border-black-200 absolute top-[70px] right-4 min-w-[180px] z-10 rounded-2xl`}
          >
            <ul className='list-none flex flex-col gap-1 w-full'>
              {navLinks.map((nav) => (
                <li key={nav.id}>
                  <a
                    href={`#${nav.id}`}
                    onClick={() => { setToggle(false); setActive(nav.title); }}
                    className={`block px-4 py-2 rounded-lg text-[14px] font-medium transition-all ${
                      active === nav.title
                        ? "bg-accent-light text-accent"
                        : "text-secondary hover:text-white-100 hover:bg-black-100"
                    }`}
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href='/resume.pdf'
                  download
                  className='block mt-2 px-4 py-2 rounded-lg text-[14px] font-semibold text-center bg-accent text-white hover:bg-purple-700 transition-colors'
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
