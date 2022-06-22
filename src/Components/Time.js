import React, { useEffect, useState } from 'react'
import './Components.css'

export default function Time() {
    const [currentTime, setCuttenstTime] = useState('');
    const [currentDate, setCurrentDate] = useState('');
    const one = document.getElementById('one');
    useEffect(()=>{
      setInterval(()=>{
        setCuttenstTime(new Date().toTimeString());
        setCurrentDate(new Date().toDateString());
      }, 1000)
    },[currentDate, currentTime])
    // console.log(currentTime)
    
   
    
  return (
    <div id='one' className='time'>
<h3>{currentTime}</h3>
<h3>{currentDate}</h3>
    </div>
  )
}
