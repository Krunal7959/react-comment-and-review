import React, { useState } from "react";

function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(false); 

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div
      style={{
        backgroundColor: isDark ? "#222" : "#fff",
        color: isDark ? "#fff" : "#000",
        textAlign: "center",
      }}
    >
      <h1>Task 5</h1>

      <button
        onClick={toggleTheme}
       
      >
        Switch to {isDark ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}

export default ThemeSwitcher;
