import React from 'react';

import { Link } from 'react-router-dom';

function Music({songs, match, history}) {
    const musicLinks = songs.map(songName => (
        <li>
            <Link to={`${match.path}/${songName}`}>{songName}</Link>
        </li>
    ));

    return (
        <div>
            <h1>This is my musics</h1>
            <span>
                <h1>🎧</h1>
            </span>
            <ul style={{listStyleType: 'none', paddingLeft: 0}}>
                {musicLinks}
            </ul>
        </div>
    )
}


export default Music;