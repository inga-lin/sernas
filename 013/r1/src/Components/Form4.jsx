import { useState } from "react";


function Form4() {

    const [select1, setSelect1] = useState('');//5.
    const [select2, setSelect2] = useState('');//5.
    const [select3, setSelect3] = useState('');//5.
    const [skaicius, setSkaicius] = useState(''); 
    
    /*const changeSelect1 = e => {
        console.log(e.target.value);
        setSelect1(e.target.value);//5.
        
    }*/
    const changeSelect1 = e => {
        setSelect1(e.target.value);
    }

    const changeSelect2 = e => {
        console.log(e.target.value);
        setSelect2(e.target.value);//5.
        
    }

    const changeSelect3 = e => {
        console.log(e.target.value);
        setSelect3(e.target.value);//5.
        
    }
  
    const changeSkaicius = e => {//+
        console.log(e.target.value);
        setSkaicius(e.target.value); 
    }
    


    return (
        <>
            <select value={select1} onChange={changeSelect1}>
                <option value='red'>Red</option>
                <option value='blue'>Blue</option>
                <option value='yellow'>Yellow</option>
                <option value='pink'>Pink</option>
                <option value='green'>Green</option>
            </select>
            <h1 style={{color:select1}}>{select1}</h1>{/*5 puslapyje atspauzdins pasirinkima*/}
            <select value={select2} onChange={changeSelect2}>
                <option value='10px'>10px</option>
                <option value='20px'>20px</option>
                <option value='30px'>30px</option>
                <option value='40px'>40px</option>
                <option value='50px'>50px</option>
            </select>
            <h1 style={{fontSize:select2}}>{select2}</h1>{/*5 puslapyje atspauzdins pasirinkima*/}
            <select value={select3} onChange={changeSelect3}>
                <option value='Arial, Helvetica, sans-serif'>Arial, Helvetica, sans-serif</option>
                <option value='Gill Sans'>Gill Sans</option>
                <option value='Times New Roman'>Times New Roman</option>
                <option value='Georgia'>Georgia</option>
                <option value='Verdana, Geneva, Tahoma, sans-serif'>Verdana, Geneva, Tahoma, sans-serif</option>
            </select>
            <h1 style={{fontFamily:select3}}>{select3}</h1>{/*5 puslapyje atspauzdins pasirinkima*/}
            <input type="text" placeholder='Jusu tekstas' onChange={changeSkaicius} value={skaicius}/>
            <h1 style={{color:select1, fontSize:select2, fontFamily:select3}}>{skaicius}</h1>
        </>
    )
}
export default Form4;

/*
4.Sukurti komponentą su trim select pasirinkimais ir teksto įvedimo laukeliu.
 Įvedamas tekstas turi būti atvaizduojamas atskirai komponento apačioje. 
 Select pasirinkimai sudaryti iš 5 skirtingų spalvų, 5 skirtingų fontų dydžių 
 ir 5 skirtingų fontų (Arial, Times new Roman ar panašiai) Select pasirinkimų 
 nustatymai turi keisti atvaizduojamo teksto išvaizdą.
*/