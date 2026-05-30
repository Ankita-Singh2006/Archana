function ForecastCard({ day, icon, temp }) {
  return (
    <div className="forecast-card">

      <p className="forecast-day">{day}</p>

      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt=""
      />

      <h3>{temp}°</h3>

    </div>
  );
}

export default ForecastCard;