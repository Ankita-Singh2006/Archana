
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
// import Todo from "./components/Todo";
// import Music from "./components/Music";

function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [scrollPosition,setScrollPosition] = useState(0);

  if (activeProject === "calculator") {
    return (
      <>
        <button
          style={{
            margin: "20px",
            padding: "10px 20px",
            cursor: "pointer",
          }}
          onClick={() => {
  setActiveProject(null);

  setTimeout(() => {
    window.scrollTo({
      top: scrollPosition,
      behavior: "smooth",
    });
  }, 100);
}}
        >
          ← Back To Portfolio
        </button>

        <Calculator />
      </>
    );
  }
//  if (activeProject === "weather") {
//   return (
//     <>
//       {/* 🔙 TOP BAR */}
//       <div className="top-bar">
//         <button
//           className="back-button"
//           onClick={() => {
//             setActiveProject(null);

//             setTimeout(() => {
//               window.scrollTo({
//                 top: scrollPosition,
//                 behavior: "smooth",
//               });
//             }, 100);
//           }}
//         >
//           ← Back
//         </button>
//       </div>

//       {/* 🌤️ WEATHER COMPONENT OUTSIDE TOP BAR */}
//       <Weather />
//     </>
//   );
// }
      if (activeProject === "maps") {
  return (
    <>
      {/* TOP BAR */}
      <div className="top-bar">
        <button
          className="back-button"
          onClick={() => {
            setActiveProject(null);

            setTimeout(() => {
              window.scrollTo({
                top: scrollPosition,
                behavior: "smooth",
              });
            }, 100);
          }}
        >
          ← Back
        </button>
      </div>

      {/* MAP OUTSIDE TOP BAR (VERY IMPORTANT) */}
      <Maps />
    </>
  );
}

if (activeProject === "palindrome") {
  return (
    <>
      <button onClick={() => {
        setActiveProject(null);
        setTimeout(() => {
          window.scrollTo({
            top: scrollPosition,
            behavior: "smooth",
          });
        }, 100);
      }}>
        ← Back To Portfolio
      </button>

      <Palindrome />
    </>
  );
}

// if (activeProject === "todo") {
//   return (
//     <>
//       <button onClick={() => {
//         setActiveProject(null);
//         setTimeout(() => {
//           window.scrollTo({
//             top: scrollPosition,
//             behavior: "smooth",
//           });
//         }, 100);
//       }}>
//         ← Back To Portfolio
//       </button>

//       <Todo />
//     </>
//   );
// }

// if (activeProject === "music") {
//   return (
//     <>
//       <button onClick={() => {
//         setActiveProject(null);
//         setTimeout(() => {
//           window.scrollTo({
//             top: scrollPosition,
//             behavior: "smooth",
//           });
//         }, 100);
//       }}>
//         ← Back To Portfolio
//       </button>

//       <Music />
//     </>
//   );
// }

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