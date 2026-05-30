// Hero.jsx

import React from "react";
import "../styles/Hero.css";
import { motion } from "framer-motion";

import profile from "../assets/profile.jpg";

function Hero() {

  const container = {
    hidden: {},

    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 80,
    },

    show: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.9,
        ease: "easeOut",
      },
    },
  };

  return (

    <motion.section
      className="hero"
      id="home"
      variants={container}
      initial="hidden"

      whileInView="show"

      viewport={{
        once: false,
        amount: 0.2,
      }}
    >

      {/* LEFT SIDE */}
      <motion.div
        className="hero-left"
        variants={fadeUp}
      >

        <motion.div
          className="hero-badge"
          variants={fadeUp}
        >
          👋 Hello, I'm
        </motion.div>

        <motion.h1
          className="hero-title"
          variants={fadeUp}
        >
          Frontend <br />
          Developer
        </motion.h1>

        <motion.p
          className="hero-text"
          variants={fadeUp}
        >
          I build modern, responsive and
          high-performance websites using
          React.js and modern technologies.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          className="hero-buttons"
          variants={fadeUp}
        >

          <motion.button
            whileHover={{
              scale: 1.08,
            }}

            whileTap={{
              scale: 0.95,
            }}

            className="primary-btn"

            onClick={() => {
              document
                .getElementById("projects")
                .scrollIntoView({
                  behavior: "smooth",
                });
            }}
          >
            View Projects →
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.08,
            }}

            whileTap={{
              scale: 0.95,
            }}

            className="secondary-btn"

            onClick={() => {
              document
                .getElementById("contact-section-x9")
                .scrollIntoView({
                  behavior: "smooth",
                });
            }}
          >
            Contact Me
          </motion.button>

        </motion.div>

        {/* SOCIAL */}
        <motion.div
          className="social-area"
          variants={fadeUp}
        >

          <p>Follow Me</p>

          <div className="social-icons">

            <motion.a
              whileHover={{
                y: -6,
                scale: 1.2,
              }}
              href="#"
            >
              <i className="fab fa-github"></i>
            </motion.a>

            <motion.a
              whileHover={{
                y: -6,
                scale: 1.2,
              }}
              href="#"
            >
              <i className="fab fa-linkedin-in"></i>
            </motion.a>

            <motion.a
              whileHover={{
                y: -6,
                scale: 1.2,
              }}
              href="#"
            >
              <i className="fab fa-twitter"></i>
            </motion.a>

            <motion.a
              whileHover={{
                y: -6,
                scale: 1.2,
              }}
              href="#"
            >
              <i className="fab fa-instagram"></i>
            </motion.a>

          </div>

        </motion.div>

      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div
        className="hero-right"

        initial={{
          opacity: 0,
          scale: 0.6,
          rotate: -10,
          y: 100,
        }}

        whileInView={{
          opacity: 1,
          scale: 1,
          rotate: 0,
          y: 0,
        }}

        viewport={{
          once: false,
          amount: 0.3,
        }}

        transition={{
          duration: 1,
          ease: "easeOut",
        }}
      >

        {/* PROFILE IMAGE */}
        <motion.div
          className="profile-circle"

          animate={{
            y: [0, -15, 0],
          }}

          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >

          <img
            src={profile}
            alt="profile"
          />

        </motion.div>

        {/* EXPERIENCE */}
        <motion.div
          className="experience-box"

          animate={{
            y: [0, -10, 0],
          }}

          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        >
          ⚡ 2+ Years <br />
          Experience
        </motion.div>

        {/* FREELANCE */}
        <motion.div
          className="freelance-box"

          animate={{
            y: [0, 10, 0],
          }}

          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        >
          🚀 Available for <br />
          Freelance
        </motion.div>

      </motion.div>

    </motion.section>
  );
}

export default Hero;