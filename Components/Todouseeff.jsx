import React, { useState, useEffect } from 'react'

export default function TodoApp() {
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const storeTodos = JSON.parse(localStorage.getItem("todos")) || [];
        setTodos(storeTodos);
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addTodo = () => {
        if (task.trim()) {
            setTodos([...todos, task]);
            setTask("");
        }
    };
    const deleteBtn = (index) => {
        const del = todos.filter((el, i) => i !== index);
        setTodos(del);
    };

    const editBtn = (index) => {
        const newValue = prompt("Enter new value:", todos[index]);
        if (newValue !== null && newValue.trim() !== "") {
            const updated = [...todos];
            updated[index] = newValue;
            setTodos(updated);
        }
    };

    return (
        <div>
            <h1>Todo</h1>
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder='enter any name here' />
            <button onClick={addTodo}>Add Todo</button>

            {todos.map((el, id) => {
                return (
                    <div>
                        <li key={id}>{el}</li>
                        <button onClick={() => editBtn(id)}>Edit</button>
                        <button onClick={() => deleteBtn(id)}>Delete</button>
                    </div>
                )

            })}

        </div >
    )
}