
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

////////////123
/*
export default function Tvenkinys({auto}) {
    
    if (auto.id % 2 !== 0 ) {
        return (
            <Daiktas auto={auto}></Daiktas>
        )
    } else{
        return (
            null
        )
    }
}
*/
//////
/*
function Tvenkinys({autos}) {
    return (
        <> 
            <h1>lyginiai id</h1>
            <Daiktas autos={autos}></Daiktas>
            <h1>nelyginiai id</h1>
            <Daiktas autos={autos}></Daiktas>
        </>
    )
}

export default Tvenkinys;  
*/
export default function Tvenkinys({ autos }) {
    return (
      <>
            <h1>Poriniai id</h1>
            {
            autos.filter(e => e.id % 2  === 0).map((autos ) => <Daiktas   autos={autos}> </Daiktas>)
            }
            <h1>neporiniai id</h1>
            {
            autos.filter(e => e.id % 2  !== 0).map((autos) => <Daiktas  autos={autos}> </Daiktas>)
            }
      </>
    );
  }

  /*
            {
            autos.filter(e => e.id % 2  !== 0).map((autos, i) => <Daiktas key={i} autos={autos}> </Daiktas>) su key-neiseiles rodo skaicius porinius ir neporinius
            }
  */
////////////////
 /* 
export default function Tvenkinys({auto}) {
    
    if (auto.id % 2 !== 0 ) {
        return (
            <Daiktas auto={auto}></Daiktas>
        )
    } else if (auto.id % 2 === 0 ){
        return (
            null
        )
    }   else if (auto.id % 2 === 0 ) {
        return (
            <Daiktas auto={auto}></Daiktas>
        )
    } else if (auto.id % 2 !== 0 ){
        return (
            null
        )
    }
    
}*/

/*export default function Tvenkinys({auto}) {
    return (
        <div>
            <Daiktas auto={auto}></Daiktas>
            <Daiktas auto={auto}></Daiktas>
        </div>
    )
 
    
}*/

/*  
export default function Tvenkinys({auto}) {
    const skaicius =  Math.random() < 0.5;
    if (skaicius){
        for (let i = 0; i < auto.length; i++){
            if (auto.id % 2 !== 0 ) {
                return (
                    <Daiktas auto={auto}></Daiktas>
                )
            } else if (auto.id % 2 === 0 ){
                return (
                    null
                )
            }
        }
    }else{ 
        for (let i = 0; i < auto.length; i++){
            if (auto.id % 2 === 0 ) {
                return (
                    <Daiktas auto={auto}></Daiktas>
                )
            } else if (auto.id % 2 !== 0 ){
                return (
                    null
                )
            }
        }
    }
    
}*/

/*
2.Sukurti du komponentus Tvenkinys, Daiktas -  tėvinį ir vaikinį atitinkamai.
Tvenkinys komponente du kartus panaudokite komponentą Daiktas atvaizduoti
masyvą seaPlaners - vieną kartą poriniams kitą kartą neporiniams įrašams 
(pagal id, ne masyvo indeksą).*/