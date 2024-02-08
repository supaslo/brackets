import './App.css';
import Round from './components/round/Round';

interface Matches {
  id: number,
  homeOpponent: string,
  awayOpponent: string
}

const CurrentMatches: Matches[] = [
  {id: 1, homeOpponent: "Fireballz", awayOpponent: "Your Other"},
  {id: 2, homeOpponent: "Pervs", awayOpponent: "Middle Aged Whores"},
  {id: 3, homeOpponent: "Don't Care", awayOpponent: "The Statler's"},
  {id: 4, homeOpponent: "Wrong Hole", awayOpponent: "Bangin the Neighbors"} 
]

const App = () => {

  const numberOfTeams = 8;

  const numberOfRounds = Math.floor(numberOfTeams/2);

  const bracketRounds: string[] = [];

  for (let i = 0; i < numberOfRounds; i++) {
    let displayRoundNumber = i + 1;
    bracketRounds.push("r" + displayRoundNumber);
  }

  const bracket = bracketRounds.map(function(round) {
    return <Round roundId={round} currentMatches={CurrentMatches} />
  })

  const group = "group" + bracketRounds.length;

  return (
    <>
    <p></p>
    <div className='brackets' id='brackets'>
        <div className={group} id='b0'>
            {bracket}
        </div>
    </div>
    </>
  );
}

export default App;
