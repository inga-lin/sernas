
function Bala({autos}) {
    return (
        <div className="aa">  
                           {
                autos.map((e) => <h3  style={{color: e.color}}>{e.id} {e.type} {e.name} </h3>)
                }
        </div>     

    );
}
  
  export default Bala;

  //123