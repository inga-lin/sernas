import { useState } from 'react';
//HooK State
function Pasa(){
    //steitas-title, hukas-setTitle
    const [kvadratas, setKvadratas] = useState([])//pradzioje rasys non kuris yra pradinis title
    

    const add = () => {
        setKvadratas(items => [...items, items.length + 1]);
    }
  

    
    

    return(

        <>
           <button onClick={add}>Add</button>
           {kvadratas.map( (k, i)  => <div  className="BS" key={i}>{k}</div>)}
           
           
        </>
    )

        
    
}
export default Pasa;

//setItems(items => [...items, 'New Item']);
//Padaryti komponentą su mygtuku, kurį paspaudus atsirastų mėlynas kvadratas, 
//dar paspaudus dar atsirastų ir t.t. DONE!

//{kvadratas.map( (k, i)  => <div style={{backgroundColor: 'red', color:'white', height: '150px', width:"150px", margin:'10px'}} key={i}>{k}</div>)}  arba taip galima
//jei nebutu nurodyta stiliaus tai butu tik skaiciai