import React from 'react'

const CharacterCard = ({character, index}) => {
  return (
    <div className="character-container" key={ index }>
        <div>
            <img src={ character.image } alt={ character.image }/>
        </div>
        <div>
            <h3>{ character.name }</h3>
            <h6><span className={ character.status.toLowerCase() }></span></h6>
            <p>
                <span className="text-grey">Episodes: </span>
                <span className="text-grey">{ character.episode.length }</span>
            </p>
            <p>
                <span className="text-grey">Specie: </span>
                <span className="text-grey">{ character.species }</span>
            </p>
        </div>
    </div>
  )
}

export default CharacterCard