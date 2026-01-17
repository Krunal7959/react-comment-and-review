import React, { useState } from "react";

const data = [
  { id: 1, name: "Apple", price: 100 },
  { id: 2, name: "Banana", price: 40 },
  { id: 3, name: "Orange", price: 60 },
  { id: 4, name: "Mango", price: 120 }
];

function SearchAndSort() {
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  // 🔍 Search
  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  // ↕️ Sort
  const sortedData = [...filteredData].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  return (
    <div style={{ padding: "20px" }}>
      <h2>Search & Sort Example</h2>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      {/* Sort dropdown */}
      <select
        value={sortOrder}
        onChange={e => setSortOrder(e.target.value)}
        style={{ marginLeft: "10px" }}
      >
        <option value="asc">A → Z</option>
        <option value="desc">Z → A</option>
      </select>

      {/* List */}
      <ul>
        {sortedData.map(item => (
          <li key={item.id}>
            {item.name} — ₹{item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchAndSort;
