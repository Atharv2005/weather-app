// import Button from "./components/Button";
import "./styles.css";
import { useState, useEffect } from "react";
export default function App() {
  const apiKey = "7c299282071ee2c34d27c84298bd9871";
  const [city, setCity] = useState("");
  const [cityValue, setCityValue] = useState("");
  const [displayCityName, setDisplayName] = useState("");

  const handleSubmitHandler = () => {
    event.preventDefault();
    setCity(cityValue);
    setCityValue("");
  };

  useEffect(() => {
    if (city === "") {
      return;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric `;
    async function getWeather() {
      const response = await fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setDisplayName(data);
        });
    }

    getWeather();
  }, [city]);

  return (
    <div>
      <div className="wrapper">
        <h1 id="weather-heading"> Weater app </h1>
        <div className="input-wrapper">
          <form id="form">
            <input
              id="weather-input"
              placeholder="Enter City Name"
              type="text"
              value={cityValue}
              onChange={(e) => {
                setCityValue(e.target.value);
              }}
            />
            <button type="submit" onClick={handleSubmitHandler}>
              {" "}
              Submit
            </button>
          </form>
        </div>
        <div className="weather-flex">
          <p> {displayCityName.main.temp} °C</p>
          <p> {displayCityName.name}</p>
        </div>
      </div>
    </div>
  );
}
