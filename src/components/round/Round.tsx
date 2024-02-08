import Match from "../match/Match";
import "./Round.css"

type RoundProps = {
    roundId: string;
    currentMatches: Matches[];
};

interface Matches {
  id: number,
  homeOpponent: string,
  awayOpponent: string
}

const Round: React.FC<RoundProps> = ({ roundId, currentMatches }) => {

    const round = {

    }
  
    const roundMatches = currentMatches.map(function(match){
      return <Match matchId={match.id} teama={match.homeOpponent} teamb={match.awayOpponent} />
    })
  
    return (
      <>
        <div className={roundId}>
            {roundMatches}
        </div>
      </>
    );
  }
  
  export default Round;