
import './App.css';
import Bala from './Components/Bala';
import Tvenkinys from './Components/Tvenkinys';
import Jura from './Components/Jura';
import Pasaulis from './Components/Pasaulis';
import Vandenynas from './Components/Vandenynas';

const seaPlaners = [
  {id: 1, type: 'man', name: 'Lina', color: 'blue'},
  {id: 2, type: 'car', name: 'Opel', color: 'red'},
  {id: 3, type: 'animal', name: 'Vilkas', color: 'green'},
  {id: 4, type: 'fish', name: 'Ungurys', color: 'yellow'},
  {id: 5, type: 'man', name: 'Tomas', color: 'green'},
  {id: 6, type: 'animal', name: 'Bebras', color: 'red'},
  {id: 7, type: 'animal', name: 'Barsukas', color: 'green'},
  {id: 8, type: 'car', name: 'MB', color: 'blue'},
  {id: 9, type: 'car', name: 'ZIL', color: 'red'},
  {id: 10, type: 'man', name: 'Teta Toma', color: 'yellow'},
]

function App() {
  return (
    <div className="App">
      <h1>labas</h1>
      <h1>1uzduotis</h1>
      <Bala autos={seaPlaners}></Bala>
      <h1>2uzduotis</h1>
      <Tvenkinys autos={seaPlaners}></Tvenkinys>
      <h1>3uzduotis</h1>
      <Jura autos={seaPlaners}></Jura>
      <h1>4uzduotis</h1>
      <Vandenynas autos={seaPlaners}></Vandenynas>
      <h1>5uzduotis</h1>
      <Pasaulis autos={seaPlaners} ></Pasaulis>
    </div>
  );
}

export default App;

//123
/*
      <h1>3uzduotis</h1>
      <Jura autos={seaPlaners}></Jura>
      <h1>4uzduotis</h1>
      <Vandenynas autos={seaPlaners}></Vandenynas>
      <h1>5uzduotis</h1>
      <Pasaulis autos={seaPlaners} ></Pasaulis>
*/

/*N.D. uzduotis
REACT List

const seaPlaners = [
  {id: 1, type: 'man', name: 'Lina', color: 'blue'},
  {id: 2, type: 'car', name: 'Opel', color: 'red'},
  {id: 3, type: 'animal', name: 'Vilkas', color: 'green'},
  {id: 4, type: 'fish', name: 'Ungurys', color: 'yellow'},
  {id: 5, type: 'man', name: 'Tomas', color: 'green'},
  {id: 6, type: 'animal', name: 'Bebras', color: 'red'},
  {id: 7, type: 'animal', name: 'Barsukas', color: 'green'},
  {id: 8, type: 'car', name: 'MB', color: 'blue'},
  {id: 9, type: 'car', name: 'ZIL', color: 'red'},
  {id: 10, type: 'man', name: 'Teta Toma', color: 'yellow'},
];



Sukurti Komponent?? Bala ir jame atvaizduoti masyv?? seaPlaners.

Sukurti du komponentus Tvenkinys, Daiktas -  t??vin?? ir vaikin?? atitinkamai. Tvenkinys komponente du kartus panaudokite komponent?? Daiktas atvaizduoti masyv?? seaPlaners - vien?? kart?? poriniams kit?? kart?? neporiniams ??ra??ams (pagal id, ne masyvo indeks??).

Sukurti keturis komponentus. Jura, Valtis, Laivas, Sala. Jura t??vinis komponentas, kiti trys vaikiniai. Atvaizduoti masyv?? seaPlaners pagal taisykl??: ???man??? - Valtis, ???car??? - Laivas, ???animal??? - Sala, ???fish??? - tiesiai Jura komponente (be jokio vaikinio komponento).

Sukurti keturis komponentus Vandenynas, Tipas, Vardas, Spalva. Vandenynas t??vinis komponentas kiti trys vaikiniai. Vaikiniuose komponentuose atvaizduoti t?? pat?? masyv??, tik i??r????iuot?? pagal komponento vard?? (pvz Tipas i??r????iuota pagal tip?? ir t.t.).

Sukurti penkis komponentus. Pasaulis, Namas, Narvas, Garazas ir Akvariumas. Pasaulis t??vinis komponentas, kiti keturi vaikiniai. Atvaizduoti masyv?? seaPlaners pagal taisykl??: ???man??? - Namas, ???car??? - Garazas, ???animal??? - Narvas, ???fish??? - Akvariumas. Komponentas Pasaulis turi b??ti padalintas ?? dvi dalis- porin?? ir neporin?? (pagal id, ne masyvo indeks??). Visus keturis vaikinius komponentus panaudoti po du kartus - porin??je ir neporin??je dalyje, atvaizduojant porinius ir neporinius masyvo ??ra??us.

Kiekviename u??davinyje galima susikurti kiek reikia papildom?? komponent??.
Visuose u??daviniuose name savyb?? reikia nuda??yti spalva, kuri yra color savyb??je.
*/