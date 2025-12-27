import React, { useState, useEffect } from 'react';

export default function Card() {

  const [state, setState] = useState(
    "https://static.vecteezy.com/system/resources/thumbnails/040/890/255/small/ai-generated-empty-wooden-table-on-the-natural-background-for-product-display-free-photo.jpg"
  );

  useEffect(() => {
    console.log("mount phase");

    return () => {
      alert("unmount phase");
    };
  }, []);

  return (
    <div>
      <h1>Card Component</h1>

      <img 
        src={state} />

      <br /><br />

      <button
        onClick={() =>
          setState(
            "https://static.vecteezy.com/system/resources/thumbnails/001/849/553/small/modern-gold-background-free-vector.jpg"
          )
        }
      >
        Show New Image
      </button>
    </div>
  );
}
