import React from 'react'

function EndMessage(props) {
    const { finalScore, highScore, restartGame } = props;
    return (
        <div>
            <h1>You clicked a card you already hit! Game over...</h1>
            <h2>Final Score: {finalScore}</h2>
            <h2>High Score: {highScore}</h2>
            <button 
                className="restart-button" 
                onClick={restartGame}
            >Play again?
            </button>
        </div>
    )
}

export default EndMessage
