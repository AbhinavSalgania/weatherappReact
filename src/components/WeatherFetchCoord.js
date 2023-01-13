import React from 'react';
import {useState, useEffect} from 'react';
import WeatherDisplay from './WeatherDisplay';

const WeatherApi = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

const WeatherFetchCoord = (props) => {
    const {coordinates} = props;
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        if(coordinates && coordinates.latitude && coordinates.longitude) {
            getWeatherData(coordinates.latitude, coordinates.longitude);
        }
    }, [coordinates]);

    const getWeatherData = async (lat, lon) => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WeatherApi}&units=metric`);
        const data = await response.json();
        setWeatherData(data);
    };

    return (
        <div>
            <WeatherDisplay weatherData={weatherData} />
        </div>
    )
};

export default WeatherFetchCoord;