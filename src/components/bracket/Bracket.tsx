import './Bracket.css';
import { RoundInfo } from "../../models/RoundInfo";
import RoundDisplay from "../roundDisplay/RoundDisplay";

type BracketProps = {
    rounds: RoundInfo[];
};

const Bracket: React.FC<BracketProps> = ({ rounds }) => {

    const winnersSide = rounds.map(function(round) {
      return <RoundDisplay roundInfo={round} />
    })

    const group = "group" + rounds.length;

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

export default Bracket;