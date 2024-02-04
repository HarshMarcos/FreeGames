import React from 'react'
import './container.css'
import Title from '../Title/title'
import GameList from '../GameList/gameList'
import { useAllGames } from '../../data'
const container = () => {
    const games = useAllGames();
    return (
        <div className='main-container featured-games'>
            <Title text={'Featured Games'} />
            <GameList games={games || []} />
        </div>
    )
}

export default container