import { useEffect } from "react";

function BS ({sk}){

    useEffect(() => {//paleidineja funkcija kuri yra jo viduje tada kai komponentas yra iskvieciamas
        console.log('SK', sk + 1);
        return () => {
            console.log('Sk mire', sk + 1);
        }
    }, [sk]); // jeigu [] yra tuscias masyvas veikia praktiskai identiskai kaip komponent 
    //}, [sk]); perduoti kas irasyta cia function BS ({sk}){
    //console.log('SK', sk);

    return(
        <div  className="BS">{sk + 1}</div>
    )
}
export default BS;