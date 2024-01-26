import './App.css';
import Match from './match/Match';

const App = () => {

  const round = {
    matches: [
      {
        id: 1,
        homeOpponent: "Team1A",
        awayOpponent: "Team1B",
      },
      {
        id: 2,
        homeOpponent: "Team2A",
        awayOpponent: "Team2B",
      },
      {
        id: 3,
        homeOpponent: "",
        awayOpponent: "",
      }
    ]
  }

  const roundMatches = round.matches.map(function(match){
    return <Match matchId={match.id} teama={match.homeOpponent} teamb={match.awayOpponent} />
  })

  return (
    <>
    <p></p>
    <div className='brackets' id='brackets'>
        <div className='group2' id='b0'>
            <div className='r1'>
                {roundMatches}
            </div>
        </div>
    </div>
    </>
  );
}

export default App;
