import { useState } from "react";
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function SukurtiPaspirtuka({create}) {
    const regissCodas = () => {
        let x = ['A','B','C','D','E','F','G','H','1','2','3','4','5','6','7','8'];
        let y = '';
         for (let i = 0; i < 8; i++){
             const z = rand(0, x.length - 1);
             y += x[z];
         }
         return y;
    }

    const [registracijosCodas, setRegistracijosCodas] = useState(regissCodas) ;
    const [pas, setPas] = useState('Xiaomi');
    const [laisvas, setLaisvas] = useState(1);//1.1reiskia kad jis pacekintas(uzdeta varnele) jei butu ten tuscia puslapyje ji atvaizduotu nepazymeta



    const handleCreate = () => {
        const data = {
            registracijosCodas:registracijosCodas,
            pas: pas,
            laisvas: laisvas,
            pdataa:'',
            bkm: 0
        }
        create(data);// {/*1.Create lenteleje padarom kad grystu viskas i pradine vieta*/}
        setRegistracijosCodas(regissCodas);
        setPas('Xiaomi');
        setLaisvas(1);//{/*1.*/}
    }



    const handleInput = (e, d) => {
        switch(d) {
            case 'registracijosCodas':
                setRegistracijosCodas(regissCodas);
                break;
            case 'pas':
                setPas(e.target.value);
                break;
            case 'laisvas':
                setLaisvas(i => i === 0 ? 1 : 0); //1.jeigu i(i yra is alive) = 0 grainu vieneta kitu atveju 0
                break;
            default:
        }
    }


    return (
        <div className="create">
            <div className="header">
            <h2>Tavo paspirtukas</h2>
            </div>
            
            <div className="form">

                <div className="input">
                <label>Registracijos Kodas:</label>
                <input className="sh" type="button" value={registracijosCodas} onChange={(e) => handleInput(e, 'registracijosCodas')}></input>
                </div>
                

                <div className="input">
                <label>Paspirtukai:</label>
                <select className="sh" value={pas} onChange={(e) => handleInput(e, 'pas')}>
                    <option value="Xiaomi">Elektrinis paspirtukas Xiaomi</option>
                    <option value="Inokim">Elektrinis paspirtukas Inokim</option>
                    <option value="Ultron">Elektrinis paspirtukas Ultron</option>
                    <option value="Beaster">Elektrinis paspirtukas Beaster</option>

                </select>
                </div>

                <div className="input">
                {/*<label>Laisvas:</label>
                <input type="checkbox" checked={laisvas} onChange={(e) => handleInput(e, 'laisvas')}></input>*/} {/*1.checked={laisvas} cia bus tas 1 arba 0*/}
                </div>

                <div className="input btn">
                <button className="add" onClick={handleCreate}>Pridėti</button>
                </div>
            
            </div>
        </div>
    )
}

export default SukurtiPaspirtuka;
