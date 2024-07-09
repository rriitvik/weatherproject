import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error,setError] =useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "2f3e18e8ac79ebfe25599036a4c40a7a";

    const getWeatherInfo = async () => {
        try{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        };
        return result;
    }
    catch(err){
        throw err;
    }
    };

    const handleChange = (evt) => {
        setCity(evt.target.value);
    };

    const handleSubmit = async (evt) => {
        try{
            evt.preventDefault();
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setCity("");  
            setError(false);
        }
        catch(err){
            setError(true);
            setCity(""); 
        }

    };

    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                    color="warning"
                    className="TextField"
                />
                <br></br>
                <br></br>
                <Button variant="contained" color="primary" type="submit" className="Button">
                    Search
                </Button>
                {error && <p style={{color:"#f96d00"}}>No such Place Exists!</p>}
            </form>
        </div>
    );
}