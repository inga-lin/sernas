import { useState } from "react";

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function FormsKvadRandSkaicius() {
    
    const [skaicius, setSkaicius] = useState(''); 
    const [kvadrata, setKvadratas] = useState([]);
    

    const changeSkaicius = e => {//+
        console.log(e.target.value);
        setSkaicius(e.target.value); 
    }

    /*const changeKvadratas = () => {
        setKvadratas(items => [...items, items.length + 1]);// i nauja kvadrata pridedam po 1 skaiciu
        //setKvadratas(rand(100, 200));// neveikia
    }*/
    
    const changeKvadratas = (e) => {
        const raudonas = [];
        for (let i = 0; i < skaicius; i++){ //cia sugeneruojam random skaiciu
            raudonas.push(rand(100, 200));
        }
        setKvadratas(items => [...items,...raudonas]);// nurodom laukelyje kiek norim kvadratu ir jis cia sugeneruoja tik kvadratu ir rand skaiciu i ji ideda
    }

    return (
        <>
             <input type="text" placeholder='Iveskit skaiciu' onChange={changeSkaicius} value={skaicius}/>{/*kiek ivesim skaiciu tiek atspauzdins kvadratu*/}
             <button onClick={changeKvadratas}>Paspausk</button>{/*paspaudus mygtuka atvaizduos kvadratus*/}
             {kvadrata.map((k, i) => <div style={{width: '50px',
                height: '50px',
                margin: '20px',
                background: 'red'}} key={i}> {k} </div>)}{/*sioje vietoje atvaizduojam savo kvadratus*/}
        </>
    )
}
export default FormsKvadRandSkaicius;


/*

1.Sukurti komponentą su mygtuku ir įvedimo laukeliu. 
Įvedus į laukelį skaičių ir paspaudus mygtuką, atsiranda 
laukelyje nurodytas raudonų kvadratėlių skaičius. Įvedus 
kitą skaičių ir paspaudus mygtuką, prie jau egzistuojančių 
kvadratėlių papildomai prisideda naujas laukelyje nurodytas 
kvadratėlių kiekis. Kiekvieno kvadratėlio viduryje turi būti 
pavaizduotas rand skaičius 100 - 200.

*/