
import { useState } from "react";

import "./styles/App.css";
import "./Footer.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./Contact";
import Footer from "./components/Footer";

import Calculator from "./components/Calculator";
import Weather from "./components/Weather";
import Maps from "./components/Maps";
import Palindrome from "./components/Palindrome";
import Todo from "./components/Todo";
import Register from "./components/Register";
import Stopwatch from "./components/Stopwatch";
import Toggle from "./components/Toggle";


function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [scrollPosition,setScrollPosition] = useState(0);

  if (activeProject === "calculator") {
  return (
    <Calculator
      goBack={() => {
        setActiveProject(null);

        setTimeout(() => {
          window.scrollTo({
            top: scrollPosition,
            behavior: "smooth",
          });
        }, 100);
      }}
    />
  );
}
 if (activeProject === "weather") {
  return (
    <Weather
      goBack={() => {
        setActiveProject(null);

        setTimeout(() => {
          window.scrollTo({
            top: scrollPosition,
            behavior: "smooth",
          });
        }, 100);
      }}
    />
  );
}
     if (activeProject === "maps") {
  return (
    <Maps
      goBack={() => {
        setActiveProject(null);

        setTimeout(() => {
          window.scrollTo({
            top: scrollPosition,
            behavior: "smooth",
          });
        }, 100);
      }}
    />
  );
}

if (activeProject === "palindrome") {
  return (
    <Palindrome
      goBack={() => {
        setActiveProject(null);

        setTimeout(() => {
          window.scrollTo({
            top: scrollPosition,
            behavior: "smooth",
          });
        }, 100);
      }}
    />
  );
}
if (activeProject === "register") {
  return (
    <Register
      goBack={() => {
        setActiveProject(null);

        setTimeout(() => {
          window.scrollTo({
            top: scrollPosition,
            behavior: "smooth",
          });
        }, 100);
      }}
    />
  );
}
if (activeProject === "toggle") {
  return (
    <Toggle
      goBack={() => {
        setActiveProject(null);

        setTimeout(() => {
          window.scrollTo({
            top: scrollPosition,
            behavior: "smooth",
          });
        }, 100);
      }}
    />
  );
}

if (activeProject === "todo") {
  return (
    <Todo
      goBack={() => {
        setActiveProject(null);

        setTimeout(() => {
          window.scrollTo({
            top: scrollPosition,
            behavior: "smooth",
          });
        }, 100);
      }}
    />
  );
}

if (activeProject === "stopwatch") {
  return (
    <Stopwatch
      goBack={() => {
        setActiveProject(null);

        setTimeout(() => {
          window.scrollTo({
            top: scrollPosition,
            behavior: "smooth",
          });
        }, 100);
      }}
    />
  );
}
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
     <Projects
  setActiveProject={setActiveProject}
  setScrollPosition={setScrollPosition}
/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;