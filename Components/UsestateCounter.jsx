import React, { useState } from 'react';

function UsestateCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Task 1</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>Decrease</button>
      <button onClick={() => setCount(0)  }>Reset</button>

    </div>
  );
}

export default UsestateCounter;
