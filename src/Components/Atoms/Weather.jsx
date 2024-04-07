import React, { useState, useEffect } from "react";
import { WEATHER_API_URL, WEATHER_API_KEY } from "../../../env";
import WindSvg from "./WindWeather";
import { MapPinIcon } from "@heroicons/react/24/solid";
import dayjs from "dayjs";

const Weather = () => {
  const [showInput, setShowInput] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [city, setCity] = useState("");
  const [inputCity, setInputCity] = useState("");

  useEffect(() => {
    // Fetch the device's default location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchWeatherData(latitude, longitude);
      },
      (error) => {
        console.error("Error getting location:", error);
        // Handle error, for example, by setting default coordinates
        fetchWeatherData(DEFAULT_LATITUDE, DEFAULT_LONGITUDE);
      }
    );
  }, []);

  useEffect(() => {
    // Fetch weather data when the city changes
    if (city) {
      fetchWeatherByCity(city);
    }
  }, [city]);

  const handleSearchIconClick = () => {
    setShowInput(true);
  };

  const handleSearchClose = () => {
    setShowInput(false);
    setInputCity("");
  };

  const handleInputChange = (event) => {
    setInputCity(event.target.value);
  };

  const handleEnterKeyPress = (event) => {
    if (event.key === "Enter") {
      setCity(inputCity);
      setShowInput(false);
    }
  };

  const fetchWeatherData = async (latitude, longitude) => {
    try {
      setLoading(true);
      setError(null);
      // Fetch weather data using coordinates
      const response = await fetch(
        `${WEATHER_API_URL}?lat=${latitude}&lon=${longitude}&units=metric&appid=${WEATHER_API_KEY}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      const data = await response.json();
      setWeatherData(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const fetchWeatherByCity = async (city) => {
    try {
      setLoading(true);
      setError(null);
      // Fetch weather data using city name
      const response = await fetch(
        `${WEATHER_API_URL}?q=${city}&units=metric&appid=${WEATHER_API_KEY}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      const data = await response.json();
      setWeatherData(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const getWeatherIcon = (weatherCode) => {
    // Add logic here to select the appropriate icon based on the weather code
    // Example:
    switch (weatherCode) {
      case "01d":
        return sunnyIcon;
      case "02d":
      case "03d":
        return cloudyIcon;
      case "09d":
      case "10d":
        return rainyIcon;
      // Add more cases for other weather conditions
      default:
        return null;
    }
  };

  return (
    <div className="bg-white p-3 border rounded-[1rem] relative">
      <div className="flex items-center ">
        {showInput && (
          <form className="absolute top-0 right-0 mt-8 transition-all duration-500">
            <input
              type="text"
              placeholder="Enter city name"
              value={inputCity}
              onChange={handleInputChange}
              onKeyPress={handleEnterKeyPress}
              className="h-[1.5rem] w-[12rem] mr-2"
            />
            <button
              type="button"
              onClick={handleSearchClose}
              className="bg-blue-500 text-white px-2 py-1 rounded"
            >
              Close
            </button>
          </form>
        )}
      </div>
      {loading && <p>Loading...</p>}
      {error && <p className="text-[0.8rem] text-red-500">{error}</p>}
      {weatherData && (
        <div className="text-[0.8rem] flex flex-col">
          <div className="flex justify-between font-[450] mb-1">
            <div className="text-[0.9rem] ">Weather</div>
            <div className="text-[0.9rem]">{dayjs().format('dddd, MMMM D')}</div>
          </div>
          <div className="flex p-2 justify-between items-center text-[0.7rem] font-[400]">

              <div className="font-[500]">
                <div className="text-[1.2rem]">
                  {weatherData.weather[0].description.charAt(0).toUpperCase() +
                    weatherData.weather[0].description.slice(1)}
                </div>
                <div className="text-[1rem]">{weatherData.name}</div>
                <div className="text-[0.9rem]">{weatherData.sys.country}</div>
              </div>

              <div className="text-[2.2rem] font-[450]">{Math.round(weatherData.main.temp)} °C</div>



          </div>

          <div className="flex flex-row justify-between font-[500] mt-2 bg-gray-100 rounded-[0.5rem] p-2">
            <p>Humidity {weatherData.main.humidity}%</p>
            <div className="flex space-x-2 ">
              <WindSvg />
              <p>{weatherData.wind.speed} m/s</p>
            </div>

          </div>

        </div>
      )}

    </div>
  );
};

export default Weather;
