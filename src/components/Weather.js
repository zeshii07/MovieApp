import React, { useState } from "react";

export default function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const apiKey = "29c52e0d05c446dd914262d6cdd249df";

  function handleOnChange(event) {
    setCity(event.target.value);
  }

  function handleSearch() {
    if (city.trim() === "") return; // Avoid fetching if city is empty

    setLoading(true);
    setError(null); // Reset error before new request

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        return response.json();
      })
      .then((data) => {
        setWeatherData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }

  return (
    <div>
      <div className="p-8 bg-orange-200">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-blue-800 shadow-md inline text-3xl font-bold rounded-2xl font-serif m-1 p-1">
            Weather App
          </h1>
          <p className="m-2 text-xl text-teal-900 font-extrabold">
            Be Aware of the weather in your city
          </p>

          <label htmlFor="search"></label>
          <input
            className="p-2 shadow-md rounded-xl text-xl "
            type="text"
            name="search"
            id="search"
            placeholder="Enter Name of the city"
            onChange={handleOnChange}
            value={city}
          />
          <button
            className="bg-blue-900 text-white m-4 rounded-2xl shadow-lg text-xl p-2"
            onClick={handleSearch}
          >
            Check Weather
          </button>
        </div>
      </div>
      {loading && <p>Loading...</p>}
      {error && !loading && <p>Error: {error}</p>}
      {weatherData && !loading && !error && (
        <div>
          <div className="flex flex-col justify-center items-center">
            <div className="bg-purple-200 shadow-2xl rounded-3xl text-xl font-lobster h-auto w-72 p-4 m-4">
              <h1>Weather in <strong>{city}</strong> </h1>
              <p> <b>Temperature:</b> {weatherData.main.temp}°C</p>
              <p><b>Weather:</b> {weatherData.weather[0].description}</p>
              <p><b>Humidity:</b> {weatherData.main.humidity}%</p>
              <p><b>Wind Speed:</b> {weatherData.wind.speed} m/s</p>
              <img className="p-3"
                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                alt="weather icon"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
