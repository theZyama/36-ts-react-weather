import Form from "./Form";
import Weather from "./Weather";
import { useState } from "react";
import { api_key, base_url } from "../utils/constants";

interface WeatherInfo {
    country: string;
    city: string;
    temp: number;
    pressure: number;
    sunset: Date;
}

const Data: React.FC = () => {
    const [weatherInfo, setWeatherInfo] = useState<WeatherInfo | null>(null);
    const [message, setMessage] = useState<string>("Enter city name");

    const getWeather = (city: string): void => {
        fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            .then((result) => result.json())
            .then((data) => {
                setWeatherInfo({
                    country: data.sys.country,
                    city: data.name,
                    temp: data.main.temp,
                    pressure: data.main.pressure,
                    sunset: new Date(data.sys.sunset * 1000),
                });
                setMessage("");
            })
            .catch((e) => {
                console.error(e);
                setMessage("Enter correct city name");
            });
    };

    return (
        <div>
            <Form getWeather={getWeather} />
            <Weather message={message} weather={weatherInfo} />
        </div>
    );
};

export default Data;
Data;