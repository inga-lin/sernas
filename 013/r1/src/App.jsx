import './App.css';
import Pasa from './Components/Pasa';
import Pasakos from './Components/Pasakos';




function App() {
    const M = ['Labas', 'Ate']
    //const [A, B] = ['Labas', 'Ate']
    const [A, B] = M; //dvi konstantosvienoje kruvoje
    //const A = M[0];
    //const B= M[1];
    console.log(A, B);// atspauzdins vienoje eiluteje Labas Ate
  return (
    <div className="App">
       <h1 style={{color:'pink'}}>HOOK state</h1>
       <Pasakos></Pasakos>
       <Pasa></Pasa>
       
    </div>
  );
}

export default App;