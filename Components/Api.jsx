import React, { useEffect, useState } from 'react'

export default function Api() {
const [state,setState]=useState({

  image:"",
  name:"",
  gender:""
    // gender:"male",
    // name:"raj",
    // image:"https://img.freepik.com/free-photo/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838.jpg"
})
useEffect(()=>{
   fetchApi()
},[])
function fetchApi(){
     fetch("https://randomuser.me/api/").then((res)=>{
        return res.json()
     }).then((data)=>{
    console.log(data.results[0])
   
        setState({
            name:data.results[0].name.first,
            gender:data.results[0].gender,
            image:data.results[0].picture.medium
        
      })


     })
}



  return (
    <div>
        <h1>Api</h1>
        <button onClick={fetchApi}>Click </button>
        <h1>{state.name}</h1>
        <h1>{state.gender}</h1>
        <img src={state.image}/>
    </div>
  )
}