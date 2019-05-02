import React from 'react';
import './App.css';
import Home from './Home';
import Music from './Music';
import Song from './Song';
import Movies from './Movies';
import Movie from './Movie';
import Drinks from './Drinks';
import Drink from './Drink';
import Dashboard from './Dashboard';

import {
  Link,
  Route,
  Switch
} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: {
        'Kill Bill': {
          rating: '⋆⋆⋆⋆⋆',
          review: "Fucking Brilliant, a tragic story of revenge that only Tarantino could create. If you havent seen these movies you are just missing out. All time favorite movie franchise.",
          description: "A former assassin, known simply as The Bride (Uma Thurman), wakes from a coma four years after her jealous ex-lover Bill (David Carradine) attempts to murder her on her wedding day. Fueled by an insatiable desire for revenge, she vows to get even with every person who contributed to the loss of her unborn child, her entire wedding party, and four years of her life. After devising a hit list, The Bride sets off on her quest, enduring unspeakable injury and unscrupulous enemies."
        },
        'The Boondock Saints': {
          rating: '⋆⋆⋆⋆⋆',
          review: "An amazing cult classic. Akin to Kill Bill if you like Violence and Justice/Revenge stories this is definitely one to checkout. One of my all time favorites.",
          description: 'Tired of the crime overrunning the streets of Boston, Irish Catholic twin brothers Conner (Sean Patrick Flanery) and Murphy (Norman Reedus) are inspired by their faith to cleanse their hometown of evil with their own brand of zealous vigilante justice. As they hunt down and kill one notorious gangster after another, they become controversial folk heroes in the community. But Paul Smecker (Willem Dafoe), an eccentric FBI agent, is fast closing in on their blood-soaked trail.'
        },
        'Die Hard': {
          rating: '⋆⋆⋆⋆⋆',
          review: "What comes to mind when I think Christmas? Die Hard. If this movie is not at the top of your Christmas watch-list you have made some horrific life-choices. Actioned packed thriller that spawned an entire franchise.",
          description: "New York City policeman John McClane (Bruce Willis) is visiting his estranged wife (Bonnie Bedelia) and two daughters on Christmas Eve. He joins her at a holiday party in the headquarters of the Japanese-owned business she works for. But the festivities are interrupted by a group of terrorists who take over the exclusive high-rise, and everyone in it. Very soon McClane realizes that there\ns no one to save the hostages -- but him."
        },
        'Serenity': {
          rating: '⋆⋆⋆⋆⋆',
          review: '',
          description:"In this continuation of the television series 'Firefly,' a group of rebels travels the outskirts of space aboard their ship, Serenity, outside the reach of the Alliance, a sinister regime that controls most of the universe. After the crew takes in Simon (Sean Maher) and his psychic sister, River (Summer Glau), whom he has just rescued from Alliance forces, they find themselves being pursued by the Operative (Chiwetel Ejiofor), an Alliance agent who will stop at nothing to find them."
        },
        'Donnie Darko': {
          rating: '⋆⋆⋆⋆⋆',
          review: "",
          description: "During the presidential election of 1988, a teenager named Donnie Darko sleepwalks out of his house one night and sees a giant, demonic-looking rabbit named Frank, who tells him the world will end in 28 days. When Donnie returns home, he finds that a jet engine has crashed into his bedroom. Is Donnie living in a parallel universe, is he suffering from mental illness - or will the world really end?"
        },
        "The Hitchhiker's Guide to the Galaxy": {
          rating: '⋆⋆⋆⋆⋆',
          review: "",
          description: "Arthur Dent (Martin Freeman) is trying to prevent his house from being bulldozed when his friend Ford Prefect (Mos Def) whisks him into outer space. It turns out Ford is an alien who has just saved Arthur from Earth's total annihilation. Ford introduces Arthur to his myriad friends, including many-headed President Zaphod Beeblebrox (Sam Rockwell) and sexy refugee Trillian (Zooey Deschanel). Arthur makes his way across the stars while seeking the meaning of life, or something close to it."
        },
        'Big Trouble in Little China': {
          rating: '⋆⋆⋆⋆⋆',
          review: "",
          description: "Kurt Russell plays hard-boiled truck driver Jack Burton, who gets caught in a bizarre conflict within, and underneath, San Francisco's Chinatown. An ancient Chinese prince and Chinatown crime lord has kidnapped a beautiful green-eyed woman, who is the fiancee to Jack's best friend. Jack must help his friend rescue the girl before the evil Lo Pan uses her to break the ancient curse that keeps him a fleshless and immortal spirit."
        },
        'Gladiator': {
          rating: '⋆⋆⋆⋆⋆',
          review: "",
          description: "Set in Roman times, the story of a once-powerful general forced to become a common gladiator. The emperor's son is enraged when he is passed over as heir in favour of his father's favourite general. He kills his father and arranges the murder of the general's family, and the general is sold into slavery to be trained as a gladiator - but his subsequent popularity in the arena threatens the throne."
        },
        'Jurassic Park': {
          rating: '⋆⋆⋆⋆⋆',
          review: "",
          description: "In Steven Spielberg's massive blockbuster, paleontologists Alan Grant (Sam Neill) and Ellie Sattler (Laura Dern) and mathematician Ian Malcolm (Jeff Goldblum) are among a select group chosen to tour an island theme park populated by dinosaurs created from prehistoric DNA. While the park's mastermind, billionaire John Hammond (Richard Attenborough), assures everyone that the facility is safe, they find out otherwise when various ferocious predators break free and go on the hunt."
        },
        'Pulp Fiction': {
          rating: '⋆⋆⋆⋆⋆',
          review: "",
          description: "Vincent Vega (John Travolta) and Jules Winnfield (Samuel L. Jackson) are hitmen with a penchant for philosophical discussions. In this ultra-hip, multi-strand crime movie, their storyline is interwoven with those of their boss, gangster Marsellus Wallace (Ving Rhames) ; his actress wife, Mia (Uma Thurman) ; struggling boxer Butch Coolidge (Bruce Willis) ; master fixer Winston Wolfe (Harvey Keitel) and a nervous pair of armed robbers, 'Pumpkin' (Tim Roth) and 'Honey Bunny' (Amanda Plummer)."
        }
      },
      drinks: [
        'Bourbon',
        'Whiskey and Coke',
        'Long Island',
        'All the Rum',
        'Vodka'
      ],
      songs: {
        'The Spectre': {
          artist: 'Alan Walker',
          genre: 'EDM'
        },
        'SOS': {
          artist: 'Avicci',
          genre: 'EDM'
        },
        'Waiting For Love': {
          artist: 'Avicci',
          genre: 'EDM'
        },
        'The Nights': {
          artist: 'Avicci',
          genre: 'EDM'
        },
        'Project Dreams': {
          artist: 'Marshmello',
          genre: 'EDM'
        },
        'The Days': {
          artist: 'Avicci',
          genre: 'EDM'
        },
        'Are You With Me': {
          artist: 'Lost Frequencies',
          genre: 'EDM'
        },
        'Fly': {
          artist: 'Marshmello',
          genre: 'EDM'
        },
        'Keep It Mello': {
          artist: 'Marshmello',
          genre: 'EDM'
        },
        'Check This Out': {
          artist: 'Marshmello',
          genre: 'EDM'
        }
      }
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
        <br></br>
        <Link to='/all'>Dashboard</Link>
        
        <Switch>
          <Route exact path="/" component={Home} />

          <Route path="/movies"
            render={(props) => (
              <Movies 
                // {...props}
                // movies={Object.keys(this.state.movies)}
                {...props}
                moviesData={this.state.movies}
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
                songs={Object.keys(this.state.songs)}
              />
            )}
          />

          <Route path="/all"
            render={(props) => (
              <Dashboard {...props} songs={this.state.songs} drinks={this.state.drinks} movies={this.state.movies} />
            )}
          />

        </Switch>
        <Route path="/movies/:movie" component={Movie} />
        <Route path="/drinks/:drink" component={Drink} />
        <Route path="/music/:song" component={Song} />
        <Route path="/all/:song" component={Song} />
        <Route path="/all/:movie" component={Movie} />
        <Route path="/all/:drink" component={Drink} />

      </div>
    );
  }
}

export default App;
