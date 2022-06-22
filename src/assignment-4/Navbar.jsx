import "./navstyling.css"
import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
<nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid">
    {/* <Link class="navbar-brand" to="#">Navbar</Link> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav" id='nav'>
        <Link class="nav-link active" id='navl' aria-current="page" to="/home">Home</Link>
        <Link class="nav-link" id='navl' to="/student">Students</Link>
        <Link class="nav-link" id='navl' to="/contact">Contacts</Link>
            
    
      </div>
    </div>
  </div>
</nav>

  )
}
