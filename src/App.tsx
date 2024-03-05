import './App.css';
import BracketDisplay from './components/bracket/BracketDisplay';
import GetRounds from './services/GetRounds';

/*const Players: Player[] = [
  {id: 1, firstName: "Matthew", lastName: "Williams"},
  {id: 2, firstName: "David", lastName: "Lewis"},
  {id: 3, firstName: "Misty", lastName: "Benge"},
  {id: 4, firstName: "Rory", lastName: "Thomas"},
  {id: 5, firstName: "Miranda", lastName: "Dennis"},
  {id: 6, firstName: "Hank", lastName: "Gertsen"},
  {id: 7, firstName: "Steve", lastName: "Fuller"},
  {id: 8, firstName: "Darren", lastName: "Stout"},
  {id: 9, firstName: "Linda", lastName: "Benge"},
  {id: 10, firstName: "Andy", lastName: "Raines"},
  {id: 11, firstName: "Ryan", lastName: "Statler"},
  {id: 12, firstName: "Kassie", lastName: "Statler"},
  {id: 13, firstName: "Holly", lastName: "Devore"},
  {id: 14, firstName: "Bryan", lastName: "Sherman"},
  {id: 15, firstName: "Joe", lastName: "Devore"},
  {id: 16, firstName: "Charity", lastName: "Skye"}
]*/

/*const rounds: RoundInfo[] = [
  {id: "r1", final: false, matches: [
    {id: 1, home: 1, away: 8},
    {id: 2, home: 2, away: 7},
    {id: 3, home: 3, away: 6},
    {id: 4, home: 4, away: 5}
  ]},
  {id: "r2", final: false, matches: [
    {id: 5, home: 0, away: 0},
    {id: 6, home: 0, away: 0}
  ]},
  {id: "r3", final: false, matches: [
    {id: 7, home: 0, away: 0}
  ]},
  {id: "r4", final: true, matches: [
    {id: 8, home: 0, away: 0}
  ]}
];*/

const App = () => {

  const { data: bracket, error, isPending } = GetRounds();

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { bracket && <BracketDisplay bracket={bracket}></BracketDisplay>}
    </div>
  )
}

export default App;
