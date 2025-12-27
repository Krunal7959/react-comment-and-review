import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function TodoList() {
    const [task, setTask] = useState('');
    const [todos, setTodos] = useState([]);
    const [editId, setEditId] = useState(null);

    // Load todos from localStorage on component mount
    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(storedTodos);
    }, []);

    // Save todos to localStorage whenever todos change
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim() === '') return;

        if (editId !== null) {
            // Update existing todo
            setTodos(todos.map(todo => 
                todo.id === editId 
                    ? { ...todo, text: task, updatedAt: new Date().toISOString() }
                    : todo
            ));
            setEditId(null);
        } else {
            // Add new todo
            const newTodo = {
                id: Date.now(),
                text: task,
                completed: false,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            };
            setTodos([...todos, newTodo]);
        }
        setTask('');
    };

    const handleEdit = (id) => {
        const todo = todos.find(t => t.id === id);
        if (todo) {
            setTask(todo.text);
            setEditId(id);
        }
    };

    const handleDelete = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const handleToggleComplete = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id
                ? { ...todo, completed: !todo.completed, updatedAt: new Date().toISOString() }
                : todo
        ));
    };

    const handleClearCompleted = () => {
        setTodos(todos.filter(todo => !todo.completed));
    };

    const completedCount = todos.filter(todo => todo.completed).length;
    const totalCount = todos.length;

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <div className="card shadow">
                        <div className="card-header bg-primary text-white">
                            <h2 className="card-title mb-0 text-center">Todo App</h2>
                            <p className="text-center mb-0 small">With Local Storage</p>
                        </div>
                        <div className="card-body">
                            {/* Todo Form */}
                            <form onSubmit={handleSubmit} className="mb-4">
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Add a new task..."
                                        value={task}
                                        onChange={(e) => setTask(e.target.value)}
                                    />
                                    <button
                                        type="submit"
                                        className={`btn ${editId !== null ? 'btn-warning' : 'btn-primary'} btn-lg`}
                                    >
                                        {editId !== null ? 'Update' : 'Add'}
                                    </button>
                                </div>
                                {editId !== null && (
                                    <button
                                        type="button"
                                        className="btn btn-sm btn-outline-secondary mt-2"
                                        onClick={() => {
                                            setEditId(null);
                                            setTask('');
                                        }}
                                    >
                                        Cancel Edit
                                    </button>
                                )}
                            </form>

                            {/* Todo Stats */}
                            {totalCount > 0 && (
                                <div className="d-flex justify-content-between align-items-center mb-3 p-2 bg-light rounded">
                                    <span className="text-muted">
                                        Total: <strong>{totalCount}</strong>
                                    </span>
                                    <span className="text-muted">
                                        Completed: <strong>{completedCount}</strong>
                                    </span>
                                    {completedCount > 0 && (
                                        <button
                                            className="btn btn-sm btn-outline-danger"
                                            onClick={handleClearCompleted}
                                        >
                                            Clear Completed
                                        </button>
                                    )}
                                </div>
                            )}

                            {/* Todo List */}
                            {todos.length === 0 ? (
                                <div className="text-center py-5 text-muted">
                                    <p className="mb-0">No tasks yet. Add one above!</p>
                                </div>
                            ) : (
                                <div className="list-group">
                                    {todos.map((todo) => (
                                        <div
                                            key={todo.id}
                                            className={`list-group-item d-flex justify-content-between align-items-center ${
                                                todo.completed ? 'bg-light' : ''
                                            }`}
                                        >
                                            <div className="form-check flex-grow-1">
                                                <input
                                                    className="form-check-input me-3"
                                                    type="checkbox"
                                                    checked={todo.completed}
                                                    onChange={() => handleToggleComplete(todo.id)}
                                                    id={`todo-${todo.id}`}
                                                />
                                                <label
                                                    className={`form-check-label flex-grow-1 ${
                                                        todo.completed ? 'text-decoration-line-through text-muted' : ''
                                                    }`}
                                                    htmlFor={`todo-${todo.id}`}
                                                    style={{ cursor: 'pointer' }}
                                                >
                                                    {todo.text}
                                                </label>
                                            </div>
                                            <div className="btn-group" role="group">
                                                <button
                                                    className="btn btn-sm btn-outline-primary"
                                                    onClick={() => handleEdit(todo.id)}
                                                    disabled={todo.completed}
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    className="btn btn-sm btn-outline-danger"
                                                    onClick={() => handleDelete(todo.id)}
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ****** Todo with use effect **********


// import React, { useState, useEffect } from 'react'

// export default function TodoApp() {
//     const [task, setTask] = useState("");
//     const [todos, setTodos] = useState([]);

//     useEffect(() => {
//         const storeTodos = JSON.parse(localStorage.getItem("todos")) || [];
//         setTodos(storeTodos);
//     }, []);

//     useEffect(() => {
//         localStorage.setItem("todos", JSON.stringify(todos));
//     }, [todos]);

//     const addTodo = () => {
//         if (task.trim()) {
//             setTodos([...todos, task]);
//             setTask("");
//         }
//     };
//     const deleteBtn = (index) => {
//         const del = todos.filter((el, i) => i !== index);
//         setTodos(del);
//     };

//     const editBtn = (index) => {
//         const newValue = prompt("Enter new value:", todos[index]);
//         if (newValue !== null && newValue.trim() !== "") {
//             const updated = [...todos];
//             updated[index] = newValue;
//             setTodos(updated);
//         }
//     };

//     return (
//         <div>
//             <h1>Todo</h1>
//             <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder='enter any name here' />
//             <button onClick={addTodo}>Add Todo</button>

//             {todos.map((el, id) => {
//                 return (
//                     <div>
//                         <li key={id}>{el}</li>
//                         <button onClick={() => editBtn(id)}>Edit</button>
//                         <button onClick={() => deleteBtn(id)}>Delete</button>
//                     </div>
//                 )

//             })}

//         </div >
//     )
// }