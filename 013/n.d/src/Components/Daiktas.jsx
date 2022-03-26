function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function Daiktas({auto}) {//auto=vardas
   // if(vardas.id !== vardas.id[i] % 2){ //if(vardas.type !== 'MB') jeigu tai ne MB tai spauzdink tai ka reik o jeigu tai yra MB spauzdink surudijusi gelda
   
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
   
}
      
export default Daiktas;

/*    }else {
        return(
            <h3 style={{color:vardas.color}}> {vardas.type} surudijusi gelda</h3>
        )
    }*/