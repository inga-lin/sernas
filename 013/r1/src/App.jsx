import './App.css';
import Miskas from './Components/Miskas';

function App() {
  return (
    <div className="App">
      <h1>Bla</h1>
      <Miskas forest="blue" big="1" msg=' valio'></Miskas>
      <Miskas forest="red" big="0"></Miskas>
    </div>
  );
}

export default App;
