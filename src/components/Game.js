import React, { useState, useEffect } from 'react';
import Title from './Title';
import Scoreboard from './Scoreboard';
import Card from './Card';
import EndMessage from './EndMessage';
import Bulbasaur from './assets/bulbasaur.png';
import Eevee from './assets/eevee.png';
import Jigglypuff from './assets/jigglypuff.png';
import Mawile from './assets/mawile.png';
import Jirachi from './assets/jirachi.png';
import Pikachu from './assets/pikachu.png';
import Piplup from './assets/piplup.png';
import Ralts from './assets/ralts.png';
import Riolu from './assets/riolu.png';
import Sableye from './assets/sableye.png';
import Torchic from './assets/torchic.png';
import Voltorb from './assets/voltorb.png';


function Game() {
    let [currentScore, setCurrentScore] = useState(0);
    let [highScore, setHighScore] = useState(0);
    let [pokeCards, setPokeCards] = useState([
        {name: 'Bulbasaur', pic: Bulbasaur, hit: false},
        {name: 'Eevee', pic: Eevee, hit: false},
        {name: 'Jigglypuff', pic: Jigglypuff, hit: false},
        {name: 'Mawile', pic: Mawile, hit: false},
        {name: 'Jirachi', pic: Jirachi, hit: false},
        {name: 'Pikachu', pic: Pikachu, hit: false},
        {name: 'Piplup', pic: Piplup, hit: false},
        {name: 'Ralts', pic: Ralts, hit: false},
        {name: 'Riolu', pic: Riolu, hit: false},
        {name: 'Sableye', pic: Sableye, hit: false},
        {name: 'Torchic', pic: Torchic, hit: false},
        {name: 'Voltorb', pic: Voltorb, hit: false}
    ]);
    let [gameOver, setGameOver] = useState(false);
    let [won, setWon] = useState(false);

    const selectCard = (e) => {
        let index = parseInt(e.target.parentNode.classList.item(1));
        if (pokeCards[index].hit) setGameOver(true);
        else if (!pokeCards[index].hit) {
            let updatedCard = [{...pokeCards[index], hit: true}];
            let updatedCardList = pokeCards.slice(0, index)
                .concat(updatedCard.concat(pokeCards.slice(index + 1)));
            setPokeCards(shuffle(updatedCardList));
        }
    }

    const restart = () => {
        setCurrentScore(0);
        
        let resetCards = pokeCards.map(card => {
            return {...card, hit: false}
        });
        setPokeCards(shuffle(resetCards));
        setGameOver(false);
    }


    useEffect(() => {
        let score = pokeCards.reduce((prev, cur) => prev + cur.hit, 0);
        setCurrentScore(score);
        if (currentScore > highScore) setHighScore(score);
        if (highScore >= 12) setWon(true);
    });

    function setCards() {
        return (<div className='card-display'>
                    {pokeCards.map((card, index) => <Card 
                        pokeName={card.name} 
                        pokePic={card.pic}
                        eventListener={selectCard}
                        key={index}
                        no={index}
                    />)}
                </div>
        );
    }


    if (gameOver) {
        return (<EndMessage 
            finalScore={currentScore}
            highScore={highScore}
            restartGame={restart}
            />
        );
    }

    else return (
        <div>
            <Title />
            <Scoreboard
                currentScore={currentScore}
                highScore={highScore}
                won={won}
                />
            {setCards()}
        </div>
    );
}

//function taken from 
//https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
//Fisher-Yates Shuffle
function shuffle(array) {
    let currentIndex = array.length;
    let randomIndex;
    while(currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = 
            [array[randomIndex], array[currentIndex]];
    }
    return array;
}

export default Game;
