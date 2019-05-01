import React from 'react';

import { Link } from 'react-router-dom';

function Movies({movies, match, history}) {
    const movieLinks = movies.map(movieName => (
        <li>
            <Link to={`${match.path}/${movieName}`}>{movieName}</Link>
        </li>
    ));
    return (
        <div>
            <h1>This is my movies</h1>
            <span>
                <h1>🎬</h1>
            </span>
            <ul style={{listStyleType: 'none', paddingLeft: 0}}>
                {movieLinks}
            </ul>
        </div>
    )
}

export default Movies;