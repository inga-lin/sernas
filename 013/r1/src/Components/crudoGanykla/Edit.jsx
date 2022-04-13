//4.cia padarom kad paspaudus edit mydtuka isoka edit(modalo) lentele su galimybe redaguoti esama pasirinkima
//sita nusikopinom is Creato.jsx ir biski kaika paredagavom
import { useEffect, useState }  from "react";
function Edit({edit, animal, cancel}) {

    const [svoris, setType] = useState('');
    const [gyvunas, setGyvunas] = useState('Avis');


    useEffect(() => { //7.ir cia issaugom localstorage tuos pasitinktus gyvunus
        setType(animal.svoris);
        setGyvunas(animal.gyvunas);

    }, [animal])

    
    const handleCancel = () => {//5.padarom kad paspaudus cencel mygtuka grazintu mus i pradini puslapi
        cancel(); //{/*5.cia nurodom propsa is virsaus ir ji persikeliam i App.jsx <Edit>*/}
    }

    const handleEdit = () => {
        const data = {
            svoris: svoris,
            gyvunas: gyvunas,

        }
        edit(data);
        setType('');
        setGyvunas('');

    }

    const handleInput = (e, d) => {
        switch(d) {
            case 'svoris':
                setType(e.target.value);
                break;
            case 'gyvunas':
                setGyvunas(e.target.value);
                break;

            default:
        }
    }


    return (
        <div className="modal"> {/*4.cia idedam modal Edit isokancia lentele jei neidesim neatvaizduos jos*/}
        <div className="edit edi">{/*cia pakeitem pavadinima is create i edit */}
            <div className="header">
            <h2>Edit</h2>{/*cia pakeitem pavadinima is create i edit */}
            </div>
            
            <div className="form">

            <div className="input">
                <label>Gyvūnas:</label>
                <select className="sh" value={gyvunas} onChange={(e) => handleInput(e, 'gyvunas')}>
                <option value="Avis">Avis</option>
                    <option value="Antis">Antis</option>
                    <option value="Antilope">Antilopė</option>

                </select>
                </div>

                <div className="input">
                <label>Svoris :</label>
                <input className="sh" type="text" value={svoris} onChange={(e) => handleInput(e, 'svoris')}></input>
                </div>
             


                <div className="input btn">
                <button className="add" onClick={handleEdit}>redaguoti</button>
                <button className="cancel" onClick={handleCancel}>Ištrinti</button>
                </div>
            
            </div>
        </div>
        </div>
    )
}

export default Edit;