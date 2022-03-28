import Tipas from "./Tipas";
import Vardas from "./Vardas";
import Spalva from "./Spalva";

export default function Vandenynas({autos}) {
    return (
        <>
            <h1>Tipas</h1>
            {
                
                autos.sort((a,b) => a.type.localeCompare(b.type)).map((auto, i) => <Tipas key={i} auto={auto}></Tipas>)
            }
            <h1>Vardas</h1>
            {
                autos.sort((a,b) => a.name.localeCompare(b.name)).map((auto, i) =>  <Vardas key={i} auto={auto}></Vardas>)
            }
            <h1>Spalva</h1>
            {
                autos.sort((a,b) => a.color.localeCompare(b.color)).map((auto, i) =>  <Spalva key={i} auto={auto}></Spalva>)
            }
        </>
            
    )
}

/*
4.Sukurti keturis komponentus Vandenynas, Tipas, Vardas, Spalva. Vandenynas tėvinis komponentas kiti trys vaikiniai.
Vaikiniuose komponentuose atvaizduoti tą patį masyvą, tik išrūšiuotą pagal komponento vardą
(pvz Tipas išrūšiuota pagal tipą ir t.t.).*/

//autos.sort((a,b)=> a.name - b.name).map((auto, i) =>  <Vardas key={i} auto={auto}></Vardas>)
//Metodas localeCompare() grąžina skaičių, nurodantį, ar nuorodos eilutė yra prieš, ar po jos, ar yra tokia pati kaip nurodyta eilutė rūšiavimo tvarka.