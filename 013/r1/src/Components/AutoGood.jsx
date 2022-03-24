
export default function AutoGood({vardas}) {//auto=vardas
   
    return (
        <div>
            <h1 style={{color:vardas.color}}>{vardas.type}</h1> {/*cia atvaizduojam type(masinos varda) ir jai pritaikom spalva*/}
            <span>{vardas.price * 90}RUB</span> {/*cia is naujos eilutes atspauzdinam price*/}             
        </div>

    )

}