import React, { useState, useEffect } from 'react';
import {WEATHER_API_URL, WEATHER_API_KEY} from "../../../env";

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [city, setCity] = useState('');
    
    useEffect(() => {
        fetchWeatherData(city);
    }, [city]);
    
    const fetchWeatherData = async (city) => {
        try {
            setLoading(true);
            setError(null);
            // Fetch weather data using city name
            const response = await fetch(`${WEATHER_API_URL}?q=${city}&units=metric&appid=${WEATHER_API_KEY}`);
            if (!response.ok) {
                throw new Error('Failed to fetch weather data');
            }
            const data = await response.json();
            setWeatherData(data);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    const handleCityChange = (event) => {
        setCity(event.target.value);
    };

    return (
        <div className=''>
            <input 
                type="text" 
                placeholder="Enter city name" 
                value={city} 
                onChange={handleCityChange} 
                className='h-[1.5rem] w-[12rem]'
            />
            {loading && <p>Loading...</p>}
            {error && <p className='text-[0.8rem] text-red-500'>{error}</p>}
            {weatherData && (
                <div className='text-[0.8rem] flex flex-col border-2 p-3 rounded-[0.5rem]'>
                    <div className='flex justify-between items-center text-[1rem] font-[400]'>
                        <h2 >{weatherData.name}, {weatherData.sys.country}</h2> 
                        <p className='text-[1.4rem]'>{weatherData.main.temp} °C</p>
                    </div>
                    <p>Weather: {weatherData.weather[0].description}</p>
                    <p>Humidity: {weatherData.main.humidity}%</p>
                    <p>Wind Speed: {weatherData.wind.speed} m/s</p>
                </div>
            )}
        </div>
    );
};

export default Weather;











