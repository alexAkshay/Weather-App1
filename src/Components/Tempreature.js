import React,{useState} from 'react'
import axios  from 'axios';
import './Components.css'

export default function Tempreature() {
    const [data,setCityData] =useState([]);
    const [cityname, setCityname] = useState('');
    const [morebutton, setmorebutton] = useState(false)
    const [seedetails, setSeedetails] = useState(false)
    const [moreinfo, setmoreInfo] = useState(false)
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=f3e6a40e7d873f042984b1405049f14e&units=metric`

   const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setSeedetails(true)
        setCityData(response.data)
        console.log(response.data)
      })
      
      setCityname('')
      setmorebutton(true)
    }
  }
  const handlemoreInfo= (event)=>{
event.preventDefault();
setmoreInfo(true);

  }
  const handleClear=(event)=>{
    event.preventDefault()
setSeedetails(false)
  }
  return (
    
    <div className='tempdata'>
     
        <input type='text' onChange={(event)=>setCityname(event.target.value)} value={cityname} placeholder="Enter City Name" onKeyPress={searchLocation} className="input"/>
     {seedetails? <div>
     <lable className='cname'>City Name : {data.name}</lable>
     <button className='clr' onClick={handleClear}> Clear</button>
     
      {data.main?<h3> Average Tempreature: {data.main.temp.toFixed()}C</h3> :null }
     
     {data.weather ? <h3>Feels like: {data.main.feels_like}</h3> : null}
     {morebutton? <button onClick={handlemoreInfo} >More Info</button>:null }
      
    
    {
 moreinfo ? <div className='moreinfo'>
   <h5>Longititude: {data.coord.lon} Latitude: {data.coord.lat}</h5> 
   <h5>Weather: {data.weather.main} Description: {data.weather.description} </h5>
<h5> Feels Like: {data.main.feels_like.toFixed()}C</h5> 
 <h5> Min Tempreature: {data.main.temp_min.toFixed()}C</h5> 
 <h5> Max Tempreature: {data.main.temp_max.toFixed()}C</h5> 
 <h5> Max Tempreature: {data.visibility}</h5>
 <h5>Wind Speed : {data.wind.speed} , Degree: {data.wind.deg}</h5>
 <h5>Sunrise : {data.sys.sunrise}</h5>
 <h5>Sunset: {data.sys.sunset}</h5>
 <h5>TimeZone : {data.timezone} </h5>
<button onClick={()=>setmoreInfo(false)}>Close</button>
 </div>  : null
    }  </div>
: null} 
            </div>

  )
}
