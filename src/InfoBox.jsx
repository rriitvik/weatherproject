import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css'; // Assuming this file contains your custom styles
import { Thunderstorm } from '@mui/icons-material'; // Correct import statement
import { AcUnit } from '@mui/icons-material'; // Example for AcUnitIcon
import { WbSunny } from '@mui/icons-material'; // Example for WbSunnyIcon

export default function InfoBox({ info }) {
    // Define URLs for different weather conditions
    const HOT_URL = "https://images.unsplash.com/photo-1493936734716-77ba6da66365?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1425100599170-85ec4f00a6ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1536329978773-2f8ac431f330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fHww";

    return (
        <div className="InfoBox">
            <Card className="WeatherCard">
                <CardMedia
                    className="WeatherImage"
                    image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                    title="Weather image"
                />
                <CardContent className='Information'>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                        {info.humidity > 80 ? <Thunderstorm /> : info.temp > 15 ? <WbSunny /> : <AcUnit />}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <div>Temperature: {info.temp}°C</div>
                        <div>Humidity: {info.humidity}%</div>
                        <div>Min Temp: {info.tempMin}°C</div>
                        <div>Max Temp: {info.tempMax}°C</div>
                        <div>The weather can be described as <i>{info.weather}</i>. Feels like {info.feelsLike}°C</div>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}