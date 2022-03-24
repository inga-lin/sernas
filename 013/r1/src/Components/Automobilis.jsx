//import AutoGood from "./AutoGood";

function Automobilis({vardas}) {//auto=vardas
    if(vardas.type !== 'MB'){ //if(vardas.type !== 'MB') jeigu tai ne MB tai spauzdink tai ka reik o jeigu tai yra MB spauzdink surudijusi gelda
    return (
        <div >
            <h1 style={{color:vardas.color}}>{vardas.type}</h1> {/*cia atvaizduojam type(masinos varda) ir jai pritaikom spalva*/}
            <span>{vardas.price * 90}RUB</span> {/*cia is naujos eilutes atspauzdinam price*/}   
       
        </div>

    );
    }else {
        return(
            <h3 style={{color:vardas.color}}> {vardas.type} surudijusi gelda</h3>
        )
    }
}
      
export default Automobilis;

//Kadangi MB surudijo, tai jo neatvaizduot(surudijusi gelda) DONE!