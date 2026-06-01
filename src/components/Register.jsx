import React, { useState, useEffect } from "react";

function Register({goBack}) {
  const [isLogin, setIsLogin] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  // Snow particles
  const snowflakes = Array.from({ length: 25 });

  // Handle Input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !isLogin &&
      formData.password !== formData.confirmPassword
    ) {
      alert("Passwords do not match ❌");
      return;
    }

    alert(
      isLogin
        ? "Login Successful 🚀"
        : "Registration Successful 🎉"
    );
  };

  return (
    <div
      style={{
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: darkMode
          ? "linear-gradient(135deg, #0f2027, #203a43, #2c5364)"
          : "linear-gradient(135deg, #74ebd5, #9face6)",
        fontFamily: "Arial",
        transition: "0.5s",
      }}
    >
        <button
  className="backBtn"
  onClick={goBack}
>
  ←
</button>
      {/* Snow Effect */}
      {snowflakes.map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: "-10px",
            left: `${Math.random() * 100}%`,
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            background: "white",
            opacity: 0.8,
            animation: `snowfall ${5 + Math.random() * 5}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      {/* Card */}
      <div
        style={{
          width: "360px",
          padding: "35px",
          borderRadius: "25px",
          background: darkMode
            ? "rgba(255,255,255,0.12)"
            : "rgba(255,255,255,0.7)",
          backdropFilter: "blur(18px)",
          border: "1px solid rgba(255,255,255,0.2)",
          boxShadow:
            "0 8px 32px rgba(0,0,0,0.37)",
          color: darkMode ? "white" : "black",
          textAlign: "center",
          transition: "0.4s",
        }}
      >
        {/* Dark Mode */}
        <div style={{ textAlign: "right" }}>
          <button
            onClick={() => setDarkMode(!darkMode)}
            style={{
              border: "none",
              background: "transparent",
              fontSize: "22px",
              cursor: "pointer",
            }}
          >
            {darkMode ? "🌙" : "☀️"}
          </button>
        </div>

        {/* Heading */}
        <h1
          style={{
            marginBottom: "10px",
            textShadow: "0 0 10px rgba(255,255,255,0.5)",
          }}
        >
          {isLogin
            ? "Welcome Back 👋"
            : "Create Account 🚀"}
        </h1>

        <p style={{ marginBottom: "25px", opacity: 0.8 }}>
          {isLogin
            ? "Login to continue"
            : "Register to continue"}
        </p>

        <form onSubmit={handleSubmit}>
          {/* Name */}
          {!isLogin && (
            <div style={{ marginBottom: "20px" }}>
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                value={formData.name}
                onChange={handleChange}
                required
                style={inputStyle(darkMode)}
              />
            </div>
          )}

          {/* Email */}
          <div style={{ marginBottom: "20px" }}>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={inputStyle(darkMode)}
            />
          </div>

          {/* Password */}
          <div
            style={{
              marginBottom: "20px",
              position: "relative",
            }}
          >
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              required
              style={inputStyle(darkMode)}
            />

            {/* Eye */}
            <span
              onClick={() =>
                setShowPassword(!showPassword)
              }
              style={{
                position: "absolute",
                right: "15px",
                top: "12px",
                cursor: "pointer",
                fontSize: "18px",
              }}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          {/* Confirm Password */}
          {!isLogin && (
            <div style={{ marginBottom: "20px" }}>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                style={inputStyle(darkMode)}
              />
            </div>
          )}

          {/* Button */}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              border: "none",
              borderRadius: "30px",
              background:
                "linear-gradient(135deg, #00c6ff, #0072ff)",
              color: "white",
              fontSize: "16px",
              cursor: "pointer",
              transition: "0.3s",
              boxShadow:
                "0 0 15px rgba(0,198,255,0.6)",
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.boxShadow =
                "0 0 25px rgba(0,198,255,1)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow =
                "0 0 15px rgba(0,198,255,0.6)";
            }}
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        {/* Switch */}
        <p style={{ marginTop: "20px" }}>
          {isLogin
            ? "Don't have an account?"
            : "Already have an account?"}

          <span
            onClick={() => setIsLogin(!isLogin)}
            style={{
              color: "#00c6ff",
              cursor: "pointer",
              marginLeft: "5px",
              fontWeight: "bold",
            }}
          >
            {isLogin ? "Register" : "Login"}
          </span>
        </p>
      </div>

      {/* Snow Animation */}
      <style>
        {`
          @keyframes snowfall {
            0% {
              transform: translateY(-10px);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            100% {
              transform: translateY(100vh);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
}

// Input Style
const inputStyle = (darkMode) => ({
  width: "100%",
  padding: "12px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,0.2)",
  outline: "none",
  fontSize: "15px",
  background: darkMode
    ? "rgba(255,255,255,0.15)"
    : "rgba(255,255,255,0.5)",
  backdropFilter: "blur(10px)",
  color: darkMode ? "white" : "black",
  transition: "0.3s",
  boxSizing: "border-box",
});

export default Register;