import { useState } from "react";


function Form3() {

    const [pirmas, setPirmas] = useState('100'); 
    const [antras, setAntras] = useState('50'); 
    const [paspausk, setPaspausk] = useState([]);

    

    const changePirmas = e => {
        console.log(e.target.value);
        setPirmas(e.target.value); 

    }

    const changeAntras = e => {
        console.log(e.target.value);
        setAntras((e.target.value)); 
    }

    const changePaspausk = () => {//
        const sudedamSkaicius = [];//
        sudedamSkaicius.push({pirmas, antras});//
        console.log(sudedamSkaicius);//
        setPaspausk((info) => [...info, ...sudedamSkaicius]);
        console.log(sudedamSkaicius);//
       
    }
  

    


    return (
        <>
        <input type="text"  onChange={changePirmas} value={pirmas}/>
        <input type="text"  onChange={changeAntras} value={antras}/>
        <button onClick={changePaspausk}>Paspausk</button>
        {paspausk.map((k, i) => (<h1 key={i}> {k.pirmas * 2} {k.antras * 2} </h1>))}
        </>
    )
}
export default Form3;

/*
Sukurti komponentą su dviem įvedimo laukeliais. Pradžioje viename laukelyje rodyti 
skaičių 100 kitame 50. Santykis tarp pirmo ir antro laukelio yra 2. 
Pakeitus skaičius viename kažkuriame laukelyje turi pasikeisti ir skaičius 
kitame laukelyje taip, kad santykis išliktų nepakitęs.
*/