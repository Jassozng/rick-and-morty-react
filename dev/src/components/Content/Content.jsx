import { getActualPage, getDataType, isDisabled } from './hooks/pagination.js';
import getApiData from "../App/hooks/getApiData.js";
import keysConfig from './hooks/keysConfig.json';
import { React, useState } from 'react';
import Card from '../Card/Card';
import './Content.css';

const Content = ({ apiData, apiDataInfo, setApiData }) => {
  const [search, setSearch] = useState("");
  const dataType = getDataType(apiData.url || apiData[0].url);

  return (
    <div>
        <h1 className="title">{ dataType }</h1>
        <div className="search-section">
          <input type="search" placeholder={`Search a ${ dataType }`} className="searchInput" onChange={ (event) => { setSearch(event.target.value) } } />
          <button className="btn-search" onClick={ () => { getApiData(setApiData, `https://rickandmortyapi.com/api/${ dataType }?name=${ search }`) } }>Search 🔎</button>
        </div>
        { 
          apiData[0].error == null ?
            <>
              <section className="container-cards">
                { 
                  apiData.map((data, index) => {
                    return <Card 
                              key={ index } 
                              setApiData={setApiData}
                              image={ data[keysConfig[dataType].image] }
                              title={ data[keysConfig[dataType].title] }
                              subtitle={ data[keysConfig[dataType].subtitle] }
                              titleP1={ keysConfig[dataType].titleP1 }
                              p1={ data[keysConfig[dataType].p1].length }
                              titleP2={ keysConfig[dataType].titleP2 }
                              p2={ data[keysConfig[dataType].p2] }
                              titleP3={ keysConfig[dataType].titleP3 }
                              p3={ data[keysConfig[dataType].p3] }
                              titleP4={ keysConfig[dataType].titleP4 }
                              p4={ dataType == "character" ? data[keysConfig[dataType].p4].name : data[keysConfig[dataType].p4] }
                              currentType={ dataType }
                              requestTypeP1={ keysConfig[dataType].requestP1 }
                              requestArrP1={ data[keysConfig[dataType].p1] }
                              requestTypeP4={ keysConfig[dataType].requestP4 }
                              requestArrP4={ data[keysConfig[dataType].p4] }
                            />;
                  })
                }
              </section>
              <div className="pages">
                  <button className="btn-search" disabled={ isDisabled(apiDataInfo.prev) } onClick={ () => { getApiData(setApiData, apiDataInfo.prev); } }>Prev ⏮️</button>
                  <p className="pageNumber"> Page {getActualPage(apiDataInfo)} </p>
                  <button className="btn-search" disabled={ isDisabled(apiDataInfo.next) } onClick={ () => { getApiData(setApiData, apiDataInfo.next); } }>Next ⏭️</button>
              </div>
            </> :
          <h1>{ apiData[0].error }... Try another search</h1>
        }
    </div>
  )
}

export default Content