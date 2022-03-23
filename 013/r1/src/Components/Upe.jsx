import Zuvis from './Zuvis';

function Upe({color}) {
    return (
        <div>   
            <Zuvis color={color} type = "banginis"></Zuvis>   
            <Zuvis color={color} type = "silke"></Zuvis> 
            <Zuvis color={color} type = "karosas"></Zuvis>           
        </div>

    );
}
  
  export default Upe;

  //Sukurti komponentą Upe. Tame komponente paleisti tris komponentus Zuvis DONE!
  //Upe turi turėti props color. Ir tuo color turi nusidažyti visos žuvys DONE!