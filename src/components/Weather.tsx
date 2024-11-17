interface WeatherProps {
    weather: {
        country?: string;
        city?: string;
        temp?: number;
        pressure?: number;
        sunset?: Date;
    };
    message: string;
}

const Weather = ({ weather, message }: WeatherProps) => {
    return (
        <div className="infoWeath">
            {!message ? (
                <>
                    <p>
                        Location: {weather.country}, {weather.city}
                    </p>
                    <p>Temp: {weather.temp}</p>
                    <p>Pressure: {weather.pressure}</p>
                    <p>Sunset: {weather.sunset?.toLocaleTimeString()}</p>
                </>
            ) : (
                <p>{message}</p>
            )}
        </div>
    );
};

export default Weather;