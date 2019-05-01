import React from 'react';

import { Link } from 'react-router-dom';

function Dashboard({songs, movies, drinks, match, history}) {
    const musicLinks = songs.map(songName => (
        <li>
            <Link to={`${match.path}/${songName}`}>{songName}</Link>
        </li>
    ));
    const movieLinks = movies.map(movieName => (
        <li>
            <Link to={`${match.path}/${movieName}`}>{movieName}</Link>
        </li>
    ));
    const drinkLinks = drinks.map(drinkName => (
        <li>
            <Link to={`${match.path}/${drinkName}`}>{drinkName}</Link>
        </li>
    ));

    return (
        <div>
            <h1>Welcome to the Dashboard!</h1>
            <ul style={{listStyleType: 'none', paddingLeft: 0}}>
                <h2>Movies</h2>
                {movieLinks}
                <h2>Drinks</h2>
                {drinkLinks}
                <h2>Music</h2>
                {musicLinks}
            </ul>
        </div>
    )
}

export default Dashboard;