// import React, { useState, useEffect } from "react";

// export default function TodoLocal() {
//     const [task, setTask] = useState('');
//     const [todos, setTodos] = useState([]);
//     const [editId, setEditId] = useState(null);

//     // Load todos from localStorage on mount
//     useEffect(() => {
//         const stored = JSON.parse(localStorage.getItem('todos')) || [];
//         setTodos(stored);
//     }, []);

//     // Save todos to localStorage when they change
//     useEffect(() => {
//         localStorage.setItem('todos', JSON.stringify(todos));
//     }, [todos]);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (task.trim() === '') return;

//         if (editId !== null) {
//             setTodos(todos.map(todo => 
//                 todo.id === editId ? { ...todo, text: task } : todo
//             ));
//             setEditId(null);
//         } else {
//             const newTodo = {
//                 id: Date.now(),
//                 text: task,
//                 completed: false
//             };
//             setTodos([...todos, newTodo]);
//         }
//         setTask('');
//     };

//     const handleDelete = (id) => {
//         setTodos(todos.filter(todo => todo.id !== id));
//     };

//     const handleToggle = (id) => {
//         setTodos(todos.map(todo =>
//             todo.id === id ? { ...todo, completed: !todo.completed } : todo
//         ));
//     };

//     const handleEdit = (id) => {
//         const todo = todos.find(t => t.id === id);
//         if (todo) {
//             setTask(todo.text);
//             setEditId(id);
//         }
//     };

//     return (
//         <div style={{ maxWidth: '500px', margin: '50px auto', padding: '20px' }}>
//             <h1>Todo App</h1>

//             <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
//                 <input
//                     type="text"
//                     value={task}
//                     onChange={(e) => setTask(e.target.value)}
//                     placeholder="Add a task..."
//                     style={{ 
//                         padding: '10px', 
//                         width: '70%', 
//                         marginRight: '10px',
//                         fontSize: '16px'
//                     }}
//                 />
//                 <button 
//                     type="submit"
//                     style={{ 
//                         padding: '10px 20px', 
//                         fontSize: '16px',
//                         backgroundColor: editId ? '#ffc107' : '#007bff',
//                         color: 'white',
//                         border: 'none',
//                         borderRadius: '4px',
//                         cursor: 'pointer'
//                     }}
//                 >
//                     {editId ? 'Update' : 'Add'}
//                 </button>
//                 {editId && (
//                     <button
//                         type="button"
//                         onClick={() => {
//                             setEditId(null);
//                             setTask('');
//                         }}
//                         style={{ 
//                             marginLeft: '10px',
//                             padding: '10px 20px',
//                             fontSize: '16px',
//                             backgroundColor: '#6c757d',
//                             color: 'white',
//                             border: 'none',
//                             borderRadius: '4px',
//                             cursor: 'pointer'
//                         }}
//                     >
//                         Cancel
//                     </button>
//                 )}
//             </form>

//             <div>
//                 {todos.length === 0 ? (
//                     <p style={{ color: '#666', textAlign: 'center' }}>No tasks yet</p>
//                 ) : (
//                     todos.map((todo) => (
//                         <div
//                             key={todo.id}
//                             style={{
//                                 display: 'flex',
//                                 alignItems: 'center',
//                                 padding: '10px',
//                                 marginBottom: '10px',
//                                 backgroundColor: '#f8f9fa',
//                                 borderRadius: '4px'
//                             }}
//                         >
//                             <input
//                                 type="checkbox"
//                                 checked={todo.completed}
//                                 onChange={() => handleToggle(todo.id)}
//                                 style={{ marginRight: '10px', width: '20px', height: '20px' }}
//                             />
//                             <span
//                                 style={{
//                                     flex: 1,
//                                     textDecoration: todo.completed ? 'line-through' : 'none',
//                                     color: todo.completed ? '#999' : '#000'
//                                 }}
//                             >
//                                 {todo.text}
//                             </span>
//                             <button
//                                 onClick={() => handleEdit(todo.id)}
//                                 disabled={todo.completed}
//                                 style={{
//                                     marginRight: '5px',
//                                     padding: '5px 10px',
//                                     backgroundColor: '#007bff',
//                                     color: 'white',
//                                     border: 'none',
//                                     borderRadius: '4px',
//                                     cursor: todo.completed ? 'not-allowed' : 'pointer',
//                                     opacity: todo.completed ? 0.5 : 1
//                                 }}
//                             >
//                                 Edit
//                             </button>
//                             <button
//                                 onClick={() => handleDelete(todo.id)}
//                                 style={{
//                                     padding: '5px 10px',
//                                     backgroundColor: '#dc3545',
//                                     color: 'white',
//                                     border: 'none',
//                                     borderRadius: '4px',
//                                     cursor: 'pointer'
//                                 }}
//                             >
//                                 Delete
//                             </button>
//                         </div>
//                     ))
//                 )}
//             </div>
//         </div>
//     );
// }


// *************** 2 ****************

// import React, { useEffect, useState } from 'react'

// export default function LocalStroage() {

//     const [state, setState] = useState({
//         name: "",
//         email: ""
//     })

//     const [data, setData] = useState(() => {
//         var saveData = JSON.parse(localStorage.getItem("data"))
//         return saveData || []
//     })

//     useEffect(() => {
//         localStorage.setItem("data", JSON.stringify(data))
//     }, [data])

//     function SubmitForm(e) {
//         e.preventDefault()
//         setData([...data, state])
//     }

//     return (
//         <div>
//             <h1>LocalStroage</h1>

//             <form onSubmit={SubmitForm}>
//                 <label>First name:</label>

//                 <input type="text" id="name" name="name" onChange={(e) =>
//                     setState({
//                         ...state,
//                         name: e.target.value
//                     })
//                 }
//                 />

//                 <br />
//                   <label>Email:</label>

//                 <input type="text" id="email" name="email" onChange={(e) =>
//                     setState({
//                         ...state,
//                         email: e.target.value
//                     })
//                 }
//                 />

//                 <input type="Submit" />
//             </form>

//             {
//                 data.map((el, i) => {
//                     return (
//                         <>
//                             <li>{el.name}</li>
//                             <li>{el.email}</li>
//                         </>
//                     )
//                 })
//             }
//         </div>
//     )
// }


// ****************** 3 *******

import React, { useEffect, useState } from 'react';

export default function LocalStorage() {
  const [state, setState] = useState({
    name: "",
    email: ""
  });

  const [data, setData] = useState(() => {
    const savedData = JSON.parse(localStorage.getItem("localStorageData"));
    return savedData || [];
  });

  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("localStorageData", JSON.stringify(data));
  }, [data]);

  function submitForm(e) {
    e.preventDefault();

    if (state.name.trim() === "" || state.email.trim() === "") {
      alert("Please fill all fields");
      return;
    }

    if (editIndex !== null) {
      const updatedData = [...data];
      updatedData[editIndex] = state;
      setData(updatedData);
      setEditIndex(null);
    } else {
      setData([...data, state]);
    }

    setState({ name: "", email: "" });
  }

  function handleEdit(index) {
    setState(data[index]);
    setEditIndex(index);
  }

  function handleDelete(index) {
    const filteredData = data.filter((_, i) => i !== index);
    setData(filteredData);
  }

  function handleClearAll() {
    if (window.confirm("Are you sure you want to clear all data?")) {
      setData([]);
      localStorage.removeItem("localStorageData");
    }
  }

  return (
    <div className="storage-container">
      <style>{`
        .storage-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 30px 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
          background: #f5f5f5;
          min-height: 100vh;
        }

        .storage-container h1 {
          text-align: center;
          color: #2c3e50;
          margin-bottom: 10px;
          font-size: 2em;
          font-weight: 600;
        }

        .storage-info {
          text-align: center;
          color: #27ae60;
          margin-bottom: 30px;
          padding: 10px;
          background: #d5f4e6;
          border-radius: 8px;
          font-size: 14px;
        }

        .storage-container form {
          background: white;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          margin-bottom: 30px;
        }

        .storage-container label {
          display: block;
          margin-bottom: 8px;
          color: #333;
          font-weight: 600;
          font-size: 14px;
        }

        .storage-container input {
          width: 100%;
          padding: 12px 15px;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          font-size: 16px;
          font-family: inherit;
          transition: all 0.3s ease;
          box-sizing: border-box;
          margin-bottom: 20px;
        }

        .storage-container input:focus {
          outline: none;
          border-color: #27ae60;
          box-shadow: 0 0 0 3px rgba(39, 174, 96, 0.1);
        }

        .storage-container button {
          padding: 12px 24px;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-right: 10px;
          margin-bottom: 10px;
        }

        .btn-submit {
          background: linear-gradient(135deg, #27ae60 0%, #229954 100%);
          color: white;
        }

        .btn-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(39, 174, 96, 0.3);
        }

        .btn-edit {
          background: #3498db;
          color: white;
          padding: 8px 16px;
          font-size: 14px;
        }

        .btn-edit:hover {
          background: #2980b9;
        }

        .btn-delete {
          background: #e74c3c;
          color: white;
          padding: 8px 16px;
          font-size: 14px;
        }

        .btn-delete:hover {
          background: #c0392b;
        }

        .btn-clear {
          background: #e67e22;
          color: white;
          margin-top: 20px;
        }

        .btn-clear:hover {
          background: #d35400;
        }

        .data-list {
          background: white;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .data-list h2 {
          color: #2c3e50;
          margin-bottom: 20px;
          font-size: 1.5em;
        }

        .data-item {
          background: #f9f9f9;
          padding: 15px 20px;
          border-radius: 8px;
          margin-bottom: 15px;
          border-left: 4px solid #27ae60;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.3s ease;
        }

        .data-item:hover {
          transform: translateX(5px);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          background: #fff;
        }

        .data-content {
          flex: 1;
        }

        .data-content strong {
          color: #27ae60;
          display: block;
          margin-bottom: 5px;
        }

        .data-content span {
          color: #555;
        }

        .data-actions {
          display: flex;
          gap: 10px;
        }

        .empty-message {
          text-align: center;
          color: #999;
          font-style: italic;
          padding: 40px 20px;
          background: #f9f9f9;
          border-radius: 8px;
        }

        @media (max-width: 768px) {
          .storage-container {
            padding: 20px 15px;
          }

          .data-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
          }

          .data-actions {
            width: 100%;
            justify-content: flex-end;
          }
        }
      `}</style>
      <h1>LocalStorage Demo</h1>
      <div className="storage-info">
        💾 Data persists even after closing the browser. Try closing and reopening!
      </div>

      <form onSubmit={submitForm}>
        <label>Name:</label>
        <input
          type="text"
          value={state.name}
          onChange={(e) =>
            setState({ ...state, name: e.target.value })
          }
          placeholder="Enter your name"
        />

        <label>Email:</label>
        <input
          type="email"
          value={state.email}
          onChange={(e) =>
            setState({ ...state, email: e.target.value })
          }
          placeholder="Enter your email"
        />

        <button type="submit" className="btn-submit">
          {editIndex !== null ? "Update" : "Add"}
        </button>
        {editIndex !== null && (
          <button 
            type="button" 
            className="btn-clear"
            onClick={() => {
              setEditIndex(null);
              setState({ name: "", email: "" });
            }}
          >
            Cancel
          </button>
        )}
      </form>

      <div className="data-list">
        <h2>Stored Data ({data.length} items)</h2>
        {data.length > 0 && (
          <button className="btn-clear" onClick={handleClearAll}>
            Clear All Data
          </button>
        )}
        {data.length === 0 ? (
          <div className="empty-message">No data stored yet</div>
        ) : (
          data.map((el, i) => (
            <div key={i} className="data-item">
              <div className="data-content">
                <strong>{el.name}</strong>
                <span>{el.email}</span>
              </div>
              <div className="data-actions">
                <button className="btn-edit" onClick={() => handleEdit(i)}>
                  Edit
                </button>
                <button className="btn-delete" onClick={() => handleDelete(i)}>
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

