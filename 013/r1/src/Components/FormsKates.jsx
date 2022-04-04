import { useEffect, useState } from "react";


function FormsKates() {

    const [kate, setKate] = useState(''); 
    const [svoris, setSvoris] = useState(''); 
    const [paspausk, setPaspausk] = useState([]);



    const changeKate = e => {//1.
        console.log(e.target.value);//1
        setKate(e.target.value); //1.viska ka irasysim imput laukelyje galesim matyti sitos eilutes deka //console.log(e.target.value);

    }

    const changeSvoris = e => {
        console.log(e.target.value);
        setSvoris(e.target.value); 
    }


   const changePaspausk = () => {//
    //setPaspausk([...paspausk, {kate:kate, svoris:svoris}].sort((a, b) => a.svoris - b.svoris));// irgi geras variantas ir trumpesnis
        const sudedamKates = [];//
        sudedamKates.push({kate, svoris});//
        setPaspausk((info) => [...info, ...sudedamKates].sort((a, b) => a.svoris - b.svoris));// isrusiuojam kates
        console.log(sudedamKates);//
  
    }
// localStorage.setItem('manoLentyna44', JSON.stringify([]));
///console.log(JSON.parse(localStorage.getItem('manoLentyna')));


    useEffect(()=>{ //per juos issisaugojam localStorage//nepamirst virsuje parasyti import { useEffect, useState } from "react"; kitaip neveiks
        const lentyna = localStorage.getItem('lentyna')
        if(lentyna){
            setPaspausk(JSON.parse(lentyna))
     }
},[])
    
    useEffect(()=>{
        localStorage.setItem('lentyna',JSON.stringify(paspausk))
    })



    return (
        <>
        <p>Irasykit katino varda</p>
        <input type="text" placeholder='Iveskit kates varda' onChange={changeKate} value={kate}/>
        <p>Irasykit katino svori</p>
        <input type="text" placeholder='Iveskit kates svori' onChange={changeSvoris} value={svoris}/>
        <button onClick={changePaspausk}>Paspausk</button>
        {paspausk.map((k, i) => (<h1 key={i}> {k.kate} {k.svoris} </h1>))}
        </>
    )
}
export default FormsKates;

/*
2.Sukurti komponentą su dviem įvedimo laukeliais, katinuko vardui ir svoriui įvesti. 
Rodyti visų įvestų katinukų sąrašą. Puslapiui persikrovus, katinukų sąrašas turi 
išlikti nepakitęs. Katinukus sąraše rūšiuoti nuo storiausio iki ploniausio. 
Skaičiuoti ir atvaizduoti bendrą katinukų svorį.


neisideda i masyva ir truksta lockal storidzo
*/