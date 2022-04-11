import { useRef, useState, useEffect, useReducer } from 'react';
import './App.css';
import rand from './Common/rand'; //susiinstaluojam rand nepamirsti litaip rand neveiks
import countReducer from './Reducers/countReducer';

function App() {

    const [count, setCount] = useState(100); //1.nusistatom pradine reiksme
    const countRef = useRef([]);//2.parasom kad detu skaicius i masyva
    const inp = useRef(); //3.
    

    //4.useReducer - kosmaras. cia nurodom ka daryti kada daryti kaip daryti(egze nebus)
    const [countR, dispachR] = useReducer(countReducer, 333);//4 (countReducer)- reiks ji apsirasyti patiems (333)-pradine reiksme

    
    useEffect(() => { //3.referansas? focus (jo pagalba galim consoleje pamatyti(greiciau surasti) siuo atveju inp)
        inp.current.focus(); //cia pazyim ka norim pamatyti(inp)<input>
        console.log(inp);  //atsispauzdinam ta elementa consoleje
        // document.querySelector('input').focus(); cia taip darytumem vanila J.S.
      }, []);

    const countNow = () => { //1.pasidarom random skaiciu ir juos pusinam i countRef masyva
        countRef.current.push(count);
        setCount(c => c + rand(5, 100)) //prie jau esamo c mes pridedam rand skaiciu(taip mums atvaizduos graziai skaicius didejimo tvarka)
    }

    const undo = () => { // 2.is countRef masyvo trinam skaicius iki tol kol liks tik vienas skaicius
        if (countRef.current.length === 1) {
            setCount(countRef.current[0]);
        } else {
            setCount(countRef.current.pop()); //kas tas pop
        }
    }


  return (
    <div className="App">
      <h1>USE Ref</h1>
      <h2>Count NOW: {count}</h2> {/*1.*/}
      <h2>Count REDUCER NOW: {countR}</h2>{/*4.*/}

      <input type="text" ref={inp}></input> {/*3. consoleje atvaizduos {current: input} (kiek kartu sitoje eiluteje ka nors paspausim tik kartu tai uzrasa atvaizduos)*/}
      {/*onClick={countNow} taip rasom kai neturim jokio argumento papildomo o taip rasom onClick={() => setCount(c => c + 1)} kai argumenta koki nors naudojam viduje */}
      <button onClick={countNow}>COUNT NOW!</button> {/*1) random skaiciu i masyva didejimo tvarka atvaizduos*/}
      <button onClick={undo}>Undo</button> {/*2.cia su sito mygtuko paspaudimu skaiciai mazes ta tvarka kokia buvo atspauzdinti spaudziant COUNT NOW!*/}
    </div>
  );
}

export default App;


/* paskaitos prazia
//https://dmitripavlutin.com/react-useref-guide/
//USE Ref(kintamasis)kartais komponente norim tureti kintamaji (let kazkastai ir kartais norim i ji ka nors irasyti)(vietoje state)
import { useRef, useState } from 'react';
import './App.css';

function App() {

    const [count, setCount] = useState(100);1.pradine reiksme 100
    const countRef = useRef(100);2. (USE Ref)pradine reiksme 100(budas tureti paslepta kintamaji
    let countLet = 100;3.


  return (
    <div className="App">
      <h1>USE Ref</h1>
      <h2>Count NOW: {count}</h2>1.
      <h2>Count REF: {countRef.current}</h2>2.(USE Ref) {countRef.current} yra suo metu 100. .current privaloma parasyti kad veiktu
      <h2>Count LET: {countLet}</h2>3.

                 1)  paleidziam funkcija setCount kuri mums paskaiciuoja +1
      <button onClick={() => setCount(c => c + 1)}>COUNT NOW!</button> 1.kiek kartu mygtuka paspausim tiek prie pagrindinio skaiciaus prides po 1 ir ji iskarto matysim
                    //{() => countRef(200)} jei taip parasytumem tai jis pakeistu reiksme i 200
                                                ++countRef.current cia taip pridedam po vieneta
      <button onClick={() => countRef.current = ++countRef.current}>SET REF</button> 2.(USE Ref)spaudinejam kokius 5kart ir niekas nepasikeicia bet mintyje jis uzsifiksuoja ir paspaudus COUNT NOW! jis pasikeis
      <button onClick={() => countLet = ++countLet}>SET LET</button> 3.
    </div>
  );
}

export default App;
*/

/*useReducer() Hook (egze nebus)
ka daryt-su kuo daryti-kaip daryti
+type:privalo buti
+payload:privalo buti
rediuseris paprasciausia funkcija nera jame jokiu reacto uzuonenu cia yra tik JS
https://dmitripavlutin.com/react-usereducer/
import { useRef, useState, useEffect, useReducer } from 'react';
import './App.css';
import rand from './Common/rand';
import countReducer from './Reducers/countReducer';

function App() {

    const [count, setCount] = useState(100);
    const countRef = useRef([]);
    const inp = useRef();

    const [countR, dispachR] = useReducer(countReducer, 333);

    
    useEffect(() => {
        inp.current.focus();
        console.log(inp);
        // document.querySelector('input').focus();
      }, []);

    const countNow = () => {
        countRef.current.push(count);
        setCount(c => c + rand(5, 100))
    }

    const undo = () => {
        if (countRef.current.length === 1) {
            setCount(countRef.current[0]);
        } else {
            setCount(countRef.current.pop());
        }
    }


  return (
    <div className="App">
      <h1>USE Ref</h1>
      <h2>Count NOW: {count}</h2>
      <h2>Count REDUCER NOW: {countR}</h2>

      <input type="text" ref={inp}></input>

      <button onClick={countNow}>COUNT NOW!</button>
      <button onClick={undo}>Undo</button>
    </div>
  );
}

export default App;

*/