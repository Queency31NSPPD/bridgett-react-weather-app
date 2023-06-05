
 import React, { useState } from 'react';
 import WeatherForecast from './WeatherForecast';
 import WeatherInfo from './WeatherInfo';
 import './Weather.css';
 import axios from 'axios';
 
 
 export default function Weather(props) {
 
     const [weatherData, setWeatherData] = useState({ ready: false });
 const [city, setCity] = useState(props.defaultCity)

     function handleResponse(response) {
         console.log(response.data);
         setWeatherData({
             ready: true,
             coordinates: response.data.coordinates,
             temperature: response.data.temperature.current,
             city: response.data.city,
             date: new Date(response.data.time * 1000),
             wind: response.data.wind.speed,
             humidity: response.data.temperature.humidity,
             description: response.data.condition.description,
             icon: response.data.condition.icon
         });
 
     }

function search(){
     let apiKey = '0b8bet4102f106df6eef01d97o5b3bab';
         let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
         axios.get(apiUrl).then(handleResponse);
 
}

     function handleSubmit(event){
        event.preventDefault();
    search(city); 
    }
     
    function handleCityChange(event){
setCity(event.target.value);
    }

     if (weatherData.ready) {
         return (
             <div className="Weather">
                 <form onSubmit={handleSubmit}>
                   
                     <div className='row'>
                         <div className='col-9'>
                             <input
                                 type='search' placeholder='Enter a city name...'
                                 className='form-control'
                                 autoFocus='on'
                                 onChange={handleCityChange}
                             />
                         </div>
                         <div className='col-3'>
                             <input type='submit' value='search'
                                 className='btn btn-primary w-100' />
                         </div>
                     </div>
                 </form>
                  <WeatherInfo info={weatherData} />
                  <WeatherForecast coordinates={weatherData.coordinates}  />
                  </div>
                );
     } else {
        search();

         return 'loading...';
 
     } 
 }