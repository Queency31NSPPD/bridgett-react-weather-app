import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props){

function maxTemperature (){
    let temperature = Math.round(props.info.temperature.maximum);
return `${temperature}°`;
}

function minTemperature (){
    let temperature = Math.round(props.info.temperature.minimum);
return `${temperature}°`;
}

function day(){
    let date = new Date(props.info.time * 1000);
    let day = date.getDay();

    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

    return days[day];
}

    return(<div>
        <div className="Forecast-day">{day()}</div> 
<WeatherIcon code={props.info.condition.icon} size={36} />
<div className="Forecast-temperature">
<span className="Forecast-temperature-max">{maxTemperature()}</span> 
<span className="Forecast-temperature-min">{minTemperature()}</span>
            </div>
            </div>
    );
}