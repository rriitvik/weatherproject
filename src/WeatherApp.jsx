import React, { useState } from 'react';
import InfoBox from './InfoBox';
import SearchBox from './searchbox';
import { Container, Typography } from '@mui/material';
import './WeatherApp.css';

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 40.63,
        temp: 45.06,
        humidity: 47,
        tempMax: 45.06,
        tempMin: 44.05,
        weather: "haze",
    });

    const updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <Container className="WeatherApp" maxWidth="sm">
            <Typography variant="h4" component="h1" gutterBottom>
                Weather App
            </Typography>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </Container>
    );
}