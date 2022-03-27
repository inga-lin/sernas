
import Daiktas from './Daiktas';
//import { v4 as uuidv4 } from 'uuid'; //autos.map((auto, i) => <Automobilis key={uuidv4()} vardas={auto}></Automobilis>)
////cia galima sukurti unikalu key numeri 
//1-terminale paraso, npm install uuid 
//2- antroje eiluteje irasom import { v4 as uuidv4 } from 'uuid';
// 3-11eiluteje yrasytume autos.map((auto, i) => <Automobilis key={uuidv4()} vardas={auto}></Automobilis>)
/*function Tvenkinys({auto}) {
    const skaicius =  Math.random() < 0.5;
    if (skaicius){
        for (let i = 0; i < auto.length; i++){
            if(auto.id % 2 === 0 ){
                return (
                    <Daiktas auto={auto}></Daiktas>
            
                ) 
            }
        }
    } else {
        for (let i = 0; i < auto.length; i++){
            if(auto.id % 2 !== 0 ){
                return(
                    <Daiktas auto={auto}></Daiktas>
                )
            }
        }
    }
}
  
export default Tvenkinys;*/


  
/*export default function Tvenkinys({auto}) {
    if (auto.id % 2 !== 0 ) {
        return (
            <Daiktas auto={auto}></Daiktas>
        )
    } else if (auto.id % 2 === 0 ){
        return (
            null
        )
    } 
    
}*/

export default function Tvenkinys({auto}) {
    return (
        <div>
            <Daiktas auto={auto}></Daiktas>
            <Daiktas auto={auto}></Daiktas>
        </div>

    )
 
    
}