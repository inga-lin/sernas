import './App.css';
import Garazas from './Components/Garazas';

const autoList = [

    {type: 'Volvo', color: 'blue', price: '78000'},

    {type: 'MB', color: 'green', price: '20000'},

    {type: 'Audi', color: 'black', price: '93000'},

    {type:'Kamaz', color: 'orange', price: '178000'}

]
function App() {
  return (
    <div className="App">
      <h1>listas</h1>
      <Garazas autos={autoList}></Garazas>
    </div>
  );
}

export default App;

//Komponente Garazas yra trys automobiliai Opel Volvo ir Man automobiliai yra komponentas Auto DONE!
//Patobulint Garazas ir Auto, kad būtų galima atvaizduot autoList DONE!