import './BracketDisplay.css';
import RoundDisplay from "../round/RoundDisplay";
import { Bracket } from '../../models/Bracket';

type BracketDisplayProps = {
    bracket: Bracket;
};

const BracketDisplay: React.FC<BracketDisplayProps> = ({ bracket }) => {

    const winnersSide = bracket.rounds.map(function(round) {
      return <RoundDisplay round={round} />
    })

    const group = "group" + bracket.rounds.length;

    return (
        <>
          <p></p>
          <div className='brackets' id='brackets'>
            <div className={group} id='b0'>
              {winnersSide}
            </div>
          </div>
        </>
    );
}

export default BracketDisplay;