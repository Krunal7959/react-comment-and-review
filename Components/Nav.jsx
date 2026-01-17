import React from 'react'
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <div>

            <Link to="/card">Card</Link>
            <Link to="/table">Table</Link>
            <Link to="/api">API</Link>
            <Link to="/timer">Timer</Link>
            <Link to="/Product">product</Link>


        </div>
    )
}