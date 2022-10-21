import './App.css';
import { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import rickMortyImg from '../../assets/rick-morty.png';
import portalImg from '../../assets/portal.png';
import tvImg from '../../assets/tv.png';
import dataRequest from './hooks/getApiData';
import Content from '../Content/Content';

function App() {
  const [apiData, setApiData] = useState(null);

  return (
    <>
      <Header setApiData={ setApiData }/>
      <main className="App">
        { 
          apiData != null ? 
            <Content apiData={ apiData.results } apiDataInfo={ apiData.info } setApiData={ setApiData }></Content> : 
            ( 
              <div className="main-menu">
                <div className="menu-option">
                  <img src={ rickMortyImg } alt="Rick & Morty" className="img-home" />
                  <p>See all characters from the iconical series!</p>
                  <button onClick={ () => { dataRequest(setApiData, "https://rickandmortyapi.com/api/character?page=1") } } className="btn-search">Expore Characters</button>
                </div>
                <div className="menu-option">
                  <img src={ portalImg } alt="Portal Image" className="img-home" />
                  <p>Get in into the portal and see amazing locations from the series!</p>
                  <button onClick={ () => { dataRequest(setApiData, "https://rickandmortyapi.com/api/location?page=1") } } className="btn-search">Explore Locations</button>
                </div>
                <div className="menu-option">
                  <img src={ tvImg } alt="Tv Image" className="img-home" />
                  <p>Take a peek into interdimensional TV and see the episodes from this amazing serie!</p>
                  <button onClick={ () => { dataRequest(setApiData, "https://rickandmortyapi.com/api/episode?page=1") } } className="btn-search">Explore Episodes</button>
                </div>
              </div>
            ) 
        }
      </main>
      <Footer />
    </>
  )
}

export default App
