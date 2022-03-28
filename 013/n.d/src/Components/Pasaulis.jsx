import Namas from "./Namas";
import Narvas from "./Narvas";
import Garazas from "./Garazas";
import Akvariumas from "./Akvariumas";

export default function Pasaulis({autos}) {
    return (
        <>
            <h1>Namas</h1>
            {
                autos.map((auto, i) => <Namas key={i} auto={auto}></Namas>)
            }
            <h1>Narvas</h1>
            {
                autos.map((auto, i) =>  <Narvas key={i} auto={auto}></Narvas>)
            }
            <h1>Garaza</h1>
            {
                autos.map((auto, i) =>  <Garazas key={i} auto={auto}></Garazas>)
            }
            <h1>Akvariumas</h1>
            {
                autos.map((auto, i) =>  <Akvariumas key={i} auto={auto}></Akvariumas>)
            }
        </>
            
    )
}