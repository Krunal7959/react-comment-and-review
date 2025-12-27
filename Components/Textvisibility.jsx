import React, { useState } from 'react';

function ToggleText() {
  const [isVisible, setIsVisible] = useState(true);
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
    return (
    <div>
        <h2>Task 2</h2>
        <button onClick={toggleVisibility}>
        Text
        </button>
        {isVisible && <p>hello </p>}
    </div>
    );
}
export default ToggleText;