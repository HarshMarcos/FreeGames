import React from 'react'
import { usePopularGames } from '../data'
import GameList from './GameList/gameList';

const PopularContainer = () => {
    const popularGames = usePopularGames();

    return (
        <>
            <GameList games={popularGames || []}></GameList>
        </>
    )
}

export default PopularContainer