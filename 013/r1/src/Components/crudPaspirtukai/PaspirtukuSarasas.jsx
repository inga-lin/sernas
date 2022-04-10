//import Animal from "./Animal";
import Paspirtukai from "./Paspirtukai";

function PaspirtukuSarasas({paspirtukas, deleteA, show}) {

    return (
        <div className="read">
            <div className="header">
                <h2>Paspirtukai</h2>
            </div>
            <ul>
                {
                    paspirtukas.map(p => <Paspirtukai  key={p.id} animal={p} deleteA={deleteA} show={show}></Paspirtukai>)
                }
            </ul>
        </div>
    )
}

export default PaspirtukuSarasas;

/*
                {
                    paspirtukas.map(z => <Animal key={z.id} animal={z} deleteA={deleteA} show={show}></Animal>)
                } 2.cia idejom tu gyvunu lista(paspirtukai).//cia propsas animal={z} kuri perduosim i animal.jsx 
                3.deleteA={deleteA} ji paimem is app.jsx ir jis mums istrina
                6.show={show}
*/