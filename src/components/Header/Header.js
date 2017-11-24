import React from 'react'
import { NavLink  } from 'react-router-dom'
import './Header.css'


const Header = () => (
  <header>
    <nav>
      <ul>
        <li><NavLink exact to='/' >Home</NavLink></li>
        <li><NavLink  to='/new'>New releases</NavLink></li>
      </ul>
    </nav>
  </header> 
)

export default Header