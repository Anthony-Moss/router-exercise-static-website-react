import React from 'react';

import { Link } from 'react-router-dom';

function Movies({movies, moviesData, match, history}) {
    const movieInfo = movies;
    const movieLinks = Object.keys(moviesData).map(movieName => (
        <li>
            <Link to={`${match.path}/${movieName}`}>{movieName}</Link>
        </li>
        
    ));
    return (
        <div>
            <h1>This is my movies</h1>
            <h1>    
            <span role='img' aria-labelledby='imgHelp'>
                🎬
            </span>
            </h1>
            <ul style={{listStyleType: 'none', paddingLeft: 0}}>
                {movieLinks}
            </ul>
        </div>
    )
}

export default Movies;