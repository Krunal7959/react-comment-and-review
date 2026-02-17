import React, { useCallback, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("comp");
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>Click</button>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}