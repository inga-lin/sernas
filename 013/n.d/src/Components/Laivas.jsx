function Laivas({auto}) {//auto=vardas
    if(auto.type !== 'car'){ //if(vardas.type !== 'MB') jeigu tai ne MB tai spauzdink tai ka reik o jeigu tai yra MB spauzdink surudijusi gelda
        return (
            <div >
                <h3 style={{color:auto.color}}>{auto.id} {auto.type} {auto.name}</h3> {/*cia atvaizduojam type(masinos varda) ir jai pritaikom spalva*/}  
           
            </div>
    
        );
        }else {
            return(
                <h3 style={{color:auto.color}}> {auto.id}  Laivas {auto.name}</h3>
            )
        }
}
      
export default Laivas;