function Tipas({auto}) {
    return (
        <div >
           
            <h1 style={{color:auto.color}}>{auto.id} {auto.type} {auto.name}</h1> {/*cia atvaizduojam type(masinos varda) ir jai pritaikom spalva*/}  
       
        </div>

    );

}
  
export default Tipas;