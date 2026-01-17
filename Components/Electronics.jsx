import React, { useState, useEffect } from 'react';

export default function Electronic() {
  const [products, setProducts] = useState([]);

  function fetchData() {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Electronics</h1>

      {products.map((item) => (
        <div>
          <h3>{item.title}</h3>
          <img src={item.image} alt={item.title} />
          <p>$ {item.price}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}