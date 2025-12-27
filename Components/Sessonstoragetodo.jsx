import React, { useEffect, useState } from 'react';

export default function SessionStorage() {
  const [state, setState] = useState({
    name: "",
    email: ""
  });

  const [data, setData] = useState(() => {
    const savedData = JSON.parse(sessionStorage.getItem("data"));
    return savedData || [];
  });

  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    sessionStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  function submitForm(e) {
    e.preventDefault();

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

  return (
    <div>
      <h1>SessionStorage</h1>

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
