import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import "./index.css";

function App() {
  const [weather, setWeather] = useState(null);   // stores weather data
  const [error, setError] = useState("");          // stores error message
  const [loading, setLoading] = useState(false);   // tracks loading state

  async function handleSearch(city) {
    if (!city.trim()) return;

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const response = await fetch(`http://localhost:5000/weather?city=${city}`);
      const data = await response.json();

      if (data.error) {
        setError("City not found. Please try again.");
      } else {
        setWeather(data);  // triggers re-render with new data
      }
    } catch (err) {
      setError("Something went wrong. Is Flask running?");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ width: "100%", maxWidth: 480, padding: "2rem", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "2rem" }}>
        🌤 Weather Dashboard
      </h1>

      <SearchBar onSearch={handleSearch} />

      {loading && (
        <p style={{ textAlign: "center", opacity: 0.6 }}>Fetching weather...</p>
      )}

      {error && (
        <div style={{
          background: "rgba(255,80,80,0.2)",
          border: "1px solid rgba(255,80,80,0.4)",
          borderRadius: "10px",
          padding: "1rem",
          textAlign: "center"
        }}>
          {error}
        </div>
      )}

      <WeatherCard data={weather} />
    </div>
  );
}

export default App;