// Footer.jsx

import React, { useEffect, useRef, useState } from "react";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaHeart,
  FaChevronRight,
  FaArrowUp,
} from "react-icons/fa";


const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  // ANIMATION REFS
  const itemsRef = useRef([]);

  // SCROLL BUTTON
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // SCROLL REVEAL
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    itemsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // SCROLL TOP
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      {/* Glow */}
      <div className="footer-glow"></div>

      <div className="footer-container">
        {/* LEFT */}
        <div
          ref={(el) => (itemsRef.current[0] = el)}
          className="footer-box reveal"
        >
          <h1>
        Ankita <span>Singh</span>
          </h1>

          <h3>FRONTEND DEVELOPER</h3>

          <div className="line"></div>

          <p>
            I build modern, responsive and high performance websites using
            React.js and modern technologies.
          </p>

          <div className="socials">
            <a href="/">
              <FaGithub />
            </a>

            <a href="/">
              <FaLinkedin />
            </a>

            <a href="/">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div
          ref={(el) => (itemsRef.current[1] = el)}
          className="footer-box reveal"
        >
          <h2>QUICK LINKS</h2>

          <div className="line"></div>

          <ul>
            <li>
              <FaChevronRight />
              <a href="#home">Home</a>
            </li>

            <li>
              <FaChevronRight />
              <a href="#about">About</a>
            </li>

            <li>
              <FaChevronRight />
              <a href="#skills">Skills</a>
            </li>

            <li>
              <FaChevronRight />
              <a href="#projects">Projects</a>
            </li>

            <li>
              <FaChevronRight />
              <a href="#contact-section-x9">Contact</a>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div
          ref={(el) => (itemsRef.current[2] = el)}
          className="footer-box reveal"
        >
          <h2>CONTACT INFO</h2>

          <div className="line"></div>

          <div className="contact-item">
            <div className="icon-box">
              <FaEnvelope />
            </div>

            <span>ankitasingh230705@gmail.com</span>
          </div>

          <div className="contact-item">
            <div className="icon-box">
              <FaPhoneAlt />
            </div>

            <span>+91 80054472xx</span>
          </div>

          <div className="contact-item">
            <div className="icon-box">
              <FaMapMarkerAlt />
            </div>

            <span>Prayagraj, India</span>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div
        ref={(el) => (itemsRef.current[3] = el)}
        className="footer-bottom reveal"
      >
        <p>
          © 2026 <span>Ankita Singh.</span> All Rights Reserved.
        </p>

        <div className="made">
          <FaHeart />
          <span>Made with passion</span>
        </div>

        {showButton && (
          <button className="top-btn" onClick={scrollTop}>
            <FaArrowUp />
          </button>
        )}
      </div>

      {/* Bottom Glow */}
      <div className="bottom-light"></div>
    </footer>
  );
};

export default Footer;