import { useState } from "react";
import "../styles/Palindrome.css";

function Palindrome({goBack}) {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);

  const checkPalindrome = () => {
    const cleaned = text.toLowerCase().replace(/[^a-z0-9]/g, "");

    if (!cleaned) {
      setResult(null);
      return;
    }

    const reversed = cleaned.split("").reverse().join("");

    setResult(cleaned === reversed);
  };

  return (
    <div className="pal-app">
      <button
  className="backBtn"
  onClick={goBack}
>
  ←
</button>
      <div className="pal-container">
        <div className="pal-logo-circle">
          <span>{"</>"}</span>
        </div>

        <h1 className="pal-title">
          <span>Palindrome</span> Checker
        </h1>

        <p className="pal-subtitle">
          Enter a word, phrase, or number to check if it is a palindrome.
        </p>

        <div className="pal-divider">
          <span></span>
        </div>

        <div className="pal-input-section">
          <label>Enter Text</label>

          <input
            type="text"
            className="pal-input-box"
            placeholder="Type something..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <button
            className="pal-check-btn"
            onClick={checkPalindrome}
          >
            Check Palindrome
          </button>
        </div>

        <div className="pal-result-card">
          <h2>Result</h2>

          <div className="pal-result-icon">
            {result === null ? "?" : result ? "✓" : "✕"}
          </div>

          <h3>
            {result === null
              ? "Your result will appear here"
              : result
              ? "It's a Palindrome"
              : "Not a Palindrome"}
          </h3>

          <p>
            {result === null
              ? "Enter text above and click the button."
              : result
              ? "The text reads the same forwards and backwards."
              : "The text does not read the same forwards and backwards."}
          </p>
        </div>

        <div className="pal-note">
          <div className="pal-info">i</div>

          <p>
            Note: Spaces, punctuation and case are ignored while
            checking for palindrome.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Palindrome;