import React, {useState} from 'react';
import axios from 'axios'
import './App.css'

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  


  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=b61a4f2ce5d6071705d7e88fddbcd9bf`
  const searchLocation = (event) => {
    if(event.key === 'Enter'){
      axios.get(url).then((response) => {
        setData(response.data)
      })
      setLocation('')
    } 
  }
  
  return (


    <div className="app">
      <div className="search">
        <input 
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder='Soo gali Goobta'
        type="text"
        />
      </div>
      <div className="container">
        
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="country">
            {data.sys ? <h2>{data.sys.country}</h2>:null}
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}&deg;C</h1> : null}
            </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].description}</p> : null}
          </div>
        </div>



    {data.name !== undefined && 
    <div className="bottom">
          <div className="feels">
          <p>Feels like</p>
            {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}&deg;C</p>: null}
          </div>
          <div className="humidity">
          <p>Humidity</p>
           {data.main ? <p className='bold'>{data.main.humidity}%</p>:null}
          </div>
          <div className="wind">
          <p>Wind Speed</p>
            {data.wind ? <p className='bold'>{data.wind.speed} MPH</p>:null}
          </div>
        </div>
    }
        
      </div>
    </div>
  );
}

export default App;
