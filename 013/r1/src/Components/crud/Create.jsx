import { useState } from "react";

function Create({create}) {

    const [type, setType] = useState('');
    const [color, setColor] = useState('blue');
    const [isalive, setIsalive] = useState(1);//1.1reiskia kad jis pacekintas(uzdeta varnele) jei butu ten tuscia puslapyje ji atvaizduotu nepazymeta

    const handleCreate = () => {
        const data = {
            type: type,
            color: color,
            isalive: isalive
        }
        create(data); {/*1.Create lenteleje padarom kad grystu viskas i pradine vieta*/}
        setType('');
        setColor('blue');
        setIsalive(1);{/*1.*/}
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
                setIsalive(i => i === 0 ? 1 : 0); //1.jeigu i(i yra is alive) = 0 grainu vieneta kitu atveju 0
                break;
            default:
        }
    }


    return (
        <div className="create">
            <div className="header">
            <h2>Create</h2>
            </div>
            
            <div className="form">

                <div className="input">
                <label>Type:</label>
                <input className="sh" type="text" value={type} onChange={(e) => handleInput(e, 'type')}></input>
                </div>

                <div className="input">
                <label>Color:</label>
                <select className="sh" value={color} onChange={(e) => handleInput(e, 'color')}>
                    <option value="blue">Blue</option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="black">Black</option>
                    <option value="yellow">Yellow</option>
                </select>
                </div>

                <div className="input">
                <label>Is alive:</label>
                <input type="checkbox" checked={isalive} onChange={(e) => handleInput(e, 'isalive')}></input> {/*1.checked={isalive} cia bus tas 1 arba 0*/}
                </div>

                <div className="input btn">
                <button className="add" onClick={handleCreate}>create</button>
                </div>
            
            </div>
        </div>
    )
}

export default Create;
