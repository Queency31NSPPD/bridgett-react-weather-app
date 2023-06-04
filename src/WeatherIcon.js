import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeatherIcon(props){
  
  const codeMapping = {
        '01d': 'clear-sky-day',
        '01n': 'clear-sky-night',
        '02d': 'few-clouds-day',
        '02n': 'few-clouds-night',
        '03d': 'scattered-clouds-day',
        '03n': 'scattered-clouds-night', 
        '04d': 'broken-clouds-day',
        '04n': 'broken-clouds-night',
        '09d': 'rain-day',
        '09n': 'rain-night', 
        '10d': 'shower-rain-day',
        '10n': 'shower-rain-night', 
        '11d': 'snow-day',
        '11n': 'snow-night',
        '13d': 'thunderstorm-day',
        '13n': 'thunderstorm-night', 
        '50d': 'mist-day',
        '50n': 'mist-night'
    };
    
    return (
     <ReactAnimatedWeather
    icon={codeMapping[props.code]}
    size={52}
    animate={true} />
);
}