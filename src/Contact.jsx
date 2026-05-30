// Contact.jsx

import React, { useEffect, useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  const form = useRef();

  // SCROLL ANIMATION
  const cardsRef = useRef([]);

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

    cardsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // EMAIL SEND
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5i8t8vi",
        "template_c6bao47",
        form.current,
        "EL8voMStKCwyGzC7b"
      )
      .then(
        () => {
          alert("Message Sent Successfully 🚀");
          form.current.reset();
        },
        () => {
          alert("Failed to Send ❌");
        }
      );
  };

  return (
    <section id="contact-section-x9" className="contact">
      {/* Glow */}
      <div className="blur blur1"></div>
      <div className="blur blur2"></div>

      <div className="container">
        {/* HEADER */}
        <div
          ref={(el) => (cardsRef.current[0] = el)}
          className="header reveal"
        >
          <p className="subtitle">GET IN TOUCH</p>

          <h1>
            Contact <span>Me</span>
          </h1>

          <p className="desc">
            Have a project in mind or want to collaborate?
            <br />
            Feel free to reach out anytime.
          </p>
        </div>

        {/* GRID */}
        <div className="grid">
          {/* LEFT */}
          <div className="left">
            {/* CARD 1 */}
            <div
              ref={(el) => (cardsRef.current[1] = el)}
              className="card reveal"
            >
              <h2>Let's Talk</h2>

              <p className="text">
                I'm always open to discussing new projects and creative ideas.
              </p>

              <div className="info">
                <div className="icon">
                  <FaEnvelope />
                </div>

                <div>
                  <h3>Email</h3>
                  <p>ankitasingh230705@gmail.com</p>
                </div>
              </div>

              <div className="info">
                <div className="icon">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h3>Phone</h3>
                  <p>+91 8005447254</p>
                </div>
              </div>

              <div className="info">
                <div className="icon">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h3>Location</h3>
                  <p>Prayagraj, India</p>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div
              ref={(el) => (cardsRef.current[2] = el)}
              className="card reveal"
            >
              <h2>Follow Me</h2>

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
          </div>

          {/* FORM */}
          <div
            ref={(el) => (cardsRef.current[3] = el)}
            className="form-card reveal"
          >
            <h2>Send Message</h2>

            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
              />

              <textarea
                rows="6"
                name="message"
                placeholder="Your Message"
                required
              ></textarea>

              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>

        {/* BOTTOM */}
        {/* <div
          ref={(el) => (cardsRef.current[4] = el)}
          className="bottom reveal"
        >
          <h2>I usually reply within 24 hours 🚀</h2>
        </div> */}
      </div>
    </section>
  );
}

export default Contact;