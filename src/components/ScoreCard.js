import React from 'react'
import './scoreCard.css'
import './scoreboard.css'

export default function ScoreCard({game}) {

  return (
    <div className='scoreboard'>
        <label className='scoreHeader'>{game.name}
        </label>
        <div className='scoresContainer'>
            <div>
                <label>{game.team1Name}</label>
                <label>vs</label>
                <label>{game.team2Name}</label>
            </div>
            {game.team1Score} : {game.team2Score}
        </div>
    </div>
  )
}
