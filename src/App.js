import React from 'react';
import Coordinates from './components/Coordinates';
import WeatherFetcher from './components/WeatherFetcher';
import './components/styles.css';

const App = () => {
  return (
    <div>
      <WeatherFetcher />

      <Coordinates />


    </div>
  );
};

export default App;
