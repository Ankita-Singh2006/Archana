import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput("");
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <section id="Calculator" className="live-btn">
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#0f172a",
      }}
      
    >
      <div
        style={{
          width: "320px",
          padding: "20px",
          borderRadius: "20px",
          background: "#1e293b",
          boxShadow: "0 0 20px rgba(0,255,255,0.3)",
        }}
      >
        <input
          type="text"
          value={input}
          readOnly
          style={{
            width: "100%",
            height: "60px",
            fontSize: "24px",
            textAlign: "right",
            marginBottom: "15px",
            borderRadius: "10px",
            border: "none",
            padding: "10px",
          }}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "10px",
          }}
        >
          <button onClick={clearInput}>C</button>
          <button onClick={() => handleClick("/")}>/</button>
          <button onClick={() => handleClick("*")}>×</button>
          <button onClick={() => handleClick("-")}>-</button>

          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button onClick={() => handleClick("+")}>+</button>

          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={calculate}>=</button>

          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button onClick={() => handleClick(".")}>.</button>

          <button onClick={() => handleClick("0")}>0</button>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Calculator;