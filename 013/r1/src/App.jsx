import './App.css';
import Dogs from './Components/Dogs';
import Dogs1 from './Components/Dogs1';
import Dogs2 from './Components/Dogs2';
//import Apskritimas from './Components/Apskritimas';
import Kva from './Components/Kva';
import TrysPropsai from './Components/TrysPropsai';
import Zebrai from './Components/Zebrai';
import Zuikis from './Components/Zuikis';
import Zuikis2 from './Components/Zuikis2';


const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];


function App() {
  return (
    <div className="App">
       <h1 style={{color:'pink'}}>Labass</h1>
       <Zuikis ></Zuikis>
       <Zuikis2 color="red" vardas="Puke" ></Zuikis2>
       <Zebrai big='1'></Zebrai>
       <TrysPropsai vardas='Lina' tekstas="sveiki" color='red'></TrysPropsai>
       <Kva></Kva>
       <Dogs dogs={dogs} ></Dogs>
       <Dogs1 dogs={dogs}></Dogs1>
       <Dogs2  color='pink' dogs={dogs}></Dogs2>
       
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

/*1diena
REACT BASE



Sukurti komponentą, kuris užrašytų “LABAS, ZUIKI!”. Raidžių spalva pink. Spalva tekstui nurodoma komponento viduje naudojant style.

Sukurti komponentą, kuris gauną vieną props. Props yra bet koks tekstas, kuris komponente atvaizduojamas h1 tage.

Sukurti komponentą rodantį tekstą h1 tage- “Zebrai ir Bebrai”, kuris gauna vieną props, kuris lygus 1 arba 2. Jeigu props lygus 1 tekstas nudažomas mėlynai, o jeigu 2 - raudonai.

Sukurti komponentą, kuris gauna du props. Vienas props bet koks tekstas, kuris komponente atvaizduojamas h1 tage, o antras bet koks tekstas kuris atvaizduojamas h2 tage.

Sukurti komponentą, kuris gauna tris props. Vienas props bet koks tekstas, kuris komponente atvaizduojamas h1 tage, o antras bet koks tekstas kuris atvaizduojamas h2 tage, o trečias yra spalva, kuria nudažomi abu tekstai.

*/

/*2diena
REACT BASE LIST


const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];



Atvaizduoti masyvą dogs. Kiekvienas šuo atskirame kvadrate.

Atvaizduoti masyvą dogs. Kiekvienas šuo atskirame apskritime. Šunys turi būti išrūšiuoti nuo ilgiausio žodžio iki trumpiausio, o apskritimai sunumeruoti nuo 1 iki galo.

Atvaizduoti masyvą dogs. Poriniuose indeksuose esančius šunis atvaizduoti kvadratuose, neporinius trikampiuose (trikampio css pasigooglint).

Atvaizduoti masyvą dogs. Šunis, kurie prasideda didžiąja raide praleisti (neatvaizduoti).

Naudojant masyvą dogs atvaizduoti skaičius, kurie yra lygūs žodžių masyve ilgiui. Skaičius, didesnius nei 6 atvaizduoti žaliai, kitus raudonai.
*/