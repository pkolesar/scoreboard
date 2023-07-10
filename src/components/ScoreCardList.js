import React from 'react'
import ScoreCard from './ScoreCard'
import './scoreboard.css'

export default function ScoreCardList({gameList}) {
  return (
    gameList.map(game => {
        return <ScoreCard key={game.id} game= {game} />
      })
  )
}
