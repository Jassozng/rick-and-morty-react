import React from 'react'
import './Header.css'

const Header = ({ setApiData }) => {
  return (
    <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        <div className="nav-buttons">
            <a href="" onClick={ () => setApiData(null) }>Home</a>
        </div>
    </header>
  )
}

export default Header