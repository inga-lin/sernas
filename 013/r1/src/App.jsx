import { useEffect, useState, useCallback } from 'react';
import './App.css';


function App() {

    console.log('GO');

   const [c, setC] = useState(1);

  // const abc = () => {
    //   console.log( 'ABC');
       
  // }

   const abc = useCallback(() => {
    console.log( 'ABC');
   }, []);

   useEffect(() => {
    console.log('GO Effect');
    abc();
   }, [abc]); //jis pasileidzia tik pirma karta paleidus

  return (
    <div className="App">
      <h1>useCallback: {c}</h1>

    <button onClick={() => setC(a  => a + 1)}>ReRender</button>

    </div>
  );
}

export default App;
//useCallback-(egze nebus)