import './App.css';
import Form from './Components/Form';
import Form3 from './Components/Form3';
import Form4 from './Components/Form4';
import FormsKates from './Components/FormsKates';
import FormsKvadRandSkaicius from './Components/FormsKvadRandSkaicius';
import Mygtukas from './Components/Mygtukas';
import Mygtukas2 from './Components/Mygtukas2';
import MygtukasK1 from './Components/MygtukasK1';
import { useState } from 'react';
import MygtukasK2 from './Components/MygtukasK2';
//import Kazkas from './Components/Kazkas';
//import RaudoniKvadratai from './Components/Kazkas';


function App() {
    const [sk, setSk] = useState(0)//1.pradzioje rasys non kuris yra pradinis title


    const add = () => {
        // setSkaicius(items => [...items, items.length + 1]);//1
        setSk(s => ++s); //prie 0vis pridesim po viena skaiciu
     }

     const [kvadratas, setKvadratas] = useState([])//pradzioje rasys non kuris yra pradinis title
    

     const add1 = () => {
         setKvadratas(items => [...items, items.length + 1]);
     }
   
 

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
       <h1>Paskaita</h1>
       <Mygtukas add={add}></Mygtukas>
       <Mygtukas2 sk={sk}></Mygtukas2>
       <MygtukasK1 add1={add1}></MygtukasK1>
       <MygtukasK2 kvadratas={kvadratas}></MygtukasK2>
       

    </div>
  );
}

export default App;