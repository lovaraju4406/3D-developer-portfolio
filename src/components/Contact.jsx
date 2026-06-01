import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
          to_email: import.meta.env.VITE_EMAILJS_RECEIVER_EMAIL,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className='xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'>

      {/* Form card */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-white border border-black-200/60 p-8 rounded-2xl shadow-soft'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText} mt-1`}>Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className='mt-10 flex flex-col gap-6'>
          <label className='flex flex-col gap-2'>
            <span className='text-white-100 text-[14px] font-semibold'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-black-100 border border-black-200/60 py-3.5 px-5 placeholder:text-secondary/60 text-white-100 rounded-xl outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all text-[14px]'
              required
            />
          </label>

          <label className='flex flex-col gap-2'>
            <span className='text-white-100 text-[14px] font-semibold'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-black-100 border border-black-200/60 py-3.5 px-5 placeholder:text-secondary/60 text-white-100 rounded-xl outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all text-[14px]'
              required
            />
          </label>

          <label className='flex flex-col gap-2'>
            <span className='text-white-100 text-[14px] font-semibold'>Your Message</span>
            <textarea
              rows={6}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What would you like to say?'
              className='bg-black-100 border border-black-200/60 py-3.5 px-5 placeholder:text-secondary/60 text-white-100 rounded-xl outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all text-[14px] resize-none'
              required
            />
          </label>

          <button
            type='submit'
            className='w-fit bg-accent text-white py-3 px-10 rounded-xl font-semibold shadow-card hover:bg-purple-700 hover:shadow-card-hover transition-all duration-200 flex items-center gap-2'
          >
            {loading ? (
              <>
                <svg className='animate-spin w-4 h-4' fill='none' viewBox='0 0 24 24'>
                  <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
                  <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z' />
                </svg>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8' />
                </svg>
              </>
            )}
          </button>
        </form>
      </motion.div>

      {/* Earth canvas */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
