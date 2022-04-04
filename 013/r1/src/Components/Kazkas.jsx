import {  useState } from "react";

function Kazkas(){
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
export default Kazkas;