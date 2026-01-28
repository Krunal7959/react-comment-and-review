import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { myAction } from './Action'



export default function Input() {
    const [state,setState]=useState({
        username:""
    })
    const dispatch=useDispatch();

    function handletext(e) {
  setState({ username: e.target.value });
}

    function handleSubmit(){
        dispatch(myAction(state.username))
    }   
    

  return (
    <div>
      <input type="text" placeholder='Enter text here' onChange={handletext}/>
      <button onClick={handleSubmit}>submit</button>
    </div>
  )
}