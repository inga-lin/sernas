/*function Dogs1({elements, dogs }){
    return(
        <div>
            {elements.map((e, i) => <h1 key={i} style={{color:'#'+e}} >{elements={dogs}}</h1>)}
        </div>
    )
}
export default Dogs1;*/

import DogsSkai from "./DogsSkai";

function Dogs1({dogs}) {
    
    return (
       
        <div>
            {
                (dogs.sort((a,b) => b.length - a.length)).map((dogs, i) => <DogsSkai key={i} dogs={dogs} number={i + 1 } >{dogs}</DogsSkai>) //isrusiavom sunis nuo ilgiausio pavadinimo iki trumpiausio
            }   
            
        </div>

    )

}
export default Dogs1;

//dogs.sort((a,b) => b - a)) neveikia
//dogs.sort((a,b) =>  (a < b ? -1 : 1))