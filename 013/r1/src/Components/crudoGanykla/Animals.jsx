//2.gaminam gyvunus(givunu lista)//propsa animal gaunam is Read,jsx (animal={z})
function Animals({animal, deleteA, show}) {
    const handleDelete = id => { //3.pasigaminom istrinima//handleDelete paima id ir perduoda parseInt(id)
        deleteA(parseInt(id));
    }

    return (
        <li>
            <div className="content"> 
            <span className="animalT"style={{color:'red'}} >{animal.gyvunas}</span>{/*nurodam ka turi atvaizduoti listuose*/}
            <span className="animalC" style={{color:'red'}}>{animal.svoris}kg</span>{/*nurodam ka turi atvaizduoti listuose*/}
            {/*nurodam ka turi atvaizduoti listuose is alive su pasirinkimu atvaizduoja ji arba jei nepasirenka neatvaizduoja nieko*/}

            </div>
            <div className="buttons redaguoti">
                <button className="edit e" onClick={()=>show(animal.id)}>Redaguot</button>{/*6.show(animal.id)} shaw paimam is reado.jsx ir tada ismeta lentele edit su jau nurodytais gyvunais kuriuos padarem liste*/}
                <button className="delete" onClick={() => handleDelete(animal.id)}>Ištrinti</button>{/*3. cia perduodam ka norim istrinti handleDelete(animal.id)*/}
            </div>
        </li>
    )
}

export default Animals;