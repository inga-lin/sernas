import './App.css';
import Form from './Components/Form';
import Form3 from './Components/Form3';
import Form4 from './Components/Form4';
import FormsKates from './Components/FormsKates';
import FormsKvadRandSkaicius from './Components/FormsKvadRandSkaicius';
//import Kazkas from './Components/Kazkas';
//import RaudoniKvadratai from './Components/Kazkas';

function App() {
  return (
    <div className="App">
       <h1 style={{color:'pink'}}>Forms paskaita</h1>
       <Form></Form>
       <h1>N.D.1</h1>
       <FormsKvadRandSkaicius></FormsKvadRandSkaicius>
       <h1>N.D.2</h1>
       <FormsKates></FormsKates>
       <h1>N.D.3</h1>
       <Form3></Form3>
       <h1>N.D.4</h1>
       <Form4></Form4>
       

    </div>
  );
}

export default App;