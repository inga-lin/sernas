import Valgomas from './Valgomas';

function Grybas({color}) {
    return (
        <div>   
            <Valgomas vardas = 'baravykas' color={color}></Valgomas>
            <Valgomas vardas = 'kelmutis' color='blue'></Valgomas> 
            <Valgomas vardas = 'pievagrybis' color='red'></Valgomas>         
        </div>

    );
}
  
  export default Grybas;