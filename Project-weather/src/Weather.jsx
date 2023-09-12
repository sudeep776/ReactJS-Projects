import React from 'react'
import { useState } from 'react'
import './Weather.css'

const Weather = () => {
  
  const api={
    key:'fa59f6d82500e3fa4bca348c48c0918e',
    base:'https://api.openweathermap.org/data/2.5/'
  }

  const[query,setQuery] = useState('')
  const [weather,setWeather] = useState({})
  
  const search = (evt)=>{
    if(evt.key=='Enter'){
      fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
      .then(res=>res.json())
      .then(result=>{
        setWeather(result)
        setQuery('')
        console.log(result)})
        // catch needs to verified -- -- -- -- 
        // .catch(e=>{
        //   console.log("Invalid request")
        // })
    }
  }

  const dateBuilder = (d) => {
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",];
    
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()]
    let year = d.getFullYear() 

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp >16) ? 'app warm' : 'app'): 'app'}>
      <main>
        <div className='search-box'>
          <input type="text" className='search-bar' placeholder='Search...' value={query} onChange={(e)=>setQuery(e.target.value)} onKeyPress={search}/>
        </div>
        <div>
          {(typeof weather.main!= 'undefined')?(
          <div className='location-box'>
          <div className='location'>
            {weather.name},{weather.sys.country}
          </div>
          <div className='date'>{dateBuilder(new Date())}</div>
          <div className='weather-box'>
            <div className='temp'>
              {Math.round(weather.main.temp)}°C
            </div>
            <div className='weather'>{weather.weather.main!=undefined}</div>
          </div>
        </div>):(' ')}
        </div>
      </main>
    </div>
  )
}

export default Weather