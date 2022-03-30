//import DogsKvad2 from "./DogsKvad2";
function Dogs4({dogs}) {
    return (
       
        <div>
            {
               dogs.map((dogs, i) =>  <h1 style={{color: dogs.length > 6 ? 'green':'red' }} key={i} dogs={dogs.length} >{dogs.length}</h1>)
            }   
        </div>

    )

}
export default Dogs4;

//+