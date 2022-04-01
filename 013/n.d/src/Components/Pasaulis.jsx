import Namas from "./Namas";
import Narvas from "./Narvas";
import Garazas from "./Garazas";
import Akvariumas from "./Akvariumas";

export default function Pasaulis({autos}) {
    return (
        <>
            <h1>Namas porinis</h1>
            {
                autos.map((auto, i) =>  auto.id % 2 === 0 ? <Namas key={i} auto={auto}></Namas> : ``)
            }
            <h1>Narvas porinis</h1>
            {
                autos.map((auto, i) =>  auto.id % 2 === 0 ? <Narvas key={i} auto={auto}></Narvas> : ``)
            }
            <h1>Garaza porinis</h1>
            {
                autos.map((auto, i) =>  auto.id % 2 === 0 ? <Garazas key={i} auto={auto}></Garazas> : ``)
            }
            <h1>Akvariumas porinis</h1>
            {
                autos.map((auto, i) =>  auto.id % 2 === 0 ? <Akvariumas key={i} auto={auto}></Akvariumas> : ``)
            }

            <h1>Namas neporinis</h1>
            {
                autos.map((auto, i) =>  auto.id % 2 !== 0 ? <Namas key={i} auto={auto}></Namas> : ``)
            }
            <h1>Narvas neporinis</h1>
            {
                autos.map((auto, i) =>  auto.id % 2 !== 0 ? <Narvas key={i} auto={auto}></Narvas> : ``)
            }
            <h1>Garaza neporinis</h1>
            {
                autos.map((auto, i) =>  auto.id % 2 !== 0 ? <Garazas key={i} auto={auto}></Garazas> : ``)
            }
            <h1>Akvariumas neporinis</h1>
            {
                autos.map((auto, i) =>  auto.id % 2 !== 0 ? <Akvariumas key={i} auto={auto}></Akvariumas> : ``)
            }

        </>
            
    )
}

/*
Sukurti penkis komponentus. Pasaulis, Namas, Narvas, Garazas ir Akvariumas. Pasaulis tėvinis komponentas,
 kiti keturi vaikiniai. Atvaizduoti masyvą seaPlaners pagal taisyklę: “man” - Namas, “car” - Garazas, 
 “animal” - Narvas, “fish” - Akvariumas. Komponentas Pasaulis turi būti padalintas į dvi dalis- porinę 
 ir neporinę (pagal id, ne masyvo indeksą). Visus keturis vaikinius komponentus panaudoti po du kartus - 
 porinėje ir neporinėje dalyje, atvaizduojant porinius ir neporinius masyvo įrašus.
*/

/*
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
*/