import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function AQICard() {
  return (
    <div className="aqi-card glass">

      <h3>Air Quality</h3>

      <div className="aqi-circle">

        <CircularProgressbar
          value={58}
          text="58"
          styles={buildStyles({
            textColor: "#ffffff",
            pathColor: "#c084fc",
            trailColor: "rgba(255,255,255,.08)",
          })}
        />

      </div>

      <p className="aqi-status">Moderate</p>

    </div>
  );
}

export default AQICard;