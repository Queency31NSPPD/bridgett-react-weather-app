import React from 'react';

 export default function FormattedDate(props){

    let days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat',]
let day = days[props.date.getDay()];

 let dayOfMonth = props.date.getDate();

  let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
let month = months[props.date.getMonth()];

 let year = props.date.getFullYear();

let hours = props.date.getHours();
if (hours < 10) { 
hours = `0${hours}`;
}

let minutes =  props.date.getMinutes();
if (minutes < 10) { 
minutes = `0${minutes}`;
}
   
   return (
   <div>
       last updated: {day}, {dayOfMonth} {month} {year}, time: {hours}:{minutes}
        </div>
        );
}
 

