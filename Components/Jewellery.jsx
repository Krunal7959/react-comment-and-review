import React, { useEffect, useState } from 'react';

export default function Jewellery() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const finalData = products
    .filter(item =>
      item.title.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) =>
      sort === "low" ? a.price - b.price :
      sort === "high" ? b.price - a.price : 0
    );

  return (
    <div>
      <h1>Jewellery</h1>

      {/* Search */}
      <input
        placeholder="Search product"
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Sort */}
      <select onChange={(e) => setSort(e.target.value)}>
        <option value="">Sort by price</option>
        <option value="low">Low → High</option>
        <option value="high">High → Low</option>
      </select>

      <hr />

      {finalData.map(item => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <img src={item.image} alt={item.title} width="120" />
          <p>${item.price}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}