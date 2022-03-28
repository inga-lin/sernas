function Akvariumas({auto}) {//auto=vardas
    if(auto.type !== 'man'){ //if(vardas.type !== 'MB') jeigu tai ne MB tai spauzdink tai ka reik o jeigu tai yra MB spauzdink surudijusi gelda
        return (
            <div >
                <h1 style={{color:auto.color}}>{auto.id} {auto.type} {auto.name}</h1> {/*cia atvaizduojam type(masinos varda) ir jai pritaikom spalva*/}  
           
            </div>
    
        );
        }else {
            return(
                <h1 style={{color:auto.color}}> {auto.id}  Akvariumas {auto.name}</h1>
            )
        }
}
      
export default Akvariumas;