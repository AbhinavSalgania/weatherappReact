import React, { useState, useEffect } from 'react';
import WeatherDisplay from './WeatherDisplay';

const WeatherApi = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

const WeatherFetcher = () => {
    const [weatherData, setWeatherData] = useState(null);

    const getWeatherData = async (city) => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WeatherApi}&units=metric`);
        const data = await response.json();
        setWeatherData(data);
    };

    useEffect(() => {
        getWeatherData('London');
    }
    , []);

    return (
        <div>
            <WeatherDisplay weatherData={weatherData} />
        </div>
    )
};


export default WeatherFetcher;