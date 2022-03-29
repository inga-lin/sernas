import './App.css';
//import Apskritimas from './Components/Apskritimas';
import Kva from './Components/Kva';
import Zebrai from './Components/Zebrai';
import Zuikis from './Components/Zuikis';
import Zuikis2 from './Components/Zuikis2';



function App() {
  return (
    <div className="App">
       <h1 style={{color:'pink'}}>Labas</h1>
       <Zuikis ></Zuikis>
       <Zuikis2 color="red" vardas="Puke" ></Zuikis2>
       <Zebrai big='1'></Zebrai>
       <Zebrai big='2'></Zebrai>
       <Kva></Kva>
    </div>
  );
}

export default App;

/*
function App() {
  return (
    <div className="App">
       <h1 style={{color:'pink'}}>Labas</h1>
       <Zuikis color="pink"></Zuikis>
       <Zuikis2 color="red" vardas="Puke" ></Zuikis2>
    </div>
  );
}

export default App;*/