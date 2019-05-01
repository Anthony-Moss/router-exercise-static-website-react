import React from 'react';
import './App.css';
import Home from './Home';
import Music from './Music';
import Song from './Song';
import Movies from './Movies';
import Movie from './Movie';
import Drinks from './Drinks';
import Drink from './Drink';

import {
  Link,
  Route,
  Switch
} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        'Kill Bill',
        'The Boondock Saints',
        'Die Hard',
        'Serenity',
        'Donnie Darko',
        "The Hitchhiker's Guide to the Galaxy",
        'Big Trouble in Little China',
        'Gladiator',
        'Jurassic Park',
        'Pulp Fiction',
      ],
      drinks: [
        'Bourbon',
        'Whiskey and Coke',
        'Long Island',
        'All the Rum',
        'Vodka'
      ],
      songs: [
        'The Spectre',
        'SOS',
        'Waiting For Love',
        'The Nights',
        'Project Dreams',
        'The Days',
        'Are You With Me',
        'Fly',
        'Keep It Mello',
        'Check This Out'
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <h1>React Router examples</h1>
        <Link to='/'>Home</Link>
        <br></br>
        <Link to='/music'>Music</Link>
        <br></br>
        <Link to='/movies'>Movies</Link>
        <br></br>
        <Link to='/drinks'>Drinks</Link>
        
        <Switch>
          <Route exact path="/" component={Home} />

          <Route path="/movies"
            render={(props) => (
              <Movies 
                {...props}
                movies={this.state.movies}
              />
            )}
          />

          <Route path="/drinks"
            render={(props) => (
              <Drinks
                {...props}
                drinks={this.state.drinks}
              />
            )}
          />

          <Route path="/music"
            render={(props) => (
              <Music
                {...props}
                songs={this.state.songs}
              />
            )}
          />

        </Switch>
        <Route path="/movies/:movie" component={Movie} />
        <Route path="/drinks/:drink" component={Drink} />
        <Route path="/music/:song" component={Song} />
      </div>
    );
  }
}

export default App;
