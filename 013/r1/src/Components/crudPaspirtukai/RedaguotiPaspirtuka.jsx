import { useEffect, useState }  from "react";
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//4.cia padarom kad paspaudus redaguoti mydtuka isoka redaguoti(modalo) lentele su galimybe redaguoti esama pasirinkima
//sita nusikopinom is Creato.jsx ir biski kaika paredagavom

function RedaguotiPaspirtuka({redaguoti, animal, uzdaryti}) {

    const regissCodas = () => {
        let x = ['A','B','C','D','E','F','G','H','1','2','3','4','5','6','7','8'];
        let y = '';
         for (let i = 0; i < 8; i++){
             const z = rand(0, x.length - 1);
             y += x[z];
         }
         return y;
    }

   // const nuvazVisiKm = x => {
      //  if (x.target.value >= 0){
      //      setBKm(x.target.value)
      //  }
   // }

    const [registracijosCodas, setRegistracijosCodas] = useState('') ;
    const [pas, setPas] = useState('');
    const [laisvas, setLaisvas] = useState(1);
    const [pdataa, setPDataa] = useState('');
    const [dataa, setDataa] = useState('');
    const [bkm, setBKm] = useState('');
    const [km, setKm] = useState(0);
    

    useEffect(() => { //7.ir cia issaugom localstorage tuos pasitinktus gyvunus
        setRegistracijosCodas(animal.registracijosCodas);
        setPas(animal.pas);
        setLaisvas(animal.laisvas);
        setPDataa(animal.pdataa);
        setDataa(animal.dataa);
        setBKm(animal.bkm);
        //setKm(animal.km)
    }, [animal])

    
    const handleUzdaryti = () => {//5.padarom kad paspaudus uzdaryti mygtuka grazintu mus i pradini puslapi
        uzdaryti(); //{/*5.cia nurodom propsa is virsaus ir ji persikeliam i App.jsx <Edit>*/}
    }

    const handleEdit = () => { //cia matom redaguotus duomenis
        const data = {
            registracijosCodas: registracijosCodas,
            pas: pas,
            laisvas: laisvas,
            pdataa:dataa,
            dataa:dataa,
            km:km,
            bkm:+((bkm + +km).toFixed(2)),
        }
        redaguoti(data);
        setRegistracijosCodas('');
        setPas('');
        setLaisvas(1);
        setPDataa('')
        setDataa('');
        setBKm('');
        setKm('');
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
                setLaisvas(i => i === 0 ? 1 : 0);
                break;
            case 'pdataa':
                setPDataa(e.target.value);
                break;
            case 'dataa':
                    setDataa(e.target.value);
                    break;
            case 'bkm':
                    setBKm(e.target.value);
                    break; 
            case 'km':
                    setKm(e.target.value);
                     break;                    
            default:
        }
    }


    return (
        <div className="modal"> {/*4.cia idedam modal Edit isokancia lentele jei neidesim neatvaizduos jos*/}
        <div className="edit edi redaguoti">{/*cia pakeitem pavadinima is create i redaguoti */}
            <div className="header">
            <h2>Paspirtuko redagavimas</h2>{/*cia pakeitem pavadinima is create i redaguoti */}
            </div>
            
            <div className="form">

                <div className="input">
                <label>Registracijos Kodas:</label>
                <input type="button" value={registracijosCodas} onChange={(e) => handleInput(e, 'registracijosCodas')}></input>
                </div>
                
                <div className="input">
                <label form="start">Paskutinį katrą naudotas:</label>
                <input type="button" id="start" name="trip-start"
                 value={pdataa}
                 min="2022-01-01" max="2022-12-31" onChange={(e) => handleInput(e, 'pdataa')}></input>
                </div>

                <div className="input">
                <label form="start">Nauja data:</label>
                <input type="date" id="start" name="trip-start"
                 //value={dataa}
                 min="2022-01-01" max="2022-12-31" onChange={(e) => handleInput(e, 'dataa')}></input>
                </div>

                <div className="input">
                <label form="tentacles">Išviso nuvažiuoti kilometrai:</label>
                <input type="button" id="tentacles" name="tentacles"
                 min="1" max="100000" value={bkm} onChange={(e) => handleInput(e, 'bkm')} ></input>
                </div>

                <div className="input">
                <label form="tentacles">Šiandien nuvažiuoti kilometrai:</label>
                <input type="number" id="tentacles" name="tentacles"
                 min="1" max="100000"  onChange={(e) => handleInput(e, 'km')} required></input>
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
                <label>Laisvas:</label>
                <input type="checkbox" checked={laisvas} onChange={(e) => handleInput(e, 'laisvas')}></input>
                </div>

                <div className="input btn">
                <button className="add" onClick={handleEdit}>Išsaugoti</button>
                <button className="cancel uzdaryti" onClick={handleUzdaryti}>Uždaryti</button>
                </div>
            
            </div>
        </div>
        </div>
    )
}

export default RedaguotiPaspirtuka;