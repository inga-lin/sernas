import './App.css';
//import Apskritimas from './Components/Apskritimas';
import Kva from './Components/Kva';
import TrysPropsai from './Components/TrysPropsai';
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
       <TrysPropsai vardas='Lina' tekstas="sveiki" color='red'></TrysPropsai>
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

/*
REACT BASE



Sukurti komponentą, kuris užrašytų “LABAS, ZUIKI!”. Raidžių spalva pink. Spalva tekstui nurodoma komponento viduje naudojant style.

Sukurti komponentą, kuris gauną vieną props. Props yra bet koks tekstas, kuris komponente atvaizduojamas h1 tage.

Sukurti komponentą rodantį tekstą h1 tage- “Zebrai ir Bebrai”, kuris gauna vieną props, kuris lygus 1 arba 2. Jeigu props lygus 1 tekstas nudažomas mėlynai, o jeigu 2 - raudonai.

Sukurti komponentą, kuris gauna du props. Vienas props bet koks tekstas, kuris komponente atvaizduojamas h1 tage, o antras bet koks tekstas kuris atvaizduojamas h2 tage.

Sukurti komponentą, kuris gauna tris props. Vienas props bet koks tekstas, kuris komponente atvaizduojamas h1 tage, o antras bet koks tekstas kuris atvaizduojamas h2 tage, o trečias yra spalva, kuria nudažomi abu tekstai.

*/