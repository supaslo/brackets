import { MatchInfo } from "../../models/MatchInfo";
import { RoundInfo } from "../../models/RoundInfo";
import Match from "../match/Match";
import "./RoundDisplay.css"

type RoundDisplayProps = {
    roundInfo: RoundInfo;
};

const RoundDisplay: React.FC<RoundDisplayProps> = ({ roundInfo }) => {

    const finalMatch = roundInfo.final;
    const roundMatches = roundInfo.matches.map(function(match){
      return <Match finalMatch={finalMatch} currentMatch={match} />
    })

    const roundClass = roundInfo.id
  
    return (
      <>
        <div className={roundClass}>
            {roundMatches}
        </div>
      </>
    );
  }
  
  export default RoundDisplay;