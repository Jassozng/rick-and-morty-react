import buildUrl from './hooks/linkToScripts';
import getApiData from '../App/hooks/getApiData.js'
import getDefaultImageByType from './hooks/defaultImages';
import React from 'react';
import './Card.css';

const CharacterCard = ({ setApiData, image, title, subtitle, p1, titleP1, p2, titleP2, p3, titleP3, p4, titleP4, currentType, requestTypeP1, requestArrP1, requestTypeP4, requestArrP4 }) => {
  const linkToUrlP1 = buildUrl(requestArrP1, requestTypeP1);
  const linkToUrlP4 = requestTypeP4 != "" ? buildUrl(requestArrP4, requestTypeP4) : null;

  return (
    <div className="card-container">
        <div className="card-image">
          <img src={ image ? image : getDefaultImageByType(currentType) } alt={ image }/>
        </div>
        <div className="card-data">
            <h3>{ title }</h3>
            <h6><span className={ subtitle.toLowerCase() }></span> - { subtitle }</h6>
            <p className="text-grey">{ titleP1 } <a className="link-to" onClick={() => { getApiData(setApiData, linkToUrlP1, currentType) }}>{ p1 }</a></p>
            <p className="text-grey">{ titleP2 } { p2 }</p>
            <p className="text-grey">{ titleP3 } { p3 }</p>
            <p className="text-grey">{ titleP4 } <a className="link-to" onClick={() => { getApiData(setApiData, linkToUrlP4, currentType) }}>{ p4 }</a></p>
        </div>
    </div>
  )
}

export default CharacterCard