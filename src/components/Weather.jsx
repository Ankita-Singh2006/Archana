import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import "../styles/Weather.css";
import {
  Search,
  MapPin,
  Wind,
  Droplets,
  Eye,
  Gauge,
  Sunrise,
  Sunset,
  RefreshCw,
} from "lucide-react";

import AQICard from "./AQICard";
import ForecastCard from "./ForecastCard";
import HourlyCard from "./HourlyCard";



const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

function Weather() {
  const [city, setCity] = useState("Varanasi");
  const [search, setSearch] = useState("Varanasi");

  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);

  const [loading, setLoading] = useState(true);

  const fetchWeather = async () => {
    try {
      setLoading(true);

      const current = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );

      const forecastRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
      );

      setWeather(current.data);
      setForecast(forecastRes.data.list);

      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [city]);

  const handleSearch = () => {
    if (search.trim()) {
      setCity(search);
    }
  };

  if (loading || !weather) {
    return (
      <div className="loading-screen">
        <div className="loader"></div>
        <h2>Loading Weather...</h2>
      </div>
    );
  }

  return (
    <div className="weather-page">

      {/* Background Glow */}

      <div className="glow glow1"></div>
      <div className="glow glow2"></div>

      {/* Topbar */}

      <motion.div
        className="topbar glass"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >

        <div className="logo">
          WeatherX
        </div>

        <div className="search-box">

          <Search size={18} />

          <input
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="Search city..."
          />

          <button onClick={handleSearch}>
            Search
          </button>

        </div>

        <div className="location-box">

          <MapPin size={18} />

          <span>
            {weather.name},
            {" "}
            {weather.sys.country}
          </span>

        </div>

        <button
          className="refresh-btn"
          onClick={fetchWeather}
        >
          <RefreshCw size={18} />
        </button>

      </motion.div>

      <div className="dashboard">

        {/* LEFT */}

        <div className="left-column">

          <motion.div
            className="hero-card glass hero-premium"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >

            <div className="hero-header">

              <div>

                <p className="live-tag">
                  ● Live Weather
                </p>

                <h1>
                  {weather.name}
                </h1>

                <span>
                  {weather.weather[0].description}
                </span>

              </div>

              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
                alt=""
              />

            </div>

            <div className="temperature">

              {Math.round(
                weather.main.temp
              )}
              °

            </div>

            <div className="weather-stats">

              <div className="stat-card">
                <Droplets />
                <span>Humidity</span>
                <h4>
                  {weather.main.humidity}%
                </h4>
              </div>

              <div className="stat-card">
                <Wind />
                <span>Wind</span>
                <h4>
                  {weather.wind.speed}
                </h4>
              </div>

              <div className="stat-card">
                <Gauge />
                <span>Pressure</span>
                <h4>
                  {weather.main.pressure}
                </h4>
              </div>

              <div className="stat-card">
                <Eye />
                <span>Visibility</span>
                <h4>
                  {weather.visibility / 1000} km
                </h4>
              </div>

            </div>

          </motion.div>
          {/* Hourly Forecast */}

          <motion.div
            className="hourly-card glass"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >

            <div className="section-title">
              Hourly Forecast
            </div>

            <div className="hourly-scroll">

              {forecast
                .slice(0, 8)
                .map((item, index) => (
                  <HourlyCard
                    key={index}
                    time={new Date(
                      item.dt_txt
                    ).toLocaleTimeString([], {
                      hour: "numeric",
                    })}
                    icon={item.weather[0].icon}
                    temp={Math.round(
                      item.main.temp
                    )}
                  />
                ))}

            </div>

          </motion.div>

        </div>

        {/* RIGHT COLUMN */}

        <div className="right-column">

          <motion.div
            className="forecast-wrapper glass"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >

            <div className="section-title">
              5 Day Forecast
            </div>

            <div className="forecast-grid">

              {forecast
                .filter((_, i) => i % 8 === 0)
                .slice(0, 5)
                .map((item, index) => (
                  <ForecastCard
                    key={index}
                    day={new Date(
                      item.dt_txt
                    ).toLocaleDateString(
                      "en-US",
                      {
                        weekday: "short",
                      }
                    )}
                    icon={item.weather[0].icon}
                    temp={Math.round(
                      item.main.temp
                    )}
                  />
                ))}

            </div>

          </motion.div>

          {/* AQI */}

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <AQICard />
          </motion.div>

          {/* Sunrise Sunset */}

          <motion.div
            className="sun-card glass"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >

            <div className="section-title">
              Sunrise & Sunset
            </div>

            <div className="sun-item">

              <Sunrise />

              <div>
                <span>Sunrise</span>

                <h4>
                  {new Date(
                    weather.sys.sunrise * 1000
                  ).toLocaleTimeString()}
                </h4>
              </div>

            </div>

            <div className="sun-item">

              <Sunset />

              <div>
                <span>Sunset</span>

                <h4>
                  {new Date(
                    weather.sys.sunset * 1000
                  ).toLocaleTimeString()}
                </h4>
              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </div>
  );
}

export default Weather;