import React, { useEffect, useState } from "react";

function CounterTitle() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    
    document.title = `You clicked ${count} times`;
  }, [count]); 

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  );
}

export default CounterTitle;
