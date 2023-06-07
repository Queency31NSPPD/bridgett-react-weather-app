import React, {useState, useEffect} from "react";

import './WeatherForecast.css';
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props){
let [loaded, setLoaded] = useState(false);
let [forecast, setForecast] = useState(null);

useEffect(() => {
    setLoaded(false);
}, [props.coordinates]);


function handleResponse(response){
    console.log (response.data.daily);
    setForecast(response.data.daily);
    setLoaded(true);
}

if(loaded){
     return (
        <div className="WeatherForecast">
        <div className="row">
            {forecast.map(function (dailyforecast, index){
                if (index < 7){
           return(
           <div className="col" key={index}>
                <WeatherForecastDay info={dailyforecast} />
        </div>
            );
           }else{
            return null;
        }
            })}
        </div>
        </div>
     );
}else{
    let apiKey = '0b8bet4102f106df6eef01d97o5b3bab';
let longitude = props.coordinates.longitude;
let latitude = props.coordinates.latitude
let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

axios.get(apiUrl).then(handleResponse);

return null;
}
}