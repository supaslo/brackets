import { Round } from "../../models/Round";
import Match from "../match/MatchDisplay";
import "./RoundDisplay.css"

type RoundDisplayProps = {
    round: Round;
};

const RoundDisplay: React.FC<RoundDisplayProps> = ({ round }) => {

    const finalMatch = round.finalRound;
    const roundMatches = round.matches.map(function(match){
      return <Match finalMatch={finalMatch} currentMatch={match} />
    })

    const roundClass = "r" + round.id
  
    return (
      <>
        <div className={roundClass}>
            {roundMatches}
        </div>
      </>
    );
  }
  
  export default RoundDisplay;