import React from "react";
import WeatherIcon from "./WeatherIcon";
import './WeatherForecast.css';
import axios from "axios";

export default function WeatherForecast(props){
function handleResponse(response){
    console.log(response.data);
}


let apiKey = '0b8bet4102f106df6eef01d97o5b3bab';
let longitude = props.coordinates.longitude;
let latitude = props.coordinates.latitude
let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;

axios.get(apiUrl).then(handleResponse);

    return (
        <div className="WeatherForecast">
        <div className="row">
            <div className="col">
<div className="Forecast-day">Mon</div> 
<WeatherIcon code='mist-day' size={36} />
<div className="Forecast-temperature">
<span className="Forecast-temperature-max">10°</span> 
<span className="Forecast-temperature-min">11°</span>
            </div>
            </div>
        </div>
        </div>
    );
}