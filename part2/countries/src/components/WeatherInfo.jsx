import { useState, useEffect } from "react";
import WeatherServices from "../services/openWeather";

const WeatherInfo = ({ commonName, lat, lon }) => {
  const [weather, setWeather] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage("getting weather information ...");
    WeatherServices.getCurrentWeather({ lat, lon })
      .then((responseData) => {
        setWeather(responseData);
        setMessage("");
      })
      .catch((error) => {
        setMessage("Error getting weather information");
        console.log(error);
      });
    return () => setMessage("");
  }, [lat, lon]);

  if (!message.trim()) return <div>{message}</div>;

  return (
    <div>
      <h2>{`Weather in ${commonName}`}</h2>
      <p>{`temperature ${WeatherServices.getTemp(weather)} Celcius`}</p>
      <img
        src={WeatherServices.getWeatherIconURLFromData(weather)}
        alt={WeatherServices.getWeatherDescription(weather)}
      />
      <p>{`wind ${WeatherServices.getWindSpeed(weather)} m/s`}</p>
    </div>
  );
};

export default WeatherInfo;
