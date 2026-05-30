import React from "react"
import "../styles/Projects.css"

import { motion } from "framer-motion"

import calculator from "../assets/calculator.jpg"
import weather from "../assets/weather.jpg"
import maps from "../assets/maps.jpg"
import palindrome from "../assets/palindrome.jpg"
import portfolio from "../assets/portfolio.jpg"
import dashboard from "../assets/dashboard.jpg"
import todo from "../assets/todo.jpg"
import music from "../assets/music.jpg"

import {
  Calculator,
  CloudSun,
  MapPin,
  ListChecks,
  User,
  LayoutDashboard,
  CheckCircle,
  Music
} from "lucide-react"

const projects = [

  {
    image: calculator,
    icon: <Calculator />,
    title: "Calculator",
    desc: "Modern calculator app with beautiful UI.",
    color: "#4da6ff",
    demo : "calculator"
  },

  {
    image: weather,
    icon: <CloudSun />,
    title: "Weather App",
    desc: "Real-time weather app with API integration.",
    color: "#ffd166",
     demo : "weather"
  },

  {
    image: maps,
    icon: <MapPin />,
    title: "Maps App",
    desc: "Interactive maps app with location search.",
    color: "#38ff88",
     demo : "maps"
  },

  {
    image: palindrome,
    icon: <ListChecks />,
    title: "Palindrome Checker",
    desc: "Wether a string is palindrome or not.",
    color: "#d66bff",
     demo : "palindrome"
  },

  {
    image: portfolio,
    icon: <User />,
    title: "Portfolio Website",
    desc: "Personal portfolio website with animations.",
    color: "#ff7ad9"
  },

  {
    image: dashboard,
    icon: <LayoutDashboard />,
    title: "Dashboard",
    desc: "Admin dashboard with charts and analytics.",
    color: "#8c7dff"
  },

  {
    image: todo,
    icon: <CheckCircle />,
    title: "Todo App",
    desc: "Task management app to organize work.",
    color: "#38ff88",
     demo : "todo"
  },

  {
    image: music,
    icon: <Music />,
    title: "Music Player",
    desc: "Beautiful music player with animations.",
    color: "#ff7ad9",
     demo : "music"
  }

]

function Projects({setActiveProject,setScrollPosition,}) {

  return (

    <section
      className="projects-section"
      id="projects"
    >

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.3 }}
      >

        <p className="small-title">
          WHAT I'VE BUILT
        </p>

        <h1>
          My <span>Projects</span>
        </h1>

        <p className="project-subtitle">
          Here are some of my modern and creative projects built using React and CSS.
        </p>

      </motion.div>


      <div className="projects-grid">

        {projects.map((project, index) => (

          <motion.div
            className="project-card"
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
              delay: index * 0.15,
              ease: "easeOut"
            }}

            viewport={{
              amount: 0.2
            }}
          >

            <div className="image-box">

              <img
                src={project.image}
                alt={project.title}
              />

            </div>

            <div className="project-content">

              <div className="project-header">

                <div
                  className="project-icon"
                  style={{
                    background: `${project.color}20`,
                    color: project.color,
                    border: `1px solid ${project.color}`
                  }}
                >
                  {project.icon}
                </div>

                <h3>{project.title}</h3>

              </div>

              <p>{project.desc}</p>

              <div className="project-buttons">

              <button
  className="live-btn"
  onClick={() => {
    setScrollPosition(window.scrollY);
    setActiveProject(project.demo);
  }}
>
  ↗ Live Demo
</button>

                <button className="github-btn">
                  GitHub
                </button>

              </div>

            </div>

          </motion.div>

        ))}

      </div>


      <motion.div
        className="more-btn-box"

        initial={{ opacity: 0, y: 50 }}

        whileInView={{
          opacity: 1,
          y: 0
        }}

        transition={{
          duration: 0.7
        }}

        viewport={{
          amount: 0.3
        }}
      >

        <button className="more-btn">
          View More Projects →
        </button>

      </motion.div>

    </section>
  )
}

export default Projects