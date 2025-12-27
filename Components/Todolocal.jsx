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
    const savedData = JSON.parse(localStorage.getItem("data"));
    return savedData || [];
  });

  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  function submitForm(e) {
    e.preventDefault();

    if (editIndex !== null) {
      // Edit
      const updatedData = [...data];
      updatedData[editIndex] = state;
      setData(updatedData);
      setEditIndex(null);
    } else {
      // Add
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

  return (
    <div>
      <h1>LocalStorage</h1>

      <form onSubmit={submitForm}>
        <label>Name:</label>
        <input
          type="text"
          value={state.name}
          onChange={(e) =>
            setState({ ...state, name: e.target.value })
          }
        />

        <br />

        <label>Email:</label>
        <input
          type="text"
          value={state.email}
          onChange={(e) =>
            setState({ ...state, email: e.target.value })
          }
        />

        <br />

        <button type="submit">
          {editIndex !== null ? "Update" : "Submit"}
        </button>
      </form>

      <ul>
        {data.map((el, i) => (
          <li key={i}>
            {el.name} - {el.email}
            <button onClick={() => handleEdit(i)}>Edit</button>
            <button onClick={() => handleDelete(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

