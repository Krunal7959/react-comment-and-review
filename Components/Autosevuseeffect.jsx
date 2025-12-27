import React, { useEffect, useState } from "react";

function AutoSaveForm() {
  const [text, setText] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log("Saved:", text);
    }, 1000); 

    return () => {
      clearTimeout(timeoutId);
    };
  }, [text]); 

  return (
    <div style={{ padding: "20px", fontSize: "20px" }}>
      <h2>Auto-Save Form</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
        style={{ padding: "10px", width: "300px", fontSize: "18px" }}
      />
      <p>Typed Text: {text}</p>
    </div>
  );
}

export default AutoSaveForm;