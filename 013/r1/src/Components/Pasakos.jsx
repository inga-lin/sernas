import { useState } from 'react';
//HooK State
function Pasakos(){
    //steitas-title, hukas-setTitle
    const [vardas, setTitle] = useState('non')//pradzioje rasys non kuris yra pradinis title
    const [color, setColor] = useState('red') 
    const goBebrai = () => { 
        setTitle('Apie Bebrus');//poto non pasikeicia i Apie Bebrus;kai paspaudziam buutona
        
    }

    const trysBroliai = () => {
        setTitle('Trys Broliai');//()irasymaspoto Apie Bebrus pasikeicia i Trys Broliai;kai paspaudziam buutona
        
    }

    const goColor = co => {
        setColor(co)
    }

    //cia darysim STEITO APDEITINIMA,jeigu buvo blu pakeiciam i pink
    //paimam sena spalva ir ja lyginam su sena spalva jeigu ji === blue pakeiciam i pink o kitu atveju i blue
    const changeColor = () => {
        //const newColor = color === 'blue' ? 'pink' : 'blue'; //sitie tu uzrazymai neteisingi ant dideliu darbu, puslapiu nes jis gali tinkamai nesuveikti, nes letai veiks
        // setColor(newColor)
        setColor(oldColor => oldColor === 'blue' ? 'pink' : 'blue');  
    }

    return(

        <>
           <h2 style={{color:color}}>Pasaka {vardas}</h2>
           <button onClick={goBebrai}>Apie Bebrus</button>
           <button onClick={trysBroliai}>Trys Broliai</button>
           <button onClick={() => goColor('pink')}>Pink</button>
           <button onClick={() => goColor('blue')}>Blue</button>
           <button onClick={changeColor}>Change</button>
        </>
    )

        
    
}
export default Pasakos;

/*

 lengvesnis variantas
    const goColorPink = () => {
        setColor('pink');
    }

        const goColorRed = () => {
        setColor('red');
    }


        <button onClick={goColorPink}>Spalva</button>
        <button onClick={goColorRed}>Spalva</button>

*/