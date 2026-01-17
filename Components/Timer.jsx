import React, { useEffect, useState } from 'react'

export default function Timer() {
    const [timer,setTimer]=useState(0)


    useEffect(()=>{
        setInterval(()=>{
              setTimer((prev)=>prev+1)
        },1000)
    },[])

  return (
    <div>
        <h1>Timer is {timer}</h1>
     

    </div>
  )
}