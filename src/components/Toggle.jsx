import React, { useState } from "react";
import { Sun, Moon, ArrowLeft } from "lucide-react";

function Toggle({ goBack }) {
  const [dark, setDark] = useState(false);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: dark
          ? "linear-gradient(135deg,#0f172a,#020617)"
          : "linear-gradient(135deg,#38bdf8,#67e8f9)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        transition: "0.5s",
      }}
    >
      {/* Back Button */}
      <button
        onClick={goBack}
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          width: "50px",
          height: "50px",
          border: "none",
          borderRadius: "50%",
          cursor: "pointer",
          fontSize: "22px",
          background: "#00c6ff",
          color: "#fff",
        }}
      >
        <ArrowLeft size={24} />
      </button>

      {/* Background Glow */}
      <div
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: dark
            ? "rgba(255,255,255,0.08)"
            : "rgba(255,255,255,0.25)",
          filter: "blur(120px)",
        }}
      />

      {/* Card */}
      <div
        style={{
          width: "90%",
          maxWidth: "420px",
          padding: "40px",
          borderRadius: "25px",
          textAlign: "center",
          backdropFilter: "blur(20px)",
          background: "rgba(255,255,255,0.12)",
          border: "1px solid rgba(255,255,255,0.2)",
          color: "#fff",
          zIndex: 2,
        }}
      >
        <h1 style={{ marginBottom: "30px" }}>
          Toggle Theme
        </h1>

        <div
          style={{
            width: "140px",
            height: "140px",
            margin: "0 auto 30px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: dark ? "#111827" : "#fde047",
            boxShadow: dark
              ? "0 0 40px white"
              : "0 0 40px #fde047",
            transition: "0.5s",
          }}
        >
          {dark ? (
            <Moon size={60} color="white" />
          ) : (
            <Sun size={60} color="#f97316" />
          )}
        </div>

        <button
          onClick={() => setDark(!dark)}
          style={{
            padding: "14px 35px",
            border: "none",
            borderRadius: "30px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "600",
            background: "#00c6ff",
            color: "#fff",
          }}
        >
          Switch to {dark ? "Light" : "Dark"} Mode
        </button>

        <h2 style={{ marginTop: "25px" }}>
          {dark ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </h2>
      </div>
    </div>
  );
}

export default Toggle;