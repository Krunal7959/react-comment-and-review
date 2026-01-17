import React from 'react'
import { Link,Outlet } from "react-router-dom";

export default function Product() {
  return (
    <div>
      <Link to="electronic">electronic</Link>
      <Link to="jewellery">jewellery</Link>
      <Link to="menscloth">menscloth</Link>
      <div><Outlet/></div>
    </div>
  )
}