import React, { useEffect, useState } from 'react'
import GameCard from '../GameCard/gameCard'
import Loading from '../globals/loading';

const GameContainer = ({ game }) => {
    const [gameData, setGameData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            try {
                if (!game) {
                    throw new Error("Invalid")
                }
                let index = Math.floor(Math.random() * 50);
                setGameData(game[index]);
                setIsLoading(false);
            } catch (error) {
                console.log(error)
                setIsLoading(false);
            }
        }, 2000)
    }, [game])
    return (
        <div>
            {
                isLoading ? (
                    <Loading></Loading>
                ) : (
                    <div>
                        {gameData && <GameCard game={gameData} />}
                    </div>
                )
            }
        </div>
    )
}

export default GameContainer