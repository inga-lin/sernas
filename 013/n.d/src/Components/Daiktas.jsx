/////////////////////////////
/*
function Daiktas({auto}) {//auto=vardas
    if(auto.id % 2 !== 0){ 
        return (
            <div>
                <h3 style={{color: auto.color}}>{auto.id} {auto.type} {auto.name} neporinis id</h3>
            </div>
        )
    }else {
        return(
            <div>
                <h3 style={{color: auto.color}}>{auto.id} {auto.type} {auto.name} porinis id</h3>
            </div> 
        )
    }
    
    
}
      
export default Daiktas;*/
//123
/*
function Daiktas({autos}) {
    return (
        <>  
                {
                autos.filter(e => e.id % 2  === 0).map((e, i ) => <h3 key={i} style={{color: e.color}}>{e.id} {e.type} {e.name} </h3>)
                }
                {
                autos.filter(e => e.id % 2  !== 0).map((e, i ) => <h3 key={i} style={{color: e.color}}>{e.id} {e.type} {e.name} </h3>)
                }
        </>
    )
}
    
export default Daiktas;
*/
export default function Daiktas({ autos }) {
    return (
      <>
        <h1 style={{color: autos.color}}>{autos.id} {autos.type} {autos.name}</h1>
      </>
    );
  }

/*    }else {
        return(
            <h3 style={{color:vardas.color}}> {vardas.type} surudijusi gelda</h3>
        )
    }*/



/*
   // if(vardas.id !== vardas.id[i] % 2){ //if(vardas.type !== 'MB') jeigu tai ne MB tai spauzdink tai ka reik o jeigu tai yra MB spauzdink surudijusi gelda
   // for (let i = 0; i < auto.lenth; i++){ 
        if(auto.id % 2 !== 0){ 
          return (
            <div>
            <h3 style={{
                color: auto.color
            }}>{auto.type} {auto.name} neporinis id</h3>
            <span>{auto.name}</span>
            </div>
    
           )
           } else {
            return(
                <h3 style={{color:auto.color}}> {auto.type} porinis id</h3>
            )
        }
*/