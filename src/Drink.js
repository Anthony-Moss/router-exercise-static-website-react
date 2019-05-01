import React from 'react';

function Drink({match}) {
    return (
        <div>
            <h1>{match.params.drink}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit at modi consequatur et, illo similique nostrum rerum voluptatem? Veniam aliquam repellat dolor eius ducimus ex fugit ut laudantium maxime tempore?</p>
        </div>
    )
}

export default Drink;