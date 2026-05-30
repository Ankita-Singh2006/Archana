// ===== Skills.jsx =====

import React from "react";
import "../styles/Skills.css";

import { motion } from "framer-motion";

const skillsData = [
  {
    name: "HTML",
    icon: "🔥",
    percent: 95,
    color: "#ff6b6b",
  },

  {
    name: "CSS",
    icon: "🎨",
    percent: 92,
    color: "#38bdf8",
  },

  {
    name: "JavaScript",
    icon: "⚡",
    percent: 88,
    color: "#facc15",
  },

  {
    name: "React",
    icon: "⚛️",
    percent: 90,
    color: "#22d3ee",
  },

  

  

 

 

  {
    name: "Python",
    icon: "🐍",
    percent: 78,
    color: "#facc15",
  },

 
];

const Skills = () => {

  return (

    <section
      className="skills-section"
      id="skills"
    >

      {/* TOP */}

      <motion.div
        className="skills-top"

        initial={{
          opacity: 0,
          y: -60
        }}

        whileInView={{
          opacity: 1,
          y: 0
        }}

        transition={{
          duration: 0.8
        }}

        viewport={{
          amount: 0.3
        }}
      >

        <span className="skills-tag">
          MY EXPERTISE
        </span>

        <h2>
          Creative <span>Skills</span>
        </h2>

        <p>
          Modern technologies & tools I use to build futuristic websites
        </p>

      </motion.div>


      {/* GRID */}

      <div className="skills-grid">

        {skillsData.map((skill, index) => (

          <motion.div
            className="skill-card"

            key={index}

            initial={{
              opacity: 0,
              y: 100,
              scale: 0.85
            }}

            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1
            }}

            transition={{
              duration: 0.7,
              delay: index * 0.12,
              ease: "easeOut"
            }}

            viewport={{
              amount: 0.2
            }}

            whileHover={{
              y: -10
            }}

            style={{
              "--clr": skill.color
            }}
          >

            <div className="card-glow"></div>

            <div className="skill-icon">
              <span>{skill.icon}</span>
            </div>

            <h3>{skill.name}</h3>

            <div className="skill-progress">

              <motion.div
                className="skill-progress-bar"

                initial={{
                  width: 0
                }}

                whileInView={{
                  width: `${skill.percent}%`
                }}

                transition={{
                  duration: 1.4,
                  delay: index * 0.15
                }}

                viewport={{
                  amount: 0.3
                }}
              />

            </div>

            <div className="skill-bottom">

              <span>{skill.percent}%</span>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default Skills;