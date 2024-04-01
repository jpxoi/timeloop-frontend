import React, { useState, useEffect } from 'react';
import { WEATHER_API_URL, WEATHER_API_KEY } from "../../../env";
import WindSvg from './WindWeather';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Weather = () => {
    const [showInput, setShowInput] = useState(false);
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [city, setCity] = useState('');

    useEffect(() => {
        // Fetch the device's default location
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                fetchWeatherData(latitude, longitude);
            },
            (error) => {
                console.error('Error getting location:', error);
                // Handle error, for example, by setting default coordinates
                fetchWeatherData(DEFAULT_LATITUDE, DEFAULT_LONGITUDE);
            }
        );
    }, []);

    const handleSearchIconClick = () => {
        setShowInput(true);
    };

    const fetchWeatherData = async (latitude, longitude) => {
        try {
            setLoading(true);
            setError(null);
            // Fetch weather data using coordinates
            const response = await fetch(`${WEATHER_API_URL}?lat=${latitude}&lon=${longitude}&units=metric&appid=${WEATHER_API_KEY}`);
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
        <div className='bg-white p-3 border rounded-[0.5rem]'>
            <div className="flex items-center ">
                <MagnifyingGlassIcon className="h-4 w-4 cursor-pointer" onClick={handleSearchIconClick} />
                {showInput && (
                    <form className='flex items-center'>
                        <input
                            type="text"
                            placeholder="Enter city name"
                            value={city}
                            onChange={handleCityChange}
                            className='h-[1.5rem] w-[12rem] mr-2'
                        />
                        <button type="button" onClick={() => setShowInput(false)} className="bg-blue-500 text-white px-2 py-1 rounded">Close</button>
                    </form>
                )}
            </div>
            {loading && <p>Loading...</p>}
            {error && <p className='text-[0.8rem] text-red-500'>{error}</p>}
            {weatherData && (
                <div className='text-[0.8rem] flex flex-col'>
                    <div className='flex justify-between items-center text-[1rem] font-[400]'>
                        <h2 className='font-[550] text-[1.1rem]'>{weatherData.name}, {weatherData.sys.country}</h2>
                        <p className='text-[1.4rem]'>{weatherData.main.temp} °C</p>
                    </div>
                    <p>Weather: {weatherData.weather[0].description}</p>
                    <p>Humidity: {weatherData.main.humidity}%</p>
                    <div className='flex space-x-2'>
                        <WindSvg />
                        <p>{weatherData.wind.speed} m/s</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Weather;













