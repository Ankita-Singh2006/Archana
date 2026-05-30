function HourlyCard({ time, icon, temp }) {
  return (
    <div className="hour-card">

      <p className="hour-time">{time}</p>

      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt=""
      />

      <h3>{temp}°</h3>

    </div>
  );
}

export default HourlyCard;