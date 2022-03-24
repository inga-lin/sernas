import './App.css';
import Grybas from './Components/Grybas';
import Miskas from './Components/Miskas';
import Upe from './Components/Upe'

function App() {
  return (
    <div className="App">
      <h1>Bla</h1>
      <Miskas forest="blue" big="1" msg=' valio'></Miskas>
      <Miskas forest="red" big="0" ></Miskas>
      <Upe color='pink'></Upe>
      <Grybas color='pink'></Grybas>
    </div>
  );
}

export default App;

 //Sukurti komponentą Upe. Tame komponente paleisti tris komponentus Zuvis DONE!
 //Sukurti komponentą Grybas. Tame komponente paleisti tris komponentus Valgomas DONE!
