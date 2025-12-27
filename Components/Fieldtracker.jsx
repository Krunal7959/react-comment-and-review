import React from 'react'

const InputTracker = () => {
    const [text, setText] = React.useState('');
  return (
    
    <div>
      <h1>Task 3</h1>
      <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
        <p> Input: {text}</p>
    </div>
  )
}
export default InputTracker