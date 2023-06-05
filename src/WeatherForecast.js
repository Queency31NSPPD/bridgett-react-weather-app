import React, {useState} from "react";

import './WeatherForecast.css';
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props){
let [loaded, setLoaded] = useState(false);
let [forecast, setForecast] = useState(null);

function handleResponse(response){
    console.log (response.data.daily);
    setForecast(response.data.daily);
    setLoaded(true);
}

if(loaded){
     return (
        <div className="WeatherForecast">
        <div className="row">
            <div className="col">
                <WeatherForecastDay info={forecast[0]} />

            </div>
        </div>
        </div>
    );


}else{
    let apiKey = '0b8bet4102f106df6eef01d97o5b3bab';
let longitude = props.coordinates.longitude;
let latitude = props.coordinates.latitude
let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(handleResponse);
}
}