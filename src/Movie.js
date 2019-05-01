import React from 'react';

function Movie({match}) {
    return (
        <div>
            <p>{match.params.movie}</p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi enim nostrum reiciendis animi quod repellat ut excepturi maiores dicta labore! Quis itaque quibusdam praesentium doloribus. Laborum in suscipit at sunt!
        </div>
    );
}

export default Movie;