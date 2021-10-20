import React from 'react';

function Card(props) {
    const { pokeName, pokePic, eventListener, no } = props;

    return (
        <div className={`card ${no}`} id={pokeName}>
            <button className='card-button' onClick={eventListener}></button>
            <img src={pokePic} alt={`${pokeName}-pic`}></img>
            <h4 className='poke-name'>{pokeName}</h4>
        </div>
    )
}

export default Card;
