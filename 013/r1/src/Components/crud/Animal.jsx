//2.gaminam gyvunus(givunu lista)//propsa animal gaunam is Read,jsx (animal={z})
function Animal({animal, deleteA, show}) {
    const handleDelete = id => { //3.pasigaminom istrinima//handleDelete paima id ir perduoda parseInt(id)
        deleteA(parseInt(id));
    }

    return (
        <li>
            <div className="content">
            <span className="animalT">{animal.type}</span>{/*nurodam ka turi atvaizduoti listuose*/}
            <i className="animalC">{animal.color}</i>{/*nurodam ka turi atvaizduoti listuose*/}
            {/*nurodam ka turi atvaizduoti listuose is alive su pasirinkimu atvaizduoja ji arba jei nepasirenka neatvaizduoja nieko*/}
            {
                animal.isalive ? <div className="isalive"></div> : null
            }
            </div>
            <div className="buttons">
                <button className="edit e" onClick={()=>show(animal.id)}>edit</button>{/*6.show(animal.id)} shaw paimam is reado.jsx ir tada ismeta lentele edit su jau nurodytais gyvunais kuriuos padarem liste*/}
                <button className="delete" onClick={() => handleDelete(animal.id)}>delete</button>{/*3. cia perduodam ka norim istrinti handleDelete(animal.id)*/}
            </div>
        </li>
    )
}

export default Animal;