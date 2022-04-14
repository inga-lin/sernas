import { useState } from 'react';
import './App.css';
import Senelis from './Components/Senelis';
import SenelioZinios from './Contexts/SenelioZinios';
import SenelioZinios2 from './Contexts/SenelioZinios2';


function App() {

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
  return (
    <div className="App">
      <h1>React Context ----- {count} {count2}</h1>

       <button onClick={() => {
           setCount(c => c + 1);
           setCount2(c => c + 2);
        } 
       }
        > Go</button>

       <SenelioZinios.Provider value={count} > {/* senelioZinios (.Provider- butina nes neveiks kitaip) visa info perduoda senelui su  tevu ir vaiku*/}
       <SenelioZinios2.Provider value={count2} > 
           <Senelis></Senelis>
       </SenelioZinios2.Provider>
       </SenelioZinios.Provider>
     

    </div>
  );
}

export default App;

/*React Context
https://dmitripavlutin.com/react-context-and-usecontext/
*/