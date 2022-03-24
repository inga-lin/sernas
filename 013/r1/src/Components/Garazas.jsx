import Automobilis from './Automobilis';
//import { v4 as uuidv4 } from 'uuid'; //autos.map((auto, i) => <Automobilis key={uuidv4()} vardas={auto}></Automobilis>)
////cia galima sukurti unikalu key numeri 
//1-terminale paraso, npm install uuid 
//2- antroje eiluteje irasom import { v4 as uuidv4 } from 'uuid';
// 3-11eiluteje yrasytume autos.map((auto, i) => <Automobilis key={uuidv4()} vardas={auto}></Automobilis>)
function Garazas({autos}) {
    return (
        <div className="aa">  {/*taip padarom lista*/}
            {   
                autos.map((auto, i) => <Automobilis key={i} vardas={auto}></Automobilis>) 
            }
            
       
        </div>   

    );
}
  
  export default Garazas;

  /* {
         autos.map((auto, i) => <Automobilis key={i} vardas={auto}></Automobilis>)
     } */