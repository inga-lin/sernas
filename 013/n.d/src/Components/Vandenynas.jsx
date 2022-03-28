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

//autos.sort((a,b)=> a.name - b.name).map((auto, i) =>  <Vardas key={i} auto={auto}></Vardas>)