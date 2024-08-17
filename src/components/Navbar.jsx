import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props) {
  return (
    <div>
     <h3>this is navbar</h3>


     <ul className="nav">
  <li className="nav-item">
    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
  </li>

  <li className="nav-item">
    <Link className="nav-link active" aria-current="page" to="/Cart">cart <sup>{props.cartArr.length}</sup> </Link>
  </li>

  <li className="nav-item">
    <Link className="nav-link active" aria-current="page" to="/viewDetails">viewDetails</Link>
  </li>
  
 
  
</ul>

    </div>
  )
}

export default Navbar
