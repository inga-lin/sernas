import Animals from "./Animals";

function Read({zoo, deleteA, show}) {

    return (
        <div className="read">
            <div className="header">
                <h2>Sukurti gyvūnai</h2>
            </div>
            <ul>
                <div className="gyvunai">
                    <div className="g">Gyvūnas:</div>
                    <div className="g">Svoris:</div>
                </div>
                {
                    zoo.map(z => <Animals key={z.id} animal={z} deleteA={deleteA} show={show}></Animals>)
                }
            </ul>
        </div>
    )
}

export default Read;