import './Match.css';

type MatchProps = {
    matchId: number;
    teama: string;
    teamb: string;
};

const Match: React.FC<MatchProps> = ({ matchId, teama, teamb}) => {
    return (
        <div>
            <div className="match">
                <span className="info">{matchId}</span>
                <span className="teama">{teama}</span>
                <span className="teamb">{teamb}</span>
            </div>
        </div>
    );
  }
  
  export default Match;