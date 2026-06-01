// Navbar.jsx

import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const top = window.scrollY;
        const offset = section.offsetTop - 150;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
  });

  setMenuOpen(false);
};

  return (
    <div className={`navbar-wrapper ${scrolled ? "scrolled" : ""}`}>
      <nav className={`navbar ${scrolled ? "shrink" : ""}`}>
        {/* LOGO */}
        <div className="logo">
          Portfolio<span>.</span>
        </div>

        {/* NAV LINKS */}
       <ul className={`nav-links ${menuOpen ? "mobile-open" : ""}`}>
          <li>
            <a
              className={active === "home" ? "active" : ""}
              onClick={() => scrollToSection("home")}
            >
              Home
            </a>
          </li>

          <li>
            <a
              className={active === "about" ? "active" : ""}
              onClick={() => scrollToSection("about")}
            >
              About
            </a>
          </li>
          

          <li>
            <a
              className={active === "skills" ? "active" : ""}
              onClick={() => scrollToSection("skills")}
            >
              Skills
            </a>
          </li>

          <li>
            <a
              className={active === "projects" ? "active" : ""}
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </a>
          </li>

          <li>
            <a
              className={active === "contact" ? "active" : ""}
              onClick={() => scrollToSection("contact-section-x9")}
            >
              Contact
            </a>
          </li>
        </ul>

        {/* BUTTON */}
        <button
          className="hire-btn"
          onClick={() => scrollToSection("contact-section-x9")}
        >
          ✦ Let's Talk
        </button>
         
         
        <div
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </div>
        
      </nav>
    </div>
  );
}

export default Navbar;