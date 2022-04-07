//4.cia padarom kad paspaudus edit mydtuka isoka edit(modalo) lentele su galimybe redaguoti esama pasirinkima
//sita nusikopinom is Creato.jsx ir biski kaika paredagavom
import { useEffect, useState }  from "react";
function Edit({edit, animal, cancel}) {

    const [type, setType] = useState('');
    const [color, setColor] = useState('yellow');
    const [isalive, setIsalive] = useState(1);

    useEffect(() => { //7.ir cia issaugom localstorage tuos pasitinktus gyvunus
        setType(animal.type);
        setColor(animal.color);
        setIsalive(animal.isalive);
    }, [animal])

    
    const handleCancel = () => {//5.padarom kad paspaudus cencel mygtuka grazintu mus i pradini puslapi
        cancel(); {/*5.cia nurodom propsa is virsaus ir ji persikeliam i App.jsx <Edit>*/}
    }

    const handleEdit = () => {
        const data = {
            type: type,
            color: color,
            isalive: isalive
        }
        edit(data);
        setType('');
        setColor('yellow');
        setIsalive(1);
    }

    const handleInput = (e, d) => {
        switch(d) {
            case 'type':
                setType(e.target.value);
                break;
            case 'color':
                setColor(e.target.value);
                break;
            case 'isalive':
                setIsalive(i => i === 0 ? 1 : 0);
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
                <label>Type:</label>
                <input type="text" value={type} onChange={(e) => handleInput(e, 'type')}></input>
                </div>

                <div className="input">
                <label>Color:</label>
                <select value={color} onChange={(e) => handleInput(e, 'color')}>
                    <option value="blue">Blue</option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="black">Black</option>
                    <option value="yellow">Yellow</option>
                </select>
                </div>

                <div className="input">
                <label>Is alive:</label>
                <input type="checkbox" checked={isalive} onChange={(e) => handleInput(e, 'isalive')}></input>
                </div>

                <div className="input btn">
                <button className="add" onClick={handleEdit}>edit</button>
                <button className="cancel" onClick={handleCancel}>cancel</button>
                </div>
            
            </div>
        </div>
        </div>
    )
}

export default Edit;