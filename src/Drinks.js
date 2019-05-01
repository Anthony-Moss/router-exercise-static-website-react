import React from 'react';

import { Link } from 'react-router-dom';

function Drinks({ drinks, match, history}) {
    const drinkLinks = drinks.map(drinkName => (
        <li>
            <Link to={`${match.path}/${drinkName}`}>{drinkName}</Link>
        </li>
    ));

    return (
        <div>
            <h1>These are my favorite drinks</h1>
            <span>
                <h1>🥃</h1>
            </span>
            <span>
            <ul style={{listStyleType: 'none', paddingLeft: 0}}>
                <li>
                {drinkLinks}
                </li>
            </ul>
            </span>
        </div>
    )
}

export default Drinks;