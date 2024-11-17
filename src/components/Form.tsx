import { useState } from "react";

interface FormProps {
    getWeather: (city: string) => void;
}

const Form: React.FC<FormProps> = ({ getWeather }) => {
    const [city, setCity] = useState<string>("");

    const getCity = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        getWeather(city);
        setCity("");
    };

    return (
        <form onSubmit={getCity}>
            <input
                onChange={(e) => setCity(e.target.value)}
                type="text"
                value={city}
            />
            <button type="submit">Get Weather</button>
        </form>
    );
};

export default Form;