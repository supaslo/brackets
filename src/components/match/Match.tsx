import './Match.css';
import { MatchInfo } from '../../models/MatchInfo';
import { Team } from '../../models/Team';

type MatchProps = {
    finalMatch: boolean;
    currentMatch: MatchInfo;
};

/*const teams: Team[] = [
    {id: 1, name: "Fireballz", players: [1,2]},
    {id: 2, name: "Your Other", players: [3,4]},
    {id: 3, name: "Pervs", players: [5,6]},
    {id: 4, name: "Middle Aged Whores", players: [7,8]},
    {id: 5, name: "Don't Care", players: [9,10]}, 
    {id: 6, name: "The Statler's", players: [11,12]}, 
    {id: 7, name: "Wrong Hole", players: [13,14]}, 
    {id: 8, name: "Bangin the Neighbors", players: [15,16]}, 
  ];*/

const Match: React.FC<MatchProps> = ({ finalMatch, currentMatch }) => {

    /*let homeTeam: Team | undefined;
    let awayTeam: Team | undefined;
    let homeTeamName: string;
    let awayTeamName: string;

    if (currentMatch.home > 0) {
        homeTeam = teams.find(team => team.id === currentMatch.home)
    };

    if (homeTeam) {
        homeTeamName = homeTeam.name
    } else {
        homeTeamName = ""
    };

    if (currentMatch.away > 0) {
        awayTeam = teams.find(team => team.id === currentMatch.away)
    };

    if (awayTeam) {
        awayTeamName = awayTeam.name
    } else {
        awayTeamName = ""
    };*/

    if (finalMatch) {
        return (
            <div className="final">
                <div className="match">
                    <span className="teamc">{currentMatch.home}</span>
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <div className="match">
                    <span className="info">{currentMatch.id}</span>
                    <span className="teama">{currentMatch.home}</span>
                    <span className="teamb">{currentMatch.away}</span>
                </div>
            </div>
        );
    }
  }
  
  export default Match;