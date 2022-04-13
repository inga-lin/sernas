import kvadratelis from '../Reducers/kvadratelis';
import { useReducer } from 'react';
import { addKv, delKv } from '../Action/kvadratelis';

function Kvadratelis() {

    const [kv, dispachKv] = useReducer(kvadratelis, [1,1,1]);
    const [del, dispachDe] = useReducer(kvadratelis, []);

    return (
        <>
        <button onClick={() => dispachKv(addKv())}>ADD</button>
        <button onClick={() => dispachKv(delKv())}>Deletle</button>
        <div className="kvc">
            {
                kv.map((k, i) => <div key={i} className="BS"></div>)
            }

        </div>
        </>
    )
}

export default Kvadratelis;

//Paspaudi mygtuką - atsiranda kvadratukas, dar paspaudi, dar vienas atsiranda ir t.t. DONE!

/*
            {
                kv.map((k, i) => <div key={i} className="BS"></div>)
            }
*/