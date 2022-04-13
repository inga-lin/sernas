import { useEffect, useReducer, useState } from 'react';
import './App.css';
import { add1, dif1, add11, dif11, addRand, difRand, cc, kk} from './Action/basic';
import rand from './Common/rand'; //susiinstaluojam rand nepamirsti litaip rand neveiks
import countReducer from './Reducers/countReducer';

function App() {



    //4.useReducer - kosmaras. cia nurodom ka daryti kada daryti kaip daryti(egze nebus)
    const [countR, dispachR] = useReducer(countReducer, 333);//4 (countReducer)- reiks ji apsirasyti patiems (333)-pradine reiksme
    const [random, setRandom] = useState(100); //steitas
    
    const [color, dispachColor] = useReducer(countReducer, 'pink');//7

  
    
    useEffect(() => {
        setRandom(rand(10, 80));
        console.log(setRandom(rand(10, 80)));
    }, []);

    const getNewRand = (a) => { //5.6. parenkam rand skaicius ir juos arba pridedam arba atemam
        if ('+' === a) {
            dispachR(addRand(random));
        } else {
            dispachR(difRand(random));
        }
        setRandom(rand(10, 80));
    }  


   

    return (
        <div className="App">
            <h1>USE REduCER</h1>
            <h2>Count REDUCER NOW: {countR}</h2>
            <div className=".buttons">
                <button onClick={() => dispachR(add1())}>+1</button>{/*1*/}
                <button onClick={() => dispachR(dif1())}>-1</button>{/*2*/}
                <button onClick={() => dispachR(add11())}>+11</button>{/*3*/}
                <button onClick={() => dispachR(dif11())}>-11</button>{/*4*/}
                <button onClick={() => dispachR(addRand(random))}>+{random}</button>{/*5*/}
                <button onClick={() => dispachR(difRand(random))}>-{random}</button>{/*6*/}
                <button onClick={() => getNewRand('+')}>+RAND</button>{/*5//steitas*/}
                <button onClick={() => getNewRand('-')}>-RAND</button>{/*6//steitas*/}


                <button onClick={() => dispachColor(cc())}>Change</button>{/*7.paspaudus mygtuka kvadratas keitines spalva*/}
                <div className="S" style={{background: color }}>{/*7.*/}</div>

               
                
            </div>
        </div>
    );
}

export default App;

//7.Reikia padaryt mygtuką, kurį spaudinėjant keistųsi kvadratuko spalvos iš kokios nors į kokią nors DONE!