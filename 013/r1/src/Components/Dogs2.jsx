/*function Dogs2({dogs}) {
    for(let i = 0; i < dogs.length; i++){ 
        if (dogs[i] % 2 !== 0 ) {
            return (
                <h1 dogs={dogs} style={{backgroundColor: 'red', color:'pink', height: '150px', width:"150px"}} > {dogs}</h1>
            )
        } else if (dogs[i] % 2 === 0 ){
            return (
                <h1 key={i} dogs={dogs} style={{width:'0px', height:'0px', borderBottom:'170px solid red', borderLeft:'170px solid transparent' }} >{dogs} </h1>
            )
        }
    }
}
export default Dogs2;*/

import DogsKvad from "./DogsKvad";
import DogsTrikam from "./DogsTrikam";

function Dogs2 ({dogs}) {
   

   
    return(
        
        <div>
            {
              dogs.map((dogs, i) => i % 2 !== 0 ? (<DogsKvad key={i} dogs={dogs} ></DogsKvad>) : (<DogsTrikam key={i} dogs={dogs} ></DogsTrikam>))
            }
        </div>
        
    )
}

export default Dogs2; 
//Atvaizduoti masyvą dogs. Poriniuose indeksuose esančius šunis atvaizduoti kvadratuose, neporinius trikampiuose (trikampio css pasigooglint).
/*
veikia ir taip
<div>
{
  dogs.map((dogs, i) => i % 2 !== 0 ? ( <h1 key={i} dogs={dogs} style={{backgroundColor: 'red', color:'pink', height: '150px', width:"150px"}} > {dogs}</h1>) : ( <h1 key={i} dogs={dogs} style={{width:'0px', height:'0px', borderBottom:'170px solid red', borderLeft:'170px solid transparent' }} >{dogs} </h1>))
}
</div>
*/
/*
        <div>
            {
              dogs.map((dogs, i) => i % 2 !== 0 ? (<DogsKvad key={i} dogs={dogs} ></DogsKvad>) : (<DogsTrikam key={i} dogs={dogs} ></DogsTrikam>))
            }
        </div>
*/
/*
        <div>
            {
                dogs.sort((a,b) => (a < b % 2 -1 : 1)).map(dogs => <h1 style={{backgroundColor: 'pink', color:'white', height: '100px', width:"100px",borderRadius:'50%', padding:'100px'}}>{dogs}</h1>)
            }   
            
        </div>



            return (
        <>
        <h1>Poriniai id</h1>
        {
        dogs.filter(e => e % 2  === 0).map(dogs => <h1 style={{backgroundColor: 'red', color:'white', height: '150px', width:"150px"}} > {dogs}</h1>)
        }
        <h1>neporiniai id</h1>
        {
        dogs.filter(e => e % 2  !== 0).map(dogs => <h1 style={{width:'0px', height:'0px', borderBottom:'170px solid red', borderLeft:'170px solid transparent' }} >{dogs} </h1>)
        }
  </>
*/