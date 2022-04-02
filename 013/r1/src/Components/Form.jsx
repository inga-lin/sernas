import { useState } from "react";

function Form() {
    
    const [text1, setText1] = useState(''); //1.padarom tuscia pradini lauka <input type="text" placeholder='bla'
    const [volume, setVolume] = useState(0); //2.jei parasysim 50%bus per viduri, jei 0 bus pradzioje iki 11skaiciu galim <input type="range" id="volume"
    //1.ideti color inputa ir jam keiciantis ta spalva nudazyti kvadrata
    const [color, setColor] = useState('#ff0000'); //3.pradine reiksme raudonas kvadratas <input type="color"
    const [ta, setTa] = useState('----'); //4.pradine uzkrovimo reiksme ---- jei paliksim tuscia bus tuscias <textarea
    const [select, setSelect] = useState('nezinau');//5.
    const [selectT, setSelectT] = useState('');//6.galima apsieiti ir tik su 5.
    const [dont, setDont] = useState(true);//7.
    const [checkbox, setCheckbox] = useState('');//8
    const [radio, setRadio] = useState('');//9

    const changeText1 = e => {//1.
        if (e.target.value.length > 10){//7.B   cia nustatom kad butu nedaugiau kaip 10simboliu
            return
        }
        if(dont){//7.paspaudus mygtuka DONT nieko neleis rasyt, vel paspaudus ji leis rasyt i narsykles langeli
        console.log(e.target.value);//1
        setText1(e.target.value); //1.viska ka irasysim imput laukelyje galesim matyti sitos eilutes deka //console.log(e.target.value);
        }
    }

    const changeDont = () => {//7.
        setDont(d => !d); //7.setDont(d pasiemu sita reiksme ir ja pakeiciu(pasetinu) i sita => !d)
    }

    const changeVolume = e => {
        console.log(e.target.value);
        setVolume(e.target.value); //2.viska ka irasysim imput laukelyje galesim matyti sitos eilutes deka //console.log(e.target.value);
    }
 
    const changeColor = e => {
        setColor(e.target.value);//3.
    }

    const changeTa = e => {
        console.log(e.target.value);//4.
        setTa(e.target.value);
    }

    const changeSelect = e => {
        console.log(e.target.value);
        setSelect(e.target.value);//5.
        setSelectT(e.target.querySelector('[value=' + e.target.value + ']').innerText);//6. galima apsieiti ir tik su 5.
    }

    const changeCheckbox = e => {//8.
        setCheckbox(e.target.checked ? e.target.value : ''); //jeigu Checkbox yra pazymetas tai jo reiksme value jeigu nepaymmetas neturi jokios reiksmes// o value dabar yra pirmyn
    }

    const changeRadio = e => {//9
        setRadio(e.target.value);
    }

    const changeRadio1 = e => {//9
        e.target.setAttribute('checked', true);//nustatom kas pazymeta ir ta vieta atvaizduotu consoleje?
        console.log(e.target.value);
    }

    return (
        <>
            <input type="text" placeholder='bla' onChange={changeText1} value={text1}/>{/*1*/}
            {/*7.paspaudus mygtuka DONT nieko neleis rasyt, vel paspaudus ji leis rasyt i narsykles langeli*/}
            <button onClick={changeDont}>DONT!</button>
            <div>{/*2*/}
            <input type="range" id="volume" name="volume" onChange={changeVolume}
                    min="0" max="11" value={volume}/>
            <label htmlFor="volume">Volume {volume}</label>
            </div> 
             {/*3*/}
            <input type="color" onChange={changeColor} value={color}/> {/*1.ideti color inputa ir jam keiciantis ta spalva nudazyti kvadrata*/}       
            <div style={{width:'100px', height:'100px', background: color, margin: '50px'}}></div>
             {/*4*/}
            <textarea value={ta} onChange={changeTa}></textarea>
            {/*5*/}
            <select value={select} onChange={changeSelect}>
                <option value='jo'>Jo</option>
                <option value='ne'>Ne</option>
                <option value='nezinau'>Nezinau</option>
            </select>
            <h1>{select}</h1>{/*5 puslapyje atspauzdins pasirinkima*/}
            <h6>{selectT}</h6>{/*6 puslapyje atspauzdins pasirinkima*/}
            {/*8*/}
            <input type="checkbox" onChange={changeCheckbox} value="Pirmyn" />
            <h3>-{checkbox}-</h3>
            {/*9*/}
             <div onChange={changeRadio}> 
            <input type="radio" onChange={changeRadio1} name="tas_pat" value="Jo" />Jo
            <input type="radio" onChange={changeRadio1} name="tas_pat" value="Ne" defaultChecked/>Ne {/*defaultChecked-pazymi kokia pradine reiksme turi buti*/}
            <input type="radio" onChange={changeRadio1} name="tas_pat" value="Nesakysiu" />Nesakysiu
            </div> 

            <h3>-{radio}-</h3>{/*9*/}

            <input type="file" />{/*input type="file"//10.niekas jo nekontraluoja*/}

        </>
    )
}
export default Form;