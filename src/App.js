import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import './App.css';
import Weather from './Weather';
import './Weather.css';

export default function App() {
  return (
    <div className="App"> 
     <div className="container">
     <h1> Weather App</h1>
     <Weather defaultCity='Paris' />
     <footer>
     This project was Coded by {""}
     <a
          className="App-link"
          href="https://www.linkedin.com/in/bridget-nnenna-chukwu-82a30b149"
          target="_blank"
          rel="noopener noreferrer"
        >
        Bridget Nnenna
        </a>
       {""} and open-sourced on {""}
        <a
          className="A-link"
          href="https://github.com/Queency31NSPPD/bridgett-react-weather-app"
          target="_blank"
          rel="noopeppner noreferrer"
        >
        Github
        </a>
        {""} and hosted on {""}
        <a
          className="A-link"
          href="https://meek-sundae-bd3756.netlify.app"
          target="_blank"
          rel="noopeppner noreferrer"
        >
        Netlify
        </a>
          </footer>
    </div>
    </div>
  );
  }