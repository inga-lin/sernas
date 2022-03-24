import Zveris from './Zveris';

function Miskas({forest, big, msg,}) {
{/*const getBig = big => big ? '20px' : '10px';*/}

    return (
      <div>
        <h1 style={{color:forest,
            fontSize: big === '1' ? '20px' : '10px'}}>Miskas</h1> {/*jei 1bus 20px jeigu bet koks kitas skaicius bus 10px   // fontSize: big === '1' ? '20px' : '10px'//arba taip galim uzrasyt fontSize: getBig(big)}*/}
            <Zveris fore="Lape Zita" msg={msg}></Zveris>
            <Zveris fore="Kiskis antanas" color='pink'></Zveris>
            <Zveris fore="Bebras vytas"></Zveris>
      </div>

    );
}
  
export default Miskas;