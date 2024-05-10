import { Link } from "react-router-dom"
import React from "react"
import '../../src/Styling/header.css'
import '../../src/Styling/index.css'
const Header = () => {
    return (
        <>
        <header>
            <h1>NorthCoders News</h1>
            <button className="button"><Link to="/" >Home</Link></button>
            <button>Log-In</button>
            <button>Sign-Up</button>
            <button>Account</button>
            <button><Link to="/articles">Articles</Link></button>
            <button><Link to="/topics">Topics</Link></button>
            </header>
          </>  
    )
}

export default Header

