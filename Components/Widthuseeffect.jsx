import React, { useEffect, useState } from "react";

function WindowWidthTracker() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{ fontSize: "24px", padding: "20px" }}>
      <h2>Window Width Tracker</h2>
      <p>Current Width: {width}px</p>
    </div>
  );
}

export default WindowWidthTracker;