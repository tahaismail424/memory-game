import React from 'react'

function Scoreboard(props) {

    const { currentScore, highScore, won } = props;
    const highScoreClass = (won) ? 'won-score' : 'not-won-score';
    const maxMessage = (won) ? 'Max Score! -->   ' : '';
    return (
        <div className='scoreboard'>
            <h3>Scoreboard</h3>
            <p className='score-display'>Current Score: {currentScore}</p>
            <div className={highScoreClass}><p className='score-display'>{maxMessage}High Score: {highScore}</p></div>
        </div>
    );
}

export default Scoreboard;
