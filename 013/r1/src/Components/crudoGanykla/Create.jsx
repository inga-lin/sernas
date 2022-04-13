import { useState } from "react";

//import { svo, gyv } from '../Action/';

function Create({create}) {

    const [svoris, setSvoris] = useState('');
    //////const [svoris, dispachKv] = useReducer(kvadratelis, [1,1,1]);
    const [gyvunas, setGyvunas] = useState('Avis');
   // const [isalive, setIsalive] = useState(1);//1.1reiskia kad jis pacekintas(uzdeta varnele) jei butu ten tuscia puslapyje ji atvaizduotu nepazymeta

    const handleCreate = () => {
        const data = {
            svoris: svoris,
            gyvunas: gyvunas,
            //isalive: isalive
        }
        create(data);// {/*1.Create lenteleje padarom kad grystu viskas i pradine vieta*/}
        setSvoris('');
        setGyvunas('Avis');
        //setIsalive(1);//{/*1.*/}
    }

    const handleInput = (e, d) => {
        switch(d) {
            case 'svoris':
                setSvoris(e.target.value);
                break;
            case 'gyvunas':
                setGyvunas(e.target.value);
                break;

            default:
        }
    }


    return (
        <div className="create">
            <div className="header">
            <h2>Gyvunai</h2>
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
                <label>Svoris:</label>
                <input className="sh" type="text" value={svoris} onChange={(e) => handleInput(e, 'svoris')}></input>
                </div>



                <div className="input btn">
                <button className="add sukurti" onClick={handleCreate}>Sukurti</button>
                </div>
            
            </div>
        </div>
    )
}

export default Create;
