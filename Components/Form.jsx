import React, { useRef } from 'react';

export default function Form() {
  const nameref = useRef(null);
  const mailref = useRef(null);

  function handlesubmit(e) {
    e.preventDefault();

    console.log({
      name: nameref.current.value,
      mail: mailref.current.value,
    });
  }

  return (
    <div>
      <h1>Form comp</h1>
      <form onSubmit={handlesubmit}>
        <input type="text" placeholder="Enter name" name='name' ref={nameref} />
        <input type="text" placeholder="Enter mail" name='mail' ref={mailref} />
        <input type="submit" />
      </form>
    </div>
  );
}