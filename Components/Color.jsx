import React, { useState } from "react";

function ColorChanger() {
  const [color, setColor] = useState("white"); 

  return (
    <div style={{ backgroundColor: color, height: "20vh", textAlign: "center" }}>
      <h1>Task 4</h1>

      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />

      <p>Selected Color: {color}</p>
    </div>
  );
}

export default ColorChanger;
