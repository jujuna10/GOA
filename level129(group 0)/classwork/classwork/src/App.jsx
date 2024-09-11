import React, { useState, useEffect } from 'react';

const WeatherComponent = () => {
  const [userInput, setUserInput] = useState("")
  const [weatherData, setWeatherData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (userInput) {
      const fetchWeather = async () => {
        try {
          const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=b3bae63ff0074e26815144949240909&q=${userInput}&aqi=no`);
          
          const data = await response.json();
          setWeatherData(data);
        } catch (error) {
          setError(error.message)
        }
      };

      fetchWeather()
    }
  }, [userInput])

  console.log(weatherData)

  return (
    <div>
      <input type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)} 
      />
      {error && <p>Ошибка: {error}</p>}
      {weatherData && (
        <div>
          <h2>location {weatherData.location.name}</h2>
          <p>temp: {weatherData.current.temp_c}°C</p>
          <p>condition: {weatherData.current.condition.text}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherComponent;
