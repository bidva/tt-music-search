import React from 'react'
import { NavLink  } from 'react-router-dom'
import './Header.css'


const Header = () =>(
  <header>
    <nav>
      <ul>
        <li><NavLink exact to='/' >Home</NavLink></li>
        <li><a href={process.env.REACT_APP_GET_TOKEN_URL}>Get Token</a></li>
      </ul>
    </nav>
  </header> 
)

export default Header