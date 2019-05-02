import React from 'react';


function Song({match}) {
    return (
        <div>
            <p>{match.params.song}</p>
        </div>
    );
}

export default Song;