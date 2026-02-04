import React from "react";
import WeatherPage from "./WeatherPage/WeatherPage";
import WeatherData from "./Data/WeatherData";

function App() {
  return (
    <>
      <WeatherPage WeatherData={WeatherData}></WeatherPage>
    </>
  );
}

export default App;
