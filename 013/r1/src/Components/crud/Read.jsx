import Animal from "./Animal";

function Read({zoo, deleteA, show}) {

    return (
        <div className="read">
            <div className="header">
                <h2>List</h2>
            </div>
            <ul>
                {
                    zoo.map(z => <Animal key={z.id} animal={z} deleteA={deleteA} show={show}></Animal>)
                }
            </ul>
        </div>
    )
}

export default Read;

/*
                {
                    zoo.map(z => <Animal key={z.id} animal={z} deleteA={deleteA} show={show}></Animal>)
                } 2.cia idejom tu gyvunu lista.//cia propsas animal={z} kuri perduosim i animal.jsx 
                3.deleteA={deleteA} ji paimem is app.jsx ir jis mums istrina
                6.show={show}
*/