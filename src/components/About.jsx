import React from "react"

import "../styles/About.css"

import { motion } from "framer-motion"

import profile from "../assets/profile.jpg"

import {
  Code2,
  Rocket,
  Lightbulb,
  UserRound,
  Trophy,
  Smile,
  Star,
  Download,
  ArrowRight
} from "lucide-react"

function About(){

  return(

    <section
      className="about-section"
      id="about"
    >

      {/* LEFT */}

      <motion.div
        className="about-left"

        initial={{
          opacity: 0,
          x: -100
        }}

        whileInView={{
          opacity: 1,
          x: 0
        }}

        transition={{
          duration: 0.8
        }}

        viewport={{
          amount: 0.3
        }}
      >

        <div className="about-image-card">

          <div className="about-glow"></div>

          <img
            src={profile}
            alt=""
          />

          <div className="about-circle"></div>

          <h2>
            Frontend
            <br />
            Developer
          </h2>

          <div className="clean-card">

            <Code2 />

            <div>

              <h3>
                Clean Code
              </h3>

              <p>
                Better Solutions
              </p>

            </div>

          </div>

        </div>

        {/* BUTTONS */}

        <div className="about-buttons">

          <button
            onClick={() => {
              window.open("/cv.pdf")
            }}

            className="download-btn"
          >

            Download CV

            <Download size={22}/>

          </button>

          <button className="arrow-btn">

            <ArrowRight size={26}/>

          </button>

        </div>

      </motion.div>


      {/* RIGHT */}

      <motion.div
        className="about-right"

        initial={{
          opacity: 0,
          x: 100
        }}

        whileInView={{
          opacity: 1,
          x: 0
        }}

        transition={{
          duration: 0.8
        }}

        viewport={{
          amount: 0.3
        }}
      >

        <p className="about-tag">
          — • ABOUT ME • —
        </p>

        <h1>

          Turning Ideas
          <br />

          into
          <span> Reality</span>

        </h1>

        <div className="about-line"></div>

        <p className="about-text">

          I’m a passionate Frontend Developer
          who loves creating responsive,
          user-friendly, and visually appealing
          websites. I focus on writing clean,
          maintainable code and crafting
          smooth user experiences.

        </p>


        {/* FEATURES */}

        <div className="feature-grid">

          {[
            {
              icon: <Rocket />,
              title: "Focused",
              text: "on Quality"
            },

            {
              icon: <Rocket />,
              title: "Always",
              text: "Learning"
            },

            {
              icon: <Lightbulb />,
              title: "Creative",
              text: "Problem Solver"
            },

            {
              icon: <UserRound />,
              title: "User First",
              text: "Approach"
            }

          ].map((item, index)=>(

            <motion.div
              className="feature-box"

              key={index}

              initial={{
                opacity: 0,
                y: 60
              }}

              whileInView={{
                opacity: 1,
                y: 0
              }}

              transition={{
                duration: 0.6,
                delay: index * 0.15
              }}

              viewport={{
                amount: 0.2
              }}

              whileHover={{
                y: -8
              }}
            >

              {item.icon}

              <h3>
                {item.title}
              </h3>

              <p>
                {item.text}
              </p>

            </motion.div>

          ))}

        </div>


        {/* STATS */}

        <div className="stats-box">

          {[
            {
              icon: <Code2 />,
              number: "15+",
              text: "Projects Completed"
            },

            {
              icon: <Smile />,
              number: "2+",
              text: "Years Experience"
            },

            {
              icon: <Trophy />,
              number: "50+",
              text: "Happy Clients"
            },

            {
              icon: <Star />,
              number: "10+",
              text: "Technologies"
            }

          ].map((item, index)=>(

            <motion.div
              className="stat-card"

              key={index}

              initial={{
                opacity: 0,
                scale: 0.8
              }}

              whileInView={{
                opacity: 1,
                scale: 1
              }}

              transition={{
                duration: 0.5,
                delay: index * 0.12
              }}

              viewport={{
                amount: 0.2
              }}

              whileHover={{
                y: -8
              }}
            >

              {item.icon}

              <h2>
                {item.number}
              </h2>

              <p>
                {item.text}
              </p>

            </motion.div>

          ))}

        </div>

      </motion.div>

    </section>
  )
}

export default About