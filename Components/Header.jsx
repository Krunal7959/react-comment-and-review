import React, { useState, useEffect } from "react";

export default function App() {
  const [user, setUser] = useState(null); // store logged in user
  const [page, setPage] = useState("home"); // home | login | signup

  // Load user from localStorage when app starts
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (email, password) => {
    const stored = localStorage.getItem("userData");
    if (!stored) return { success: false, msg: "No user found. Please sign up." };

    const userData = JSON.parse(stored);

    if (email === userData.email && password === userData.password) {
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      setPage("home");
      return { success: true };
    }

    return { success: false, msg: "Email or password incorrect" };
  };

  const handleSignup = (email, password) => {
    const userData = { email, password };
    localStorage.setItem("userData", JSON.stringify(userData));
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
    setPage("home");
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setPage("home");
  };

  return (
    <div>
      <Header user={user} setPage={setPage} logout={handleLogout} />

      <div style={{ padding: 20 }}>
        {page === "home" && <h2>Welcome {user ? user.email : "Guest"}!</h2>}
        {page === "login" && <Login onLogin={handleLogin} />}
        {page === "signup" && <Signup onSignup={handleSignup} />}
      </div>
    </div>
  );
}

/* ---------------- HEADER ---------------- */

const Header = ({ user, setPage, logout }) => (
  <header style={styles.header}>
    <h2>My App</h2>

    <nav>
      {!user ? (
        <>
          <button style={styles.btn} onClick={() => setPage("login")}>Login</button>
          <button style={styles.btn} onClick={() => setPage("signup")}>Signup</button>
        </>
      ) : (
        <button style={styles.btn} onClick={logout}>Logout</button>
      )}
    </nav>
  </header>
);

/* ---------------- LOGIN ---------------- */

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const submit = () => {
    if (!email || !password) {
      setMsg("All fields are required");
      return;
    }

    const result = onLogin(email, password);
    if (!result.success) setMsg(result.msg);
  };

  return (
    <div>
      <h3>Login</h3>

      <input
        type="email"
        placeholder="Email"
        style={styles.input}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br />

      <input
        type="password"
        placeholder="Password"
        style={styles.input}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br />

      <button style={styles.btn} onClick={submit}>Login</button>

      {msg && <p style={{ color: "red" }}>{msg}</p>}
    </div>
  );
};

/* ---------------- SIGNUP ---------------- */

const Signup = ({ onSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const submit = () => {
    if (!email || !password) {
      setMsg("All fields are required");
      return;
    }

    if (password.length < 6) {
      setMsg("Password must be at least 6 characters");
      return;
    }

    onSignup(email, password);
  };

  return (
    <div>
      <h3>Signup</h3>

      <input
        type="email"
        placeholder="Email"
        style={styles.input}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br />

      <input
        type="password"
        placeholder="Password"
        style={styles.input}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br />

      <button style={styles.btn} onClick={submit}>Signup</button>

      {msg && <p style={{ color: "red" }}>{msg}</p>}
    </div>
  );
};

/* ---------------- STYLES ---------------- */

const styles = {
  header: {
    padding: "15px 20px",
    background: "#222",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btn: {
    padding: "6px 12px",
    marginLeft: 10,
    cursor: "pointer",
  },
  input: {
    padding: "8px",
    margin: "5px 0",
    width: "200px",
  },
};
