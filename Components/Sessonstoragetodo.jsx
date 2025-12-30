import React, { useEffect, useState } from 'react';

// Very simple example showing both localStorage and sessionStorage
export default function SimpleStorageDemo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [localUser, setLocalUser] = useState(() => {
    const saved = localStorage.getItem("simpleLocalUser");
    return saved ? JSON.parse(saved) : null;
  });

  const [sessionUser, setSessionUser] = useState(() => {
    const saved = sessionStorage.getItem("simpleSessionUser");
    return saved ? JSON.parse(saved) : null;
  });

  // Save to localStorage
  function saveToLocal() {
    if (!name || !email) {
      alert("Enter name and email");
      return;
    }
    const user = { name, email };
    localStorage.setItem("simpleLocalUser", JSON.stringify(user));
    setLocalUser(user);
    setName("");
    setEmail("");
  }

  // Save to sessionStorage
  function saveToSession() {
    if (!name || !email) {
      alert("Enter name and email");
      return;
    }
    const user = { name, email };
    sessionStorage.setItem("simpleSessionUser", JSON.stringify(user));
    setSessionUser(user);
    setName("");
    setEmail("");
  }

  function clearLocal() {
    localStorage.removeItem("simpleLocalUser");
    setLocalUser(null);
  }

  function clearSession() {
    sessionStorage.removeItem("simpleSessionUser");
    setSessionUser(null);
  }

  return (
    <div style={{ maxWidth: 600, margin: "40px auto", padding: 20, border: "1px solid #ccc" }}>
      <h2>LocalStorage & SessionStorage </h2>

      <div style={{ marginBottom: 20 }}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div style={{ marginTop: 10 }}>
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div style={{ marginTop: 15 }}>
          <button onClick={saveToLocal}>Save to localStorage</button>
          <button onClick={saveToSession} style={{ marginLeft: 10 }}>
            Save to sessionStorage
          </button>
        </div>
      </div>

      <hr />

      <div style={{ marginTop: 20 }}>
        <h3>LocalStorage value</h3>
        {localUser ? (
          <div>
            <p>Name: {localUser.name}</p>
            <p>Email: {localUser.email}</p>
            <button onClick={clearLocal}>Clear localStorage</button>
          </div>
        ) : (
          <p>No data in localStorage</p>
        )}
      </div>

      <div style={{ marginTop: 20 }}>
        <h3>SessionStorage value</h3>
        {sessionUser ? (
          <div>
            <p>Name: {sessionUser.name}</p>
            <p>Email: {sessionUser.email}</p>
            <button onClick={clearSession}>Clear sessionStorage</button>
          </div>
        ) : (
          <p>No data in sessionStorage</p>
        )}
      </div>
    </div>
  );
}
