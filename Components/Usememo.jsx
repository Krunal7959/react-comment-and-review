import React, { useMemo, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);

  const square = useMemo(() => {
    console.log("calculating...");
    return num * num;
  }, [num]);

  return (
    <div>
      <h1>{square}</h1>
      <button onClick={() => setNum(num + 1)}>Increment Num</button>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}