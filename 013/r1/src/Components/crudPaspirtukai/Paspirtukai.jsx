//2.gaminam gyvunus(givunu lista(paspirtukai))//propsa animal gaunam is Read,jsx (animal={z})
function Paspirtukai({animal, deleteA, show}) {
    const handleDelete = id => { //3.pasigaminom istrinima//handleDelete paima id ir perduoda parseInt(id)
        deleteA(parseInt(id));
    }

    return (
        <li>
            <div className="content">
            <span  className="animalI">Id: {animal.id}</span>
            <span className="animalR">Registracijos Kodas:  {animal.registracijosCodas}</span>{/*nurodam ka turi atvaizduoti listuose(paspirtukai)*/}
            <span className="animalD">Paskutinį katrą naudotas: {animal.dataa}</span>
            <span className="animalK">Išviso nuvažiuota kilometrų: {animal.bkm}</span>
            {/*<span className="animalT">{animal.km}</span>*/}
            <span className="animalP">Paspirtukas: {animal.pas}</span>{/*nurodam ka turi atvaizduoti listuose(paspirtukai)*/}
            {/*nurodam ka turi atvaizduoti listuose(paspirtukai) is alive su pasirinkimu atvaizduoja ji arba jei nepasirenka neatvaizduoja nieko*/}
            {
                animal.laisvas ? <div className="isalive laisvas"></div> : <div className="uzimtas"></div>
            }
            </div>
            <div className="buttons bb">
                <button className="edit e redaguoti" onClick={()=>show(animal.id)}>Redaguoti</button>{/*6.show(animal.id)} shaw paimam is reado.jsx ir tada ismeta lentele redaguoti su jau nurodytais gyvunais kuriuos padarem liste*/}
                <button className="delete trinti" onClick={() => handleDelete(animal.id)}>Trinti</button>{/*3. cia perduodam ka norim istrinti handleDelete(animal.id)*/}
            </div>
        </li>
    )
}

export default Paspirtukai;

/*
            {
                animal.laisvas ? <div className="isalive laisvas"></div> : null
            }
*/