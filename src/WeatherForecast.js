import React from "react";
import WeatherIcon from "./WeatherIcon";
import './WeatherForecast.css';

export default function WeatherForecast(){
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
            <div className="col">
<div className="Forecast-day">Mon</div> 
<WeatherIcon code='mist-day' size={36} />
<div className="Forecast-temperature">
<span className="Forecast-temperature-max">10°</span> 
<span className="Forecast-temperature-min">11°</span>
            </div>
            </div>
            <div className="col">
<div className="Forecast-day">Mon</div> 
<WeatherIcon code='mist-day' size={36} />
<div className="Forecast-temperature">
<span className="Forecast-temperature-max">10°</span> 
<span className="Forecast-temperature-min">11°</span>
            </div>
            </div>
            <div className="col">
<div className="Forecast-day">Mon</div> 
<WeatherIcon code='mist-day' size={36} />
<div className="Forecast-temperature">
<span className="Forecast-temperature-max">10°</span> 
<span className="Forecast-temperature-min">11°</span>
            </div>
            </div>
            <div className="col">
<div className="Forecast-day">Mon</div> 
<WeatherIcon code='mist-day' size={36} />
<div className="Forecast-temperature">
<span className="Forecast-temperature-max">10°</span>
<span className="Forecast-temperature-min">11°</span>
            </div>
            </div>
            <div className="col">
<div className="Forecast-day">Mon</div> 
<WeatherIcon code='mist-day' size={36} />
<div className="Forecast-temperature">
<span className="Forecast-temperature-max">10°</span> 
<span className="Forecast-temperature-min">11°</span>
            </div>
            </div>
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