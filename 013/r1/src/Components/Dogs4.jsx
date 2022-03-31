//import DogsKvad2 from "./DogsKvad2";
function Dogs4({dogs}) {
    return (
       
        <div>
            {
              dogs.map((dogs, i) => dogs.length > 6 ? (<h1 key={i} style={{color:'green'}}>{dogs.length}</h1>):(<h1 key={i} style={{color:'red'}}>{dogs.length}</h1>))
            }   
        </div>

    )

}
export default Dogs4;



//+
//Naudojant masyvą dogs atvaizduoti skaičius, kurie yra lygūs žodžių masyve ilgiui. Skaičius, didesnius nei 6 atvaizduoti žaliai, kitus raudonai.

//Abu variantai veikia
//dogs.map((dogs, i) =>  <h1 style={{color: dogs.length > 6 ? 'green':'red' }} key={i} dogs={dogs.length} >{dogs.length}</h1>)
//dogs.map((dogs, i) => dogs.length > 6 ? (<h1 key={i} style={{color:'green'}}>{dogs.length}</h1>):(<h1 key={i} style={{color:'red'}}>{dogs.length}</h1>))


