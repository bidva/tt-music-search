import React from 'react'
import { NavLink  } from 'react-router-dom'
import './Header.css'


const Header = () =>(
  <header>
    <nav>
      <ul>
        <li><NavLink exact to='/' >Home</NavLink></li>
        <li><a  href='https://accounts.spotify.com/authorize?client_id=06d4043882254b7981cf26736d82fe30&redirect_uri=http://localhost:3000/token/&scope=user-read-private%20user-read-email&response_type=token&state=123'>get token</a></li>
      </ul>
    </nav>
  </header> 
)

export default Header