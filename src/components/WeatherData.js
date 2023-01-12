import React, { useState, useEffect } from 'react';

const WeatherData = () => {
    const [weatherData, setWeatherData] = useState(null);

    const getWeatherData = async (city) => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=55e260225b0e8ea0c003e410c73d6761&units=metric`);
        const data = await response.json();
        setWeatherData(data);
    };

    const processWeatherData = () => {
        const weather = {};
        weather.city = weatherData.name;
        weather.country = weatherData.sys.country;
        weather.temperature = weatherData.main.temp;
        weather.description = weatherData.weather[0].description;
        weather.icon = weatherData.weather[0].icon;
        weather.humidity = weatherData.main.humidity;
        weather.wind = weatherData.wind.speed;
        return weather;
    };

    useEffect(() => {
        getWeatherData('London');
    }
    , []);

    return (
        <div>
          {weatherData && (
            <>
              <h1 className="city">{processWeatherData().city}, {processWeatherData().country}</h1>
              <p className="temperature">Temperature: {processWeatherData().temperature}</p>
              <p className="description">{processWeatherData().description}</p>
              <p className="humidity">Humidity: {processWeatherData().humidity}</p>
              <p className="wind">Wind: {processWeatherData().wind}</p>
              <img className="icon" src={`http://openweathermap.org/img/wn/${processWeatherData().icon}.png`} alt={processWeatherData().description}/>
            </>
          )}
        </div>
    );
};


export default WeatherData;