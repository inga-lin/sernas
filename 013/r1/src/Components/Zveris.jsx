function Zveris({fore, msg, color}) {
    return (
        <div>
            <h1 color={color}> {fore}{msg || ''} </h1>               
        </div>

    );
}
      
export default Zveris;

//Sukurti komponentą Zveris ir Miske paleisti tris skirtingus Zveris DONE!