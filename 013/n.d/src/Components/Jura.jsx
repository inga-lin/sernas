import Laivas from "./Laivas";
import Sala from "./Sala";
import Valtis from "./Valtis";

export default function Jura({autos}) {
    

    return (
        <>
            {
                autos.map((auto, i) =>  <Valtis key={i} auto={auto}></Valtis>)
            }
            {
                autos.map((auto, i) =>  <Laivas key={i} auto={auto}></Laivas>)
            }
            {
                autos.map((auto, i) =>  <Sala key={i} auto={auto}></Sala>)
            }
            {
                autos.map((auto, i) => auto.type === `fish` ? (<h1 key={i} style={{color: auto.color}}>{auto.id} Jura {auto.name}</h1>) : (<h1 style={{color:auto.color}}>{auto.id} {auto.type} {auto.name}</h1>))
            }
        </>
            
    )
}

/*
3.Sukurti keturis komponentus. Jura, Valtis, Laivas, Sala. Jura tėvinis komponentas,
 kiti trys vaikiniai. Atvaizduoti masyvą seaPlaners pagal taisyklę: “man” - Valtis,
  “car” - Laivas, “animal” - Sala, “fish” - tiesiai Jura komponente (be jokio vaikinio komponento).
*/