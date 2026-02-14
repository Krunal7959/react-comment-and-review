import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue, push, set, update, remove } from "firebase/database";
import { app } from "../Firebase";

const db = getDatabase(app);

export default function FirebaseDB() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ username: "", email: "" });
  const [editId, setEditId] = useState("");

  useEffect(() => {
    const r = ref(db, "users");
    onValue(r, (snap) => {
      const data = snap.val();
      if (!data) return setUsers([]);
      setUsers(Object.keys(data).map((id) => ({ id, ...data[id] })));
    });
  }, []);

  const change = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const save = () => {
    if (!form.username || !form.email) return alert("Username aur Email dono bharo");

    if (editId) {
      update(ref(db, `users/${editId}`), form).then(() => {
        alert("Updated");
        setEditId("");
        setForm({ username: "", email: "" });
      });
    } else {
      const newRef = push(ref(db, "users"));
      set(newRef, form).then(() => {
        alert("Added");
        setForm({ username: "", email: "" });
      });
    }
  };

  const del = (id) => {
    remove(ref(db, `users/${id}`)).then(() => alert("Deleted"));
  };

  const edit = (u) => {
    setEditId(u.id);
    setForm({ username: u.username, email: u.email });
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Firebase Database</h1>

      <input
        name="username"
        placeholder="Username"
        value={form.username}
        onChange={change}
      />
      <br /><br />

      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={change}
      />
      <br /><br />

      <button onClick={save}>{editId ? "Update User" : "Add User"}</button>
      {editId && (
        <button
          onClick={() => {
            setEditId("");
            setForm({ username: "", email: "" });
          }}
          style={{ marginLeft: 10 }}
        >
          Cancel
        </button>
      )}

      <hr />

      <h2>All Users</h2>
      {users.length === 0 ? (
        <p>No users found</p>
      ) : (
        <ul>
          {users.map((u) => (
            <li key={u.id}>
              <b>{u.username}</b> - {u.email}{" "}
              <button onClick={() => edit(u)}>Edit</button>{" "}
              <button onClick={() => del(u.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}