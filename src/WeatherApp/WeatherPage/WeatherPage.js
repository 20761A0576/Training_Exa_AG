import React, { useState, useEffect } from "react";
import { Card, SubCard, DropDown } from "./WeatherPage.Styled";

function WeatherPage({ WeatherData }) {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const cities = WeatherData.map((item) => item.city);

  useEffect(() => {
    if (city) {
      setLoading(true);
      setTimeout(() => {
        const data = WeatherData.find((item) => item.city.toLowerCase() === city.toLowerCase());
        setWeather(data);
        setLoading(false);
      }, 1000);
    } else {
      setWeather(null);
    }
  }, [city]);

  return (
    <Card>
      <DropDown onChange={(e) => setCity(e.target.value)}>
        <option value="" >Select City</option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </DropDown>

      <SubCard condition={weather?.condition}>
        {loading && <p>Loading weather data...</p>}

        {!loading && !weather && <p>Please select a city to view weather details</p>}

        {!loading && weather && (
          <>
            <div>City: {weather.city}</div>
            <div>🌡 Temp: {weather.temperature}°C</div>
            <div>💧 Humidity: {weather.humidity}%</div>
            <div>☁ Condition: {weather.condition}</div>
            <div>🌬 Wind: {weather.windSpeed} km/h</div>
          </>
        )}
      </SubCard>
    </Card>
  );
}

export default WeatherPage;
