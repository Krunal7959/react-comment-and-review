import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
        <Link to="/">Api</Link>
        <Link to="/">Card</Link>
        <Link to="/">Table</Link>
        <Link to="/">Timer</Link>

    </div>
  )
}
