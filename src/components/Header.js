import React from 'react'
import './Header.css'



const Header = ({user})=> {
  const {name , status} = user;
  return (
    <header className = "Header">
      <h1 className = "Header__name">{name}</h1>
      <p classname = "Header__status">{status}</p>
    </header>
  )
}

export default Header
