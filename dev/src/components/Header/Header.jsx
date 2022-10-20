import React from 'react'
import './Header.css'

const Header = (setCharacters) => {
  return (
    <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        <div className="nav-buttons">
            <a href="" onClick={ () => setCharacters(null) }>Home</a>
        </div>
    </header>
  )
}

export default Header