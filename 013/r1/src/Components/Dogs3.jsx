
function Dogs3({dogs}) {
    return (
       
        <div>
            {
               dogs.map((dogs, i) => dogs[0].toLowerCase() === dogs[0] ? (<h1 key={i} >{dogs}</h1>) : (''))
            }   
        </div>

    )

}
export default Dogs3;


//Atvaizduoti masyvą dogs. Šunis, kurie prasideda didžiąja raide praleisti (neatvaizduoti).

//(dogs.sort((a,b) => b.length - a.length)).map((dogs, i) => <DogsSkai key={i} dogs={dogs} number={i + 1 } >{dogs}</DogsSkai>) //isrusiavom sunis nuo ilgiausio pavadinimo iki trumpiausio
// dogs.map((dogs, i) => i % 2 !== 0 ? (<DogsKvad key={i} dogs={dogs} ></DogsKvad>) : (<DogsTrikam key={i} dogs={dogs} ></DogsTrikam>))