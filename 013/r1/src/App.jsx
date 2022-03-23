import './App.css';
import Miskas from './Components/Miskas';
import Upe from './Components/Upe'

function App() {
  return (
    <div className="App">
      <h1>Bla</h1>
      <Miskas forest="blue" big="1" msg=' valio'></Miskas>
      <Miskas forest="red" big="0"></Miskas>
      <Upe color='pink'></Upe>
    </div>
  );
}

export default App;

 //Sukurti komponentą Upe. Tame komponente paleisti tris komponentus Zuvis DONE!
