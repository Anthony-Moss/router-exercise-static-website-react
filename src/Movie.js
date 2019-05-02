import React from 'react';

function Movie({match, moviesData}) {
    console.log({moviesData});
    return (
        <div>
            <p>{match.params.movie}</p>
            {/* {match.params.movieData.description} */}
        </div>
    );
}

export default Movie;