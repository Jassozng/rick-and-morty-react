import './App.css';
import { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import rickMortyImg from '../rick-morty.png';
import dataRequest from './hooks/getApiData';
import Characters from '../Characters/Characters';

function App() {
  const [characters, setCharacters] = useState(null);

  return (
    <>
      <Header setCharacters={ setCharacters }/>
      <div className="App">
        { 
          characters != null ? 
            <Characters characters={ characters } setCharacters={ setCharacters }></Characters> : 
            ( 
              <>
                <img src={ rickMortyImg } alt="Rick & Morty" className="img-home" /><br />
                <button onClick={ () => { dataRequest(setCharacters, "https://rickandmortyapi.com/api/character?page=1") } } className="btn-search">See Characters 🌐</button>
              </>
            ) 
        }
      </div>
      <Footer />
    </>
  )
}

export default App
