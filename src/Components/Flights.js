import React, { useState, useEffect } from 'react'
import './Components.css';
var data = require('./Cities');



export default function Flights() {
const [firstcity, setfCity]= useState('');
const [sCity, setScity] = useState('');
  
  return (
    <div className='flights'>
      <input type='text' onChange={(event)=>setfCity(event.target.value)} value={firstcity}/>
      <div className='dropdown'>
        data.filter((item) => {
          const fcity = value.toLowerCase();
return()
        })
      </div>
    </div>
  )
}
