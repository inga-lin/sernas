
import './App.css';
import AddBlueAddRedReset from './Components/AddBlueAddRedReset';
import AddMygtukas from './Components/AddMygtukas';
import Kvadratas from './Components/Kvadratas';
import Pliusas from './Components/Pliusas';
import Rand from './Components/Rand';

function App() {
  return (
    <div className="App">
      <h1>Labas</h1>
      <Kvadratas ></Kvadratas>
      <Rand></Rand>
      <Pliusas></Pliusas>
      <AddMygtukas></AddMygtukas>
      <AddBlueAddRedReset></AddBlueAddRedReset>
    </div>
  );
}

export default App;

/*
REACT CLASS STATE




1.Sukurti aplikaciją, kuri turi mygtuką change ir atvaizduoja apskritimą. Paspaudus mygtuką change apskritimas turi pavirsti į kvadratą, o paspaudus dar kartą vėl pavirsti apskritimu.

2.Sukurti aplikaciją, kuri turi mygtukus change ir random bei atvaizduoja apskritimą su random skaičiumi viduje. Paspaudus change mygtuką apskritimas keičiasi į stačiakampį kaip pirmame uždavinyje, o paspaudus random mygtuką, skaičius pasikeičia į rand 5 - 25

3.Sukurti aplikaciją, kuri turi mygtukus plus ir minus, bei atvaizduoja skaičių 0. Paspaudus plus mygtuką, skaičius padidėja 1, o paspaudus minus- sumažėja 3

4.Sukurti aplikaciją, kuri turi mygtuką add, kurį paspaudus vieną kartą atsiranda mėlynas kvadratas, paspaudus du - du kvadratai ir t.t.

5.Sukurti aplikaciją, kuri turi mygtukus add red, add blue ir reset. Paspaudus add red, prisideda raudonas kvadratas, paspaudus add blue - mėlynas ir t.t. Spaudinėjant prisideda vis daygiau kvadratų. Paspaudus reset viskas išsitrina
*/