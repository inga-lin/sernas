import './App.css';
import Apskritimas from './Components/Apskritimas';
import Geles from './Components/Geles';
const gelytes = [

    {name: 'Tulpė', color: 'red'},

    {name: 'Gvazdikas', color: 'yellow'},

    {name: 'Raktelis', color: 'blue'},

    {name: 'Bijūnas', color: 'red'},

    {name: 'Alyva', color: 'orange'},

]

function App() {
  return (
    <div className="App">
       <h1>Geles</h1>
       <Geles geles={gelytes}></Geles>
       <Apskritimas  size="200px"></Apskritimas>
    </div>
  );
}

export default App;