function WeatherCard({ data }) {
    if (!data) return null;
  
    return (
      <div style={{
        background: "rgba(255,255,255,0.1)",
        backdropFilter: "blur(20px)",
        borderRadius: "20px",
        padding: "2.5rem",
        border: "1px solid rgba(255,255,255,0.15)",
        textAlign: "center",
        animation: "fadeIn 0.4s ease"
      }}>
        <h2 style={{ fontSize: "2rem", fontWeight: 700 }}>{data.city}</h2>
        <p style={{ opacity: 0.6, marginBottom: "1rem" }}>{data.country}</p>
  
        <img
          src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
          alt="weather icon"
          style={{ width: 100, height: 100 }}
        />
  
        <div style={{ fontSize: "4rem", fontWeight: 800, lineHeight: 1 }}>
          {Math.round(data.temp)}°C
        </div>
  
        <p style={{ textTransform: "capitalize", opacity: 0.8, margin: "0.5rem 0 1.5rem" }}>
          {data.description}
        </p>
  
        <div style={{
          display: "flex",
          justifyContent: "space-around",
          borderTop: "1px solid rgba(255,255,255,0.15)",
          paddingTop: "1.5rem"
        }}>
          <div>
            <div style={{ fontSize: "1.3rem", fontWeight: 700 }}>{Math.round(data.feels_like)}°C</div>
            <div style={{ fontSize: "0.75rem", opacity: 0.6, letterSpacing: "0.1em" }}>FEELS LIKE</div>
          </div>
          <div>
            <div style={{ fontSize: "1.3rem", fontWeight: 700 }}>{data.humidity}%</div>
            <div style={{ fontSize: "0.75rem", opacity: 0.6, letterSpacing: "0.1em" }}>HUMIDITY</div>
          </div>
        </div>
      </div>
    );
  }
  
  export default WeatherCard;