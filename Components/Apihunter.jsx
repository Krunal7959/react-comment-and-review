import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ProductData() {
  const [data, setData] = useState({
    name: "",
    price: "",
    category: "",
    stock: ""
  });

  const [list, setList] = useState([]);
  const [allData, setAllData] = useState([]);
  const [edit, setEdit] = useState(null);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    try {
      const res = await axios.get("http://localhost:5000/products");
      setList(res.data);
      setAllData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    let result = [...allData];

    if (search) {
      result = result.filter((i) =>
        i.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (sort === "asc") {
      result.sort((a, b) => Number(a.price) - Number(b.price));
    } else if (sort === "desc") {
      result.sort((a, b) => Number(b.price) - Number(a.price));
    }

    setList(result);
  }, [search, sort, allData]);

  function handle(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const submit = async (e) => {
    e.preventDefault();

    if (edit) {
      await axios.put(`http://localhost:5000/products/${edit}`, {
        ...data,
        price: Number(data.price),
        stock: Number(data.stock)
      });
      setEdit(null);
    } else {
      await axios.post("http://localhost:5000/products", {
        ...data,
        price: Number(data.price),
        stock: Number(data.stock)
      });
    }

    setData({ name: "", price: "", category: "", stock: "" });
    fetchApi();
  };

  const del = async (id) => {
    await axios.delete(`http://localhost:5000/products/${id}`);
    fetchApi();
  };

  const edi = (item) => {
    setData(item);
    setEdit(item.id);
  };

  return (
    <div className="container">
      <h2>Product Management</h2>

      <input placeholder="Search" onChange={(e) => setSearch(e.target.value)} />

      <select onChange={(e) => setSort(e.target.value)}>
        <option value="">Sort by Price</option>
        <option value="asc">Low → High</option>
        <option value="desc">High → Low</option>
      </select>

      <form onSubmit={submit}>
        <input name="name" value={data.name} onChange={handle} placeholder="Name" />
        <input name="price" type="number" value={data.price} onChange={handle} placeholder="Price" />
        <input name="category" value={data.category} onChange={handle} placeholder="Category" />
        <input name="stock" type="number" value={data.stock} onChange={handle} placeholder="Stock" />

        <button>{edit ? "Update" : "Add"}</button>
      </form>

      <ul>
        {list.map((i) => (
          <li key={i.id}>
            {i.name} | ₹{i.price} | {i.category} | Stock: {i.stock}
            <button onClick={() => edi(i)}>Edit</button>
            <button onClick={() => del(i.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}