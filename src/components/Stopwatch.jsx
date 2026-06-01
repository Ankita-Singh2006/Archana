import { useState, useRef } from "react";
import "../styles/Stopwatch.css";

function Stopwatch({ goBack }) {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  const intervalRef = useRef(null);

  const startTimer = () => {
    if (!running) {
      setRunning(true);

      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    }
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    setRunning(false);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setRunning(false);
    setTime(0);
  };

  const formatTime = () => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);

    return `${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}:${String(milliseconds).padStart(2, "0")}`;
  };

  return (
    <div className="stopwatch-page">

      <button className="backBtn" onClick={goBack}>
        ←
      </button>

      <div className="stopwatch-card">

        <h1>⏱ Stopwatch</h1>

        <div className="time-display">
          {formatTime()}
        </div>

        <div className="btn-group">

          <button
            className="start-btn"
            onClick={startTimer}
          >
            Start
          </button>

          <button
            className="stop-btn"
            onClick={stopTimer}
          >
            Stop
          </button>

          <button
            className="reset-btn"
            onClick={resetTimer}
          >
            Reset
          </button>

        </div>

      </div>

    </div>
  );
}

export default Stopwatch;