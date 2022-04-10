import { useEffect, useState } from 'react';
import getNewId from './Common/id';
import PaspirtukuSarasas from './Components/crudPaspirtukai/PaspirtukuSarasas';
import RedaguotiPaspirtuka from './Components/crudPaspirtukai/RedaguotiPaspirtuka';
import SukurtiPaspirtuka from './Components/crudPaspirtukai/SukurtiPaspirtuka';
import './crud.scss';


function App() {

    const [paspirtukas, setPaspirtukas] = useState([]);
    const [modal, setModal] = useState(0); //4.gaminam modalo, isokanti Edit lentele/ 0sako kad pas mus pradineme lange nera modalo

    useEffect(() => {
        let data = localStorage.getItem('paspirtukas');
        if (null === data) {
            localStorage.setItem('paspirtukas', JSON.stringify([]));
            setPaspirtukas([]);
        }
        else {
            setPaspirtukas(JSON.parse(data));
        }
    }, []);


    const uzdaryti = () => { //5.cia aprasom kad jis setModala isnaikina todel cia turim nurodyti 0
        setModal(0);
    }

    const show = id => {//6.cia mums rodom elementa paspirtuka
        setModal(id);
    }

    const getAnimal = () => {//7.
        return paspirtukas.filter(a => a.id === modal)[0];//7.modale (redaguoti lenteleje) atvaizduos pasirinkta paspirtuka
    }


    const create = (data) => { //2.kuria vis naujus paspirtukus
        const animal = {
            registracijosCodas: data.registracijosCodas,
            pas: data.pas,
            laisvas: data.laisvas,
            pdataa: data.pdataa,
            dataa: data.dataa,
            bkm: data.bkm,
            km: data.km,
            id: getNewId()
        }
        // localStorage logic(sito egze nebus)
        const newData = [...paspirtukas, animal];
        localStorage.setItem('paspirtukas', JSON.stringify(newData));
        //

        setPaspirtukas(paspirtukas => [...paspirtukas, animal]);
    } 


    const redaguoti = data => {
        // localStorage susirandam id kuri nuorim redaguoti (modale)
            const paspirtukasCopy = [...paspirtukas];
            paspirtukasCopy.forEach((p, i) => {
                if (p.id === modal) {
                    paspirtukasCopy[i].registracijosCodas = data.registracijosCodas;
                    paspirtukasCopy[i].pas = data.pas;
                    paspirtukasCopy[i].pdataa = data.pdataa;
                    paspirtukasCopy[i].dataa = data.dataa;
                    paspirtukasCopy[i].bkm = data.bkm;
                    paspirtukasCopy[i].km = data.km;
                    paspirtukasCopy[i].laisvas = data.laisvas;
                }
            });
            localStorage.setItem('paspirtukas', JSON.stringify(paspirtukasCopy));
        // 
        setPaspirtukas(p1 => {
            p1.forEach((p, i) => {
                if (p.id === modal) {
                    p1[i].registracijosCodas = data.registracijosCodas;
                    p1[i].pas = data.pas;
                    p1[i].pdataa = data.pdataa;
                    p1[i].dataa = data.dataa;
                    p1[i].bkm = data.bkm;
                    p1[i].km = data.km;
                    p1[i].laisvas = data.laisvas;
                }
            });
            return p1;
        });
        uzdaryti();
    } 

    const deleteA = id => { //3.istrinam paspirtuka o cia su id nurodo koki jam paspirtuka istrinti 
        const newData = paspirtukas.filter(a => a.id !== id); //{/*cia gaunam paspirtuka ir jeigu paspirtuko id yra nelygus id mes ji istrinam*/}
        localStorage.setItem('paspirtukas', JSON.stringify(newData));
        setPaspirtukas(paspirtukas => paspirtukas.filter(a => a.id !== id));
    }



  return (
    <div className="app">
            <div className="top">
            <h1>Kolt paspirtukų nuoma</h1>
            </div>
            <div className="content tt">
            <SukurtiPaspirtuka create={create}></SukurtiPaspirtuka>{/*//2.kuria vis naujus paspirtukus*/}
            <PaspirtukuSarasas paspirtukas={paspirtukas} deleteA={deleteA} show={show}></PaspirtukuSarasas>{/* 3. deletA perduodam i Read.jsx //6.cia show={show} mums rodom elementa paspirtuka*/}
            </div>
            <div className="bottom">
        
            </div>
            {
                modal ? <RedaguotiPaspirtuka redaguoti={redaguoti} animal={getAnimal()} uzdaryti={uzdaryti}></RedaguotiPaspirtuka> : null
            }
    </div>
  );
}


export default App;

/*
            {
                modal ? <Edit redaguoti={redaguoti} animal={getAnimal()} uzdaryti={uzdaryti}></Edit> : null
            } jeigu mes paspaudziam ant redaguoti mygtuko tai ismesti redaguoti lentele kitu atveju nerodyti jos
            is redaguoti.jsx persikeliam uzdaryti funkcija(propsa) ir cia irasom uzdaryti={uzdaryti}
            7.animal={getAnimal()} cia i redaguoti lentele perduotam gyvuna kuri liste(paspirtukai) pasirinkom
*/