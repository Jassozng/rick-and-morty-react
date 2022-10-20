import { React, useState } from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';
import './Characters.css';
import getApiData from "../App/hooks/getApiData.js";
import getActualPage from './hooks/pagination.js';

const Characters = ({ characters, setCharacters }) => {
  const [search, setSearch] = useState("");

  return (
    <div>
        <h1 className="title">Characters</h1>
        <input type="search" placeholder="Search a character" className="searchInput" onChange={ (event) => { setSearch(event.target.value) } } />
        <button className="btn-search" onClick={ () => { getApiData(setCharacters, `https://rickandmortyapi.com/api/character?name=${ search }`) } }>Search 🔎</button>
        <div className="container-characters">
             {
                characters.results.map((character, index) => {
                    return <CharacterCard character={ character } index={ index }/>
                })
             }
        </div>
        <div className="pages">
          <button className="btn-search" disabled={ characters.info.prev == null ? true : false } onClick={ () => { getApiData(setCharacters, characters.info.prev) } } >Prev ⏮️</button>
          <p className="pageNumber"> Page { getActualPage(characters.info) } </p>
          <button className="btn-search" disabled={ characters.info.next == null ? true : false } onClick={ () => { getApiData(setCharacters, characters.info.next) } } >Next ⏭️</button>
        </div>
    </div>
  )
}

export default Characters