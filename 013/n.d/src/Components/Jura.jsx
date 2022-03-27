import Laivas from "./Laivas";
import Sala from "./Sala";
import Valtis from "./Valtis";

export default function Jura({autos}) {
    return (
        <>
            {
                autos.map((auto, i) => <Valtis key={i} auto={auto}></Valtis>)
            }
            {
                autos.map((auto, i) =>  <Laivas key={i} auto={auto}></Laivas>)
            }
            {
                autos.map((auto, i) =>  <Sala key={i} auto={auto}></Sala>)
            }
        </>
            
    )
}

