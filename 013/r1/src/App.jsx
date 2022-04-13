
import { useEffect, useState } from 'react';
import getNewId from './Common/id';
import Create from './Components/crudoGanykla/Create';
import Edit from './Components/crudoGanykla/Edit';
import Read from './Components/crudoGanykla/Read';
import './crud.scss';


function App() {

    const [zoo, setZoo] = useState([]);
    const [modal, setModal] = useState(0); //4.gaminam modalo, isokanti Edit lentele/ 0sako kad pas mus pradineme lange nera modalo

    useEffect(() => {
        let data = localStorage.getItem('zoo');
        if (null === data) {
            localStorage.setItem('zoo', JSON.stringify([]));
            setZoo([]);
        }
        else {
            setZoo(JSON.parse(data));
        }
    }, []);


    const cancel = () => { //5.cia aprasom kad jis setModala isnaikina todel cia turim nurodyti 0
        setModal(0);
    }

    const show = id => {//6.cia mums rodom elementa gyvuna
        setModal(id);
    }

    const getAnimal = () => {//7.
        return zoo.filter(a => a.id === modal)[0];//7.modale (edit lenteleje) atvaizduos pasirinkta gyvuna
    }


    const create = (data) => { //2.kuria vis naujus gyvunus
        const animal = {
            svoris: data.svoris,
            gyvunas: data.gyvunas,

            id: getNewId()
        }
        // localStorage logic(sito egze nebus)
        const newData = [...zoo, animal];
        localStorage.setItem('zoo', JSON.stringify(newData));
        //

        setZoo(zoo => [...zoo, animal]);
    } 


    const edit = data => {
        // localStorage logic
            const zooCopy = [...zoo];
            zooCopy.forEach((z, i) => {
                if (z.id === modal) {
                    zooCopy[i].svoris = data.svoris;
                    zooCopy[i].gyvunas = data.gyvunas;
   
                }
            });
            localStorage.setItem('zoo', JSON.stringify(zooCopy));
        // 
        setZoo(z1 => {
            z1.forEach((z, i) => {
                if (z.id === modal) {
                    z1[i].svoris = data.svoris;
                    z1[i].gyvunas = data.gyvunas;
 
                }
            });
            return z1;
        });
        cancel();
    } 

    const deleteA = id => { //3.istrinam gyvunus o cia su id nurodo koki jam gyvuna istrinti 
        const newData = zoo.filter(a => a.id !== id); //{/*cia gaunam animal ir jeigu animal id yra nelygus id mes ji istrinam*/}
        localStorage.setItem('zoo', JSON.stringify(newData));
        setZoo(zoo => zoo.filter(a => a.id !== id));
    }



  return (
    <div className="app">
            <div className="top">
            <h1>Gyvunų ferma</h1>
            </div>
            <div className="content">
            <Create create={create}></Create>{/*//2.kuria vis naujus gyvunus*/}
            <Read zoo={zoo} deleteA={deleteA} show={show}></Read>{/* 3. deletA perduodam i Read.jsx //6.cia show={show} mums rodom elementa gyvuna*/}
            </div>
            <div className="bottom">
        
            </div>
            {
                modal ? <Edit edit={edit} animal={getAnimal()} cancel={cancel}></Edit> : null
            }
    </div>
  );
}


export default App;