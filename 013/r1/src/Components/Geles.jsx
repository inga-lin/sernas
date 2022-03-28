import Gel from "./Gel"

function Geles({geles}) {
    return (
        <div>
            {
                
                geles.map((geles, i) => <Gel key={i} geles={geles}></Gel>)
            }   
        </div>

    )
}
  
export default Geles;

/*
function Geles({vardas}) {
    return (
        <div>
            <h1 style={{color:vardas.color}}>{vardas.name}</h1>    
        </div>

    )
}
  
export default Geles;

*/






/*
export default function Geles({vardas}) {
   
    return (
        <div>
            <h1 style={{color:vardas.color}}>{vardas.name}</h1>    
        </div>

    )

}*/

/*
    return (
        <div>  
            {   
                vardas.map((vardas, i) => <Gel key={i} vardas={vardas}></Gel>) 
            }
            

        </div>     

    );*/