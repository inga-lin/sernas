/////

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
      
export default Daiktas;

/*
     function Daiktas({auto}) {
        return (
            <>  
                {auto.filter(e => e.id % 2  === 0).map(e => <h3 style={{color: e.color}}>{e.id} {e.type} {e.name} </h3>)}
                {auto.filter(e => e.id % 2  !== 0).map(e => <h3 style={{color: e.color}}>{e.id} {e.type} {e.name} </h3>)}
            </>
        )
    }
    
    export default Daiktas;
*/

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