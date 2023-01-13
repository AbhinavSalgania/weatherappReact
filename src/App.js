import React from 'react';
import Coordinates from './components/Coordinates';
import WeatherFetcher from './components/WeatherFetcher';

const App = () => {
  return (
    <div>
      <WeatherFetcher />

      <Coordinates />


    </div>
  );
};

export default App;
